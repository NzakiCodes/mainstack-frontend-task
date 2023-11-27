import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    gray: {
      50: "#EFF1F6",
      400: "#56616B",
    },
    brand:"#131316",
  },
  fonts: {
    heading: `Degular, sans-serif`,
    body: `Degular, sans-serif`,
  },
});

export default theme;
