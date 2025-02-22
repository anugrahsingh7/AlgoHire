"use client";

import { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie, Line } from "react-chartjs-2";

export default function Portfolio() {
  // Sample data - In real app, this would come from your API/database
  const [testData] = useState({
    tests: [
      // Google Tests
      {
        company: "Google",
        tests: [
          {
            skill: "DSA",
            difficulty: 4,
            role: "SDE",
            score: 85,
            date: "2024-01-15",
            problemSolving: 88,
            technical: 85,
            communication: 82,
            coding: 86,
          },
          {
            skill: "System Design",
            difficulty: 3,
            role: "SDE",
            score: 88,
            date: "2024-01-18",
          },
          {
            skill: "Frontend",
            difficulty: 3,
            role: "SDE",
            score: 92,
            date: "2024-01-20",
          },
        ],
      },
      // Microsoft Tests
      {
        company: "Microsoft",
        tests: [
          {
            skill: "System Design",
            difficulty: 3,
            role: "Senior SDE",
            score: 92,
            date: "2024-01-28",
          },
          {
            skill: "DSA",
            difficulty: 4,
            role: "Senior SDE",
            score: 87,
            date: "2024-02-01",
          },
          {
            skill: "Backend",
            difficulty: 4,
            role: "Senior SDE",
            score: 90,
            date: "2024-02-03",
          },
        ],
      },
      // Amazon Tests
      {
        company: "Amazon",
        tests: [
          {
            skill: "Frontend",
            difficulty: 2,
            role: "Frontend Dev",
            score: 88,
            date: "2024-02-05",
          },
          {
            skill: "DSA",
            difficulty: 3,
            role: "Frontend Dev",
            score: 82,
            date: "2024-02-08",
          },
          {
            skill: "System Design",
            difficulty: 3,
            role: "Frontend Dev",
            score: 85,
            date: "2024-02-10",
          },
        ],
      },
      // Meta Tests
      {
        company: "Meta",
        tests: [
          {
            skill: "DSA",
            difficulty: 5,
            role: "SDE II",
            score: 76,
            date: "2024-02-15",
          },
          {
            skill: "System Design",
            difficulty: 4,
            role: "SDE II",
            score: 81,
            date: "2024-02-18",
          },
          {
            skill: "Frontend",
            difficulty: 4,
            role: "SDE II",
            score: 84,
            date: "2024-02-20",
          },
        ],
      },
      // Netflix Tests
      {
        company: "Netflix",
        tests: [
          {
            skill: "System Design",
            difficulty: 4,
            role: "Senior SDE",
            score: 89,
            date: "2024-02-28",
          },
          {
            skill: "Backend",
            difficulty: 5,
            role: "Senior SDE",
            score: 91,
            date: "2024-03-02",
          },
          {
            skill: "DevOps",
            difficulty: 3,
            role: "Senior SDE",
            score: 86,
            date: "2024-03-05",
          },
        ],
      },
      // Apple Tests
      {
        company: "Apple",
        tests: [
          {
            skill: "Backend",
            difficulty: 3,
            role: "Backend Dev",
            score: 78,
            date: "2024-03-10",
          },
          {
            skill: "System Design",
            difficulty: 4,
            role: "Backend Dev",
            score: 83,
            date: "2024-03-15",
          },
          {
            skill: "DSA",
            difficulty: 4,
            role: "Backend Dev",
            score: 80,
            date: "2024-03-18",
          },
        ],
      },
      // Uber Tests
      {
        company: "Uber",
        tests: [
          {
            skill: "DevOps",
            difficulty: 2,
            role: "DevOps Engineer",
            score: 90,
            date: "2024-03-22",
          },
          {
            skill: "System Design",
            difficulty: 3,
            role: "DevOps Engineer",
            score: 87,
            date: "2024-03-25",
          },
          {
            skill: "Backend",
            difficulty: 3,
            role: "DevOps Engineer",
            score: 85,
            date: "2024-03-28",
          },
        ],
      },
      // LinkedIn Tests
      {
        company: "LinkedIn",
        tests: [
          {
            skill: "Frontend",
            difficulty: 3,
            role: "Frontend Lead",
            score: 85,
            date: "2024-04-05",
          },
          {
            skill: "System Design",
            difficulty: 4,
            role: "Frontend Lead",
            score: 88,
            date: "2024-04-08",
          },
          {
            skill: "DSA",
            difficulty: 3,
            role: "Frontend Lead",
            score: 83,
            date: "2024-04-10",
          },
        ],
      },
      // Twitter Tests
      {
        company: "Twitter",
        tests: [
          {
            skill: "Backend",
            difficulty: 4,
            role: "Backend Lead",
            score: 82,
            date: "2024-04-18",
          },
          {
            skill: "System Design",
            difficulty: 5,
            role: "Backend Lead",
            score: 86,
            date: "2024-04-20",
          },
          {
            skill: "DevOps",
            difficulty: 3,
            role: "Backend Lead",
            score: 89,
            date: "2024-04-22",
          },
        ],
      },
      // Salesforce Tests
      {
        company: "Salesforce",
        tests: [
          {
            skill: "System Design",
            difficulty: 5,
            role: "Principal Engineer",
            score: 94,
            date: "2024-05-01",
          },
          {
            skill: "DSA",
            difficulty: 4,
            role: "Principal Engineer",
            score: 92,
            date: "2024-05-05",
          },
          {
            skill: "Backend",
            difficulty: 4,
            role: "Principal Engineer",
            score: 90,
            date: "2024-05-08",
          },
        ],
      },
    ],
  });

  // Add practice test data state
  const [practiceData] = useState({
    tests: [
      {
        skill: "DSA",
        difficulty: 3,
        score: 88,
        date: "2024-01-10",
        problemSolving: 85,
        technical: 88,
        communication: 90,
        coding: 89,
      },
      {
        skill: "DSA",
        difficulty: 4,
        score: 82,
        date: "2024-01-20",
        problemSolving: 80,
        technical: 83,
        communication: 85,
        coding: 80,
      },
      {
        skill: "System Design",
        difficulty: 4,
        score: 92,
        date: "2024-02-15",
        problemSolving: 92,
        technical: 90,
        communication: 88,
        coding: 91,
      },
      {
        skill: "System Design",
        difficulty: 5,
        score: 85,
        date: "2024-02-25",
        problemSolving: 87,
        technical: 85,
        communication: 83,
        coding: 85,
      },
      {
        skill: "Frontend",
        difficulty: 3,
        score: 95,
        date: "2024-03-01",
        problemSolving: 94,
        technical: 96,
        communication: 93,
        coding: 97,
      },
      {
        skill: "Frontend",
        difficulty: 4,
        score: 89,
        date: "2024-03-15",
        problemSolving: 88,
        technical: 90,
        communication: 87,
        coding: 91,
      },
      {
        skill: "Backend",
        difficulty: 3,
        score: 87,
        date: "2024-03-20",
        problemSolving: 85,
        technical: 88,
        communication: 86,
        coding: 89,
      },
      {
        skill: "Backend",
        difficulty: 4,
        score: 83,
        date: "2024-04-01",
        problemSolving: 82,
        technical: 84,
        communication: 81,
        coding: 85,
      },
      {
        skill: "DevOps",
        difficulty: 2,
        score: 94,
        date: "2024-04-10",
        problemSolving: 93,
        technical: 95,
        communication: 92,
        coding: 96,
      },
      {
        skill: "DevOps",
        difficulty: 3,
        score: 90,
        date: "2024-04-20",
        problemSolving: 89,
        technical: 91,
        communication: 88,
        coding: 92,
      },
      {
        skill: "DSA",
        difficulty: 5,
        score: 78,
        date: "2024-04-25",
        problemSolving: 76,
        technical: 79,
        communication: 77,
        coding: 80,
      },
      {
        skill: "System Design",
        difficulty: 3,
        score: 96,
        date: "2024-05-01",
        problemSolving: 95,
        technical: 97,
        communication: 94,
        coding: 98,
      },
      {
        skill: "Frontend",
        difficulty: 5,
        score: 84,
        date: "2024-05-05",
        problemSolving: 83,
        technical: 85,
        communication: 82,
        coding: 86,
      },
      {
        skill: "Backend",
        difficulty: 5,
        score: 81,
        date: "2024-05-10",
        problemSolving: 80,
        technical: 82,
        communication: 79,
        coding: 83,
      },
      {
        skill: "DevOps",
        difficulty: 4,
        score: 88,
        date: "2024-05-15",
        problemSolving: 87,
        technical: 89,
        communication: 86,
        coding: 90,
      },
    ],
  });

  // Update data processing for charts
  const getAllTests = () => {
    return testData.tests.flatMap((company) =>
      company.tests.map((test) => ({
        company: company.company,
        ...test,
      }))
    );
  };

  // Derived statistics
  const flattenedTests = getAllTests();
  const averageScore =
    flattenedTests.reduce((acc, test) => acc + test.score, 0) /
    flattenedTests.length;

  // Chart data
  const skillData = {
    labels: ["DSA", "System Design", "Frontend", "Backend", "DevOps"],
    datasets: [
      {
        label: "Average Score by Skill",
        data: ["DSA", "System Design", "Frontend", "Backend", "DevOps"].map(
          (skill) => {
            const skillTests = flattenedTests.filter(
              (test) => test.skill === skill
            );
            return skillTests.length
              ? skillTests.reduce((acc, test) => acc + test.score, 0) /
                  skillTests.length
              : 0;
          }
        ),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  const difficultyData = {
    labels: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"],
    datasets: [
      {
        label: "Tests by Difficulty",
        data: Array(5)
          .fill()
          .map(
            (_, i) =>
              flattenedTests.filter((test) => test.difficulty === i + 1).length
          ),
        backgroundColor: "#36A2EB",
      },
    ],
  };

  // Company performance data
  const companyData = {
    labels: testData.tests.map((company) => company.company),
    datasets: [
      {
        data: testData.tests.map((company) => {
          const scores = company.tests.map((test) => test.score);
          return scores.reduce((acc, score) => acc + score, 0) / scores.length;
        }),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  // Progress data
  const progressData = {
    labels: Array.from(
      new Set(
        flattenedTests.map((test) => {
          const date = new Date(test.date);
          return date.toLocaleString("default", { month: "short" });
        })
      )
    ),
    datasets: [
      {
        label: "Score Trend",
        data: flattenedTests
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((test) => test.score),
        borderColor: "#36A2EB",
        tension: 0.1,
      },
    ],
  };

  // Add new chart data for skills breakdown
  const skillBreakdownData = {
    labels: ["Problem Solving", "Technical", "Communication", "Coding"],
    datasets: [
      {
        label: "Average Skill Scores",
        data: ["problemSolving", "technical", "communication", "coding"].map(
          (skill) => {
            const tests = flattenedTests.filter((test) => test[skill]);
            return tests.length
              ? tests.reduce((acc, test) => acc + test[skill], 0) / tests.length
              : 0;
          }
        ),
        backgroundColor: ["#FF9F40", "#4BC0C0", "#FF6384", "#36A2EB"],
      },
    ],
  };

  // Add practice test processing function
  const getPracticeStats = () => {
    const skillAverages = {};
    practiceData.tests.forEach((test) => {
      if (!skillAverages[test.skill]) {
        skillAverages[test.skill] = {
          scores: [],
          problemSolving: [],
          technical: [],
          communication: [],
          coding: [],
        };
      }
      skillAverages[test.skill].scores.push(test.score);
      if (test.problemSolving)
        skillAverages[test.skill].problemSolving.push(test.problemSolving);
      if (test.technical)
        skillAverages[test.skill].technical.push(test.technical);
      if (test.communication)
        skillAverages[test.skill].communication.push(test.communication);
      if (test.coding) skillAverages[test.skill].coding.push(test.coding);
    });

    return Object.entries(skillAverages).map(([skill, data]) => ({
      skill,
      avgScore: data.scores.reduce((a, b) => a + b, 0) / data.scores.length,
      avgProblemSolving: data.problemSolving.length
        ? data.problemSolving.reduce((a, b) => a + b, 0) /
          data.problemSolving.length
        : null,
      avgTechnical: data.technical.length
        ? data.technical.reduce((a, b) => a + b, 0) / data.technical.length
        : null,
      avgCommunication: data.communication.length
        ? data.communication.reduce((a, b) => a + b, 0) /
          data.communication.length
        : null,
      avgCoding: data.coding.length
        ? data.coding.reduce((a, b) => a + b, 0) / data.coding.length
        : null,
    }));
  };

  // Add practice test analytics
  const practiceTestAnalytics = {
    // Practice test skill distribution
    skillDistribution: {
      labels: ["DSA", "System Design", "Frontend", "Backend", "DevOps"],
      datasets: [
        {
          label: "Practice Tests by Skill",
          data: ["DSA", "System Design", "Frontend", "Backend", "DevOps"].map(
            (skill) =>
              practiceData.tests.filter((test) => test.skill === skill).length
          ),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
          ],
        },
      ],
    },

    // Practice test progress over time
    progressData: {
      labels: Array.from(
        new Set(
          practiceData.tests.map((test) => {
            const date = new Date(test.date);
            return date.toLocaleString("default", { month: "short" });
          })
        )
      ),
      datasets: [
        {
          label: "Score Trend",
          data: practiceData.tests
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((test) => test.score),
          borderColor: "#36A2EB",
          tension: 0.1,
        },
      ],
    },

    // Skill components breakdown
    skillComponents: {
      labels: ["Problem Solving", "Technical", "Communication", "Coding"],
      datasets: [
        {
          label: "Average Component Scores",
          data: ["problemSolving", "technical", "communication", "coding"].map(
            (component) => {
              const validTests = practiceData.tests.filter(
                (test) => test[component]
              );
              return validTests.length
                ? validTests.reduce((acc, test) => acc + test[component], 0) /
                    validTests.length
                : 0;
            }
          ),
          backgroundColor: ["#FF9F40", "#4BC0C0", "#FF6384", "#36A2EB"],
        },
      ],
    },

    // Difficulty distribution
    difficultyDistribution: {
      labels: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"],
      datasets: [
        {
          label: "Tests by Difficulty",
          data: Array(5)
            .fill()
            .map(
              (_, i) =>
                practiceData.tests.filter((test) => test.difficulty === i + 1)
                  .length
            ),
          backgroundColor: "#36A2EB",
        },
      ],
    },
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">
        Your Test Performance Analytics
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Total Tests</h3>
          <p className="text-2xl font-bold">{flattenedTests.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Average Score</h3>
          <p className="text-2xl font-bold">{averageScore.toFixed(1)}%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Highest Score</h3>
          <p className="text-2xl font-bold">
            {Math.max(...flattenedTests.map((t) => t.score))}%
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500">Companies</h3>
          <p className="text-2xl font-bold">{testData.tests.length}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Skill Breakdown</h2>
          <Bar data={skillBreakdownData} options={{ responsive: true }} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Performance by Skill</h2>
          <Bar data={skillData} options={{ responsive: true }} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Test Distribution by Difficulty
          </h2>
          <Bar data={difficultyData} options={{ responsive: true }} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Company-wise Performance
          </h2>
          <Pie data={companyData} options={{ responsive: true }} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Progress Over Time</h2>
          <Line
            data={progressData}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: false,
                  min: 60,
                  max: 100,
                },
              },
            }}
          />
        </div>
      </div>

      {/* Detailed Test History */}
      <div className="mt-8 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold p-4 border-b">
          Company Performance Summary
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 text-left">Company</th>
                <th className="p-4 text-left">DSA</th>
                <th className="p-4 text-left">System Design</th>
                <th className="p-4 text-left">Frontend</th>
                <th className="p-4 text-left">Backend</th>
                <th className="p-4 text-left">DevOps</th>
                <th className="p-4 text-left">Role</th>
              </tr>
            </thead>
            <tbody>
              {testData.tests.map((company, index) => {
                // Create a map of skill scores for this company
                const skillScores = {};
                const roles = new Set();

                company.tests.forEach((test) => {
                  skillScores[test.skill] = test.score;
                  roles.add(test.role);
                });

                return (
                  <tr key={index} className="border-t">
                    <td className="p-4">{company.company}</td>
                    <td className="p-4">
                      {skillScores["DSA"] ? `${skillScores["DSA"]}%` : "N/A"}
                    </td>
                    <td className="p-4">
                      {skillScores["System Design"]
                        ? `${skillScores["System Design"]}%`
                        : "N/A"}
                    </td>
                    <td className="p-4">
                      {skillScores["Frontend"]
                        ? `${skillScores["Frontend"]}%`
                        : "N/A"}
                    </td>
                    <td className="p-4">
                      {skillScores["Backend"]
                        ? `${skillScores["Backend"]}%`
                        : "N/A"}
                    </td>
                    <td className="p-4">
                      {skillScores["DevOps"]
                        ? `${skillScores["DevOps"]}%`
                        : "N/A"}
                    </td>
                    <td className="p-4">{Array.from(roles).join(", ")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Practice Test Performance Section */}
      <div className="mt-8 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold p-4 border-b">
          Practice Test Performance
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 text-left">Skill</th>
                <th className="p-4 text-left">Average Score</th>
                <th className="p-4 text-left">Problem Solving</th>
                <th className="p-4 text-left">Technical</th>
                <th className="p-4 text-left">Communication</th>
                <th className="p-4 text-left">Coding</th>
                <th className="p-4 text-left">Tests Taken</th>
              </tr>
            </thead>
            <tbody>
              {getPracticeStats().map((stat, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4">{stat.skill}</td>
                  <td className="p-4">{stat.avgScore.toFixed(1)}%</td>
                  <td className="p-4">
                    {stat.avgProblemSolving
                      ? `${stat.avgProblemSolving.toFixed(1)}%`
                      : "N/A"}
                  </td>
                  <td className="p-4">
                    {stat.avgTechnical
                      ? `${stat.avgTechnical.toFixed(1)}%`
                      : "N/A"}
                  </td>
                  <td className="p-4">
                    {stat.avgCommunication
                      ? `${stat.avgCommunication.toFixed(1)}%`
                      : "N/A"}
                  </td>
                  <td className="p-4">
                    {stat.avgCoding ? `${stat.avgCoding.toFixed(1)}%` : "N/A"}
                  </td>
                  <td className="p-4">
                    {
                      practiceData.tests.filter((t) => t.skill === stat.skill)
                        .length
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Practice Test Performance Section */}
      <div className="mt-12">
        <h1 className="text-3xl font-bold mb-8">Practice Test Performance</h1>

        {/* Practice Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500">Total Practice Tests</h3>
            <p className="text-2xl font-bold">{practiceData.tests.length}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500">Average Score</h3>
            <p className="text-2xl font-bold">
              {(
                practiceData.tests.reduce((acc, test) => acc + test.score, 0) /
                practiceData.tests.length
              ).toFixed(1)}
              %
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500">Highest Score</h3>
            <p className="text-2xl font-bold">
              {Math.max(...practiceData.tests.map((t) => t.score))}%
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-gray-500">Skills Practiced</h3>
            <p className="text-2xl font-bold">
              {new Set(practiceData.tests.map((t) => t.skill)).size}
            </p>
          </div>
        </div>

        {/* Practice Test Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              Skill Components Analysis
            </h2>
            <Bar
              data={practiceTestAnalytics.skillComponents}
              options={{ responsive: true }}
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              Practice Tests by Skill
            </h2>
            <Pie
              data={practiceTestAnalytics.skillDistribution}
              options={{ responsive: true }}
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              Difficulty Distribution
            </h2>
            <Bar
              data={practiceTestAnalytics.difficultyDistribution}
              options={{ responsive: true }}
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Progress Over Time</h2>
            <Line
              data={practiceTestAnalytics.progressData}
              options={{
                responsive: true,
                scales: {
                  y: {
                    beginAtZero: false,
                    min: 60,
                    max: 100,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Test History Section */}
      <div className="mt-12">
        <h1 className="text-3xl font-bold mb-8">Test History</h1>

        {/* Company Test History */}
        <div className="mb-8 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold p-4 border-b">
            Company Test History
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Company</th>
                  <th className="p-4 text-left">Role</th>
                  <th className="p-4 text-left">Skill</th>
                  <th className="p-4 text-left">Difficulty</th>
                  <th className="p-4 text-left">Score</th>
                  <th className="p-4 text-left">Problem Solving</th>
                  <th className="p-4 text-left">Technical</th>
                  <th className="p-4 text-left">Communication</th>
                  <th className="p-4 text-left">Coding</th>
                </tr>
              </thead>
              <tbody>
                {flattenedTests
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((test, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-4">
                        {new Date(test.date).toLocaleDateString()}
                      </td>
                      <td className="p-4">{test.company}</td>
                      <td className="p-4">{test.role}</td>
                      <td className="p-4">{test.skill}</td>
                      <td className="p-4">{test.difficulty}/5</td>
                      <td className="p-4">{test.score}%</td>
                      <td className="p-4">
                        {test.problemSolving
                          ? `${test.problemSolving}%`
                          : "N/A"}
                      </td>
                      <td className="p-4">
                        {test.technical ? `${test.technical}%` : "N/A"}
                      </td>
                      <td className="p-4">
                        {test.communication ? `${test.communication}%` : "N/A"}
                      </td>
                      <td className="p-4">
                        {test.coding ? `${test.coding}%` : "N/A"}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Practice Test History */}
        <div className="bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold p-4 border-b">
            Practice Test History
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Skill</th>
                  <th className="p-4 text-left">Difficulty</th>
                  <th className="p-4 text-left">Score</th>
                  <th className="p-4 text-left">Problem Solving</th>
                  <th className="p-4 text-left">Technical</th>
                  <th className="p-4 text-left">Communication</th>
                  <th className="p-4 text-left">Coding</th>
                </tr>
              </thead>
              <tbody>
                {practiceData.tests
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((test, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-4">
                        {new Date(test.date).toLocaleDateString()}
                      </td>
                      <td className="p-4">{test.skill}</td>
                      <td className="p-4">{test.difficulty}/5</td>
                      <td className="p-4">{test.score}%</td>
                      <td className="p-4">{test.problemSolving}%</td>
                      <td className="p-4">{test.technical}%</td>
                      <td className="p-4">{test.communication}%</td>
                      <td className="p-4">{test.coding}%</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
