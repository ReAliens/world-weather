import { Box, Flex, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const StateCard = ({
  stateName, latitude, longitude, onClick,
}) => (
  <Box
    bgColor="gray.700"
    height="100%"
    width="100%"
    padding="20px"
    cursor="pointer"
    _hover={{
      transform: 'scale(1.05)',
      transition: 'transform 0.6s',
      backgroundColor: '#4A5568',
    }}
    borderRadius="25px"
    justifyContent="space-between"
    color="white"
    onClick={onClick}
  >
    <Text>{stateName}</Text>
    <Flex justifyContent="space-between">
      <Text as="span">
        {latitude
          ? `Latitude:   
        ${Math.round((latitude + Number.EPSILON) * 100) / 100}
         `
          : 'Latitude: no data'}
      </Text>
      <Text>
        {longitude
          ? `longitude:   
        ${Math.round((longitude + Number.EPSILON) * 100) / 100}
        `
          : 'longitude:  no data'}
      </Text>
    </Flex>
  </Box>
);

StateCard.propTypes = {
  stateName: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  onClick: PropTypes.func,
};

StateCard.defaultProps = {
  stateName: '',
  latitude: null,
  longitude: null,
  onClick: () => {},
};

export default StateCard;
