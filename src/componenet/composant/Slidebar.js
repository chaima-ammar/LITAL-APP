import React from "react";
import styled from "styled-components";
import '../componenet.css'
import { SidebarStyled, SidebarWrapper, Linked, CloseIcon } from './Styledcomponent'
import { NavLink } from 'react-router-dom'


const Sidebar = ({ show, setIsOpened }) => {
    return ( < SidebarStyled show = { show ? 1 : 0 } >
        <SidebarWrapper>
        <CloseIcon onClick = {
            () => {
                setIsOpened(false);
                console.log("Close icon clicked, close sidebar");
            }
        } >
        < span/>
        </CloseIcon> <div className = "paddingmenu" >
        <NavLink to = "/" > < Linked >  👜 &emsp; Derniere Produit</Linked > </NavLink> </div > <div className = "paddingmenu" ><NavLink to = "/User" > < Linked > < i class = "fa fa-users"
        aria-hidden = "true" > </i> &emsp; User</Linked > </NavLink> </div > <div className = "paddingmenu" >
        <NavLink to = "/Prodact" > < Linked > < i class = "fa fa-shopping-bag"aria-hidden = "true" > </i>&emsp;
        Prodact </Linked></NavLink >
        </div> <div className = "paddingmenu" >
        <NavLink to = "/Historique" > < Linked > < i class = "fa fa-history"aria-hidden = "true" > </i>&emsp;Historique </Linked></NavLink >
        </div>

        </SidebarWrapper> </SidebarStyled>
    );
};

export default Sidebar;