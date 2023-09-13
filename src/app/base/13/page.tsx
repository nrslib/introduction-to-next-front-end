import React from "react";
import Main from "@/components/Layout/Main";
import Form from "@/features/base/13/components/Form";

// TODO: Form を完成させる（Form のデータはユーザ名とパスワードのみとする）
// TODO: Post の Hook を作る（Post先は http://httpbin.org/delay/3 )
export default function Page() {
    return (
        <Main>
            <h1>Index</h1>

            <h2>Form</h2>
            <Form/>
        </Main>
    )
}