"use client"

import React from 'react'
import Main from "@/components/Layout/Main";
import Link from "next/link";
import ButtonWithAgree from "@/features/base/09/components/ButtonWithAgree";

// TODO: Link コンポーネントを作成し使う
export default function Other() {
    return (
        <Main>
            <h1>Other</h1>
            <ButtonWithAgree/>
            <Link href="/base/09">Home</Link>
        </Main>
    )
}