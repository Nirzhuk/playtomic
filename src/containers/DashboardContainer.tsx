import React from 'react'
import styled from 'styled-components';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashboardContainerStyled = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: 0.2fr 1.8fr;
    grid-template-rows: 0.2fr 1.8fr;
    grid-template-areas:
    "Header Header"
    "Sidebar Content";
`;

const ContentStyled = styled.div`
    padding:30px;
    grid-area: Content; 
`;

const DashboardContainer = ({ children }:any) => {
    return (
        <DashboardContainerStyled>
            <Header />
            <Sidebar />
            <ContentStyled>
                {children}
            </ContentStyled>
        </DashboardContainerStyled>
    )
}

export default DashboardContainer
