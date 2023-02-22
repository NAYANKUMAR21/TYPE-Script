import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

const Links = [
  { Tag: '/admin', to: 'Dashboard' },
  { Tag: '/admin/sales', to: 'Sales' },
  { Tag: '/admin/add', to: 'Add Page' },
  { Tag: '/admin/graphs', to: 'Analytics' },
  { Tag: '/admin/users', to: 'Users' },
  { Tag: '/admin/Ordered', to: 'Ordered' },
];

export default function AdminNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mt="65px" zIndex={10}>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <NavLink to="/">Logo</NavLink>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link, index) => (
                <Box
                  fontWeight={600}
                  key={index}
                  color={index % 2 == 0 ? 'red.400' : 'blue.400'}
                >
                  <NavLink to={link.Tag}>{link.to}</NavLink>
                </Box>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                  alt="ADMIN logo"
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <NavLink to="/admin">Admin Home</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/admin/add">Admin Add Page</NavLink>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <NavLink to="/admin/graphs">Graphs</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/admin/sales">Sales</NavLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, index) => (
                <Box key={index}>
                  <NavLink to={link.Tag}>{link.to}</NavLink>
                </Box>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
