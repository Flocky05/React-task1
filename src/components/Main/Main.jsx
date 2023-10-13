import { Outlet } from "react-router-dom";
import Index from "../Index.jsx";


const Main = () => {
    return (
        <div>
            <Index></Index>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;