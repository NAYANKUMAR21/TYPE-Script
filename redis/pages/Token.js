import { AuthContext } from '@/Context/AuthCOntext';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useContext } from 'react';

const Token = () => {
  const { state } = useContext(AuthContext);
  return (
    <Box>
      <Text textAlign={'center'}>Welcome to Home Page</Text>
      <Text textAlign={'center'} fontSize={'3xl'}>
        LOGGED IN SUCCESSFULLY
      </Text>
      <Text w="50%" m="auto" mt="10px" position={'absoluter'} top="100px">
        {state}
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

export default Token;
