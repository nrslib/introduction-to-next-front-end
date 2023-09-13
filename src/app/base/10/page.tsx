"use client"

import React from 'react'
import Main from "@/components/Layout/Main";
import ButtonWithAgree from "@/features/base/10/components/ButtonWithAgree";
import Link from "next/link";

// TODO: チェックを入れた際に「同意しました」を alert する
export default function Page() {
    return (
        <Main>
            <h1>Index</h1>
            <ButtonWithAgree/>
            <Link href="/base/10/other">Other</Link>
        </Main>
    )
}