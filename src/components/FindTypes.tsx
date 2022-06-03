import { Box, Center, Input, Stack } from "native-base";
import { MusicTypes } from "./MusicTypes";
import { PremiumPeople } from "./PremiumPeople";

export function FindTypes() {
  return (
    <Box safeAreaTop>
      <PremiumPeople />
      <Center safeAreaTop>
        <Stack space={4} w="75%">
          <Input
            variant="rounded"
            placeholder="Buscar"
          />
        </Stack>
      </Center>
      <MusicTypes />
    </Box>
  );
}
