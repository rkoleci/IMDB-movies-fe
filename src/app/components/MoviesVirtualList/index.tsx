import { Box, Spinner, Text } from "@chakra-ui/react";
import List from "react-virtualized/dist/commonjs/List";

import MovieListItem from "@components/MoviesVirtualList/MovieListItem";

interface IProps {
  loading: boolean;
  data: any[];
}

export default function MoviesVirtualList({ loading, data }: IProps) {
  if (loading) {
    return <Spinner />;
  }
  if (data && data.length === 0) {
    return <Text>Search yields no results!</Text>;
  }


  const rowRenderer = ({
    index,
    key,
    style,
  }: {
    index: number;
    key: string;
    style: any;
  }) => (
    <Box key={key} style={style}>
      <MovieListItem {...data[index]} />
    </Box>
  );

  return (
    <List
      width={1000}
      height={1500}
      rowCount={data.length}
      rowHeight={180}
      rowRenderer={rowRenderer}
      className="list"
    />
  );
}
