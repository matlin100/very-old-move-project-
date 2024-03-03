import React from 'react'
import { Link } from 'react-router-dom'

export const MoviesList = (props) => {
    return (
        <div className='container'>
            <h2>Movies:</h2>
            <div className='row'>
                {props.movies_ar.map(item => {
                    return (
                        <div key={item.imdbID} className='col-6 p-3'>
                            <div className='p-2 shadow overflow-hidden'>
                            <img src={item.Poster} className='float-start me-2 w-25'
                            height='160' />
                            <h2>{item.Title}</h2>
                            <div>Year: {item.Year}</div>
                            <Link className='btn btn-dark' to={"/info/" + item.imdbID}>More Info</Link>
                            </div>
                        </div>

                    )


                })}

            </div>
        </div>
    )
}
