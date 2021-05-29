import { Box, Button, HStack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> to <strong>10</strong> out of <strong>50</strong>
      </Box>

      <HStack spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: "pink.500",
            cursor: "default",
          }}
        >
          1
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          2
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          4
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          5
        </Button>
      </HStack>
    </HStack>
  );
}
