import React from "react";
import Link from "next/link";
import {Url} from "next/dist/shared/lib/router/router";

export type Props = {
    children?: React.ReactNode
    to: Url
}

export default function Anchor(p: Readonly<Props>) {
    return (
        <>
            <Link className="App-link" href={p.to}>{p.children}</Link>
        </>
    )
}