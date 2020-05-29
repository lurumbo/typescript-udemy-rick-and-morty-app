import React from 'react';
import { IEpisode } from './interfaces';

export default function EpisodesList(props: any): JSX.Element {

    const { episodes, isFav, addFavAction, subFavAction } = props;

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
                onClick={() => { isFav(episode) ? subFavAction(episode) : addFavAction(episode) }}>
                  {
                    isFav(episode) ? '- Fav' : '+ Fav'
                  }
              </button>
            </div>
          </article>
        )
      })

}