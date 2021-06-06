import styled from 'styled-components';
import useFakeAuth from "../../hooks/useFakeAuth";


const HeaderStyled = styled.div`
    grid-area: Header;
    display: grid;
    grid-template-columns: 1fr max-content;
    padding: 20px;
    border-bottom: 5px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient( 135deg, #F05F57 10%, #360940 50%,#F05F57 90%);
    height: 100px;;
`;

const UserSection = styled.section`
`;
const LogoSection = styled.section`
    font-size:32px;
    text-transform: uppercase;
    font-weight: 600;
`;

const Header = () => {
    const { data } = useFakeAuth();
    return (
        <HeaderStyled>
            <LogoSection>
                Dashboard
            </LogoSection>
            <UserSection>
                <strong> Welcome {data.name}</strong>
            </UserSection>

        </HeaderStyled>
    )
}

export default Header;
