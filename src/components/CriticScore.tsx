import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}
export const CriticScore = ({ score }: Props) => {
  const color =
    score > 80 ? "green" : score > 70 ? "yellow" : score > 60 ? "blue" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize="15px"
      paddingX="10px"
      borderRadius="5px"
    >
      {score}
    </Badge>
  );
};
