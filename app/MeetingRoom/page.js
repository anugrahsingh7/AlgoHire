"use client";
export default function MeetingRoom() {
  // Updated sample data structure with meeting information
  const meetings = [
    {
      companyName: "Example Corp",
      jobRole: "Software Engineer",
      submitDate: "2024-03-20",
      status: "Under Review",
      meeting: {
        scheduled: true,
        datetime: "2024-03-25T10:00:00",
        meetingLink: "https://meet.example.com/abc123",
      },
    },
    // ... existing code ...
  ];

  const handleJoinMeeting = (meetingLink) => {
    window.open(meetingLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 mb-6 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Application Status
              </h1>
              <p className="text-gray-600">
                Track your job applications and scheduled interviews
              </p>
            </div>
          </div>

          {/* Desktop view */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider bg-gray-50/80 backdrop-blur-sm">
                    Company
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider bg-gray-50/80 backdrop-blur-sm">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider bg-gray-50/80 backdrop-blur-sm">
                    Applied On
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider bg-gray-50/80 backdrop-blur-sm">
                    Meeting Details
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider bg-gray-50/80 backdrop-blur-sm">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {meetings.map((app, index) => (
                  <tr key={index} className="hover:bg-blue-50/50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {app.companyName}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{app.jobRole}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">
                        {new Date(app.submitDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {app.meeting?.scheduled ? (
                        <div className="text-sm text-gray-700">
                          <div className="font-medium">
                            {new Date(app.meeting.datetime).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </div>
                          <div className="text-gray-500">
                            {new Date(app.meeting.datetime).toLocaleTimeString(
                              "en-US",
                              {
                                hour: "numeric",
                                minute: "2-digit",
                                hour12: true,
                              }
                            )}
                          </div>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-500">
                          No meeting scheduled
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {app.meeting?.scheduled && (
                        <button
                          onClick={() =>
                            handleJoinMeeting(app.meeting.meetingLink)
                          }
                          className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          Join
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile view */}
          <div className="md:hidden space-y-4">
            {meetings.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-4 hover:bg-blue-50/50"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {app.companyName}
                    </h3>
                    <p className="text-sm text-gray-600">{app.jobRole}</p>
                  </div>
                  {app.meeting?.scheduled && (
                    <button
                      onClick={() => handleJoinMeeting(app.meeting.meetingLink)}
                      className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Join
                    </button>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Applied On:</span>
                    <span className="text-gray-700">
                      {new Date(app.submitDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Meeting:</span>
                    <span className="text-gray-700 text-right">
                      {app.meeting?.scheduled ? (
                        <>
                          {new Date(app.meeting.datetime).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "short",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                          <br />
                          {new Date(app.meeting.datetime).toLocaleTimeString(
                            "en-US",
                            {
                              hour: "numeric",
                              minute: "2-digit",
                              hour12: true,
                            }
                          )}
                        </>
                      ) : (
                        "No meeting scheduled"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {meetings.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg
                  className="mx-auto h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-lg font-medium">
                No applications found
              </p>
              <p className="text-gray-400 mt-2">
                Your scheduled meetings will appear here
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
