import React from 'react';
import { Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import NotFound from '../components/Four0Four';
import Home from '../components/Home';
import Login from '../components/Login';
import PoroductsSHow from '../components/PoroductsSHow';
import Signup from '../components/Signup';
import SingleProd from '../components/SingleProd';
import { Wishlist } from '../components/Wishlist';
import Navbar from '../Navbar/Navbar';
import ADminPage from '../components/ADminPage';
import JoinOurTeam from '../components/ADDDataPage';

import ALLuser from '../components/ALLuser';
import Graph from '../components/Graphs';

import AdminNavbar from '../components/AdminNavbar';
import Chart from '../ChartJs/Chart';

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
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/profile" element={<Text>Profile</Text>}></Route>
        {state.admin ? (
          <>
            <Route path="/admin" element={<ADminPage />}></Route>
            <Route
              path="/admin/add"
              element={
                <>
                  <AdminNavbar />
                  <JoinOurTeam />
                </>
              }
            />
            <Route path="/admin/sales" element={<AdminNavbar />} />
            <Route
              path="/admin/graphs"
              element={
                <>
                  <AdminNavbar />
                  <Chart />
                </>
              }
            />

            <Route
              path="/admin/users"
              element={
                <>
                  <AdminNavbar />
                  <ALLuser />
                </>
              }
            />
          </>
        ) : null}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Allroutes;
