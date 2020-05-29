import React from 'react';
import { IState, IAction } from './interfaces';

const initialState :IState = {
    episodes: [],
    favourites: []
}

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction) {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, episodes: action.payload }
        case 'ADD_FAV':
            return { ...state, favourites: [...state.favourites, action.payload] }
        case 'SUB_FAV':
            return { ...state, favourites: action.payload }
        default:
            return state
    }
}

export function StoreProvider(props: any): JSX.Element {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return  <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider> 
}