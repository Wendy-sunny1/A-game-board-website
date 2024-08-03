import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="80px"></Image>
    </HStack>
  );
};
