import React from "react";
import { Link, useHistory } from "react-router-dom";
import {ReactComponent as Logo } from "../assets/homeLogo.svg";
import styled from "styled-components";
import { auth } from "../firebase/firebase.utils";

const HeaderWrapper = styled.div`
    height: 12rem;
    width: 100%;
    position: fixed;
    top: 0;
    z-index:99999999;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.inputBorderColor};
    border-bottom-style: solid;
    background-color: ${props => props.theme.primaryColor};
`;

const LinkContainer = styled(Link)`
    width: 6rem;
    height: 70%;
    margin-left: 5rem;
`;

const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const OptionLink = styled(Link)`
    text-decoration: none;
    padding: 1rem 2rem;
    font-size: 2.5rem;
    text-transform: uppercase;
    color: ${props => props.theme.primaryFontColor};

    &:hover{
        text-decoration: underline;
    }
`;

const EmptyLink = styled.div`
     text-decoration: none;
    padding: 1rem 2rem;
    font-size: 2.5rem;
    color: ${props => props.theme.primaryFontColor};
    cursor: pointer;
    text-transform: uppercase;

    &:hover{
        text-decoration: underline;
    }
`;

const Header = ({ user }) => {

    let history = useHistory();
    const logOut = () => {
        auth.signOut().then(() => {
            history.push("/");
        })
    }

    return (
        <HeaderWrapper>
            <LinkContainer to="/">
                <Logo/>
            </LinkContainer>
            <Options>
                <OptionLink to="/newin">NEW IN</OptionLink>
                <OptionLink to="/shop">WOMAN</OptionLink>
                <OptionLink to="/shop">MEN</OptionLink>
                <OptionLink to="/shop">GIRLS</OptionLink>
                <OptionLink to="/shop">BOYS</OptionLink>
                <OptionLink to="/shop">ABOUT US</OptionLink>
                <OptionLink to="/shop">SHOP</OptionLink>
                {
                    user ? <EmptyLink onClick={logOut}>Sign out</EmptyLink> : <OptionLink to="/auth">Sign in</OptionLink> 
                }
            </Options>
        </HeaderWrapper>
    )
};

export default Header;