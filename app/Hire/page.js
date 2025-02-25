import Cards from "../_components/Cards";

<<<<<<< HEAD

async function getCompanyData() {
  try {
    const res = await fetch('http://localhost:3000/api/Company');
    if (!res.ok) throw new Error('Failed to fetch companies');
    
    const data = await res.json();
    
    return data.companies.map(company => ({
      // Map all necessary fields from API response
      id: company._id,
      companyName: company.CompanyName || `Company ${company._id.slice(0, 5)}`,
      companyLogo: company.CompanyLogo || '/default-logo.png',
      jobProfile: company.Role || 'Position Not Specified',
      skills: company.RequiredSkills || [],
      difficulty: company.TestDifficulty?.toString() || '3',
=======
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoLocation, IoClose } from "react-icons/io5";
import {
  FaFileContract,
  FaBriefcase,
  FaCalendar,
  FaGraduationCap,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Cards = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return <div>Loading</div>;
  if (status === "unauthenticated") return <div>Please Log In</div>;
  const [filters, setFilters] = useState({
    location: "All",
    category: "All",
    skills: [], // Store selected skills here
    jobCategory: "All", // Add these new filter states
    jobType: "All",
    hiringStatus: "All",
    package: {
      min: "",
      max: "",
    },
  });

  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [isFilterOpen, setIsFilterOpen] = useState(true); // State to toggle filter visibility
  const [isSkillsOpen, setIsSkillsOpen] = useState(false); // State to toggle skills filter visibility

  const router = useRouter();

  const cardsData = [
    {
      companyName: "Google",
      companyLogo:
        "https://yt3.googleusercontent.com/FJI5Lzbf2dMd32xOqhoKpJArJooZhoX6v2qOcFO-wjSZUvs3H9xqq2gK4DQ47X0KnYgf7X2rpdU=s900-c-k-c0x00ffffff-no-rj",
      jobProfile: "Software Developer",
      skills: ["Data Structure", "Algorithm", "React", "JavaScript"],
      difficulty: "5",
>>>>>>> e17f005ca23a870724da0ea129e475e8eef515c0
      hiringStatus: "Active",
      package: `${company.Package || '0'} LPA`,
      location: company.Location || 'Remote',
      contract: `${company.ContractDuration || '1'} Years`,
      jobCategory: company.Category || 'General',
      jobType: company.Time || 'Full-Time',
      companyDescription: company.CompanyAbout || 'No company description available',
      responsibilities: company.Responsibilities || ['Not specified'],
      requirements: company.Requirements || ['Not specified'],
      benefits: company.Benefits || ['Not specified'],
      applicationDeadline: company.ApplicationDeadline || new Date().toISOString(),
      experienceLevel: `${company.RequiredExperience || '0'}+ years`
    }));
    
  } catch (error) {
    console.error('Error fetching companies:', error);
    return [];
  }
}

<<<<<<< HEAD
export default async function HirePage() {
  const cardsData = await getCompanyData();
  return <Cards cardsData={cardsData} />;
}
=======
  // Add new state for modal
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === "packageMin" || name === "packageMax") {
      setFilters({
        ...filters,
        package: {
          ...filters.package,
          [name === "packageMin" ? "min" : "max"]: value,
        },
      });
    } else {
      setFilters({
        ...filters,
        [name]: value,
      });
    }
  };

  const handleSkillChange = (skill) => {
    const updatedSkills = filters.skills.includes(skill)
      ? filters.skills.filter((item) => item !== skill)
      : [...filters.skills, skill];

    setFilters({
      ...filters,
      skills: updatedSkills,
    });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase()); // Update search query
  };

  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const filteredCards = cardsData.filter(
    (card) =>
      (filters.location === "All" || card.location === filters.location) &&
      (filters.category === "All" || card.category === filters.category) &&
      (filters.jobCategory === "All" ||
        card.jobCategory === filters.jobCategory) &&
      (filters.jobType === "All" || card.jobType === filters.jobType) &&
      (filters.skills.length === 0 ||
        filters.skills.every((skill) => card.skills.includes(skill))) &&
      (filters.package.min === "" ||
        parseFloat(card.package) >= parseFloat(filters.package.min)) &&
      (filters.package.max === "" ||
        parseFloat(card.package) <= parseFloat(filters.package.max)) &&
      (card.companyName.toLowerCase().includes(searchQuery) ||
        card.jobProfile.toLowerCase().includes(searchQuery)) // Search filter
  );

  // Get unique values for dynamic filter options
  const internshipTypes = [
    ...new Set(cardsData.map((card) => card.internshipType)),
  ];
  const locations = [...new Set(cardsData.map((card) => card.location))];
  const categories = [...new Set(cardsData.map((card) => card.category))];
  const allSkills = [...new Set(cardsData.flatMap((card) => card.skills))];

  // Add these new unique value arrays after the existing ones
  const jobCategories = [...new Set(cardsData.map((card) => card.jobCategory))];
  const jobTypes = [...new Set(cardsData.map((card) => card.jobType))];
  const hiringStatuses = [
    ...new Set(cardsData.map((card) => card.hiringStatus)),
  ];

  // Add Modal component
  const JobModal = ({ job, onClose }) => {
    if (!job) return null;

    const handleGiveTest = () => {
      // Store the selected job data in localStorage before navigation
      localStorage.setItem("selectedJobTest", JSON.stringify(job));
      router.push("/Test");
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src={job.companyLogo}
                alt={job.companyName}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="text-2xl font-bold">{job.jobProfile}</h2>
                <p className="text-gray-600">{job.companyName}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <IoClose size={24} />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Key Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <FaBriefcase className="text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Experience</p>
                  <p className="font-medium">{job.experienceLevel}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar className="text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Contract Duration</p>
                  <p className="font-medium">{job.contract}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Package</p>
                  <p className="font-medium">₹{job.package}</p>
                </div>
              </div>
            </div>

            {/* Company Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">About Company</h3>
              <p className="text-gray-700">{job.companyDescription}</p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
              <ul className="list-disc list-inside space-y-1">
                {job.responsibilities.map((resp, index) => (
                  <li key={index} className="text-gray-700">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Requirements</h3>
              <ul className="list-disc list-inside space-y-1">
                {job.requirements.map((req, index) => (
                  <li key={index} className="text-gray-700">
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Benefits</h3>
              <ul className="list-disc list-inside space-y-1">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Deadline */}
            <div>
              <p className="text-sm text-gray-600">
                Application Deadline:{" "}
                {new Date(job.applicationDeadline).toLocaleDateString()}
              </p>
            </div>

            {/* Apply Button */}
            <div className="flex justify-end pt-4 border-t">
              <button
                onClick={handleGiveTest}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Give Test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen sm:flex-row">
      {/* Sidebar for Filters */}
      <div
        className={`w-full sm:w-1/4 bg-gray-100 p-6 mb-6 sm:mb-0 ${
          isFilterOpen ? "block" : "hidden"
        } sm:block`}
      >
        <h3 className="font-semibold text-lg text-gray-800">Filters</h3>

        {/* Internship Type Filter */}

        {/* Location Filter */}
        <div className="mt-4">
          <label className="block text-sm text-gray-700">Location</label>
          <select
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          >
            <option value="All">All</option>
            {locations.map((loc, idx) => (
              <option key={idx} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div className="mt-4">
          <label className="block text-sm text-gray-700">Category</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          >
            <option value="All">All</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Job Category Filter */}
        <div className="mt-4">
          <label className="block text-sm text-gray-700">Job Category</label>
          <select
            name="jobCategory"
            value={filters.jobCategory}
            onChange={handleFilterChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          >
            <option value="All">All</option>
            {jobCategories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Job Type Filter */}
        <div className="mt-4">
          <label className="block text-sm text-gray-700">Job Type</label>
          <select
            name="jobType"
            value={filters.jobType}
            onChange={handleFilterChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          >
            <option value="All">All</option>
            {jobTypes.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Hiring Status Filter */}

        {/* Package Range Filter */}
        <div className="mt-4">
          <label className="block text-sm text-gray-700">
            Package Range (LPA)
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              name="packageMin"
              value={filters.package.min}
              onChange={handleFilterChange}
              placeholder="Min"
              className="w-1/2 mt-2 p-2 border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="packageMax"
              value={filters.package.max}
              onChange={handleFilterChange}
              placeholder="Max"
              className="w-1/2 mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Skills Filter */}
        <div className="mt-4 relative">
          <label className="block text-sm text-gray-700 mb-2">Skills</label>
          <button
            onClick={() => setIsSkillsOpen(!isSkillsOpen)}
            className="w-full p-2 text-left border border-gray-300 rounded-md flex justify-between items-center"
          >
            {filters.skills.length
              ? `${filters.skills.length} selected`
              : "Select Skills"}
            <span
              className={`transition-transform duration-200 ${
                isSkillsOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {isSkillsOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
              <div className="max-h-48 overflow-y-auto p-2">
                {allSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-2 hover:bg-gray-50"
                  >
                    <input
                      type="checkbox"
                      id={`skill-${idx}`}
                      checked={filters.skills.includes(skill)}
                      onChange={() => handleSkillChange(skill)}
                      className="h-4 w-4 text-blue-600 rounded"
                    />
                    <label
                      htmlFor={`skill-${idx}`}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {skill}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Button to Toggle Filter on Mobile */}
      <div className="sm:hidden flex justify-end mb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="text-white bg-blue-600 px-4 py-2 rounded-md"
        >
          {isFilterOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full sm:w-3/4 p-6">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Companies..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full p-4 border border-gray-300 rounded-md"
          />
        </div>

        <h3 className="font-semibold text-2xl text-gray-800">Internships</h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
          {filteredCards.length === 0 ? (
            <div className="col-span-4 text-center text-gray-500">
              No internships found.
            </div>
          ) : (
            filteredCards.map((card, index) => (
              <div
                key={index}
                className="w-[26rem] min-h-max flex rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className=" items-start flex-col w-full h-full p-4 bg-gray-100">
                  <div className="w-full flex justify-between items-center ">
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-2"
                        src={card.companyLogo}
                        alt={card.companyName}
                      />
                      <h2 className="text-xl font-bold text-gray-900">
                        {card.companyName}
                      </h2>
                    </div>
                    <p className="flex items-center">
                      <strong className="text-gray-900 text-sm ">
                        <FaStar />
                      </strong>{" "}
                      :{card.difficulty}/5
                    </p>
                  </div>
                  <div className="flex">
                    <div className="w-1/2    pt-2 ">
                      <p>
                        <strong className="text-gray-900 text-sm">
                          Skills:
                        </strong>
                      </p>
                      <ul className="list-disc pl-5 text-xs space-y-0 text-gray-700">
                        {card.skills.map((skill, idx) => (
                          <li key={idx}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-1/2 flex-col item-end  text-sm pt-2 text-end ">
                      <div className="text-green-500 px-3 rounded-xl ">
                        {card.hiringStatus}
                      </div>
                      <div className="text-black  px-3 rounded-xl ">
                        ₹{card.package}
                      </div>
                      <div className="text-black  flex items-center justify-end   px-3 rounded-xl">
                        <IoLocation className="me-1" />
                        {card.location}
                      </div>
                      <div className="text-black  flex items-center justify-end   px-3 rounded-xl">
                        <FaFileContract className="me-1" />
                        {card.contract}
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between ">
                    <div className="w-1/2 flex-col text-sm ">
                      <p>
                        {card.jobCategory}
                        <span> - </span>
                        {card.jobType}
                      </p>
                      <p>{card.jobProfile}</p>
                    </div>

                    <button
                      onClick={() => handleApplyNow(card)}
                      className="w-1/3 mt-2 text-white py-2 text-sm bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      Get Hire
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <JobModal job={selectedJob} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Cards;
>>>>>>> e17f005ca23a870724da0ea129e475e8eef515c0
