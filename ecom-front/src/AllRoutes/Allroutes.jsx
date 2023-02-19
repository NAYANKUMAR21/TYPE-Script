import React from 'react';
import { Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import NotFound from '../components/Four0Four';
import Home from '../components/Home';
import Login from '../components/Login';
import Crouserl from '../components/MensCrousels';
import PoroductsSHow from '../components/PoroductsSHow';
import Signup from '../components/Signup';
import SingleProd from '../components/SingleProd';
import { Wishlist } from '../components/Wishlist';
import Navbar from '../Navbar/Navbar';
import ADminPage from '../components/ADminPage';
import JoinOurTeam from '../components/ADDDataPage';
import ECards2 from '../components/ECARDS2';
import ADminProdPage from '../components/ADminProdPage';
import ALLuser from '../components/ALLuser';
import Graph from '../components/Graphs';
import AdminGraphPage from '../components/AdminGraphPage';

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
            <Route path="/admin/add" element={<JoinOurTeam />} />
            <Route path="/admin/sales" element={<Text>Sales</Text>} />
            <Route path="/admin/graphs" element={<AdminGraphPage />} />
            <Route path="/admin/products" element={<ADminProdPage />} />
            <Route path="/admin/users" element={<ALLuser />} />
          </>
        ) : null}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Allroutes;
