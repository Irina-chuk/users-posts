import {useState} from "react";
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';

import "./form.scss";


const FormComment = ({id}) => {
    const [message, setMessage] = useState(null);

    const onSubmit = async (values, {resetForm}) => {
                let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(values)
                })
                if (res.ok) {let result = await res.json();
                    console.log(JSON.stringify(result));
                    setMessage("Спасибо за ваш комментарий!")}
                else {setMessage("Что-то пошло не так...")};
                resetForm({values: ""})
            };
                
    return (
        <>
        <h2 className='form__title'>Добавление комментария</h2>
            <Formik 
        initialValues = { {
            name: "",
            email: "",
            body: ""
        }}
        validationSchema = {Yup.object({
            name: Yup.string()
            .min(2, "Минимум 2 символа")
            .required("Обязательное поле"),
            email: Yup.string()
            .email("Заполните правильно email")
            .required("Обязательное поле"),
            body: Yup.string()
            .min(5, "Минимум 5 символов")
            .required("Обязательное поле")
        })}
        onSubmit = {onSubmit}>
            <Form className="form">
                <label htmlFor="name">Введите название</label>
                <Field type="text" name="name"/>
                <FormikErrorMessage className='error__message' name="name" component="div"/>
                <label htmlFor="email">Введите e-mail</label>
                <Field type="email" name="email"/>
                <FormikErrorMessage className='error__message' name="email" component="div"/>
                <label htmlFor="body">Введите комментарий</label>
                <Field type="text" name="body" as="textarea"/>
                <FormikErrorMessage className='error__message' name="body" component="div"/>
                <button className="button" type="submit">Отправить</button>
            </Form>  
           
    </Formik>
    <div className="form__message">{message} </div>
        </>
        
    )
}
export default FormComment;
