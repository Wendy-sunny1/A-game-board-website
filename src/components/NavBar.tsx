import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ColorModeSwitch } from "./ColorModeSwitch";
export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={"20px"}>
      <Image src={logo} boxSize="80px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};
