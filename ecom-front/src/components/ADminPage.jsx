import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import SimpleSidebar from './AdminSideBar';
import PoroductsSHow from './PoroductsSHow';

const ADminPage = () => {
  return (
    <Flex w="100%">
      <SimpleSidebar />
      <Box>
        <PoroductsSHow />
      </Box>
    </Flex>
  );
};

export default ADminPage;
