import { Grid } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ECards2 from './ECARDS2';
import Crouserl from './MensCrousels';
import { breakPoints } from './PoroductsSHow';
// import { Link } from 'react-router-dom';
// import { getAllProducts } from '../redux/products/prod.actions';
// import SimpleSidebar from './AdminSideBar';
// import Crouserl from './MensCrousels';
// import PoroductsSHow from './PoroductsSHow';

const ADminProdPage = () => {
  const state = useSelector((state) => state.products);

  return (
    <>
      <Crouserl />
      <Grid templateColumns={breakPoints} gap="3" p={10} mt={10}>
        {state?.data?.AllData?.map((item, index) => {
          // console.log(id);
          return (
            <ECards2
              key={index}
              index={item._id}
              image={item.image}
              price={item.price}
              title={item.title}
              desc={item.descriptiton}
              gen={item.category}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default ADminProdPage;
