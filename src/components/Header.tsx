import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";

import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dash
        <Text as="span" color="pink.500">
          .
        </Text>
        go
      </Text>

      <Flex
        as="label"
        position="relative"
        flex="1"
        alignSelf="center"
        maxW={400}
        py="4"
        px="8"
        ml="6"
        color="gray.200"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          px="4"
          mr="4"
          color="gray.50"
          variant="unstyled"
          placeholder="Search the platform"
          _placeholder={{ color: "gray.400" }}
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.800"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

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
      </Flex>
    </Flex>
  );
}
