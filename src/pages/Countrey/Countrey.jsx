import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Countrey = () => {
  const { country } = useParams();
  const { cities, countries } = useSelector((state) => state);
  const selectedCountryStates = cities?.cities?.data?.find(
    (item) => item.iso2 === country,
  );
  const countryData = countries?.countries?.find(
    (item) => item?.cca2 === country,
  );
  console.log(selectedCountryStates, countryData);
  return (
    <Box width="100%" height="100vh" color="white">
      <Accordion allowMultiple>
        {selectedCountryStates?.states?.map((state) => (
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
