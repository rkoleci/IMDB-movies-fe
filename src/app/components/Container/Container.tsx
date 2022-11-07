import React from "react";
import { Container } from '@chakra-ui/react'

interface IProps {
    children: React.ReactNode
}

export default function ContainerComponent({children}: IProps) {
    return (
        <Container maxW='5xl' bg='blue.600' centerContent>{children}</Container>
    )
}