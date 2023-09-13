"use client"

import React from 'react'
import useFetchBase64Url from "@/features/sample/12/hooks/useFetchBase64Url";
import Main from "@/components/Layout/Main";
import {useInitialize} from "@/features/sample/12/hooks/useInitialize";
import useFetchUuid from "@/features/sample/12/hooks/useFetchUuid";

interface UuidResponse {
    uuid: String
}

export default function Page() {
    const [fetchUuid, loadingUuid, uuidResponse] = useFetchUuid()
    const [fetchBase64Url, loadingBase64Url, base64UrlResponse] = useFetchBase64Url()

    useInitialize(() => {
        fetchUuid()
        fetchBase64Url()
    })

    return (
        <Main>
            <h1>Index</h1>
            <p>
                Base64 URL: {loadingBase64Url ? "Loading" : base64UrlResponse?.url}
            </p>
            <p>
                UUID: {loadingUuid ? "Loading" : uuidResponse?.uuid}
            </p>
        </Main>
    )
}