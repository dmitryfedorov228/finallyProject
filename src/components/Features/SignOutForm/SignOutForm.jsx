import React from 'react';

import AppButton from '../../UI/AppButton/AppButton';
import VStack from '../../UI/AppStack/VStack/VStack';
import HStack from '../../UI/AppStack/HStack/HStack';
import { SSignOutModal } from './styled';
import AppText from '../../UI/AppText/AppText';
import { useTranslation } from 'react-i18next';

const SignOutForm = ({ onConfirm, onCancel }) => {
    const {t} = useTranslation()
    return (
        <SSignOutModal.Container>
                    <VStack gap='30px'>
                    <SSignOutModal.Title>
                        <AppText
                        text={t('Вы уверенны что хотите выйти?')}
                        >
                       
                        </AppText>
                        
                        </SSignOutModal.Title>
                        <SSignOutModal.ButtonWrapper>
                            <HStack max justify='space-evenly' >
                            <AppButton
                            onClick={onCancel}
                            theme={'outline'}
                        >
                            {t('Отмена')}
                        </AppButton>
                        <AppButton
                        isInverted
                        theme={'contained'}
                        onClick={onConfirm}

                        >
                            {t('Выйти')}
                        </AppButton>
                            </HStack>
                       
                        </SSignOutModal.ButtonWrapper>
                    </VStack>
                       
                    
                </SSignOutModal.Container>
    );
};

export default SignOutForm;