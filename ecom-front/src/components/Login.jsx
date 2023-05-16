import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../redux/auth/auth.actions';
import { getCart } from '../redux/cart/cart.actions';
import { getWishList } from '../redux/wishList/wish.actions';

const Signup = () => {
  let x1 = useColorModeValue('white', 'gray.700');
  let x2 = useColorModeValue('gray.50', 'gray.800');
  const [showPassword, setShowPassword] = useState(false);
  // console.log(state);
  const nav = useNavigate();
  const [cred, setCred] = useState({
    fname: '',
    lname: '',
    age: 0,
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  console.log(state);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'age') {
      setCred({ ...cred, [name]: Number(value) });
    }
    setCred({ ...cred, [name]: value });
  };
  const handleSubmit = () => {
    const { fname, lname, age, email, password } = cred;
    if (!fname || !lname || !age || !email || !password) {
      return alert('Entered Invalid credentails');
    }

    dispatch(signIn(cred));

    // .then((res) => {

    // })
    // .catch((er) => console.log(er.message));

    // .then((res) => {
    //   console.log('login submit button');
    //   dispatch(getCart())
    //     .then((res) => {
    //       dispatch(getWishList());
    //     })
    //     .catch((er) => console.log(er.message, 'this is from the home'));
    // })
    // .catch((er) => console.log(er.message));
  };

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={x2}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={x1} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    name="fname"
                    onChange={handleChange}
                    value={cred.fname}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    name="lname"
                    onChange={handleChange}
                    value={cred.lname}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email">
              <FormLabel>Age</FormLabel>
              <Input
                type="number"
                name="age"
                onChange={handleChange}
                value={cred.age}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={cred.email}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  onChange={handleChange}
                  value={cred.password}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                onClick={handleSubmit}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                {state.loading ? <Spinner color="white" /> : 'Sign up'}
              </Button>
            </Stack>
            <Stack pt={6} margin="auto">
              <Box align={'center'} display="flex" margin={'auto'} gap="5px">
                Already a user?{' '}
                <NavLink to="/login">
                  <Box color={'blue.400'}>Login</Box>
                </NavLink>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
