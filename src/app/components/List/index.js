import React from "react";

import ListItem from "../ListItem";
import * as Styled from './index.styles'

const List = ({ loading, data }) => {
    if (loading) {
        return (
            <Styled.Loading>Loading...</Styled.Loading>
        )
    }
    if (data && data.length == 0) {
        return (
            <p>Search yields no results!</p>
        )
    }
    
    return (
        <>
            {data?.map(({id, image, title}) => <ListItem key={id} id={id} title={title} image={image} />)}       
        </>
    )
}

export default List