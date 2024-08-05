import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder="Search games" variant="filled" />
    </InputGroup>
  );
};
