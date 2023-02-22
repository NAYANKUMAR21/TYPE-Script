import { Box } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Data } from './Data';
import PieChart from './PieChart';

const Chart = () => {
  const {
    data: { AllData },
  } = useSelector((store) => store.products);

  const [chartData, setChartData] = useState({
    labels: AllData.map((data) => data.category),
    datasets: [
      {
        label: 'Users Gained ',
        data: AllData.map((data) => data.price),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });
  const data = {
    labels: ['Red', 'Orange', 'Blue'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: 'Popularity of colours',
        data: [55, 23, 96],
        // you can set indiviual colors for each bar
        backgroundColor: [
          'rgba(255, 255, 255, 0.6)',
          'rgba(255, 255, 255, 0.6)',
          'rgba(255, 255, 255, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Box>
      <PieChart chartData={chartData} />
    </Box>
  );
};

export default Chart;
