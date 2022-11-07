import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Text, Image, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import Container from "../../components/Container";
import { selectMovies } from "../../../redux/movies/movieSlice";

const RowItem = ({ label, value }: {label: string, value: string}) => {
  if (label === "image") {
    return <Image width={'100px'} src={value} alt={label} />;
  }

  if (Array.isArray(value)) {
    return (
      <div>
        <Text>{label}</Text>
        {value.map((i) => (
          <div>
            {Object.keys(i).map((j) => (
              <Text>{`${j}: ${i[j]}`}</Text>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <Box>
      <Text>{`${label}: `}</Text>
      <Text>{value} </Text>
    </Box>
  );
};

const MovieDetails = () => {
  const { id } = useParams();
  const movies = useSelector(selectMovies);
  const [data, setData] = useState();

  useEffect(() => {
    if (id) {
      setData(movies?.data?.find((i) => i.id === id));
    }
  }, [id, movies?.data]);

  return (
    <Container>
      <Text>Movie Details</Text>
      {data &&
        Object.keys(data).map((k) => <RowItem label={k} value={data[k]} />)}
    </Container>
  );
};

export default MovieDetails;
