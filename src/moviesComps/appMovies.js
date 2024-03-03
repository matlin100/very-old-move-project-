
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { reverse, sortBy } from "lodash"
import { BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';

import { MoviesInput } from './moviesInput'
import { MoviesList } from './moviesList'
import { MovieInfo } from './moviesInfo';


export const AppMovies = () => {
    let [search, setSearch] = useState("white");
    let [ar, SetAr] = useState([]);
    let [sortSelect, setSortSelect] = useState("Title");
   

    useEffect(() => {

        doSearchApi();

    }, [search])

    const sortMovies = (_sort) => {

        let temp_ar = sortBy(ar, _sort)
        SetAr(temp_ar.reverse());
        setSortSelect(_sort)
    }


    const doSearchApi = async () => {

        let url = `http://www.omdbapi.com/?s=${search}&apikey=cb05689e`
        //   let resp = await fetch(url);
        //   let data = await resp.json();
        let resp = await axios.get(url)
        let temp_ar = sortBy(resp.data.Search, sortSelect)
        SetAr(temp_ar.reverse())

    }


    return (
        <Router>
            <MoviesInput sortMovies={sortMovies}
                setSearch={setSearch} />
            <Switch>
                <Route exact path="/" render={() =>
                    <div>
                        <MoviesList movies_ar={ar} />
                    </div>
                } />
                <Route  exact path = "/info/:id" component={MovieInfo}/>
            </Switch>
        </Router>
    )
}
