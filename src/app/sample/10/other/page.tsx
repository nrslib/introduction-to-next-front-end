"use client"

import React, {useState} from 'react'
import Main from "@/components/Layout/Main";
import ButtonWithAgree from "@/features/sample/10/components/ButtonWithAgree";
import Anchor from "@/features/sample/10/components/Anchor";

export default function Other() {
    const [agree, setAgree] = useState(false)

    const handleAgreeChange = (value: boolean) => {
        setAgree(value)
    }

    const handleButtonClick = () => {
        alert("Other button clicked.")
    }

    return (
        <Main>
            <h1>Other</h1>
            <ButtonWithAgree agree={agree} onAgreeChange={handleAgreeChange} onClick={handleButtonClick}/>
            <Anchor to="/sample/10">Index</Anchor>
        </Main>
    )
}