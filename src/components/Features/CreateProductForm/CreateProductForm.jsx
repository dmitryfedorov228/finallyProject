import React, { useCallback } from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCreateProductForm } from './styled';
import { Controller, useForm } from 'react-hook-form';
import AppButton from '../../UI/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import {useProductStore} from '../../../contexts/Product/useProduct'
import { useNavigate } from 'react-router-dom'
import {createProductFormFiedls} from './config'
import AppInput from '../../UI/AppInput/AppInput';

const {
    Form
} = SCreateProductForm

const schema = yup.object().shape({
    title: yup
        .string()
        .required('Поле обязательное')
        .min(3, 'Минимально 3 символа')
        .max(15, 'Максимально 15 символов'),
    price: yup
        .number()
        .required('Поле обязательное'),
    
    imageUrl: yup
    .string()
    .required()
    
})

const CreateProductForm = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const {createProductRequest} = useProductStore()
    const { 
        control,
        handleSubmit,
        formState: { 
            errors 
        }
    } = useForm({
        defaultValues: {
            title: '',
            price: ''
        },
        resolver: yupResolver(schema)
    })

    const createOnSuccess = useCallback(() => {
        navigate('/products')
    }, [])

    const onSubmit = useCallback((data) => {
        createProductRequest({
            title: data.title,
            images: [data.imageUrl],
            price: data.price
        }, createOnSuccess())
    }, [])

    console.log(errors)

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {createProductFormFiedls.map(({name, placeholder, type, label}) => (
                 <Controller 
                 control={control}
                 name={name}

                 render={({ field }) => (
                     <AppInput 
                        label={label}
                         errorTitle={errors[name]?.message || ''}
                         type={type}
                         placeholder={t(placeholder)}
                         {...field}
                     />
                 )}
             />
            ))}
           
              {errors?.imageUrl?.message && <p style={{ color: 'red' }}>{errors.imageUrl.message}</p>}
            <AppButton 
                type='submit'
                theme='contained'
                isInverted
            >
                SEND
            </AppButton>
        </Form>
    );
};

export default CreateProductForm;