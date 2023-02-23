import { Box, Grid } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Loading from '../Loaders/Loading';
import { getAllProducts, getGenders } from '../redux/products/prod.actions';
import ECards from './ECards';
import Crouserl from './MensCrousels';
export const breakPoints = {
  base: 'repeat(1,1fr)',
  sm: 'repeat(2,1fr)',
  md: 'repeat(3,1fr)',
  lg: 'repeat(4,1fr)',
};

const PoroductsSHow = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  console.log(id);
  console.log(state);
  useEffect(() => {
    const send =
      id == 'Male'
        ? dispatch(getGenders('Male'))
        : id == 'Female'
        ? dispatch(getGenders('Female'))
        : dispatch(getAllProducts());
  }, [id]);
  if (state.loading) {
    return <Loading />;
  }
  return (
    <Box>
      <Crouserl />
      <Grid templateColumns={breakPoints} gap="3" p={10} mt={10}>
        {id === 'Male'
          ? state?.data?.men?.map((item, index) => {
              console.log(id);
              //
              return (
                <Link to={`/product/Male/${item._id}`} key={index}>
                  <ECards
                    key={index}
                    index={item._id}
                    image={item.image}
                    price={item.price}
                    title={item.title}
                    desc={item.descriptiton}
                    gen={'Male'}
                  />
                </Link>
              );
            })
          : id === 'Female'
          ? state?.data?.women?.map((item, index) => {
              console.log(id);
              return (
                <Link to={`/product/Female/${item._id}`} key={index}>
                  <ECards
                    key={index}
                    index={item._id}
                    image={item.image}
                    price={item.price}
                    title={item.title}
                    desc={item.descriptiton}
                    gen={'Female'}
                  />
                </Link>
              );
            })
          : state?.data?.AllData?.map((item, index) => {
              console.log(id);
              return (
                <Link to={`/product/all/${item._id}`} key={index}>
                  <ECards
                    key={index}
                    index={item._id}
                    image={item.image}
                    price={item.price}
                    title={item.title}
                    desc={item.descriptiton}
                    gen={item.category}
                  />
                </Link>
              );
            })}
        {/* {state.data.women?.map((item, index) => {
          return <ECards />;
        })} */}
      </Grid>
    </Box>
  );
};

export default PoroductsSHow;
