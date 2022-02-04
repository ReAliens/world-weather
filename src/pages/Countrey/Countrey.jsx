/* eslint-disable object-curly-newline */
import { Divider, Flex, Grid } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CountryDetails from '../../Components/countryDetails/CountryDetails';
import StateCard from '../../Components/stateCard/StateCard';
import { fetchCities } from '../../redux/citiesReducer/citiesActions';

const Countrey = () => {
  const dispatch = useDispatch();
  const { country } = useParams();
  useEffect(() => {
    dispatch(fetchCities(Number(country)));
  }, []);

  const { cities } = useSelector((state) => state);

  return (
    <>
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
          />
        ))}
      </Grid>
    </>
  );
};
export default Countrey;
