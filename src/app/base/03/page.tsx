"use client"

import React from 'react'
import Main from "@/components/Layout/Main";

// TODO: 同意するチェックとボタンを連動させる
export default function Page() {
    const handleClick = () => {
        alert("ok")
    }

    return (
        <Main>
            <h1>Index</h1>
            <p>
                <input type="checkbox" id="checkAgree"/>
                <label htmlFor="checkAgree">同意する</label>
            </p>
            <p>
                <button onClick={handleClick}>実行</button>
            </p>
        </Main>
    )
}