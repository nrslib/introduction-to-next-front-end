"use client"

import React from 'react'
import Main from "@/components/Layout/Main";
import ButtonWithAgree from "@/features/base/08/components/ButtonWithAgree";

export default function Page() {
    return (
        <Main>
            <h1>Index</h1>
            <ButtonWithAgree/>
            {/* TODO: Other へのリンクを張る */}
        </Main>
    )
}