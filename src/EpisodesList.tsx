import React from 'react';
import { IEpisode } from './interfaces';
import { toggleFavAction } from './Actions';

export default function EpisodesList(props: any): JSX.Element {

    const { episodes, isFav, addFavAction, subFavAction, store } = props;
    const { state, dispatch } = store;

    return episodes.map((episode: IEpisode) => {
        return (
          <article className="episode" key={episode.id}>
            <img 
              src={episode.image?.medium} 
              alt={`Rick and Morty ${episode.name}`} />
            <div>
              <strong>{episode.name}</strong>
            </div>
            <div className="episode--action">
              <span>
                Season: {episode.season} | Episode: {episode.number}
              </span>
              <button 
                type="button"
                onClick={() => { toggleFavAction(state, dispatch, episode) }}>
                  {
                    isFav(state, episode) ? '- Fav' : '+ Fav'
                  }
              </button>
            </div>
          </article>
        )
      })

}