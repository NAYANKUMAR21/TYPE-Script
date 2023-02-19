import { Box, Flex, Grid } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../redux/products/prod.actions';
import SimpleSidebar from './AdminSideBar';
import ECards2 from './ECARDS2';
import Crouserl from './MensCrousels';
import PoroductsSHow from './PoroductsSHow';
import { breakPoints } from './PoroductsSHow';
const ADminPage = () => {
  const state = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(state);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <Flex w="100%">
      <SimpleSidebar />
      <Box>
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
      </Box>
    </Flex>
  );
};

export default ADminPage;
