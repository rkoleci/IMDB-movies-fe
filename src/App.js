import React from 'react'; 
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Movies from './app/containers/Movies' 
import MovieDetails from './app/containers/MovieDetails'

const theme = {
  main: "mediumseagreen"
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router> 
        <Routes>
          <Route exact path="/" element={<Movies/>}/>
          <Route exact path="/movie/:id" element={<MovieDetails/>}/> 
        </Routes> 
    </Router>
    </ThemeProvider>
  );
}

export default App