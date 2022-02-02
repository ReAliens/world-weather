import { Box, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CountryCard from '../../Components/countryCard/CountryCard';
import SearchBar from '../../Components/HomeSearch/HomeSearchBar';
import WorldMap from '../../Components/worldMap/WorldMap';

const Home = () => {
  const [loc, setLoc] = useState('');
  const { countries } = useSelector((state) => state);

  console.log(loc);
  const handleLocation = (e) => {
    console.log(e);
    setLoc(
      e.getAttribute('name')
        ? e.getAttribute('name')
        : e.target.className.baseVal,
    );
  };
  return (
    <Box width="100%" bgColor="black" py="20px">
      <Box p="50px">
        <WorldMap onClick={(e) => handleLocation(e)} />
      </Box>
      <SearchBar />
      <Grid
        gridTemplateColumns="repeat(auto-fill,minmax(300px,1fr))"
        gap={3}
        padding="20px"
      >
        {countries?.countries?.map((country) => (
          <CountryCard
            key={country?.name?.official}
            flag={country.flags.png}
            country={country?.name?.common}
            capital={country?.capital}
            region={country?.region}
            timeZone={country?.timezones[0]}
            code={country?.cca2}
          />
        ))}
      </Grid>
    </Box>
  );
};
export default Home;
