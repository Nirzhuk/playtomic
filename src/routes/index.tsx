import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AuthProvider from "../context/AuthContext";
import MainPage from "../pages/LoginPage";
import DashboardRoutes from "./dashboard";


export default function Routes() {
    return (
        <AuthProvider>
            <Router>
                    <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                        <DashboardRoutes />
                    </Switch>
            </Router>
        </AuthProvider>
    );
}
