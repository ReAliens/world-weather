import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import WorldMap from './Components/worldMap/WorldMap';

function App() {
  const [loc, setLoc] = useState('');
  console.log(loc);

  const handleLocation = (e) => {
    setLoc(
      e.target.getAttribute('name')
        ? e.target.getAttribute('name')
        : e.target.className.baseVal,
    );
  };
  return (
    <Box w="100%" height="100vh" bgColor="#01171b">
      <WorldMap onClick={handleLocation} />
    </Box>
  );
}

export default App;
