"use client"

import React from 'react'
import Main from "@/components/Layout/Main";
import Agree from "@/features/sample/04/components/Agree";

export default function Page() {
    const handleClick = () => {
        alert("ok")
    }

    return (
        <Main>
            <h1>Index</h1>
            <p>
                <Agree/>
            </p>
            <p>
                <button onClick={handleClick} disabled={false}>実行</button>
            </p>
        </Main>
    )
}