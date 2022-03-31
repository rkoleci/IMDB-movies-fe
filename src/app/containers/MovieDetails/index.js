import React, { useState, useEffect } from 'react'
import { useSelector  } from 'react-redux';
import { useParams } from 'react-router-dom'

import {  
    selectMovies, 
} from '../../../core/movies/movieSlice'; 
import * as Styled from './index.styles'

const RowItem = ({label, value}) => { 

    if(label === 'image') {
        return <Styled.Image src={value} alt={label} />
    }

    if (Array.isArray(value)) {
        return (
            <div>
                <Styled.Label>{label}</Styled.Label>
                    {value.map(i => (
                    <Styled.ItemContainer>
                            {Object.keys(i).map(j => (
                                <p>{`${j}: ${i[j]}`}</p>
                            ))}
                    </Styled.ItemContainer>
                    ))}
            </div>
        )
    } 

    return (
        <Styled.Inline>
            <Styled.Label>{`${label}: `}</Styled.Label>
            <Styled.Value>{value} </Styled.Value>
        </Styled.Inline> 
    )
}

const MovieDetails = () => {
    const { id } = useParams()
    const movies = useSelector(selectMovies); 
    const [data, setData] = useState() 

    useEffect(() => {
        if (id) {
            setData(movies?.data?.find(i => i.id === id))
        }
    }, [id, movies?.data])  

    return (
        <Styled.Wrapper>
           <h3>Movie Details</h3>
           {data && Object.keys(data).map(k => (
               <RowItem
               label={k}
               value={data[k]}
           /> 
           ))}
        </Styled.Wrapper>
    )
}

export default MovieDetails