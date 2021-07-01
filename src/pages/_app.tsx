import { AppProps } from "next/app";
import { makeServer } from "../services/mirage";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
