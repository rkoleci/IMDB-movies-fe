import React from "react";
import { Container } from '@chakra-ui/react'

interface IProps {
    children: React.ReactNode
}

export default function ContainerComponent({children}: IProps) {
    return (
        <Container maxW='5xl' p='8' bg='white.100' centerContent>{children}</Container>
    )
}