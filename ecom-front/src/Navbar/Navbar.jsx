import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  VStack,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PhoneIcon,
  Search2Icon,
} from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartCount from '../components/CartCount';
import { LOGGOUT_USER } from '../redux/auth/auth.type';
import { getCart } from '../redux/cart/cart.actions';
import { getWishList } from '../redux/wishList/wish.actions';
import { LOGOUT_UESER_WISHLIST } from '../redux/wishList/wish.types';
import { LOGOUT_UESER_CART } from '../redux/cart/cart.type';
import SearchBar from '../components/SearchBar';

const Navbar = () => {
  const [Search, setSearch] = useState('');
  const { isOpen, onToggle } = useDisclosure();
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(state);

  const handleLogout = () => {
    console.log('this logout');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    dispatch({ type: LOGGOUT_USER });
    dispatch({ type: LOGOUT_UESER_WISHLIST });
    dispatch({ type: LOGOUT_UESER_CART });
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'white')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        position="fixed"
        top="0px"
        right={'0px'}
        left="0px"
        zIndex={99}
        w="full"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            border="1px solid black"
          >
            logo
          </Text> */}
          <Box w="5%" p="0px" m="0px">
            <NavLink to="/">
              <Img
                src="https://images-platform.99static.com//y0rb96b9CUsj6F8lqnkVOPlBuyY=/0x0:999x999/fit-in/500x500/99designs-contests-attachments/109/109048/attachment_109048124"
                alt="logo"
              ></Img>
            </NavLink>
          </Box>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
            <CartCount />
          </Flex>
        </Flex>
        <Stack>
          <SearchBar />
          {/* <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search.."
              value={Search}
              onChange={handleSearch}
            />
          </InputGroup> */}
        </Stack>
        {!state.data.isAuth ? (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Button fontSize={'lg'} fontWeight={400} bg="white">
              <NavLink to="/login">Sign In</NavLink>
            </Button>
            <NavLink to="/signup">
              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'lg'}
                fontWeight={600}
                color={'white'}
                bg={'blue.400'}
                to={'/signup'}
                _hover={{
                  bg: 'blue.300',
                }}
              >
                Sign Up
              </Button>
            </NavLink>
          </Stack>
        ) : (
          <>
            {state.admin ? (
              <NavLink to="/admin">
                <Text p="0px 10px">Admin</Text>
              </NavLink>
            ) : null}
            <Button
              display={{ base: 'none', md: 'inline-flex', sm: 'inline-flex' }}
              fontSize={'lg'}
              fontWeight={600}
              color={'white'}
              bg={'blue.400'}
              to={'/signup'}
              _hover={{
                bg: 'blue.300',
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Navbar;

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} mt="10px">
      {NAV_ITEMS.map((navItem, index) => (
        <Box key={index}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <NavLink
                to={navItem.href ?? '#'}
                p={2}
                color={linkColor}
                bg="blue.400"
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                <Text
                  fontSize={'lg'}
                  fontWeight={500}
                  color={index % 2 == 0 ? 'red.400' : 'blue.400'}
                  _hover={{
                    textDecoration: 'none',
                    color: index % 2 !== 0 ? 'red.400' : 'blue.400',
                  }}
                >
                  {navItem.label}
                </Text>
              </NavLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child, index) => (
                    <DesktopSubNav key={index} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <NavLink
      to={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </NavLink>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem, index) => (
        <Box key={index} border="1px solid black" mt={'45px'}>
          <MobileNavItem key={navItem.label} {...navItem} index={index} />
        </Box>
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, index }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={index % 2 !== 0 ? 'red.400' : 'blue.400'}>
          <NavLink to={`/${href}`}>{label}</NavLink>
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <NavLink key={child.label} py={2} to={child.href}>
                {child.label}
              </NavLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Products',
    children: [
      {
        label: 'Mens ',
        subLabel: 'Trending clothes Men',
        href: '/product/Male',
      },
      {
        label: 'Womens',
        subLabel: 'Trending clothes Women',
        href: '/product/Female',
      },
      {
        label: 'All Products ',
        subLabel: 'Trending clothes for All.',
        href: '/product/all',
      },
    ],
  },
  {
    label: 'Cart',
    children: [
      {
        label: 'Products Ordered',
        subLabel: 'Find Ordered Products',
        href: '/sales',
      },
      {
        label: `Go to Cart`,
        subLabel: 'Find cart Items',
        href: '/cart',
      },
    ],
  },
  {
    label: 'WishList',
    href: '/wishlist',
  },
  {
    label: 'Profile',
    href: '/profile',
  },
  {},
];
