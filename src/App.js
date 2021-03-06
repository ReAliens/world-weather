import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './Components/Header/Header';
import { fetchCountries } from './redux/countriesReducer/countriesActions';
import AppRoutes from './routes/routes';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  return (
    <ChakraProvider>
      <Header />
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
