import React, { memo, useCallback, useMemo, useState } from 'react';
import { SProductCard } from './styled';
import {CgDetailsMore} from 'react-icons/cg'
import AppDropdown from '../../UI/AppDropdown/AppDropdown';
import { getProductMorelist } from './helpers';
import { useTranslation } from 'react-i18next';




const ProductCard = memo((props) => {
    const {t, i18n} = useTranslation()

    const {
        product: {
            title,
            images,
            id
        },
        setDeletedProductId
    } = props

    const [moreIsOpen, setMoreIsOpen] = useState(false)

    const handleDelete = useCallback(() => {
        setDeletedProductId(id)
    }, [id])

    const moreList = useMemo(() => {
        return getProductMorelist({ t, handleDelete })
    }, [i18n.language, handleDelete])

    const toggleMoreIsOpen = useCallback(() => {
        setMoreIsOpen(prev => ~prev)
    }, [])

    return (
        <SProductCard.Container>
          
           
            <SProductCard.Content>
            <SProductCard.Title>
            {title}
            </SProductCard.Title>
            </SProductCard.Content>
            <SProductCard.ActionBtnWrapper>
                <CgDetailsMore
                onClick={toggleMoreIsOpen}
                size={25} />
                <AppDropdown 
                isOpen={moreIsOpen}
                onClose={() => setMoreIsOpen(false)}
                list={moreList}
                />
            </SProductCard.ActionBtnWrapper>
           
        </SProductCard.Container>
    );
})


export default ProductCard;