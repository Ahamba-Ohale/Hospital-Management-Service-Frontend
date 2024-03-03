import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";


const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June"];


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


const LineChart = () => {
  return (
    
      <Line data={data} options={div}/> 
    
  );
};

export default LineChart; 