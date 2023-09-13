"use client"

import React from 'react'
import Main from "@/components/Layout/Main";
import ButtonWithAgree from "@/features/sample/08/components/ButtonWithAgree";
import Link from "next/link";

export default function Other() {
    return (
        <Main>
            <h1>Other</h1>
            <ButtonWithAgree/>
            <Link href="/sample/08">Home</Link>
        </Main>
    )
}