import React, { useEffect, useState, useMemo } from 'react';
import getPrescriptionsData from '../ChartApi/GetPatientApi';
import { Bar } from "react-chartjs-2";

const PrescriptionChart = () => {
  const [prescriptionData, setPrescriptionData] = useState([]);
  const [monthlyCounts, setMonthlyCounts] = useState({});

  useEffect(() => {
    const fetchPrescriptionsData = async () => {
      try {
        const data = await getPrescriptionsData();
        setPrescriptionData(data);
      } catch (error) {
        console.error('Error fetching prescription data:', error);
      }
    };

    fetchPrescriptionsData();
  }, [setPrescriptionData]);

  useEffect(() => {
    // Calculate monthly counts when prescriptionData changes
    const calculateMonthlyCounts = () => {
      const counts = {};

      prescriptionData.forEach((prescription) => {
        const month = new Date(prescription.createdAt).getMonth();
        counts[month] = (counts[month] || 0) + 1;
      });

      setMonthlyCounts(counts);
    };

    calculateMonthlyCounts();
  }, [prescriptionData]);

  const viewData = useMemo(() => {
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
          backgroundColor: "#FF0000",
          borderColor: "#276AB3",
          data: countsArray,
        },
      ],
    };
  }, [monthlyCounts]);

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
    <Bar data={viewData} options={options} className="bar" />
  );
};

export default PrescriptionChart;


// import React, { useEffect, useState } from 'react';
// import getPrescriptionsData from '../ChartApi/GetPatientApi';
// import { Bar } from "react-chartjs-2";

// const PrescriptionChart = () => {
//   const [prescriptionData, setPrescriptionData] = useState([]);
//   const [monthlyCounts, setMonthlyCounts] = useState({});

//   useEffect(() => {
//     const fetchPrescriptionsData = async () => {
//       try {
//         const data = await getPrescriptionsData();
//         setPrescriptionData(data);
//       } catch (error) {
//         console.error('Error fetching prescription data:', error);
//       }
//     };

//     fetchPrescriptionsData();
//   }, [setPrescriptionData]);

//   useEffect(() => {
//     // Calculate monthly counts when prescriptionData changes
//     const calculateMonthlyCounts = () => {
//       const counts = {};

//       prescriptionData.forEach((prescription) => {
//         const month = new Date(prescription.createdAt).getMonth();
//         counts[month] = (counts[month] || 0) + 1;
//       });

//       setMonthlyCounts(counts);
//     };

//     calculateMonthlyCounts();
//   }, [prescriptionData]);

//   const viewData = () => {
//     // Generate an array of counts for each month from January to December
//     const countsArray = Array.from({ length: 12 }, (_, monthIndex) => monthlyCounts[monthIndex] || 0);
   
//     return {
//       labels: [
//         'Jan', 'Feb', 'Mar',
//         'Apr', 'May', 'Jun',
//         'Jul', 'Aug', 'Sept',
//         'Oct', 'Nov', 'Dec',
//       ],
//       datasets: [
//         {
//           backgroundColor: "#276AB3",
//           borderColor: "#276AB3",
//           data: countsArray,
//         },
//       ],
//     };
//   };

//   const options = {
//     maintainAspectRatio: false,
//     responsive: true,
//     scales: {
//       x: {
//         display: false,
//         beginAtZero: true, 
//       },
//       y: {
//         display: true,
//         beginAtZero: true,
//         ticks: {
//           stepSize: 10,
//           min: 0,
//           max: 100,
//         },
//         grid: {
//           display: false,
//         }
//       },
//     },
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//   };

//   return (
//     <Bar data={viewData()} options={options} className="bar" />
//   );
// };

// export default PrescriptionChart;
