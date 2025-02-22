export default function ApplicationStatus() {
  // Sample data - replace with actual data from your backend
  const applications = [
    {
      companyName: "Example Corp",
      jobRole: "Software Engineer",
      submitDate: "2024-03-20",
      status: "Under Review",
    },
    // Add more applications as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Application Status
          </h1>
          <p className="text-gray-600 mb-6">
            Track your job applications and their current status
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Company Name
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Job Role
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Submit Date
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map((app, index) => (
                  <tr
                    key={index}
                    className="transition-colors hover:bg-gray-50 group"
                  >
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base font-medium text-gray-900">
                      {app.companyName}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base text-gray-700">
                      {app.jobRole}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base text-gray-700">
                      {new Date(app.submitDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          app.status === "Under Review"
                            ? "bg-yellow-100 text-yellow-800"
                            : app.status === "Accepted"
                            ? "bg-green-100 text-green-800"
                            : app.status === "Rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        } transition-colors`}
                      >
                        <span
                          className={`w-2 h-2 mr-2 rounded-full ${
                            app.status === "Under Review"
                              ? "bg-yellow-400"
                              : app.status === "Accepted"
                              ? "bg-green-400"
                              : app.status === "Rejected"
                              ? "bg-red-400"
                              : "bg-gray-400"
                          }`}
                        ></span>
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {applications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No applications found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
