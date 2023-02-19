import { Box, Flex, chakra, Image } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cart/cart.actions';

const ECards = ({ image, price, title, desc, gen, index }) => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.auth);
  let MALE_IMG =
    'https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg';
  let FEMALE_IMG =
    'https://femina.wwmindia.com/content/2021/sep/women-thumb1632797644.jpg';
  let OTHERS =
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80';
  console.log(state);

  return (
    <Flex
      key={index}
      //   bg="#edf3f8"
      //   _dark={{
      //     bg: '#3e3e3e',
      //   }}
      //   p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        maxW="xs"
        mx="auto"
        bg="white"
        _dark={{
          bg: 'gray.800',
        }}
        shadow="lg"
        rounded="lg"
      >
        <Box px={4} py={2}>
          <chakra.h1
            color="gray.800"
            _dark={{
              color: 'white',
            }}
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
            {title}
          </chakra.h1>
          <chakra.p
            mt={1}
            fontSize="sm"
            color="gray.600"
            _dark={{
              color: 'gray.400',
            }}
            noOfLines={3}
          >
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            quidem sequi illum facere recusandae voluptatibus */}
            {desc}
          </chakra.p>
        </Box>

        <Image
          h={48}
          w="full"
          fit="cover"
          mt={2}
          src={
            gen === 'Male' ? MALE_IMG : gen == 'Female' ? FEMALE_IMG : OTHERS
          }
          //   src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          alt="NIKE AIR"
          // src={
          //   gen==="male' ? "https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg" :  gen=="female" ? "https://femina.wwmindia.com/content/2021/sep/women-thumb1632797644.jpg" : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          // }
        />

        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          bg="gray.900"
          roundedBottom="lg"
        >
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            ${price}
          </chakra.h1>
          <chakra.button
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: 'gray.200',
            }}
            _focus={{
              bg: 'gray.400',
            }}
          >
            View
          </chakra.button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ECards;
