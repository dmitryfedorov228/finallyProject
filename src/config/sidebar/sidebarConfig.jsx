import {AiFillHome} from 'react-icons/ai'
import {FaShoppingBasket} from 'react-icons/fa'
import {BiAddToQueue} from 'react-icons/bi'

export const sidebarItemsList = [

    {
        path: '/',
        Icon: AiFillHome,
        title: 'main_page_title'
    },
    {
        path: '/products',
        Icon: FaShoppingBasket,
        title: 'products_page_title'
    },
    {
        path: '/create-product',
        Icon: BiAddToQueue,
        title: 'Добавить Продукт'
    }

]