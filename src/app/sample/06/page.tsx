"use client"

import React, {useState} from 'react'
import Main from "@/components/Layout/Main";
import Agree from "@/features/sample/06/components/Agree";

export default function Page() {
    const [agree, setAgree] = useState(false)

    const handleClick = () => {
        alert("ok")
    }

    return (
        <Main>
            <h1>Index</h1>
            <p>
                <Agree checked={agree} onChange={setAgree}>同意する</Agree>
            </p>
            <p>
                <button onClick={handleClick} disabled={!agree}>実行</button>
            </p>
        </Main>
    )
}