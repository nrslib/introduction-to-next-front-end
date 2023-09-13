"use client"

import React from 'react'
import Main from "@/components/Layout/Main";
import ButtonWithAgree from "@/features/sample/09/components/ButtonWithAgree";
import Anchor from "@/features/sample/09/components/Anchor";

export default function Page() {
    return (
        <Main>
            <h1>Index</h1>
            <ButtonWithAgree/>
            <Anchor to="/sample/09/other">Other</Anchor>
        </Main>
    )
}