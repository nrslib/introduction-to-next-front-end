"use client"

import React from 'react'
import Main from "@/components/Layout/Main";
import Link from "next/link";
import ButtonWithAgree from "@/features/sample/09/components/ButtonWithAgree";

export default function Other() {
    return (
        <Main>
            <h1>Other</h1>
            <ButtonWithAgree/>
            <Link href="/sample/09">Home</Link>
        </Main>
    )
}