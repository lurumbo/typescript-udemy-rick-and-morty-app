import React from 'react';
import { Store } from './Store';
import './App.css';
import { Link } from '@reach/router';

export default function App(props: any): JSX.Element { 
  
    const { state } = React.useContext(Store);

    return (
        <React.Fragment>
            <header className="header">
                <div>
                    <h1>Rick and Morty</h1>
                    <p>Pick your favourite episode!</p>
                </div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/favourites">Favourites: { state.favourites.length }</Link>
                </div>
            </header>
            {props.children}
        </React.Fragment>
    )
}
