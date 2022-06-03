import {store} from '.';
import {STORE_MOVIE} from './actionTypes';

export function storeMovie(addedMovie) {
  const state = store.getState();
  if (state.movies) {
    const isMovieFound = state.movies.some(
      item => item.Title === addedMovie.Title,
    );
    if (isMovieFound) {
      return {type: STORE_MOVIE, payload: state.movies};
    } else {
      return {type: STORE_MOVIE, payload: [addedMovie, ...state.movies]};
    }
  }
  return {
    type: STORE_MOVIE,
    payload: [addedMovie],
  };
}
