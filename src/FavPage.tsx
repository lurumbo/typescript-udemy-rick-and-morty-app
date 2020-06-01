import React from 'react'
import { Store } from './Store';
import Spinner from './Spinner';
import { IEpisodeProps } from './interfaces';
import { toggleFavAction, isFav } from './Actions';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

export default function FavPage (): JSX.Element {

    const { state, dispatch } = React.useContext(Store);

    const props: IEpisodeProps = {
        episodes: state.favourites,
        favourites: state.favourites,
        store: { state, dispatch },
        toggleFavAction,
        isFav,
    }

    return (
        <React.Fragment>
           <React.Suspense fallback={<Spinner />}>
                <section className="episodes-container">
                    <EpisodesList {...props} />
                </section>
            </React.Suspense>
       </React.Fragment>
    )
}