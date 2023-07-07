import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    // const {user} = useContext(AuthContext)
    if(user.email){
        return children;
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;