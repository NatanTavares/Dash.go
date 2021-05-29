import { Flex, Icon, Input, Text } from "@chakra-ui/react";

import { RiSearchLine } from "react-icons/ri";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";

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
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
