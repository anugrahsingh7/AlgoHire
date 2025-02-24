"use client"; // Add this line for using useState

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
      hiringStatus: "Active",
      package: "24 LPA",
      location: "Noida",
      contract: "3 Years",
      jobCategory: "Job",
      jobType: "Full-Time",
      category: "Software",
      companyDescription:
        "Google is a global technology leader that focuses on improving the ways people connect with information. Known for its innovative solutions in search, cloud computing, software, and hardware.",
      responsibilities: [
        "Develop and maintain scalable software solutions",
        "Collaborate with cross-functional teams",
        "Write clean, maintainable code",
        "Participate in code reviews and technical discussions",
      ],
      requirements: [
        "Bachelor's/Master's degree in Computer Science or related field",
        "3+ years of software development experience",
        "Strong problem-solving skills",
        "Experience with modern software practices",
      ],
      benefits: [
        "Competitive salary and equity",
        "Health insurance",
        "Flexible work hours",
        "Learning and development opportunities",
      ],
      applicationDeadline: "2024-05-30",
      experienceLevel: "3-5 years",
    },
    {
      companyName: "Microsoft",
      companyLogo:
        "https://yt3.googleusercontent.com/ytc/AIdro_kXVj3MGEZAiw5LFOtWMYpl9EHk45elb6SpEWfIigi3_3M=s900-c-k-c0x00ffffff-no-rj",
      jobProfile: "Frontend Developer",
      skills: ["React", "CSS", "JavaScript"],
      difficulty: "4",
      hiringStatus: "Active",
      package: "5 LPA",
      location: "Bangalore",
      contract: "2 Years",
      jobType: "Part-Time",
      jobCategory: "Internship",
      category: "Software",
      companyDescription:
        "Microsoft is a leading technology company that develops, manufactures, and sells computer software, consumer electronics, and personal computers. Known for Windows OS, Office suite, and Azure cloud services.",
      responsibilities: [
        "Build responsive and interactive user interfaces",
        "Optimize applications for maximum performance",
        "Implement UI/UX designs with precision",
        "Work with design and backend teams",
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Strong proficiency in React and modern JavaScript",
        "Understanding of web performance optimization",
        "Experience with responsive design",
      ],
      benefits: [
        "Flexible working hours",
        "Health and wellness programs",
        "Professional development budget",
        "Remote work options",
      ],
      applicationDeadline: "2024-06-15",
      experienceLevel: "1-3 years",
    },
    {
      companyName: "Amazon",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
      jobProfile: "Backend Developer",
      skills: ["Java", "Spring Boot", "AWS", "Microservices"],
      difficulty: "5",
      hiringStatus: "Active",
      package: "45 LPA",
      location: "Hyderabad",
      contract: "2 Years",
      jobCategory: "Job",
      jobType: "Full-Time",
      category: "Software",
      companyDescription:
        "Amazon is a global e-commerce and technology company, leading in cloud computing, digital streaming, and artificial intelligence. Known for AWS, Amazon.com, and innovative technology solutions.",
      responsibilities: [
        "Design and implement scalable backend services",
        "Optimize database performance",
        "Build and maintain RESTful APIs",
        "Handle high-traffic microservices architecture",
      ],
      requirements: [
        "Master's degree in Computer Science",
        "5+ years experience in backend development",
        "Expert knowledge of Java and Spring Boot",
        "Strong understanding of cloud services",
      ],
      benefits: [
        "Competitive compensation package",
        "Stock options",
        "Comprehensive healthcare",
        "401(k) matching",
      ],
      applicationDeadline: "2024-07-01",
      experienceLevel: "5-8 years",
    },
    {
      companyName: "Meta",
      companyLogo:
        "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
      jobProfile: "ML Engineer",
      skills: ["Python", "TensorFlow", "PyTorch", "Deep Learning"],
      difficulty: "5",
      hiringStatus: "Active",
      package: "35 LPA",
      location: "Bangalore",
      contract: "2 Years",
      jobCategory: "Job",
      jobType: "Full-Time",
      category: "Machine Learning",
      companyDescription:
        "Meta (formerly Facebook) is at the forefront of social technology and virtual reality. Leading innovation in social media, AR/VR, and artificial intelligence.",
      responsibilities: [
        "Develop machine learning models",
        "Optimize model performance and accuracy",
        "Work on large-scale ML infrastructure",
        "Research and implement new ML techniques",
      ],
      requirements: [
        "PhD or Master's in Machine Learning/AI",
        "Strong background in deep learning",
        "Experience with ML frameworks",
        "Published research papers preferred",
      ],
      benefits: [
        "Industry-leading compensation",
        "Extensive health benefits",
        "Research budget",
        "Relocation assistance",
      ],
      applicationDeadline: "2024-06-30",
      experienceLevel: "4-8 years",
    },
    {
      companyName: "Paytm",
      companyLogo:
        "https://static.vecteezy.com/system/resources/previews/019/909/641/non_2x/paytm-transparent-paytm-free-free-png.png",
      jobProfile: "Mobile Developer",
      skills: ["Android", "Kotlin", "React Native", "Flutter"],
      difficulty: "4",
      hiringStatus: "Active",
      package: "18 LPA",
      location: "Noida",
      contract: "1.5 Years",
      jobCategory: "Job",
      jobType: "Full-Time",
      category: "Mobile Development",
      companyDescription:
        "Paytm is India's leading financial services company that offers payment solutions, banking services, and e-commerce platforms to millions of merchants and consumers.",
      responsibilities: [
        "Develop mobile applications for Android/iOS",
        "Implement secure payment features",
        "Optimize app performance",
        "Work on cross-platform solutions",
      ],
      requirements: [
        "Bachelor's in Computer Science",
        "3+ years mobile development experience",
        "Knowledge of mobile security practices",
        "Experience with payment gateways",
      ],
      benefits: [
        "Performance bonuses",
        "Health insurance",
        "Skill development programs",
        "Stock options",
      ],
      applicationDeadline: "2024-05-15",
      experienceLevel: "3-5 years",
    },
    {
      companyName: "Juspay",
      companyLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIKG77DlvqrkTaXPvR8OZCOWBmuumbUKKOw&s",
      jobProfile: "Payment Systems Engineer",
      skills: ["Haskell", "Purescript", "System Design", "Payment Gateway"],
      difficulty: "4",
      hiringStatus: "Active",
      package: "22 LPA",
      location: "Bangalore",
      contract: "2 Years",
      jobCategory: "Job",
      jobType: "Full-Time",
      category: "FinTech",
      companyDescription:
        "Juspay is a leading payment technology company that processes millions of transactions daily. Known for innovative payment solutions and functional programming practices.",
      responsibilities: [
        "Design payment processing systems",
        "Implement security protocols",
        "Optimize transaction processing",
        "Build scalable financial systems",
      ],
      requirements: [
        "Strong functional programming background",
        "Experience with payment systems",
        "Knowledge of cryptography",
        "Understanding of financial regulations",
      ],
      benefits: [
        "Competitive salary",
        "Learning opportunities",
        "Health coverage",
        "Remote work options",
      ],
      applicationDeadline: "2024-06-20",
      experienceLevel: "2-5 years",
    },
    {
      companyName: "Netflix",
      companyLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxAKeCk5XF3h43HOiwPOyftDtzfPVPDFVvB_srCV4tCLAlq62A3QgA8RJqB15HY2IaRio&usqp=CAU",
      jobProfile: "Streaming Platform Engineer",
      skills: ["Node.js", "Redis", "Cloud Architecture", "Video Streaming"],
      difficulty: "5",
      hiringStatus: "Active",
      package: "42 LPA",
      location: "Bangalore",
      contract: "2 Years",
      jobCategory: "Job",
      jobType: "Full-Time",
      category: "Media Technology",
      companyDescription:
        "Netflix is the world's leading streaming entertainment service with millions of subscribers worldwide. Known for cutting-edge technology in content delivery and streaming.",
      responsibilities: [
        "Design streaming infrastructure",
        "Optimize video delivery systems",
        "Implement CDN solutions",
        "Manage large-scale distributed systems",
      ],
      requirements: [
        "Master's in Computer Science",
        "Experience with streaming protocols",
        "Knowledge of CDN architecture",
        "Background in distributed systems",
      ],
      benefits: [
        "Top-tier compensation",
        "Unlimited vacation",
        "Home office setup",
        "Netflix subscription",
      ],
      applicationDeadline: "2024-07-15",
      experienceLevel: "5-8 years",
    },
    {
      companyName: "Uber",
      companyLogo:
        "https://s23.q4cdn.com/407969754/files/doc_multimedia/2024/5/1008364843/Uber_Logo_Black_RGB.jpg",
      jobProfile: "Data Scientist",
      skills: ["Python", "SQL", "Machine Learning", "Data Analytics"],
      difficulty: "4",
      hiringStatus: "Active",
      package: "28 LPA",
      location: "Hyderabad",
      contract: "2 Years",
      jobCategory: "Job",
      jobType: "Full-Time",
      category: "Data Science",
      companyDescription:
        "Uber is a technology company transforming transportation and delivery worldwide. Known for innovative solutions in ride-sharing, food delivery, and urban mobility.",
      responsibilities: [
        "Analyze large datasets",
        "Build predictive models",
        "Optimize pricing algorithms",
        "Create data visualization solutions",
      ],
      requirements: [
        "PhD/Master's in Data Science or related field",
        "Strong statistical background",
        "Experience with big data tools",
        "Knowledge of ML algorithms",
      ],
      benefits: [
        "Competitive base salary",
        "Uber credits",
        "Health insurance",
        "Education reimbursement",
      ],
      applicationDeadline: "2024-06-25",
      experienceLevel: "3-6 years",
    },
  ];

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
