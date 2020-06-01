import { IAction, IEpisode, IState } from './interfaces';

export const addFavAction = (dispatch: any, episode: IEpisode) :IAction => dispatch({
    type: 'ADD_FAV',
    payload: episode
});

export const fetchDataAction = async (dispatch: any) => {
    const URL = 'http://api.tvmaze.com/shows/216/episodes';
    const data = await fetch(URL);
    const dataJSON:Array<IEpisode> = await data.json();
    return dispatch({
        type: 'FETCH_DATA',
        payload: dataJSON
    });
}

export const isFav = (state: IState, episode: IEpisode | any): boolean => {
    return state.favourites.find((fav: IEpisode) => fav.id === episode.id) ? true : false;
}

export const subFavAction = (state: IState, dispatch: any, episode: IEpisode) :IAction => dispatch({
    type: 'SUB_FAV',
    payload: removeEpisodeById([...state.favourites], episode.id)
});

export const removeEpisodeById = (episodes: Array<IEpisode>, idToRemove: number) => {
    return episodes.filter((episode: IEpisode) => episode.id !== idToRemove);
}

export const toggleFavAction = (state: IState, dispatch: any, episode: IEpisode | any): IAction => {
    const episodeInFav = state.favourites.includes(episode);
    let dispatchObject = {
        type: 'ADD_FAV',
        payload: episode
    }
    if (episodeInFav) {
        const favWithoutEpisode = state.favourites.filter(
            (fav: IEpisode) => fav.id !== episode.id
        );
        dispatchObject = {
            type: 'SUB_FAV',
            payload: favWithoutEpisode
        } 
    }
    return dispatch(dispatchObject);
}