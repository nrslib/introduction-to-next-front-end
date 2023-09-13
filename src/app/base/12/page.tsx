"use client"

import React, {useCallback, useState} from 'react'
import useFetchBase64Url from "@/features/base/12/hooks/useFetchBase64Url";
import Main from "@/components/Layout/Main";
import {useInitialize} from "@/features/base/12/hooks/useInitialize";

interface UuidResponse {
    uuid: String
}

// TODO: fetchUuid の Hook を作る
export default function Page() {
    const [fetchBase64Url, loadingBase64Url, base64UrlResponse] = useFetchBase64Url()
    const [uuidResponse, setUuidResponse] = useState<UuidResponse>()
    const [loadingUuid, setLoadingUuid] = useState(false)

    const fetchUuid = useCallback(() => {
        setLoadingUuid(true)
        fetch("http://httpbin.org/uuid")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`${res.status} ${res.statusText}`)
                }
                return res.json()
            })
            .then((data: UuidResponse) => {
                setUuidResponse(data)
            })
            .finally(() => {
                setLoadingUuid(false)
            })
    }, [uuidResponse])

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