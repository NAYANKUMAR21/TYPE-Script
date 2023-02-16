import { Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Login from '../components/Login';
import Crouserl from '../components/MensCrousels';
import PoroductsSHow from '../components/PoroductsSHow';
import Signup from '../components/Signup';
import SingleProd from '../components/SingleProd';
import Navbar from '../Navbar/Navbar';

const Allroutes = () => {
  const state = useSelector((state) => state.auth);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route path="/signup" element={<Login></Login>}></Route>
        <Route path="/login" element={<Signup></Signup>}></Route>
        <Route
          path="/product/:id"
          element={
            <>
              <PoroductsSHow />
            </>
          }
        />
        <Route path="/product/Male/:id" element={<SingleProd />}></Route>
        <Route path="/product/Female/:id" element={<SingleProd />}></Route>
        <Route path="/product/all/:id" element={<SingleProd />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/cart/:id" element={<SingleProd />}></Route>
        <Route path="/sales" element={<Text>Sales</Text>}></Route>
        <Route path="/wishlist" element={<Text>WishList</Text>}></Route>
        <Route path="/profile" element={<Text>Profile</Text>}></Route>
        {state.admin ? (
          <Route path="/admin/add" element={<Text>ADMIN ADD</Text>}></Route>
        ) : null}
      </Routes>
      <Footer />
    </>
  );
};

export default Allroutes;
