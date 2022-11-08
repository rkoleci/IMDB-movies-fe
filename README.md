# IMDB Movies
## This project was build using:
- CRA (Create React App)
- Typescript
- Redux Toolkit
- ChakraUI
- react-virtualized
  

## Routes

- /
   List of movies fetched from IMDB api, rendered in a virtualized list for optimized scroll performance
   Api data contained in redux
- /movies/:{id}
   Get the specific movie {id} from URL query param and find that specific movie in redux stage.
   Display movie details: image, title, length etc.

## Run

```sh
npm install
npm start
```

_Note:_ react-virtualized is throwing a TS error but it is not breaking the code.
 

