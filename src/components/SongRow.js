import React from 'react'
import "../css/songrow.css"

const SongRow = ({ track, index }) => {

    const msToMinAndSec = (ms) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0)
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    }
    return (
        <div className='songRow'>
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
