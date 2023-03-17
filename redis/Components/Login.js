import { AuthContext } from '@/Context/AuthCOntext';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { useRouter } from 'next/router';
export default function SimpleCard() {
  const router = useRouter();
  const { state, setState, signup } = useContext(AuthContext);
  const [cred, setCred] = useState({ email: '', password: '' });
  console.log(state);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCred({ ...cred, [name]: value });
  };
  const handleClick = () => {
    const { email, password } = cred;
    if (!email || !password) {
      return alert('Fill Credentails');
    }
    console.log(state, cred);
    signup(cred).then((res) => {
      if (res.length > 0) {
        console.log(state, 'if');
        return router.push('/Token');
      }
      console.log(state, 'else');
      return router.push('/Fail');
    });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign up to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={handleClick}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
