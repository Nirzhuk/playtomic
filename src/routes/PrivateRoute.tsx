import { FC } from "react";
import { RouteComponentProps } from "react-router";
import {
    Route,
    Redirect,
} from "react-router-dom";

function useAuth() {
    return {
        user: 'asd'
    };
}

interface PrivateRouteProps {
    path: string
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children, ...props }) => {
    let auth = useAuth();
    return (
        <Route
            {...props}
            render={({ location }:RouteComponentProps) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute