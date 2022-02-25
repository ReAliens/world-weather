/* eslint-disable react/no-children-prop */
import {
  Flex, Input, InputGroup, InputRightAddon,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { SearchIcon } from '../../assets/Icon';

const SearchBar = ({ onChange }) => (
  <Flex
    width="100%"
    bgColor="blue.400"
    margin="auto"
    py="20px"
    justifyContent="center"
  >
    <InputGroup w="50%">
      <Input bgColor="white" placeholder="Search by country name..." onChange={onChange} />
      <InputRightAddon
        bgColor="blue.400"
        children={<SearchIcon color="white" />}
        cursor="pointer"
      />
    </InputGroup>
  </Flex>
);

SearchBar.propTypes = {
  onChange: PropTypes.func,
};

SearchBar.defaultProps = {
  onChange: () => {},
};

export default SearchBar;
