import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({donationAmount}) => {
    console.log(donationAmount,"donate");
    const amount = 1260000 - donationAmount;

  const data = {
    labels: ["Toplam Bağış Tutarı", "Hedefe Kalan Tutar"],
    datasets: [
      {
        label: "# of Votes",
        data: [donationAmount, amount],
        backgroundColor: ["rgb(27, 196, 2)", "rgb(178, 178, 178)"],
        borderColor: ["rgb(27, 196, 2)", "rgb(178, 178, 178)"],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
}


export default PieChart;
