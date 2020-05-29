import React from 'react';
import { Store } from './Store';
import { IAction, IEpisode } from './interfaces';
import './App.css';
import Spinner from './Spinner';

const EpisodesList = React.lazy(() => import('./EpisodesList'));

export default function App(): JSX.Element {
  
  const {state, dispatch} = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  });

  const fetchDataAction = async () => {
    const URL = 'http://api.tvmaze.com/shows/216/episodes';
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON
    });
  }

  const removeEpisodeById = (episodes: Array<IEpisode>, idToRemove: number) => {
    return episodes.filter((episode: IEpisode) => episode.id !== idToRemove);
  }

  const addFavAction = (episode: IEpisode) :IAction => dispatch({
    type: 'ADD_FAV',
    payload: episode
  });

  const subFavAction = (episode: IEpisode) :IAction => dispatch({
    type: 'SUB_FAV',
    payload: removeEpisodeById([...state.favourites], episode.id)
  });

  console.log(state);

  const isFav = (episode: IEpisode) => {
    return state.favourites.find((fav: IEpisode) => fav.id === episode.id) ? true : false;
  }

  const props = {
    episodes: state.episodes,
    isFav,
    addFavAction,
    subFavAction
  }

  return (
    <React.Fragment>
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>Favourites: { state.favourites.length }</p>
      </header>
      <React.Suspense fallback={<Spinner />}>
        <section className="episodes-container">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  )
}
