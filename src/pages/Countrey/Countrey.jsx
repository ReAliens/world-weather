import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCities } from '../../redux/citiesReducer/citiesActions';

const Countrey = () => {
  const dispatch = useDispatch();
  const { country } = useParams();
  useEffect(() => {
    dispatch(fetchCities(Number(country)));
  }, []);
  const { cities } = useSelector((state) => state);
  const mohsen = cities?.cities?.data?.country?.states?.edges;

  return (
    <Box width="100%" height="100vh" color="white">
      <Accordion>
        {mohsen?.map((state) => (
          <AccordionItem key={state?.state_code} bgColor="gray.700">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {state?.name}
                </Box>
                <AccordionIcon bgColor="blue.400" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};
export default Countrey;
