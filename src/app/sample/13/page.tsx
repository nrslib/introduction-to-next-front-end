"use client"

import React, {useState} from "react";
import Main from "@/components/Layout/Main";
import Form, {Step} from "@/features/sample/13/components/Form";
import usePostForm from "@/features/sample/13/hooks/usePostForm";
import {FormData} from "@/features/sample/13/components/FormData";

export default function Page() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        password: ""
    })
    const [step, setStep] = useState<Step>("input")
    const [postForm, loading] = usePostForm()

    const handleFormDataChange = (formData: FormData) => {
        setFormData(formData)
    }

    const handleConfirmNextClick = () => {
        postForm()
            .then(() => {
                setFormData({
                    name: "",
                    password: ""
                })
                setStep("complete")
            })
    }

    return (
        <Main>
            <h1>Index</h1>

            <h2>Form ({step})</h2>
            <Form step={step}
                  loading={loading}
                  formData={formData}
                  onFormDataChange={handleFormDataChange}
                  onInputNextClick={() => setStep("confirm")}
                  onConfirmBackClick={() => setStep("input")}
                  onConfirmNextClick={handleConfirmNextClick}
                  onCompleteNextClick={() => setStep("input")}
            />
        </Main>
    )
}