import React from 'react';
import { useTranslation } from 'react-i18next';
import CreateProductForm from '../../components/Features/CreateProductForm/CreateProductForm';

const CreateProductPage = () => {
    const { t } = useTranslation()
    return (
        <div>
            {t('Создание продукта')}
            <CreateProductForm />
        </div>
    );
};

export default CreateProductPage;