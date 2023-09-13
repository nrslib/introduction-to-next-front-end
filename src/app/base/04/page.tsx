"use client"

import React, {useState} from 'react'
import Main from "@/components/Layout/Main";

// TODO: 同意するチェックボックスを Agree コンポーネントにする
export default function Page() {
    const [agree, setAgree] = useState(false)

    const handleClick = () => {
        alert("ok")
    }

    const handleAgreeChanged = () => {
        setAgree(!agree)
    }

    return (
        <Main>
            <h1>Index</h1>
            <p>
                <input type="checkbox" id="checkAgree" checked={agree} onChange={handleAgreeChanged}/>
                <label htmlFor="checkAgree">同意する</label>
            </p>
            <p>
                <button onClick={handleClick} disabled={!agree}>実行</button>
            </p>
        </Main>
    )
}