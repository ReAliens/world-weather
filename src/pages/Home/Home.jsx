import { Box, Grid } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CountryCard from '../../Components/countryCard/CountryCard';
import SearchBar from '../../Components/HomeSearch/HomeSearchBar';

const Home = () => {
  const { countries } = useSelector((state) => state);

  useEffect(() => {}, []);
  return (
    <Box width="100%" py="20px">
      <SearchBar />
      <Grid
        gridTemplateColumns="repeat(auto-fill,minmax(300px,1fr))"
        gap={3}
        padding="20px"
      >
        {countries?.countries?.data?.countries?.edges?.map((edge) => (
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
    </Box>
  );
};
export default Home;
