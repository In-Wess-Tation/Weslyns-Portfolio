/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Formik, Field, Form, ErrorMessage } from "formik";

const FormikForm = () => {

    const styled = css` 
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    
    input {
        width: 50rem;
    }
    button {
        height: 2.5rem;
        width: 15rem;
        background-color: #444444;
        border: none;
        border-radius: 1rem;
        color: white;
    }
    label {
        color: #444444;
        font-size: 1.5rem;
    }
        
    `

    const validate = (values) => {
        const errors = {} 

        if (!values.name) {
            errors.name = "Required!"
        }else if (values.name.length < 2) {
            errors.name = "Navn er for kort!"
        }

        if (!values.email) {
            errors.email = "Reduired!"
        }
        if (!values.message) {
            errors.message = "Reduired!"
        }else if (values.message.length < 5) {
            errors.message = "Besked er for kort!"
        }

        return errors;
    }

    return ( 
        <div>
            <h1 css={styled}>Message me for a Comission</h1>
            <Formik
            initialValues={{
                name: "",
                email: "",
                message: "",
            }}
            validate={validate}
            onSubmit={(values, {resetForm}) => {
                //your axios post could be here... 
                console.log(values)
                resetForm();
            }}
            >
                <Form css={styled}>
                    <div className="formgroup" css={styled}>
                        <label htmlFor="name">Name: </label>
                        <Field type="text" name="name" id="name" style={{height: "2rem"}}/>
                        <ErrorMessage name="name" />
                    </div>
                    <div className="formgroupe" css={styled}>
                        <label htmlFor="email">Email: </label>
                        <Field type="email" name="email" id="email" style={{height: "2rem"}}/>
                        <ErrorMessage name="email" />
                    </div>
                    <div className="formgroupe" css={styled}>
                        <label htmlFor="message">Message: </label>
                        <Field type="text" name="message" id="message" style={{height: "5rem"}} />
                        <ErrorMessage name="message" />
                    </div>
                    <button type="submit">Sent</button>
                </Form>
            </Formik>
        </div>
     );
}
 
export default FormikForm;