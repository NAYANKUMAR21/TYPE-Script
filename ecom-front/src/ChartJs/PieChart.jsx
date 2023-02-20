import Chart from 'chart.js/auto';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);
function PieChart({ chartData }) {
  return (
    <Box w="50%" m="auto">
      <Text textAlign={'center'} fontSize="2xl">
        Large Chart
      </Text>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Users Gained between 2016-2020',
            },
            legend: {
              display: false,
            },
          },
        }}
      />
      <Text textAlign={'center'} fontSize="2xl" mt="100px">
        Pie Chart
      </Text>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Users Gained between 2016-2020',
            },
          },
        }}
      />
    </Box>
  );
}
export default PieChart;
