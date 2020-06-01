import React from 'react'
import { Store } from './Store';
import { IEpisodeProps } from './interfaces';
import Spinner from './Spinner';
import { fetchDataAction, toggleFavAction, isFav } from './Actions';

const EpisodesList = React.lazy(() => import('./EpisodesList'));

export default function HomePage(): JSX.Element {

    const {state, dispatch} = React.useContext(Store);

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch)
    }); 

    const props: IEpisodeProps = {
        episodes: state.episodes,
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
