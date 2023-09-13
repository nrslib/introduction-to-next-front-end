"use client"

import React, {useState} from 'react'
import Main from "@/components/Layout/Main";
import ButtonWithAgree from "@/features/sample/10/components/ButtonWithAgree";
import Anchor from "@/features/sample/10/components/Anchor";

export default function Page() {
    const [agree, setAgree] = useState(false)

    const handleAgreeChange = (value: boolean) => {
        setAgree(value)
        if (value) {
            alert("同意しました")
        }
    }

    const handleButtonClick = () => {
        alert("Index button clicked.")
    }

    return (
        <Main>
            <h1>Index</h1>
            <ButtonWithAgree agree={agree}
                             agreeLabel="Indexで同意する"
                             onAgreeChange={handleAgreeChange}
                             onClick={handleButtonClick}
            >
                Indexの実行ボタン
            </ButtonWithAgree>
            <Anchor to="/sample/10/other">Other</Anchor>
        </Main>
    )
}