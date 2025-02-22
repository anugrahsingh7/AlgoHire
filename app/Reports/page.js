"use client";
import { useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function Reports() {
  // Sample data - replace with actual data later
  const reports = [
    {
      companyName: "Tech Corp",
      testDate: "2024-03-20",
      duration: "90 mins",
      score: 85,
      questionsAttempted: 45,
      skills: {
        problemSolving: 88,
        communication: 82,
        technical: 85,
        fundamental: 90,
        coding: 80,
      },
    },
    {
      companyName: "Dev Solutions",
      testDate: "2024-03-18",
      duration: "60 mins",
      score: 78,
      questionsAttempted: 30,
      skills: {
        problemSolving: 75,
        communication: 85,
        technical: 76,
        fundamental: 80,
        coding: 74,
      },
    },
  ];

  const getChartData = (skills) => ({
    labels: [
      "Problem Solving",
      "Communication",
      "Technical",
      "Fundamental",
      "Coding",
    ],
    datasets: [
      {
        label: "Skills Analysis",
        data: [
          skills.problemSolving,
          skills.communication,
          skills.technical,
          skills.fundamental,
          skills.coding,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Assessment Reports
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reports.map((report, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">
                {report.companyName}
              </h2>
              <span className="text-sm text-gray-500">{report.testDate}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-medium">{report.duration}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-500">Score</p>
                <p className="font-medium">{report.score}%</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-500">Questions</p>
                <p className="font-medium">{report.questionsAttempted}</p>
              </div>
            </div>

            <div className="h-64">
              <Radar
                data={getChartData(report.skills)}
                options={{
                  scales: {
                    r: {
                      beginAtZero: true,
                      max: 100,
                    },
                  },
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
