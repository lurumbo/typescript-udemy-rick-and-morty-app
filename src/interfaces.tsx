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
