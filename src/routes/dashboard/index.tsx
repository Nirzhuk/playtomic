import {
    Switch,
} from "react-router-dom";
import DashboardMain from "../../pages/dashboard";
import PrivateRoute from "../PrivateRoute";
import DashboardContainer from "../../containers/DashboardContainer";
import SettingsPage from "../../pages/dashboard/settings";


export default function DashboardRoutes() {
    return (
        <>
            <DashboardContainer>
                <Switch>
                    <PrivateRoute path="/dashboard/settings">
                        <SettingsPage/>
                    </PrivateRoute>
                    <PrivateRoute path="/">
                        <DashboardMain />
                    </PrivateRoute>
                </Switch>
            </DashboardContainer>

        </>

    );
}
