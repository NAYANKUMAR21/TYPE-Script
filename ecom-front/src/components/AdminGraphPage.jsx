import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import SimpleSidebar from './AdminSideBar';
import Graph from './Graphs';
const AdminGraphPage = () => {
  return (
    <Flex>
      <SimpleSidebar />
      <Graph />
    </Flex>
  );
};

export default AdminGraphPage;
