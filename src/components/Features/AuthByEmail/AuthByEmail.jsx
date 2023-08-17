import React, { useCallback, useState } from 'react';
import { SAuthByEmail } from './styled';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AppButton from '../../UI/AppButton/AppButton';
import VStack from '../../UI/AppStack/VStack/VStack';
import HStack from '../../UI/AppStack/HStack/HStack';
import { useAuthStore } from '../../../contexts/Auth/useAuth';
import AppInput from '../../UI/AppInput/AppInput';

const {
    Container,
    Title
} = SAuthByEmail

const AuthByEmail = ({onClose}) => {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const {authRequest, registerRequest} = useAuthStore()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)

    const handleEmail = useCallback((event) => {
        const {value} = event.target
        setEmail(value)
    }, [])

    const handlePassword = useCallback((event) => {
        const {value} = event.target
        setPassword(value)
    }, [])

    const toggleIsLogin = useCallback(() => {
        setIsLogin(prev => !prev)
    }, [])

    const authOnSuccessRequest = useCallback(() => {
        onClose()
        navigate('/')
        setPassword('')
        setEmail('')
    }, [onClose])

    const onSubmit = useCallback((event) => {
        event.preventDefault()

        const userData = {
            email,
            password
        }

        if(isLogin) {
            authRequest(userData, authOnSuccessRequest)
        } else{
            registerRequest(userData, authOnSuccessRequest)
        }
        
    }, [email, password, isLogin, authOnSuccessRequest])

   
    return (
        <Container onSubmit={onSubmit}>
            <Title>
                {isLogin? t('Авторизация') : t('Регистрация')}
            </Title>
          <VStack gap='15px' max >
          <VStack gap='20px'  max align='center'>
            <AppInput 
            value={email}
            name='email'
            onChange={handleEmail}
            type='text'
            placeholder={t('Введите почту')}
            /> 
            <input 
            value={password}
            name='password'
            onChange={handlePassword}
            type='password'
            placeholder={t('Введите пароль')}
            />
            </VStack>
            <VStack max align='center' gap='25px'>
            <AppButton
            theme='contained'
            isInverted
            type='submit'
            >
                {isLogin? t('Войти') : t('Зарегестрироваться')}
            </AppButton>
            <AppButton
            onClick={toggleIsLogin}
            type='button'
            >
                {t('Войти/Зарегестрироваться')}
            </AppButton>
            </VStack>
          </VStack>
        </Container>
    );
};

export default AuthByEmail;