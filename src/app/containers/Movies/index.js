import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { 
  fetchMovies, 
  selectMovies, 
} from '../../../core/movies/movieSlice'; 
import ListItem from '../../components/ListItem';
import * as Styled from './index.styles'

const Movies = () => {
  const movies = useSelector(selectMovies); 
  const [list, setList] = useState(movies?.data?? [])
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch]) 

  useEffect(() => {
    if (movies.data) {
      setList(movies.data)
    }
  }, [movies]) 

  const onFilter = (e) => {
    const term = e.target.value

    if (!term) {
      setList(movies.data?? [])
      return
    }

    if (term) {
      setList(movies?.data?.
        filter(i => i.title.toLowerCase().includes(term.toLowerCase())))
    } 
  }

  return (
    <Styled.Wrapper>
        <Styled.Title>Movies from IMDB API</Styled.Title>
        {movies.status == 'pending' && <Styled.Loading>Loading...</Styled.Loading>}
        <Styled.Input
          name="filter-movies"
          placeholder='Search here'
          onChange={onFilter}
        />
        {list.map(({id, image, title}) => <ListItem key={id} id={id} title={title} image={image} />)}
    </Styled.Wrapper>
  );
}

export default Movies