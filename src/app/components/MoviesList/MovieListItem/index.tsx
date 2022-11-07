import React from "react";
import { ListItem, Link, Text, Image } from "@chakra-ui/react";

interface IProps {
  id: string;
  title: string;
  image: string;
}

const MovieListItem = ({ id, title, image }: IProps) => {
  return (
    <ListItem>
      <Link href={`/movie/${id}`}>
        <Text>{title}</Text>
        <Image width={'100px'}  src={image} alt={title} />
      </Link>
    </ListItem>
  );
};

export default MovieListItem;
