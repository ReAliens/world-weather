/* eslint-disable react/no-children-prop */
import {
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import { SearchIcon } from '../../assets/Icon';

const SearchBar = () => (
  <Flex width="100%" bgColor="orange.400" margin="auto" py="20px" justifyContent="center">
    <InputGroup w="50%">
      <Input bgColor="white" placeholder="Search" />
      <InputRightAddon bgColor="orange.400" children={<SearchIcon />} cursor="pointer" />
    </InputGroup>
  </Flex>
);

export default SearchBar;
