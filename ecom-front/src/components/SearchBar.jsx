import { Box, Flex, HStack, Img, Text, VStack } from '@chakra-ui/react';
import {
  AutoComplete,
  AutoCompleteGroup,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from '@choc-ui/chakra-autocomplete';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
  const store = useSelector((store) => store.products);

  let MALE_IMG =
    'https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg';
  let FEMALE_IMG =
    'https://femina.wwmindia.com/content/2021/sep/women-thumb1632797644.jpg';
  let OTHERS =
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80';
  return (
    <Flex
      borderRadius={'5px'}
      bg={'gray.400'}
      _dark={{ bg: 'blue.400' }}
      justifyContent="center"
    >
      <AutoComplete rollNavigation>
        <AutoCompleteInput variant="filled" placeholder="Search..." autoFocus />
        <AutoCompleteList>
          <AutoCompleteGroup title="Fruits" showDivider>
            {store?.data?.AllData?.map((item, index) => (
              <NavLink
                to={`/product/${item.category == 'Male' ? 'Male' : 'Female'}/${
                  item._id
                }`}
              >
                <AutoCompleteItem
                  key={index}
                  value={item.title}
                  textTransform="capitalize"
                >
                  <Flex gap="20px">
                    <Box w="40%">
                      <Img
                        src={
                          item.category === 'Male'
                            ? MALE_IMG
                            : item.category == 'Female'
                            ? FEMALE_IMG
                            : OTHERS
                        }
                        alt="Search Image"
                      />
                    </Box>
                    <VStack>
                      <Text>{item.title}</Text>
                      <Text>$ {item.price}</Text>
                    </VStack>
                  </Flex>
                </AutoCompleteItem>
              </NavLink>
            ))}
          </AutoCompleteGroup>
        </AutoCompleteList>
      </AutoComplete>
    </Flex>
  );
};

export default SearchBar;
