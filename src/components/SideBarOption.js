import React from 'react'
import "../css/sidebar_option.css"
import { useDataLayerValue } from '../DataLayer'

const SideBarOption = ({ title, Icon, id }) => {
    const [, dispatch] = useDataLayerValue()
    const changeCurrentPlaylist = (selectedPlaylistId) => {
        dispatch({
            type: 'SET_PLAYLIST_ID',
            selectedPlaylistId: selectedPlaylistId
        })
    }
    return (
        <div className='sideBarOption'>
            {Icon && <Icon className="sideBarOption_icon" fontSize="small" />}
            {Icon ? <h5>{title}</h5> : <p onClick={() => changeCurrentPlaylist(id)}>{title}</p>}
        </div>
    )
}

export default SideBarOption
