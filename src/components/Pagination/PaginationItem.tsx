import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  index: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  index,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
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
        {index}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      colorScheme="gray.700"
      _hover={{
        bg: "gray.500",
      }}
      onClick={() => onPageChange(index)}
    >
      {index}
    </Button>
  );
}
