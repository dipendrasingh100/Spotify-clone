import React from 'react'
import "../css/songrow.css"
import axios from 'axios'
import { useDataLayerValue } from '../DataLayer'

const SongRow = ({ track, index }) => {
    const [, dispatch] = useDataLayerValue()
    const token = window.sessionStorage.getItem("token")

    const msToMinAndSec = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0)
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    }

    const playTrack = async (song) => {
        const response = await axios.put(`https://api.spotify.com/v1/me/player/play`, {
            context_uri: song.album.uri,
            offset: {
                position: song.track_number - 1
            },
            position_ms: 0,
        }, {
            headers: {
                Authorization: 'Bearer ' + token,
                "Content-Type": "application/json"
            }
        });
        if (response.status === 204) {
            dispatch({
                type: "SET_PLAYING",
                currentlyPlaying: song
            })
            dispatch({
                type: "SET_PLAYER",
                playerState: true
            })
        } else {
            dispatch({
                type: "SET_PLAYER",
                playerState: true
            })
        }
    }
    return (
        <div className='songRow' onClick={() => playTrack(track)}>
            <div className="col">
                <span>{index + 1}</span>
            </div>
            <div className="col detail">
                <img className="songRow_album" src={track?.album?.images[0]?.url} alt="thumb" />
                <div className="songRow_info">
                    <h1>{track?.name}</h1>
                    <p>
                        {track?.artists?.map((artist) => artist.name).join(", ")}
                        {track?.album?.name}
                    </p>
                </div>
            </div>
            <div className="col">
                <span>{track?.album?.name}</span>
            </div>
            <div className="call">
                {msToMinAndSec(track?.duration_ms)}
            </div>
        </div>
    )
}

export default SongRow
