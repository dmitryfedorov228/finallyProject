import React, { Fragment, useMemo } from "react";
import { SSidebarItems } from "./styled";

import AppLink from "../../UI/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import VStack from "../../UI/AppStack/VStack/VStack";
import { sidebarItemsList } from "../../../config/sidebar/sidebarConfig";

const SidebarItems = ({ collapsed }) => {
  const { t, i18n } = useTranslation();
  const itemList = useMemo(() => {
    return (
      <Fragment>
        {sidebarItemsList.map((item) => (
          <AppLink to={item.path} isInverted>
            <SSidebarItems.Item collapsed={collapsed}>
              <item.Icon size={20} />
              <span>{t(item.title)}</span>
            </SSidebarItems.Item>
          </AppLink>
        ))}
      </Fragment>
    );
  }, [collapsed, sidebarItemsList, i18n.language]);

  return (
    <SSidebarItems.Container>
      <VStack gap='20px'>{itemList}</VStack>
    </SSidebarItems.Container>
  );
};

export default SidebarItems;
