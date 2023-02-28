import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';

type todo = {
  name: string;
  iscompleted: Boolean;
};
export default function Home() {
  const [state, setState] = useState<todo>({
    name: '',
    iscompleted: false,
  });
  const [data, setData] = useState<todo[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({ ...state, name: e.target.value });
  };
  const handleClick = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setData([...data, state]);
  };
  const handleFilter = (id: number): void => {
    let x = data?.map((item: todo, index: number): todo => {
      if (index === id) {
        item.iscompleted = !item.iscompleted;
      }
      return item;
    });
    setData(x);
  };
  const handleDelete = (id: number): void => {
    let y = data?.filter((item: todo, index: number): todo | undefined => {
      if (index !== id) {
        return item;
      }
    });
    setData(y);
  };
  return (
    <Box>
      <form onSubmit={handleClick}>
        <Flex w="40%" m="auto" gap="30px">
          <Input
            placeholder="Enter name"
            onChange={handleChange}
            value={state.name}
          />
          <Box w="40%">
            <Input
              type="submit"
              _hover={{ bgColor: 'red.400' }}
              color="white"
              bgColor="blue.400"
              value={'Add'}
            />
          </Box>
        </Flex>
      </form>
      <Box w="40%" m="auto" mt="10px">
        {data?.map((item: todo, index: number) => {
          return (
            <Flex
              gap="10px"
              key={index}
              justifyContent="space-between"
              mt="10px"
            >
              <Box p="10px">
                <Text p="0px" fontSize={'2xl'} textTransform="uppercase">
                  {item.name}
                </Text>
              </Box>
              <Box
                onClick={() => handleFilter(index)}
                border="1px solid teal"
                p="10px"
                borderRadius={'5px'}
              >
                <Text fontSize={'2xl'}>
                  {item.iscompleted ? 'Completed' : 'Not COmpleted'}
                </Text>
              </Box>
              <Box p="10px">
                <Button
                  onClick={() => handleDelete(index)}
                  _hover={{ bgColor: 'red.400' }}
                  bgColor="blue.400"
                  color="white"
                >
                  Delete
                </Button>
              </Box>
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
}
