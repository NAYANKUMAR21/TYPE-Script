import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Bar, Pie, Line, Radar, Bubble } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { GETALL } from '../redux/AdminCart/admin.actions';
Chart.register(CategoryScale);

const UserChart = () => {
  const dispatch = useDispatch();
  const {
    data: { AllData },
  } = useSelector((store) => store.products);
  const {
    data: { products, users },
  } = useSelector((store) => store.AdminApp);
  console.log(users, products, 'from hree');
  const [userChart, setUsersChart] = useState({
    labels: users?.map((data, index) => index + 1),
    datasets: [
      {
        label: 'Users Gained ',
        data: users?.map((data) => data.age),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
      },
    ],
  });

  return (
    <Box m="auto">
      <Text fontSize={'xl'} mt="40px">
        Bar Chart {`${users.length} Users v/s their ages `}
      </Text>
      <Bar
        data={userChart}
        options={{
          plugins: {
            title: {
              display: true,
              text: `${users.length} Users v/s their ages `,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </Box>
  );
};

export default UserChart;
