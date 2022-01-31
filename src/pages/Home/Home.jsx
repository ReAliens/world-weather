import { Box } from '@chakra-ui/react';
import SearchBar from '../../Components/HomeSearch/HomeSearchBar';
import WorldMap from '../../Components/worldMap/WorldMap';

const Home = () => (
  <Box width="100%" bgColor="blue.300" py="20px">
    <Box p="50px">
      <WorldMap />
    </Box>
    <SearchBar />
  </Box>
);
export default Home;
