import {
  Table,
  Thead,
  Tbody,
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
  Flex,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
  BsBoxArrowInUpRight,
  BsBoxArrowUpRight,
  BsCartCheck,
  BsFillTrashFill,
} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GETALL } from '../redux/AdminCart/admin.actions';

const AdminSoldProducts = () => {
  const dispatch = useDispatch();
  const [Arr, setArr] = useState([]);
  const {
    data: { sold },
  } = useSelector((store) => store.AdminApp);
  useEffect(() => {
    dispatch(GETALL());
    console.log(sold, 'here');
    let x = sold
      ?.map((item) => {
        return item.orders;
      })
      .flat();
    setArr(x);
    console.log(x, 'dfiltered sold');
  }, []);
  let MALE_IMG =
    'https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg';
  let FEMALE_IMG =
    'https://femina.wwmindia.com/content/2021/sep/women-thumb1632797644.jpg';
  let OTHERS =
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80';
  return (
    <Box>
      {Arr.length > 0 ? (
        <Box pt="100px">
          <Text
            fontSize={'3xl'}
            fontWeight={700}
            color="blue.400"
            letterSpacing={'5px'}
          >
            Products Sold Untill Now
          </Text>
          <Box p="5px 100px" color={'red.400'}>
            <Text
              fontSize={'xl'}
              textAlign="center"
              fontWeight={700}
              letterSpacing={'3px'}
            >
              Total - ${Arr?.reduce((sum, item) => sum + item.product.price, 0)}
            </Text>
          </Box>
          <TableContainer>
            <Table
              variant="striped"
              m={'auto'}
              w={'70%'}
              boxShadow="md"
              mt={10}
            >
              <TableCaption>Overall orders from Users</TableCaption>
              <Thead>
                <Tr>
                  <Th color={'blue.400'} fontWeight={'900'} fontSize="17px">
                    Product
                  </Th>
                  <Th textAlign={'center'} color={'blue.400'} fontWeight={'900'} fontSize="17px">
                    Price
                  </Th>

                  <Th textAlign={'center'} color={'blue.400'} fontWeight={'900'} fontSize="17px">
                    Gender
                  </Th>
                  <Th textAlign={'center'} color={'blue.400'} fontWeight={'900'} fontSize="17px">
                    User 
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {Arr?.map((item, index) => {
                  return (
                    <Tr key={index}>
                      <Td w="15%">
                        <Box >
                          <Image
                          borderRadius={"5px"}
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
                      <Td textAlign={'center'}>${item.product.price}</Td>
                      {/* <Td textAlign={'left'}>{item.quantity}</Td> */}
                      <Td textAlign={'center'}>{item.product.category}</Td>
                      <Td textAlign={'center'}>{item.user.email}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Box pt={'60px'} zIndex="0">
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Your WishList is Empty !</AlertTitle>
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
    </Box>
  );
};

export default AdminSoldProducts;
