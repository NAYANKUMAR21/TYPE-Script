import {
  Icon,
  Flex,
  SimpleGrid,
  chakra,
  Box,
  Image,
  Text,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React, { useEffect } from 'react';
import SubHome from './SubHome';
import SubHome1 from './SubHome1';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCart } from '../redux/cart/cart.actions';
import { getWishList } from '../redux/wishList/wish.actions';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart())
      .then((res) => dispatch(getWishList()))
      .catch((er) => console.log(er.message));
  }, []);
  return (
    <>
      <Link to="/product/Male">
        <SimpleGrid
          pt={'50px'}
          columns={{
            base: 1,
            md: 2,
          }}
          spacing={0}
        >
          <Flex bg="brand.400" mt="10px">
            <Image
              // src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
              src="https://www.apetogentleman.com/wp-content/uploads/2022/03/1960s-mens-fashion.jpg"
              alt="3 women looking at a laptop"
              fit="cover"
              w="full"
              h={{
                base: 64,
                md: 'full',
              }}
              bg="gray.100"
              loading="lazy"
            />
          </Flex>
          <Flex
            direction="column"
            alignItems="start"
            justifyContent="center"
            px={{
              base: 4,
              md: 8,
              lg: 20,
            }}
            py={24}
            zIndex={3}
          >
            <chakra.span
              color="blue.400"
              _dark={{
                color: 'gray.300',
              }}
              fontSize="lg"
              textTransform="uppercase"
              fontWeight="extrabold"
              w="100%"
            >
              Best Support
            </chakra.span>
            <chakra.h1
              w="100%"
              mb={4}
              fontSize={{
                base: '4xl',
                md: '4xl',
                lg: '5xl',
              }}
              fontWeight="bold"
              color="brand.600"
              _dark={{
                color: 'gray.300',
              }}
              lineHeight="shorter"
              textShadow="2px 0 currentcolor"
            >
              We&apos;re here to help
            </chakra.h1>
            <chakra.p
              pr={{
                base: 0,
                lg: 16,
              }}
              mb={4}
              fontSize="lg"
              color="brand.600"
              _dark={{
                color: 'gray.400',
              }}
              letterSpacing="wider"
            >
              You are on <span style={{ color: 'blue' }}>ecom.com.</span> You
              can also shop on ecom India for millions of products with fast
              local delivery.
            </chakra.p>
            <Box m="auto">
              <Link to="product/Male">
                <Box
                  display="inline-flex"
                  rounded="md"
                  shadow="md"
                  // m="auto"
                  // border={'1px solid black'}
                >
                  <chakra.a
                    mt={2}
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="bold"
                    w="full"
                    rounded="md"
                    _light={{
                      color: 'blue.400',
                    }}
                    bg="brand.600"
                    _dark={{
                      bg: 'brand.500',
                    }}
                    _hover={{
                      bg: 'brand.700',
                      _dark: {
                        bg: 'brand.600',
                      },
                    }}
                  >
                    Click here to visit mens page
                    <Icon as={ExternalLinkIcon} ml={2} />
                  </chakra.a>
                </Box>
              </Link>
            </Box>
          </Flex>
        </SimpleGrid>
      </Link>

      <Link to="/product/Female">
        <SubHome />
      </Link>
      <Link to="/product/all">
        <SubHome1 />
      </Link>
    </>
  );
};

export default Home;
