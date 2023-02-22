import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../redux/cart/cart.actions';
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
import { Link } from 'react-router-dom';
const UserSales = () => {
  let MALE_IMG =
    'https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg';
  let FEMALE_IMG =
    'https://femina.wwmindia.com/content/2021/sep/women-thumb1632797644.jpg';
  let OTHERS =
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80';
  const dispatch = useDispatch();
  const state = useSelector((store) => store.CartItems);
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  console.log(state.InBought, 'from heres');
  return (
    <Box>
      {state?.InBought > 0 ? (
        <Box w="90%" m="auto" mt="100px">
          <Text
            fontSize={'3xl'}
            fontWeight={700}
            color="blue.400"
            letterSpacing={'5px'}
          >
            Products Bought
          </Text>
          <TableContainer>
            <Table
              variant="striped"
              m={'auto'}
              w={'70%'}
              boxShadow="md"
              mt={50}
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
                  <Th
                    color={'blue.400'}
                    fontWeight={'900'}
                    fontSize="17px"
                    textAlign={'center'}
                  >
                    Gender
                  </Th>
                  <Th
                    color={'blue.400'}
                    fontWeight={'900'}
                    fontSize="17px"
                    textAlign={'center'}
                  >
                    Quantity
                  </Th>
                  <Th color={'blue.400'} fontWeight={'900'} fontSize="17px">
                    Customs
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {state?.bought?.map((item, index) => {
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
                      <Td textAlign={'center'}>{item.product.category}</Td>
                      <Td textAlign={'center'}>{item.quantity}</Td>
                      <Td>
                        <Box display="flex" p="0px" gap="10px">
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
        </Box>
      ) : (
        <Box pt={'65px'} zIndex="0">
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Log in to see Bought page!</AlertTitle>
            <AlertDescription>
              Visit Login Page to Shop{' '}
              <Link to="/login">
                <Button
                  bg="transperent"
                  color="blue.400"
                  textDecoration={'underline'}
                  __hover={{ bg: 'transperent' }}
                >
                  Login
                </Button>
              </Link>
            </AlertDescription>
          </Alert>
        </Box>
      )}
    </Box>
  );
};

export default UserSales;
