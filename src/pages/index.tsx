import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        direction="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              type="email"
              id="email"
              size="lg"
              variant="filled"
              bg="gray.900"
              focusBorderColor="pink.500"
              _hover={{
                bg: "gray.900",
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              name="password"
              type="password"
              id="password"
              size="lg"
              variant="filled"
              bg="gray.900"
              focusBorderColor="pink.500"
              _hover={{
                bg: "gray.900",
              }}
            />
          </FormControl>
        </Stack>

        <Button type="submit" size="lg" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
