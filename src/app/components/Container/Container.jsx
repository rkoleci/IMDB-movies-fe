import React from "react";
import { Container } from '@chakra-ui/react'

export default function ContainerComponent({children}) {
    return (
        <Container maxW='5xl' bg='blue.600' centerContent>{children}</Container>
    )
}