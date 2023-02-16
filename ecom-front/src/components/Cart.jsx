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
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../redux/cart/cart.actions';
import { Link } from 'react-router-dom';

const Cart = () => {
  let MALE_IMG =
    'https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg';
  let FEMALE_IMG =
    'https://femina.wwmindia.com/content/2021/sep/women-thumb1632797644.jpg';
  let OTHERS =
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80';
  const state = useSelector((store) => store.CartItems);
  const dispatch = useDispatch();
  console.log(state);
  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <TableContainer>
      <Table variant="striped" m={'auto'} mt={100} w={'70%'} boxShadow="md">
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
          {state.cart.data?.map((item, index) => {
            return (
              <Tr key={index}>
                <Td w="15%">
                  <Box>
                    <Image
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
                    <Button bg="red.400" color={'white'}>
                      <BsFillTrashFill />
                    </Button>
                    <Button bg="blue.400" color={'white'}>
                      <Link to={`/cart/${item.product._id}`}>
                        <BsBoxArrowUpRight />
                      </Link>
                    </Button>
                  </Box>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Cart;
