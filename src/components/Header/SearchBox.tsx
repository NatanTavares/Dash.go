import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";

import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
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
        ref={searchInputRef}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
