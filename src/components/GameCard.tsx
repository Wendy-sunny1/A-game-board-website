import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import noImage from "../assets/place holder.png";
interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image || noImage}></Image>
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl" marginTop={2}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};
