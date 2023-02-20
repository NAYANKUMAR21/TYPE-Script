import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllProducts, PostData } from '../redux/products/prod.actions';

const avatars = [
  {
    name: 'Admin 1',
    url: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Admin 2',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Admin 3',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Admin 4',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Admin 5',
    url: 'https://bit.ly/code-beast',
  },
];

export default function JoinOurTeam() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [data, setData] = useState({
    title: '',
    image: '',
    quantity: 'Qauntity',
    price: 'Price',
    visited: 2,
    category: '',
    descriptiton: '',
  });
  let x = useBreakpointValue({ base: 'md', md: 'lg' });
  const handleAddCred = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleAdd = () => {
    const { title, image, quantity, price, category, descriptiton } = data;
    console.log(data);
    if (!title || !image || !quantity || !price || !category || !descriptiton) {
      alert('Enter Valid credentails ');
      return;
    }
    if (
      (typeof quantity == 'number' && quantity > 0) ||
      (typeof price == 'number' && price > 0)
    ) {
    } else {
      data.quantity = Number(quantity);
      data.price = Number(price);
    }

    dispatch(PostData(data)).then((res) => {
      dispatch(getAllProducts());
      alert('Products added to the DB');
      console.log(data);
      setData({
        title: '',
        image: '',
        quantity: 'Qauntity',
        price: 'Price',
        visited: 2,
        category: '',
        descriptiton: '',
      });
    });
    return;
  };
  return (
    <Box position={'relative'} mt="10px">
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
          >
            Ecom.com Platform{' '}
            <Text
              as={'span'}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text"
            >
              Add Product to
            </Text>{' '}
            {/* Full-Stack Developers */}
            DB
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={x}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, red.400,pink.400)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
              minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
        >
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              Add Product
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              {/* We’re looking for amazing engineers just like you! Become a part
              of our rockstar engineering team and skyrocket your career! */}
              Data Entry made in below Inputs goes into the data base Which in
              turn gets reflected to the user when searched for Products
            </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Flex gap="10px">
                <Input
                  placeholder="Title for Product"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  value={data.title}
                  onChange={handleAddCred}
                  name="title"
                />
                <Input
                  placeholder="Image address"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                  onChange={handleAddCred}
                  name="image"
                  value={data.image}
                />
              </Flex>
              <Input
                placeholder="Quantity"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                type="number"
                onChange={handleAddCred}
                name="quantity"
                value={data.quantity}
              />
              <Input
                placeholder="Price"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={handleAddCred}
                name="price"
                value={data.price}
              />
              <Input
                placeholder="Description"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={handleAddCred}
                name="descriptiton"
                value={data.descriptiton}
              />
              <Select
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={handleAddCred}
                name="category"
                value={data.category}
              >
                <option value="">Category</option>
                <option value="Male">MALE</option>
                <option value="Female">Female</option>
              </Select>
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}
              onClick={handleAdd}
            >
              Submit
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      />
    </Box>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
