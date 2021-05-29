import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        size="lg"
        variant="filled"
        bg="gray.900"
        focusBorderColor="pink.500"
        _hover={{
          bg: "gray.900",
        }}
        {...rest}
      />
    </FormControl>
  );
}