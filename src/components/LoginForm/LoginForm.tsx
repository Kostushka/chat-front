import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const LoginForm = () => {
    return <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values) //action to send server
             }>
        {() => {
            return <Form>
                <Field type="text" name="email" />
                <Field type="password" name="password" />
                <button type="submit">
                    Submit
                </button>
            </Form>
        }}
    </Formik>
}