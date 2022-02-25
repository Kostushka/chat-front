import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import {loginUser} from "../../actions/users";

export const LoginForm = () => {
    return <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={values => loginUser(values).then((user: any) => console.log(user)).catch((err: any) => console.log('err', err)) //action to send server
             }>
        {() => {
            return <Form>
                <Field type="text" name="username" />
                <Field type="password" name="password" />
                <button type="submit">
                    Submit
                </button>
            </Form>
        }}
    </Formik>
}