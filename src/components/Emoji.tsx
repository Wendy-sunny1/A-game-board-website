import { Icon } from "@chakra-ui/react";
import { FaThumbsUp } from "react-icons/fa";
interface Props {
  metacritic: number;
}
export const Emoji = ({ metacritic }: Props) => {
  if (metacritic < 90) return null;

  return <Icon as={FaThumbsUp} boxSize="25px" color="pink" />;
};
