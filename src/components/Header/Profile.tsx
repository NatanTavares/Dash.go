import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Natan Tavares</Text>
        <Text color="gray.300" fontSize="small">
          nattantavares.s15@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Natan Tavares"
        src="https://github.com/NatanTavares.png"
      />
    </Flex>
  );
}
