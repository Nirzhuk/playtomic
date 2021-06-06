import {
    Link
} from "react-router-dom";
import styled from 'styled-components';


const MainSidebar = styled.div`
    grid-area: Sidebar;
    display: grid;
    background: #e9e9e9;
    border-right: 1px solid #d6d6d6;
    padding: 20px;
`;
const SidebarLinks = styled.div``;
const SidebarLink = styled(Link)`
    display:block;
    font-weight: 600;
    font-size: 18px;
    padding: 5px 0 5px 0;
    text-decoration: none;
    color: black;

    &:hover {
        text-decoration: underline;
    }
`;
const Sidebar = () => {
    return (
        <MainSidebar>
            <SidebarLinks>
                <SidebarLink to="/dashboard">Main dashboard</SidebarLink>
                <SidebarLink to="/dashboard/settings">Settings</SidebarLink>
            </SidebarLinks>


        </MainSidebar>
    )
}

export default Sidebar;
