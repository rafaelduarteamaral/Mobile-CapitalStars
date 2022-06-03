import {
    Box,
    Center,
    Flex,
    Image,
    VStack,
  } from "native-base";
  import { StyleSheet } from "react-native";

import forroImage from "./../assets/musicIcons/forro.jpg";
import jazzImage from "./../assets/musicIcons/jazz.jpg";
import popImage from "./../assets/musicIcons/pop.jpg";
import rapImage from "./../assets/musicIcons/rap.jpg";
import rockImage from "./../assets/musicIcons/rock.jpg";
import sertanejoImage from "./../assets/musicIcons/sertanejo.jpg";

const musicTypes = {
  Rock: {
    img: {
      src: rockImage,
      description: "Icon de rock",
    },
    color: "#8F49FF",
  },
  Jazz: {
    img: {
      src: jazzImage,
      description: "Icon de jazz",
    },
    color: "#FC6275",
  },
  Pop: {
    img: {
      src: popImage,
      description: "Icon de Pop",
    },
    color: "#E80054",
  },
  Rap: {
    img: {
      src: rapImage,
      description: "Icon de Rap",
    },
    color: "#BFDAFE",
  },
  Sertanejo: {
    img: {
      src: sertanejoImage,
      description: "Icon de sertanejo",
    },
    color: "#FDF162",
  },
  Forro: {
    img: {
      src: forroImage,
      description: "Icon de forro",
    },
    color: "#FC7385",
  },
};

export type musicTypesInterface = keyof typeof musicTypes;

export function MusicTypes() {
    return (
        <Flex w="100%" direction={"row"} alignItems="center" safeAreaTop>
        <VStack space={2.5} w="100%" px="3">
          <Center flexDirection={"row"} style={styles.flex}>
            {Object.entries(musicTypes).map(([key, value]) => (
              <Box
                key={key}
                borderRadius="md"
                bg={value.color}
                size="16"
                m="2"
                p="5"
                minW={116}
                minH={105}
              >
                <Center>
                  <Image
                    resizeMode={"contain"}
                    borderRadius={100}
                    source={value.img.src}
                    alt="Alternate Text"
                  />
                </Center>
              </Box>
            ))}
          </Center>
        </VStack>
      </Flex>
    );
}

const styles = StyleSheet.create({
    flex: {
      flexWrap: "wrap",
    },
  });