import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MoviesRoute from "@routes/Movies";
import MovieDetailsRoute from "@routes/Movies/MovieDetails";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<MoviesRoute />} />
          <Route exact path="/movie/:id" element={<MovieDetailsRoute />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
