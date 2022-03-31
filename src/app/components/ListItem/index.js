import React from 'react'
import { Link } from 'react-router-dom'

import * as Styled from './index.styles'

const ListItem = ({ id, title, image }) => { 
    return (
        <Link to={`/movie/${id}`}>
            <Styled.Label>{title}</Styled.Label>
            <Styled.Image src={image} alt={title} />
        </Link>
    )
}

export default ListItem