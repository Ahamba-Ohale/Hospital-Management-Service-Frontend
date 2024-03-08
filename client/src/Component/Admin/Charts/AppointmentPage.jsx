import React, { useEffect, useState } from 'react';
import getAppointmentData from '../ChartApi/GetAppointmentApi'; // Corrected import
import { Bar } from "react-chartjs-2";

const AppointmentChart = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  const [monthlyCounts, setMonthlyCounts] = useState({});

  useEffect(() => {
    const fetchAppointmentData = async () => {
      try {
        const data = await getAppointmentData(); // Corrected function name
        setAppointmentData(data);
      } catch (error) {
        console.error('Error fetching appointment data:', error);
      }
    };

    fetchAppointmentData();
  }, [setAppointmentData]);

  useEffect(() => {
    // Calculate monthly counts when appointmentData changes
    const calculateMonthlyCounts = () => {
      const counts = {};

      appointmentData.forEach((appointment) => {
        const month = new Date(appointment.createdAt).getMonth();
        counts[month] = (counts[month] || 0) + 1;
      });

      setMonthlyCounts(counts);
    };

    calculateMonthlyCounts();
  }, [appointmentData]);

  const viewAppData = () => {
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
    <Bar data={viewAppData()} options={options} className="bar" />
  );
};

export default AppointmentChart;
