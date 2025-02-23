"use client";
import React, { useState } from "react";
import { FaStar, FaFileContract, FaBriefcase, FaCalendar, FaGraduationCap } from "react-icons/fa";
import { IoLocation, IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Cards = ({ cardsData = [] }) => {
  const router = useRouter();
  const [filters, setFilters] = useState({
    location: "All",
    category: "All",
    skills: [],
    jobCategory: "All",
    jobType: "All",
    package: { min: "", max: "" },
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtered cards calculation
  const filteredCards = cardsData.filter(card => {
    const searchLower = searchQuery.toLowerCase();
    const companyName = card.companyName?.toLowerCase() || '';
    const jobProfile = card.jobProfile?.toLowerCase() || '';
    const packageValue = parseFloat(card.package) || 0;

    return (
      (filters.location === "All" || card.location === filters.location) &&
      (filters.category === "All" || card.category === filters.category) &&
      (filters.jobCategory === "All" || card.jobCategory === filters.jobCategory) &&
      (filters.jobType === "All" || card.jobType === filters.jobType) &&
      (filters.skills.length === 0 || filters.skills.every(skill => 
        card.skills?.includes(skill))) &&
      (!filters.package.min || packageValue >= parseFloat(filters.package.min)) &&
      (!filters.package.max || packageValue <= parseFloat(filters.package.max)) &&
      (companyName.includes(searchLower) || jobProfile.includes(searchLower))
    );
  });

  // Get unique filter options
  const locations = [...new Set(cardsData.map(card => card.location))].filter(Boolean);
  const categories = [...new Set(cardsData.map(card => card.category))].filter(Boolean);
  const jobCategories = [...new Set(cardsData.map(card => card.jobCategory))].filter(Boolean);
  const jobTypes = [...new Set(cardsData.map(card => card.jobType))].filter(Boolean);
  const allSkills = [...new Set(cardsData.flatMap(card => card.skills))].filter(Boolean);

  // Filter handlers
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('package')) {
      setFilters(prev => ({
        ...prev,
        package: {
          ...prev.package,
          [name.replace('package', '').toLowerCase()]: value
        }
      }));
    } else {
      setFilters(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSkillChange = (skill) => {
    setFilters(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  // Job Modal Component
  const JobModal = ({ job, onClose }) => {
    if (!job) return null;

    const handleApply = () => {
      try {
        localStorage.setItem('selectedJob', JSON.stringify(job));
        router.push('/apply');
      } catch (error) {
        console.error('Error saving job data:', error);
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src={job.companyLogo}
                alt={job.companyName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold">{job.jobProfile}</h2>
                <p className="text-gray-600">{job.companyName}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <IoClose size={24} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DetailItem icon={<FaBriefcase />} label="Experience" value={job.experienceLevel} />
              <DetailItem icon={<FaCalendar />} label="Contract" value={job.contract} />
              <DetailItem icon={<FaGraduationCap />} label="Package" value={`₹${job.package}`} />
            </div>

            <Section title="About Company" content={job.companyDescription} />
            
            <Section title="Required Skills">
              <div className="flex flex-wrap gap-2">
                {job.skills?.map((skill, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </Section>

            <Section title="Responsibilities">
              <List items={job.responsibilities} />
            </Section>

            <Section title="Requirements">
              <List items={job.requirements} />
            </Section>

            <Section title="Benefits">
              <List items={job.benefits} />
            </Section>

            <div className="text-sm text-gray-600">
              Application Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}
            </div>

            <div className="flex justify-end pt-4 border-t">
              <button
                onClick={handleApply}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Helper Components
  const DetailItem = ({ icon, label, value }) => (
    <div className="flex items-center gap-2">
      <span className="text-blue-600">{icon}</span>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="font-medium">{value || 'Not specified'}</p>
      </div>
    </div>
  );

  const Section = ({ title, children, content }) => (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {content ? <p className="text-gray-700">{content}</p> : children}
    </div>
  );

  const List = ({ items }) => (
    <ul className="list-disc list-inside space-y-1">
      {items?.map((item, i) => <li key={i} className="text-gray-700">{item}</li>)}
    </ul>
  );

  return (
    <div className="flex flex-col min-h-screen sm:flex-row">
      {/* Filter Sidebar */}
      <div className={`w-full sm:w-1/4 bg-gray-100 p-6 ${isFilterOpen ? 'block' : 'hidden'} sm:block`}>
        <h3 className="text-xl font-bold mb-6">Filters</h3>
        
        <div className="space-y-6">
          <FilterSection
            label="Location"
            name="location"
            options={locations}
            value={filters.location}
            onChange={handleFilterChange}
          />

          <FilterSection
            label="Job Type"
            name="jobType"
            options={jobTypes}
            value={filters.jobType}
            onChange={handleFilterChange}
          />

          <div className="space-y-2">
            <label className="block text-sm font-medium">Package (LPA)</label>
            <div className="flex gap-2">
              <input
                type="number"
                name="packageMin"
                value={filters.package.min}
                onChange={handleFilterChange}
                placeholder="Min"
                className="w-full p-2 border rounded"
              />
              <input
                type="number"
                name="packageMax"
                value={filters.package.max}
                onChange={handleFilterChange}
                placeholder="Max"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-2">Skills</label>
            <button
              onClick={() => setIsSkillsOpen(!isSkillsOpen)}
              className="w-full p-2 border rounded flex justify-between items-center"
            >
              <span>{filters.skills.length} skills selected</span>
              <span className={`transform ${isSkillsOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            
            {isSkillsOpen && (
              <div className="absolute z-10 w-full mt-2 bg-white border rounded shadow-lg">
                <div className="max-h-48 overflow-y-auto p-2">
                  {allSkills.map(skill => (
                    <label key={skill} className="flex items-center p-2 hover:bg-gray-50">
                      <input
                        type="checkbox"
                        checked={filters.skills.includes(skill)}
                        onChange={() => handleSkillChange(skill)}
                        className="mr-2"
                      />
                      {skill}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search companies or positions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 border rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredCards.map(card => (
            <div key={card.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={card.companyLogo}
                      alt={card.companyName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{card.companyName}</h3>
                      <p className="text-gray-600">{card.jobProfile}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <FaStar className="text-yellow-500" />
                    <span>{card.difficulty}/5</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-medium">Key Skills:</p>
                    <ul className="list-disc pl-4">
                      {card.skills.slice(0, 3).map(skill => (
                        <li key={skill} className="text-sm">{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 font-medium">{card.hiringStatus}</p>
                    <p>₹{card.package}</p>
                    <div className="flex items-center justify-end gap-1">
                      <IoLocation />
                      <span>{card.location}</span>
                    </div>
                    <div className="flex items-center justify-end gap-1">
                      <FaFileContract />
                      <span>{card.contract}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedJob(card);
                    setIsModalOpen(true);
                  }}
                  className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="sm:hidden fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        {isFilterOpen ? '✕' : '☰'}
      </button>

      {isModalOpen && <JobModal job={selectedJob} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

const FilterSection = ({ label, name, options, value, onChange }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded"
    >
      <option value="All">All {label}</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default Cards;