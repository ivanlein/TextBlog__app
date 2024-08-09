import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import { useContext } from "react";
import { AuthContext } from "./context";
import Loader from "./UI/Loader/Loader";

const PrivateRoute = () => {

    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth ? <Outlet /> 
               : <Navigate to='/login' element={Login} />
    );
};

export default PrivateRoute;