import React, { useEffect } from 'react'
import "../css/sidebar.css"
import SideBarOption from './SideBarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';
import axios from 'axios';

const Sidebar = () => {
    const [{ playlists, token }, dispatch] = useDataLayerValue()

    useEffect(() => {
        //getting user playlists
        const getPlaylists = async () => {
            const { data } = await axios.get("https://api.spotify.com/v1/me/playlists", {
                headers: {
                    Authorization: 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            })
            dispatch({
                type: 'SET_PLAYLISTS',
                playlists: data
            });
        }
        getPlaylists();
    }, [token, dispatch])

    return (
        <div className='sidebar'>
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" />
            <SideBarOption title="Home" Icon={HomeIcon} />
            <SideBarOption title="Search" Icon={SearchIcon} />
            <SideBarOption title="Your Library" Icon={LibraryMusicIcon} />
            <br />
            <strong className='sidebar_title'>PLAYLISTS</strong>
            <hr />

            {/* Displaying userPlaylists */}
            <div className="playlist-container">
                {playlists?.items?.map((playlist, index) => (
                    <SideBarOption title={playlist.name} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
