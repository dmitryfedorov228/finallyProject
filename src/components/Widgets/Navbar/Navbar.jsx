import React, { useCallback, useMemo, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { FaUserAstronaut } from 'react-icons/fa'
import { SNavbar } from './styled';
import AppText from '../../UI/AppText/AppText';
import HStack from '../../UI/AppStack/HStack/HStack';
import { useLocation, useNavigate } from 'react-router-dom';
import AppDropdown from '../../UI/AppDropdown/AppDropdown';
import { getNavbarDropdownItemList } from './helpers';
import { useTranslation } from 'react-i18next';
import AppModal from '../../UI/AppModal/AppModal'
import AuthByEmail from '../../Features/AuthByEmail/AuthByEmail';
import { useAuthStore } from '../../../contexts/Auth/useAuth';
import SearchProducts from '../../Features/SearchProducts/SearchProducts';
import SignOutForm from '../../Features/SignOutForm/SignOutForm';

const Navbar = () => {
    

    const navigate = useNavigate()
    const location = useLocation()
    const {t, i18n} = useTranslation()
    const {isAuth, logout, user} = useAuthStore()
    const [dropdownIsopen, setDropdownIsopen] = useState(false)
    const [signOutModalIsOpen, setSignOutModalIsOpen] =useState(false)
    const [authOutModalIsOpen, setAuthOutModalIsOpen] =useState(false)

    const isProductsPage = useMemo(() =>
    
    location.pathname === '/products',
    [location.pathname]
    )

    const goToMain = useCallback(() => {
        navigate('/')
    }, [])

    const toggleDropdown = useCallback(() => {
        setDropdownIsopen(prev => !prev)
    }, [])

    const handleSignOut = useCallback(() => {
        setSignOutModalIsOpen(true)
        setDropdownIsopen(false)
    }, [])

    const handleAuth = useCallback(() => {
        setAuthOutModalIsOpen(true)
        setDropdownIsopen(false)
    }, [])

    const dropdownList = useMemo(() => {
        return getNavbarDropdownItemList({t, navigate, handleSignOut, isAuth, handleAuth})
    }, [i18n.language, handleSignOut, handleAuth, isAuth])

    const handleCloseModal = useCallback(() => {
        setSignOutModalIsOpen(false)
    }, [])

    const handleLogout = useCallback(() => {
        logout()
        handleCloseModal()

    }, [handleCloseModal])

    return (
        <SNavbar.Container>
            <SNavbar.LeftSide>
                <SNavbar.LogoWrapper onClick={goToMain}>
                    <HStack gap='.5rem'>
                        <AiFillGithub size={30}/>
                        <AppText
                            text='Production'
                        />
                    </HStack>
                </SNavbar.LogoWrapper>
            </SNavbar.LeftSide>
            <SNavbar.Center>
                {isProductsPage && (
                         <SearchProducts />
                )}
               
            </SNavbar.Center>
            <SNavbar.RightSide>
               
                <SNavbar.AuthWrapper>
                    <HStack gap='15px'>
                    <AppText 
                    text={user?.email}
                />
                 <FaUserAstronaut onClick={toggleDropdown} size={20}/>
                    </HStack>
                   
                    <AppDropdown
                    list={dropdownList}
                    isOpen={dropdownIsopen}
                    onClose={() => setDropdownIsopen(false)}
                    
                    />
                    
                </SNavbar.AuthWrapper>
            </SNavbar.RightSide>
            <AppModal
            isOpen={signOutModalIsOpen}
            onClose={handleCloseModal}
            >
               <SignOutForm onCancel={handleLogout} onConfirm={handleCloseModal}/>
            </AppModal>
            <AppModal
            isOpen={authOutModalIsOpen}
            onClose={() => setAuthOutModalIsOpen(false)}
            >
                <AuthByEmail 
                    onClose={() => setAuthOutModalIsOpen(false)}
                />
            </AppModal>
        </SNavbar.Container>
    );
};

export default Navbar;