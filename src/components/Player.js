import React, { useEffect } from 'react'
import "../css/player.css"
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'
import { useDataLayerValue } from '../DataLayer'
import axios from 'axios'

const Player = () => {
    const [, dispatch] = useDataLayerValue()
    const token = window.sessionStorage.getItem("token")

    useEffect(() => {
        //getting user details 
        const getUserInfo = async () => {
            const { data } = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            })
            dispatch({
                type: 'SET_USER',
                user: data
            })
        }
        getUserInfo()
    }, [token, dispatch])

    return (
        <div className='player'>
            <div className="player_body">
                <Sidebar />

                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Player
