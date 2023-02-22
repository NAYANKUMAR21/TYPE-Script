import axios from 'axios';
import { AiTwotoneLock, AiFillEdit } from 'react-icons/ai';
import { BsBoxArrowUpRight, BsFillTrashFill } from 'react-icons/bs';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Box,
  Image,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProd, getCart, Handlepay } from '../redux/cart/cart.actions';
import { Link } from 'react-router-dom';
import { AddToWishList, getWishList } from '../redux/wishList/wish.actions';

const Cart = () => {
  const [loading, setLoading] = useState(false);

  let MALE_IMG =
    'https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg';
  let FEMALE_IMG =
    'https://femina.wwmindia.com/content/2021/sep/women-thumb1632797644.jpg';
  let OTHERS =
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80';
  const state = useSelector((store) => store.CartItems);
  const dispatch = useDispatch();
  console.log(state);

  const handleDelete = (id) => {
    console.log(id);
    dispatch(DeleteProd(id))
      .then((res) => {
        dispatch(getCart()).then(() => {
          dispatch(getWishList());
        });
      })
      .catch((er) => console.log(er.message));

    // setTotal(x);
  };
  useEffect(() => {
    dispatch(getCart())
      .then((res) => {
        dispatch(getWishList());
      })
      .catch((er) => console.log(er.message));
  }, []);

  const handlePay = () => {
    let total = state?.cart?.data?.reduce(
      (sum, item) => sum + item.product.price,
      0
    );
    console.log('this form handle pay', total);
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onerror = () => {
      alert('RazorPay SDK failed to load');
    };
    script.onload = async () => {
      try {
        const result = await axios.post(
          'http://localhost:8080/payment/create-order',
          {
            amount: 20 + '00',
          }
        );

        const { amount, id: orderId, currency } = result.data.order;
        console.log(result.data, 'from handle pay ');

        const getkey = await axios.get(
          'http://localhost:8080/payment/get-razorpay-key'
        );
        const key = getkey.data;
        console.log(key.key, 'second console inside handlepay');
        const options = {
          key: key.key,
          amount: amount.toString(),
          currency: currency,
          name: 'ECOM An Online Store',
          description: 'FIRST RAZOR PAY',
          order_id: orderId,
          handler: async function (response) {
            const result = await axios.post(
              'http://localhost:8080/payment/pay-order',
              {
                amount: amount,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpay0rderId: response.razorpay_order_id,
                razorpaysighature: response.razorpay_signature,
                token: localStorage.getItem('token'),
              }
            );
            dispatch(getCart());
            // fetchOrder();
          },
          prefill: {
            name: 'ECOM ecommorce store',
            email: 'nayanph1@gmail.com',
            contact: '9481574558',
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (er) {
        alert(er);
      }
    };
    document.body.appendChild(script);
  };
  return (
    <>
      {state.cart.InCart > 0 ? (
        <>
          <TableContainer>
            <Table
              variant="striped"
              m={'auto'}
              mt={100}
              w={'70%'}
              boxShadow="md"
            >
              <TableCaption>Items of Paticular User Incart</TableCaption>
              <Thead>
                <Tr>
                  <Th color={'blue.400'} fontWeight={'900'} fontSize="17px">
                    Product
                  </Th>
                  <Th color={'blue.400'} fontWeight={'900'} fontSize="17px">
                    Price
                  </Th>
                  <Th color={'blue.400'} fontWeight={'900'} fontSize="17px">
                    Quantity
                  </Th>
                  <Th color={'blue.400'} fontWeight={'900'} fontSize="17px">
                    Gender
                  </Th>
                  <Th color={'blue.400'} fontWeight={'900'} fontSize="17px">
                    Customs
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {state?.cart?.data?.map((item, index) => {
                  return (
                    <Tr key={index}>
                      <Td w="15%">
                        <Box>
                          <Image
                            borderRadius={'5px'}
                            src={
                              item.product.category === 'Male'
                                ? MALE_IMG
                                : item.product.category == 'Female'
                                ? FEMALE_IMG
                                : OTHERS
                            }
                          />
                        </Box>
                      </Td>
                      <Td>${item.product.price}</Td>
                      <Td textAlign={'left'}>{item.quantity}</Td>
                      <Td textAlign={'left'}>{item.product.category}</Td>
                      <Td>
                        <Box display="flex" p="0px" gap="10px">
                          <Button
                            bg="red.400"
                            color={'white'}
                            onClick={() => handleDelete(item)}
                          >
                            <BsFillTrashFill />
                          </Button>
                          <Link to={`/cart/${item.product._id}`}>
                            <Button bg="blue.400" color={'white'}>
                              <BsBoxArrowUpRight />
                            </Button>
                          </Link>
                        </Box>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
          <Box>
            <Text fontSize={'2xl'}>
              Total -
              {state?.cart?.data?.reduce(
                (sum, item) => sum + item.product.price,
                0
              )}
            </Text>
            <Button onClick={handlePay}>BUY NOW</Button>
            {/* button to finishing buy */}
            {loading && <Text fontSize={'xl'}>...Loading please wait</Text>}
          </Box>
        </>
      ) : (
        <Box pt={'70px'} zIndex="0">
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Your Cart is Empty!</AlertTitle>
            <AlertDescription>
              Visit Home Page to Shop{' '}
              <Link to="/">
                <Button
                  bg="transperent"
                  color="blue.400"
                  textDecoration={'underline'}
                  __hover={{ bg: 'transperent' }}
                >
                  Home
                </Button>
              </Link>
            </AlertDescription>
          </Alert>
        </Box>
      )}
    </>
  );
};

export default Cart;
