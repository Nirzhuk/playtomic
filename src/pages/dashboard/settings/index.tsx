import Button from '../../../components/CommonStyleds/Button';
import useFakeAuth from '../../../hooks/useFakeAuth'
import { useHistory } from 'react-router';

const SettingsPage = () => {
    const { signOut } = useFakeAuth();
    let history = useHistory();

    return (
        <div>
            <Button onClick={() => signOut(() => history.push("/"))}>
                Logout
             </Button>
        </div>
    )
}

export default SettingsPage
