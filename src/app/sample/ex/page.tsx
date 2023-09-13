import React, {useCallback, useState} from "react";
import Main from "@/components/Layout/Main";
import {revalidatePath} from "next/cache";

interface Response {
    url: String
}

let response: Response

export default function Page() {
    async function fetchUrlForForm(): Promise<Response> {
        "use server"

        const now = new Date()
        const jpDate = now.getFullYear() + "年" + now.getMonth() + "月" + now.getDate() + "日" + now.getHours() + "時" + now.getMinutes() + "分" + now.getSeconds() + "秒"
        const ret = await fetch("http://httpbin.org/base64/" + jpDate)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`${res.status} ${res.statusText}`)
                }

                return res
            })
            .then((base64Response: Response) => {
                response = base64Response

                return base64Response
            })

        revalidatePath("/sample/ex");

        return ret
    }
    return (
        <Main>
            <h1>Index</h1>
            <form action={fetchUrlForForm}>
                <button type="submit">button</button>
            </form>
            <p>
                response.url: {response?.url}
            </p>
        </Main>
    )
}