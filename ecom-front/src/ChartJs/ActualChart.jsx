import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Bar, Pie, Line, PolarArea } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { GETALL } from '../redux/AdminCart/admin.actions';
import UserChart from './UserChart';
import CartChart from './CartChart';
Chart.register(CategoryScale);

const ActualChart = () => {
  const dispatch = useDispatch();
  const {
    data: { AllData },
  } = useSelector((store) => store.products);
  const {
    data: { products },
  } = useSelector((store) => store.AdminApp);

  const [productChart, setProductsChart] = useState({
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
      },
    ],
  });

  useEffect(() => {
    dispatch(GETALL());
    let a = products?.reduce((s, item) => {
      if (item.category == 'Male') {
        return s + item.price;
      }
      return s + 0;
    }, 0);
    let y = products?.reduce((s, item) => {
      if (item.category === 'Female') {
        return s + item.price;
      }
      return s + 0;
    }, 0);
    let z = products?.reduce((s, item) => {
      if (item.category !== 'Female' && item.category !== 'Male') {
        return s + item.price;
      }
      return s + 0;
    }, 0);

    let c = products?.reduce((s, item) => {
      return s + item.price;
    }, 0);

    let newChart = {
      labels: ['Total', 'Male', 'Female', 'Others'],
      datasets: [
        {
          label: `Chart ${products.length}About Products`,
          data: [c, a, y, z],
          backgroundColor: [
            'rgba(75,192,192,1)',
            '#ecf0f1',
            '#50AF95',
            '#f3ba2f',
            '#2a71d0',
          ],
        },
      ],
    };
    setProductsChart(newChart);
  }, []);
  return (
    <Box w="70%" m="auto">
      <Text fontSize={'xl'} mt="40px">
        Bar Chart for{' '}
        {`${products?.length} Products v/s their Prices accross Genders `}
      </Text>
      <PolarArea
        data={productChart}
        options={{
          plugins: {
            title: {
              display: true,
              text: `${products?.length} Products v/s their Prices accross Genders `,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
      <UserChart />
      <CartChart />
    </Box>
  );
};

export default ActualChart;
