import { ListItem, Text, Image } from "@chakra-ui/react";
import { Link} from 'react-router-dom'

interface IProps {
  id: string;
  title: string;
  image: string;
}

const MovieListItem = ({ id, title, image }: IProps) => {
  return (
    <ListItem>
      <Link to={`movie/${id}`}>
        <Text>{title}</Text>
        <Image width={"100px"} src={image} alt={title} />
      </Link>
    </ListItem>
  );
};

export default MovieListItem;
