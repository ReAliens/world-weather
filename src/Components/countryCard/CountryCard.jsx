import { Flex, Image, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryCard = ({
  country, flag, capital, timeZone, region, code,
}) => (
  <Link to={`/${code}`}>
    <Flex
      flexDir="column"
      padding="20px"
      bgColor="gray.700"
      cursor="pointer"
      _hover={{
        transform: 'scale(1.05)',
        transition: 'transform 0.6s',
        backgroundColor: '#4A5568',
      }}
      borderRadius="25px"
      justifyContent="space-between"
      color="white"
      height="100%"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text as="span" fontSize="14px">
          {country}
        </Text>
        <Image src={flag} alt="Flag" height="25px" width="50px" />
      </Flex>
      <Flex
        justifyContent="space-between"
        alignItems="flex-end"
        justifyItems="flex-end"
      >
        <Text as="span" fontSize="12px">
          {capital}
        </Text>
        <Text as="span" fontSize="12px">
          {timeZone}
        </Text>
        <Text as="span" fontSize="12px">
          {region}
        </Text>
      </Flex>
    </Flex>
  </Link>
);

CountryCard.propTypes = {
  country: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  capital: PropTypes.arrayOf(PropTypes.node),
  timeZone: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

CountryCard.defaultProps = {
  capital: [],
};

export default CountryCard;
