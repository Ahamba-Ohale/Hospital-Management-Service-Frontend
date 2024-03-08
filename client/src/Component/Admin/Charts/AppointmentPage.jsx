import React, { useEffect, useState } from 'react';
import getPatientsData from "../ChartApi/GetPatientApi";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const AppointmentCharts = () => {
  const [patientData, setPatientData] = useState([]);
  const [monthlyCounts, setMonthlyCounts] = useState({});

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const data = await getPatientsData();
        setPatientData(data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatientData();
  }, []);

  useEffect(() => {
    // Calculate monthly counts when patientData changes
    const calculateMonthlyCounts = () => {
      const counts = {};

      patientData.forEach((patient) => {
        const month = new Date(patient.createdAt).getMonth();
        counts[month] = (counts[month] || 0) + 1;
      });

      setMonthlyCounts(counts);
    };

    calculateMonthlyCounts();
  }, [patientData]);

  const viewData = () => {
    // Generate an array of counts for each month from January to December
    const countsArray = Array.from({ length: 12 }, (_, monthIndex) => monthlyCounts[monthIndex] || 0);
   
    return {
      labels: [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sept',
        'Oct', 'Nov', 'Dec',
      ],
      datasets: [
        {
          backgroundColor: "#276AB3",
          borderColor: "#276AB3",
          data: countsArray,
        },
      ],
    };
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        display: false,
        beginAtZero: true, 
      },

      y: {
        display: true,
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          min: 0,
          max: 100,
        },
        grid: {
          display: false,
        }
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Bar data={viewData()} options={options} className="bar" />
  );
};

export default PatientChart;

