"use client"

import React from 'react'
import Main from "@/components/Layout/Main";
import Agree from "@/features/sample/05/components/Agree";
import Page from "@/app/sample/06/page";

export default function Page() {
    const handleClick = () => {
        alert("ok")
    }

    return (
        <Main>
            <h1>Index</h1>
            <p>
                <Agree>同意する</Agree>
            </p>
            <p>
                <button onClick={handleClick} disabled={true}>実行</button>
            </p>
        </Main>
    )
}