// Import the React library.
import React from "react";

// Import the Chart.js library.
import Chart from "chart.js/auto";

// Import the Bar component from the react-chartjs-2 library.
import { Bar } from "react-chartjs-2";

/**
 * Define a functional component named BarChart
 */
const BarChart = () => {
  // Define an array of labels.
  const labels = ["January", "February", "March", "April", "May", "June"];

  // Defined an object 
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  const div ={
    maintainAspectRatio: false,
}

  // Return the Bar component, passing in the data object as a prop.
  return (
    <div style={{width: '13rem', height: '13'}}>
      <Bar data={data} div={div}/>
    </div>
  );
};

// Export the BarChart component as the default export of the module.
export default BarChart;