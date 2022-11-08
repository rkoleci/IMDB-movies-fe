# IMDB Movies
## This project was build using:
- CRA (Create React App)
- Typescript
- Redux Toolkit
- Redux Persist
- ChakraUI
- react-virtualized
  

## Routes

- /
   List of movies fetched from IMDB api, rendered in a virtualized list for optimized scroll performance
   Api data contained in redux. Persisted to re-store data in reload cases in details route
- /movies/:{id}
   Get the specific movie {id} from URL query param and find that specific movie in redux stage.
   Display movie details: image, title, length etc.

## Run

```sh
npm install
npm start
```

_Note:_ react-virtualized is throwing a TS error but it is not breaking the code.

_Note:_ API Key expires after 140 hits - need to generate a new one and set it in env file.

