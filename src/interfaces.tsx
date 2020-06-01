/**
 * All Interfaces
 */

export interface IState {
    episodes: Array<IEpisode>,
    favourites: Array<any>
}

export interface IAction {
    type: string,
    payload: any
}

export interface IEpisode {
    id: number,
    image: {
      medium: string,
      original: string
    },
    name: string,
    number: number,
    season: number,
    summary: string
}

export interface IEpisodeProps {
    episodes: Array<IEpisode>,
    favourites: Array<IEpisode>,
    store: { state: IState, dispatch: any },
    toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction,
    isFav: (state: IState, episode: IEpisode) => boolean,
}
