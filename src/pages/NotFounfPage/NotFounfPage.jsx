import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import AppButton from '../../components/UI/AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import VStack from '../../components/UI/AppStack/VStack/VStack';

const NotFounfPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const goToMain = useCallback(() => {
        navigate('/')
    },[])
    return (

        <VStack max justify='center' align='center'>
            <p>{t('Страницы не сущевствует')}</p>
            <AppButton
            onClick={goToMain}
            theme='contained'
            isInverted
            >
                {t('Перейти на главную')}
                
                </AppButton>
        </VStack>
    );
};

export default NotFounfPage;