import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Fail = () => {
  return (
    <Box>
      <Text textAlign={'center'} fontSize="2xl">
        Something Went Wrong
      </Text>
      <Link href="/">
        <Box
          m="auto"
          p="10px"
          bg="blue.400"
          color={'white'}
          w="10%"
          borderRadius={'10px'}
          _hover={{
            color: 'white',
            bg: 'red.400',
          }}
        >
          <Text textAlign={'center'}>Go Back</Text>
        </Box>
      </Link>
    </Box>
  );
};

export default Fail;
