import { Icon, Flex, SimpleGrid, chakra, Box, Image } from '@chakra-ui/react';
import React from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
const SubHome = () => {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={0}
    >
      <Flex
        // border="1px solid black"
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
          // border="1px solid black"
          color="blue.400"
          _dark={{
            color: 'blue.400',
          }}
          fontSize="lg"
          textTransform="uppercase"
          fontWeight="extrabold"
          w="100%"
        >
          Brand Support
        </chakra.span>
        <chakra.h1
          mb={4}
          // border="1px solid black"
          w="100%"
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
          w="100%"
          // border={'1px solid black'}
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
          You are on <span style={{ color: 'blue' }}>ecom.com.</span> You can
          also shop on ecom India for millions of products with fast local
          delivery. Get the #1 Custoer Service and start delivering personalized
          experiences at every stage of the your journey.
        </chakra.p>
        <Box m="auto">
          <Link to="product/women">
            <Box display="inline-flex" rounded="md" shadow="md">
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
                Click here to visit womens page
                <Icon as={ExternalLinkIcon} ml={2} />
              </chakra.a>
            </Box>
          </Link>
        </Box>
      </Flex>
      <Flex bg="brand.400">
        <Image
          // src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          h={{
            base: 64,
            md: 'full',
          }}
          bg="gray.100"
          loading="lazy"
          // opacity={0.4}
        />
      </Flex>
    </SimpleGrid>
  );
};

export default SubHome;
