import React from "react";

import ListItem from "../ListItem";

const List = ({ data }) => {
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