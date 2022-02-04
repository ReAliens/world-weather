/* eslint-disable object-curly-newline */
import {
  Box,
  Divider,
  Flex,
  Grid,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CountryDetails from '../../Components/countryDetails/CountryDetails';
import StateCard from '../../Components/stateCard/StateCard';
import WeatherModal from '../../Components/WeatherModal/WeatherModal';
import { fetchCities } from '../../redux/citiesReducer/citiesActions';
import { fetchweatherCurrLoc } from '../../redux/weatherReducer/weatherActions';

const Countrey = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { country } = useParams();
  const { cities } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchCities(Number(country)));
  }, []);

  return (
    <>
      {!cities.loading ? (
        <Box width="95%" margin="auto">
          <Flex py="20px" width="100%" margin="auto" justifyContent="center">
            {cities && (
              <CountryDetails countryDetails={cities?.cities?.data?.country} />
            )}
          </Flex>
          <Divider margin="auto" mt="20px" p="1px" bgColor="blue.400" />
          <Grid
            gridTemplateColumns="repeat(auto-fill,minmax(400px,1fr))"
            gap={3}
            padding="20px"
          >
            {cities?.cities?.data?.country?.states?.edges?.map((item) => (
              <StateCard
                key={item?.node?.id}
                stateName={item?.node?.name}
                longitude={item?.node?.longitude}
                latitude={item?.node?.latitude}
                onClick={() => {
                  dispatch(
                    fetchweatherCurrLoc({
                      lon: item?.node?.longitude,
                      lat: item?.node?.latitude,
                    }),
                  );
                  onOpen();
                }}
              />
            ))}
          </Grid>
          <WeatherModal isOpen={isOpen} onClose={onClose} />
        </Box>
      ) : (
        <Flex
          width="90%"
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
    </>
  );
};
export default Countrey;
