import {
  Box, Flex, Grid, Spinner,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountryCard from '../../Components/countryCard/CountryCard';
import SearchBar from '../../Components/HomeSearch/HomeSearchBar';
import WrappedMap from '../../Components/Map/Map';
import useGeoLocation from '../../hooks/useGeoLocation';
import { fetchweatherCurrLoc } from '../../redux/weatherReducer/weatherCurrLocActions';

const Home = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const location = useGeoLocation();
  useEffect(() => {
    dispatch(
      fetchweatherCurrLoc({
        lon: location?.coordinates?.lng,
        lat: location?.coordinates?.lat,
      }),
    );
  }, []);
  const { countries } = useSelector((state) => state);
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <Box width="100%" py="20px">
      <Flex width="100%" justifyContent="center">Your Current Location</Flex>
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAgdoMN7JveVG28IoGxMmFY12cZnassnU0"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px', width: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        position={location}
      />
      <Box />
      <SearchBar onChange={(e) => handleSearch(e)} />
      {!countries.loading ? (
        <Grid
          gridTemplateColumns="repeat(auto-fill,minmax(300px,1fr))"
          gap={3}
          padding="20px"
        >
          {countries?.countries?.data?.countries?.edges
            ?.filter((edge) => (edge?.node?.name
              ?.toLowerCase()
              ?.includes(searchValue.toLowerCase())
              ? edge
              : null))
            ?.map((edge) => (
              <CountryCard
                key={edge?.node?.id}
                flag={edge?.node?.emoji}
                country={edge?.node?.name}
                capital={edge?.node?.capital}
                region={edge?.node?.region}
                timeZone={edge?.node?.timezones[0]?.gmt_offset_name}
                code={edge?.node?.id}
              />
            ))}
        </Grid>
      ) : (
        <Flex
          width="100%"
          height="80vh"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}
    </Box>
  );
};
export default Home;
