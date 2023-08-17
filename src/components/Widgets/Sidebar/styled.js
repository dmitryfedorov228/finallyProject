import styled from "styled-components";

export const SSidebar = {
    
    Wrapper: styled.div`
     width: ${({ collapsed }) => collapsed ? 'var(--sidebar-width-collapsed)' : 'var(--sidebar-width)'};
    position: relative;
    transition: width 0.3s;
    `,

    Container: styled.aside`
        position: fixed;
        width: ${({ collapsed }) => collapsed ? 'var(--sidebar-width-collapsed)' : 'var(--sidebar-width)'};
        height: calc(100vh - var(--navbar-height) - 16px);
        background: var(--inverted-bg-color);
        color: var(--inverted-primary-color);
        border-radius: 12px;
        margin: 8px;
        transition: width 0.3s;
    `,
    Collapse: styled.div`
    cursor: pointer;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    `,
    Switchers: styled.div`
        position: absolute;
        bottom: 20px;
        display: flex;
        justify-content: center;
        gap: 20px;
        width: 100%;

        ${({ collapsed }) => collapsed && `
            flex-direction: column;
            align-items: center;
        `}
    `
}

export const SSidebarItems = {
    Container: styled.ul`
    margin-left: 30px;
    margin-top: 20px;
    `,

    Item: styled.li`
        display: flex;
        align-items: center;
        font-size: 20px;
        gap: 10px;

   span {
    ${({collapsed}) => collapsed && `
        display: none;
        transition: 0.1s display;
        
    `}

   }

    `
}