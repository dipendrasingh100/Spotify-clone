import React from 'react'
import "../css/header.css"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useDataLayerValue } from '../DataLayer';

const Header = ({ navBackground }) => {
    const [{ user }] = useDataLayerValue();
    return (
        <div className={`header ${navBackground ? "headerbg" : null}`}>
            <div className="header_left">
                <SearchIcon />
                <input type="text" placeholder='Search for Artists, Songs, ... ' />
            </div>
            <div className="header_right">
                <AccountCircleOutlinedIcon src={user?.images[0]?.url} alt={user?.display_name} style={{ fontSize: "2rem" }} />
                <h5>{user?.display_name}</h5>
            </div>
        </div>
    )
}

export default Header
