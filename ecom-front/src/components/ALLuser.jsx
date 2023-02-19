import React, { useEffect } from 'react';
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
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProd, getCart } from '../redux/cart/cart.actions';
import { Link } from 'react-router-dom';
import { AddToWishList, getWishList } from '../redux/wishList/wish.actions';
import { getAllUsers } from '../redux/auth/auth.actions';

const ALLuser = () => {
  const state = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  console.log(state, 'from the page');
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <TableContainer>
      <Table variant="striped" m={'auto'} mt={100} w={'70%'} boxShadow="md">
        <TableCaption>Items of Paticular User Incart</TableCaption>
        <Thead>
          <Tr>
            <Th color={'blue.400'} fontWeight={'900'} fontSize="17px">
              User
            </Th>
            <Th color={'blue.400'} fontWeight={'900'} fontSize="17px">
              email
            </Th>
            <Th color={'blue.400'} fontWeight={'900'} fontSize="17px">
              age
            </Th>
            <Th color={'blue.400'} fontWeight={'900'} fontSize="17px">
              role
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {state?.allUsers?.map((item, index) => {
            return (
              <Tr key={index}>
                <Td w="15%">
                  User - <span style={{ color: 'blue' }}>{index + 1}</span>
                </Td>
                <Td>${item.email}</Td>
                <Td textAlign={'left'}>{item.age}</Td>
                <Td textAlign={'left'}>{item.role}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ALLuser;
