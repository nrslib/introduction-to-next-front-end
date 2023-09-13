"use client"

import React from 'react'
import Main from "@/components/Layout/Main";
import ButtonWithAgree from "@/features/sample/08/components/ButtonWithAgree";
import Link from "next/link";

export default function Page() {
    return (
        <Main>
            <h1>Index</h1>
            <ButtonWithAgree/>
            <Link href="/sample/08/other">Other</Link>
        </Main>
    )
}