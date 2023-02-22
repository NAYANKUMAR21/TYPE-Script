import Chart from 'chart.js/auto';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../redux/products/prod.actions';
import { useDispatch, useSelector } from 'react-redux';
Chart.register(CategoryScale);

function PieChart() {

  const state = useSelector((store) => store.products);
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
  const [products, setProducts] = useState({
    // this is for bar chart
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
  const [CartItems, setCartItems] = useState({
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
  const [number, setNumer] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch()
    dispatch(getAllProducts());
   

    console.log(a, y, z, c, 'from graph');
    let CHARTDATA = {
      labels: ['Male', 'Female', 'Others', 'Total'],
      datasets: [
        {
          label: 'Products v/s Prices accross Genders ',
          data: [a, y, z, c],
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
    };
    setProducts(CHARTDATA);
  }, []);
  return (
    <Box>
      <Box w="80%" m="auto">
        <Text textAlign={'center'} fontSize="2xl">
          Large Chart
        </Text>
        <Line
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
        <Bar
          data={products}
          options={{
            plugins: {
              title: {
                display: true,
                text: 'Products v/s Prices accross Genders ',
              },
              legend: {
                display: false,
              },
            },
          }}
        />
        <Text textAlign={'center'} fontSize="2xl" mt="100px">
          Pie Chart FOR CART ITEMS
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
    </Box>
  );
}
export default PieChart;
