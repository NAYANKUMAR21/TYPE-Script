import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Bar, Pie, Line, Radar, PolarArea } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text, useDisclosure } from '@chakra-ui/react';
import { GETALL } from '../redux/AdminCart/admin.actions';
Chart.register(CategoryScale);

const CartChart = () => {
  const dispatch = useDispatch();
  const {
    data: { AllData },
  } = useSelector((store) => store.products);
  const {
    data: { products, users, cartItems },
  } = useSelector((store) => store.AdminApp);
  console.log(cartItems, 'from hree');
  const [cartChart, setCartChart] = useState({
    labels: users?.map((data, index) => index + 1),
    datasets: [
      {
        label: `Chart about ${cartItems.length} About Product Added to Cart By Users`,
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
  useEffect(() => {
    let a = cartItems?.reduce((s, item) => {
      if (item.product.category == 'Male') {
        return s + item.product.price;
      }
      return s + 0;
    }, 0);
    let y = cartItems?.reduce((s, item) => {
      if (item.product.category === 'Female') {
        return s + item.product.price;
      }
      return s + 0;
    }, 0);
    let z = cartItems?.reduce((s, item) => {
      if (
        item.product.category !== 'Female' &&
        item.product.category !== 'Male'
      ) {
        return s + item.product.price;
      }
      return s + 0;
    }, 0);

    let c = cartItems?.reduce((s, item) => {
      return s + item.product.price;
    }, 0);

    let newChart = {
      labels: ['Male', 'Female', 'Others', 'Total'],
      datasets: [
        {
          label: `${cartItems.length} Cart Items Added by users accross genders `,
          data: [a, y, z, c],
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
    setCartChart(newChart);
  }, []);
  return (
    <Box m="auto">
      <Text fontSize={'xl'} mt="40px">
        Bar Chart{' '}
        {`${cartItems.length} Cart Items Added by users accross genders `}
      </Text>
      <Bar
        data={cartChart}
        options={{
          plugins: {
            title: {
              display: true,
              text: `${cartItems.length} Cart Items Added by users accross genders `,
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

export default CartChart;
