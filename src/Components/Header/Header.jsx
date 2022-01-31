import { Flex, Grid, Text } from '@chakra-ui/react';
import { AngleLeftIcon, GearIcon, MicCircleIcon } from '../../assets/Icon';

const Header = () => (
  <Grid
    templateColumns="10% 80% 10%"
    px={['10px', '50px', '50px', '50px']}
    height="80px"
    width="100%"
    alignItems="center"
    bgColor="red.600"
    pos="sticky"
    top="0"
  >
    <AngleLeftIcon boxSize="30px" color="white" />
    <Text textAlign="center">World Weather</Text>
    <Flex alignItems="center" justifyContent="flex-end" width="100%">
      <MicCircleIcon boxSize="50px" mr={['0px', '10px', '10px', '10px']} />
      <GearIcon boxSize="30px" ml={['0px', '10px', '10px', '10px']} />
    </Flex>
  </Grid>
);

export default Header;
