import React, { useEffect } from 'react'
import { useDataLayerValue } from '../DataLayer'
import axios from 'axios'

const CurrentTrack = () => {
    const [{ token, currentlyPlaying }, dispatch] = useDataLayerValue()
    useEffect(() => {
        //getting currently playing song
        const getCurrentTrack = async () => {
            const { data } = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
                headers: {
                    Authorization: 'Bearer ' + token,
                    "Content-Type": "application/json"
                }
            })
            console.log("current playing-> ", data.item);
            dispatch({
                type: 'SET_PLAYING',
                currentlyPlaying: data.item
            });
        }
        getCurrentTrack();
    }, [token, dispatch])
    return (
        <div className="footer_left">
            <img
                className="footer_albumLogo"
                src={currentlyPlaying?.album?.images[0]?.url}
                alt="cover"
            />
            <div className="footer_songInfo">
                <h4>{currentlyPlaying?.name}</h4>
                <p>{currentlyPlaying?.artists?.map((artist) => artist.name).join(", ")}</p>
            </div>
        </div>
    )
}

export default CurrentTrack
