"use client";

export default function ProjectCard({ project }) {
  const getFaviconUrl = (url) => {
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch {
      return "https://www.google.com/s2/favicons?domain=github.com&sz=128";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-xl border border-gray-100">
      <div className="p-5">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-50 rounded-lg">
              <img
                src={getFaviconUrl(project.link)}
                alt={`${project.name} logo`}
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.target.src =
                    "https://www.google.com/s2/favicons?domain=github.com&sz=128";
                }}
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 leading-tight">
                {project.name}
              </h2>
              <span className="text-sm text-gray-500">{project.duration}</span>
            </div>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        {/* Description Section */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Skills Section */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Team Section - Only shown if there are contributors */}
        {project.contributors && project.contributors.length > 0 && (
          <div className="pt-4 border-t border-gray-100">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-gray-500">Team:</span>
              <div className="flex flex-wrap gap-1.5">
                {project.contributors.map((contributor, index) => (
                  <a
                    key={index}
                    href={contributor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-1 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs rounded-full transition-colors duration-200"
                  >
                    <svg
                      className="w-3 h-3 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                    {contributor.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
