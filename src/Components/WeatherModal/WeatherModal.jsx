import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Grid,
  Flex,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const WeatherModal = ({ isOpen, onClose }) => {
  const { weather } = useSelector((state) => state);
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Weather Data</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {weather?.weather?.data?.length && !weather.loading ? (
            <Grid autoRows width="100%">
              <Flex width="100%" justifyContent="space-between">
                <Text as="span">Region : </Text>
                <Text>{weather?.weather?.data[0]?.city_name}</Text>
              </Flex>
              <Flex width="100%" justifyContent="space-between">
                <Text as="span">Avg Temp : </Text>
                <Text>
                  {weather?.weather?.data[0]?.app_temp}
                  &deg; c
                </Text>
              </Flex>
              <Flex width="100%" justifyContent="space-between">
                <Text as="span">wind Speed : </Text>
                <Text>
                  {Math.round(
                    (weather?.weather?.data[0]?.wind_spd + Number.EPSILON)
                      * 100,
                  ) / 100}
                  {' '}
                  km/h
                </Text>
              </Flex>
              <Flex width="100%" justifyContent="space-between">
                <Text as="span">Wind direction : </Text>
                <Text>{weather?.weather?.data[0]?.wind_cdir_full}</Text>
              </Flex>
              <Flex width="100%" justifyContent="space-between">
                <Text as="span">Weather description : </Text>
                <Text>{weather?.weather?.data[0]?.weather?.description}</Text>
              </Flex>
              <Flex width="100%" justifyContent="space-between">
                <Text as="span">Time Zone : </Text>
                <Text>{weather?.weather?.data[0]?.timezone}</Text>
              </Flex>
              <Flex width="100%" justifyContent="space-between">
                <Text as="span">Sunrise : </Text>
                <Text>{weather?.weather?.data[0]?.sunrise}</Text>
              </Flex>
              <Flex width="100%" justifyContent="space-between">
                <Text as="span">Sunset : </Text>
                <Text>{weather?.weather?.data[0]?.sunset}</Text>
              </Flex>
            </Grid>
          ) : null}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

WeatherModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

WeatherModal.defaultProps = {
  isOpen: false,
};

export default WeatherModal;
