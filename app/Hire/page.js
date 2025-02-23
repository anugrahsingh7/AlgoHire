import Cards from "../_components/Cards";


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

export default async function HirePage() {
  const cardsData = await getCompanyData();
  return <Cards cardsData={cardsData} />;
}