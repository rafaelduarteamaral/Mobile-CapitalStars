import { Box, NativeBaseProvider } from 'native-base';
import { FindTypes } from './src/components/FindTypes';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="darkBlue.900">
        <FindTypes />
      </Box>
    </NativeBaseProvider>
  );
}

