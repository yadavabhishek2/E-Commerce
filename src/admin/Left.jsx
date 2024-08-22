import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';


function Left() {
    return ( 
        <>
            <div className="w-1/4 flex flex-row gap-4">
                <Link to={"/products"}><Button variant="contained" color="success" startIcon={<CategoryIcon/>}>Products</Button></Link>
                <Link to={"/userquery"}><Button variant="contained" color="success" startIcon={<AlternateEmailIcon/>}>Query</Button></Link>
                <Link to={"/usermanage"}><Button variant="contained" color="success" startIcon={<PersonIcon/>}>User</Button></Link>
            </div>
        </>
     );
}

export default Left;