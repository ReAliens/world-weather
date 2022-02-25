import { Flex, Grid, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const CountryDetails = ({ countryDetails }) => {
  const {
    name,
    emoji,
    iso2,
    region,
    native,
    longitude,
    latitude,
    currency_symbol: symbol,
    capital,
    currency,
  } = countryDetails;
  return (
    <Flex width="80%" flexDir="column">
      <Grid templateRows="1fr 1fr" width="100%">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="5xl">{name}</Text>
          <Flex fontSize="100px">{emoji}</Flex>
        </Flex>
        <Text fontSize="3xl">{capital}</Text>
      </Grid>
      <Grid templateColumns="1fr 1fr" gap={2}>
        <Flex flexDir="column" gap={4}>
          <Text fontSize="18px" bgColor="blue.300">
            currency:&nbsp;&nbsp;
            {currency}
            &nbsp;
            {symbol}
          </Text>
          <Text fontSize="18px" bgColor="blue.300">
            Lattiude:&nbsp;&nbsp;
            {latitude}
            &deg;
          </Text>
          <Text fontSize="18px" bgColor="blue.300">
            Longitude:&nbsp;&nbsp;
            {longitude}
            &deg;
          </Text>
        </Flex>
        <Flex flexDir="column" gap={4}>
          <Text fontSize="18px" bgColor="blue.300">
            Native:&nbsp;&nbsp;
            {native}
          </Text>
          <Text fontSize="18px" bgColor="blue.300">
            Region:&nbsp;&nbsp;
            {region}
          </Text>
          <Text fontSize="18px" bgColor="blue.300">
            Iso:&nbsp;&nbsp;
            {iso2}
          </Text>
        </Flex>
      </Grid>
    </Flex>
  );
};

CountryDetails.propTypes = {
  countryDetails: PropTypes.shape({
    name: PropTypes.string,
    emoji: PropTypes.string,
    iso2: PropTypes.string,
    region: PropTypes.string,
    native: PropTypes.string,
    longitude: PropTypes.number,
    latitude: PropTypes.number,
    currency_symbol: PropTypes.string,
    capital: PropTypes.string,
    currency: PropTypes.string,
  }),
};

CountryDetails.defaultProps = {
  countryDetails: {},
};

export default CountryDetails;
