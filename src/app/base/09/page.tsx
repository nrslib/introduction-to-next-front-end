"use client"

import React from 'react'
import Main from "@/components/Layout/Main";
import ButtonWithAgree from "@/features/base/09/components/ButtonWithAgree";
import Link from "next/link";

// TODO: Link コンポーネントを作成し使う
export default function Page() {
    return (
        <Main>
            <h1>Index</h1>
            <ButtonWithAgree/>
            <Link href="/base/09/other">Other</Link>
        </Main>
    )
}