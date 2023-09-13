"use client"

import React from 'react'
import Main from "@/components/Layout/Main";
import ButtonWithAgree from "@/features/base/10/components/ButtonWithAgree";
import Link from "@/features/base/10/components/Link";

export default function Other() {
    return (
        <Main>
            <h1>Other</h1>
            <ButtonWithAgree/>
            <Link to="/base/10">Home</Link>
        </Main>
    )
}