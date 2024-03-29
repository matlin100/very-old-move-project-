import React, { useRef } from 'react'
import {useHistory} from 'react-router'

export const MoviesInput = (props) => {

    let inputRef = useRef();
    let sortRef = useRef();
    let history = useHistory();

    return (
        <div className='container-fluid bg-info p-2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <h2>Movies Search</h2>
                    </div>
                    <div className='col-8 d-flex 
                 align-items-center justify-content-end'>
                        <input ref={inputRef} className='form-control w-25' type="search" placeholder='search...' />
                        <button onClick={() => {
                            history.push("/");
                            props.setSearch(inputRef.current.value)

                        }}

                            className='btn btn-dark'>Search</button>
                        <div className='mx-2'>Sort:</div>
                        <select onChange={() => {

                            props.sortMovies(sortRef.current.value)
                        }} ref={sortRef} className='form-select w-25'>
                            <option value="Title">Name</option>
                            <option value="Year">Year</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
