import { ChangeEvent, useState } from 'react'
import useFakeAuth from '../hooks/useFakeAuth'
import Button from '../components/CommonStyleds/Button'
import Input from '../components/CommonStyleds/Input'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Paragraph from '../components/CommonStyleds/Paragraph';

const LoginStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100vh;
  align-items: center;
  justify-items: center;
`;
const LoginStyledContainer = styled.div`
width: 600px;
`

const MainPage = () => {
    const { signIn } = useFakeAuth();
    let history = useHistory();
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    })

    const handleChangeFormInput = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => signIn(formData, () => history.push("/dashboard"));
    return (
        <LoginStyled>
            
            <LoginStyledContainer>
                <Paragraph as="h1">Login</Paragraph>
                <Input
                    size="m"
                    legend="Name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChangeFormInput}
                />
                <Input size="m"
                    legend="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChangeFormInput}
                />
                <Button onClick={handleSubmit}>
                    Login
                </Button>
            </LoginStyledContainer>
        </LoginStyled>
    )
}

export default MainPage
