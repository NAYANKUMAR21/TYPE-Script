import React from 'react';
import {
  Icon,
  Flex,
  SimpleGrid,
  chakra,
  Box,
  Image,
  Text,
  Stack,
  HStack,
  Divider,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { GrInstagram } from 'react-icons/gr';
const Footer = () => {
  return (
    <Box
      bg="white"
      _dark={{
        bg: 'gray.600',
      }}
    >
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        w="full"
        justify="space-between"
        p={10}
        pt={100}
      >
        <Flex justify="center">
          <Link to="/">
            <Image
              src="https://images-platform.99static.com//y0rb96b9CUsj6F8lqnkVOPlBuyY=/0x0:999x999/fit-in/500x500/99designs-contests-attachments/109/109048/attachment_109048124"
              alt="Company Logo"
              rounded="lg"
              width={{
                base: '150px',
                lg: '200px',
              }}
              height={{
                base: '75px',
                lg: '100px',
              }}
              my={{
                base: 2,
                lg: 0,
              }}
            />
          </Link>
        </Flex>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{
            base: '12px',
            md: '16px',
          }}
          color="gray.800"
          _dark={{
            color: 'white',
          }}
          textAlign={{
            base: 'center',
            md: 'left',
          }}
        >
          <Flex justify="start" direction="column">
            <Link texttransform="uppercase">Pre-Sale FAQS</Link>
            <Link texttransform="uppercase">Submit a ticket</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Link texttransform="uppercase">Services</Link>
            <Link texttransform="uppercase">Theme Tweak</Link>
          </Flex>
        </HStack>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{
            base: '12px',
            md: '16px',
          }}
          color="gray.800"
          _dark={{
            color: 'white',
          }}
          textAlign={{
            base: 'center',
            md: 'left',
          }}
        >
          <Flex justify="start" direction="column">
            <Link texttransform="uppercase">Show Case</Link>
            <Link texttransform="uppercase">Widget Kit</Link>
            <Link texttransform="uppercase">Support</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Link texttransform="uppercase">About Us</Link>
            <Link texttransform="uppercase">Contact Us</Link>
            <Link texttransform="uppercase">Resources</Link>
          </Flex>
        </HStack>
      </Stack>
      <Divider
        w="95%"
        mx="auto"
        color="gray.600"
        _dark={{
          color: '#F9FAFB',
        }}
        h="3.5px"
      />
      <VStack py={3}>
        <HStack justify="center">
          <Link>
            <Icon
              color="gray.800"
              _dark={{
                color: 'white',
              }}
              h="20px"
              w="20px"
              as={FaFacebookF}
            />
          </Link>
          <Link>
            <Icon
              color="gray.800"
              _dark={{
                color: 'white',
              }}
              h="20px"
              w="20px"
              as={FiTwitter}
            />
          </Link>
          <Link>
            <Icon
              _dark={{
                color: 'white',
              }}
              h="20px"
              w="20px"
              as={GrInstagram}
            />
          </Link>
          <Link>
            <Icon
              _dark={{
                color: 'white',
              }}
              h="20px"
              w="20px"
              as={FaLinkedinIn}
            />
          </Link>
        </HStack>

        <Text
          textAlign="center"
          fontSize="smaller"
          _dark={{
            color: 'white',
          }}
        >
          &copy;Copyright. All rights reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
