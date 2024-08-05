import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";
export const NavBar = () => {
  return (
    <HStack padding={"20px"}>
      <Image src={logo} boxSize="80px"></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
