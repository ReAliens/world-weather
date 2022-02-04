import {
  Box, Flex, Grid, Spinner,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CountryCard from '../../Components/countryCard/CountryCard';
import SearchBar from '../../Components/HomeSearch/HomeSearchBar';

const Home = () => {
  const { countries } = useSelector((state) => state);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <Box width="100%" py="20px">
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
