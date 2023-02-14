import { Text } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Navbar from '../Navbar/Navbar';

const Allroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Text>HOME PAGE</Text>}></Route>
        <Route path="/signup" element={<Login></Login>}></Route>
        <Route path="/login" element={<Signup></Signup>}></Route>
        <Route path="/product/male" element={<Text>MALE</Text>} />
        <Route path="/product/female" element={<Text>FEMALE</Text>} />
        <Route path="/product/others" element={<Text>OTHERS</Text>} />
        <Route path="/cart" element={<Text>CART</Text>}></Route>
        <Route path="/sales" element={<Text>Sales</Text>}></Route>
        <Route path="/wishlist" element={<Text>WishList</Text>}></Route>
        <Route path="/profile" element={<Text>Profile</Text>}></Route>
        <Route path="/AllProducts" element={<Text>ALL products</Text>}></Route>
      </Routes>
      
    </>
  );
};

export default Allroutes;
