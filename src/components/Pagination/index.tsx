import { Box, Button, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> to <strong>10</strong> out of <strong>50</strong>
      </Box>

      <HStack spacing="2">
        <PaginationItem isCurrent index={1} />
        <PaginationItem index={2} />
        <PaginationItem index={3} />
        <PaginationItem index={4} />
        <PaginationItem index={5} />
      </HStack>
    </HStack>
  );
}
