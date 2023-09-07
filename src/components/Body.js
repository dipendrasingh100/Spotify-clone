import React, { useEffect, useRef, useState } from 'react'
import "../css/body.css"
import "../css/songrow.css"
import Header from './Header'
import { useDataLayerValue } from '../DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SongRow from './SongRow';
import axios from 'axios';

const Body = () => {
  const [{ selectedPlaylist, selectedPlaylistId }, dispatch] = useDataLayerValue()
  const token = window.sessionStorage.getItem("token")

  useEffect(() => {
    // fetching a default playlist 
    const getInitialPlaylist = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/playlists/" + selectedPlaylistId, {
        headers: {
          Authorization: 'Bearer ' + token,
          "Content-Type": "application/json"
        }
      })

      dispatch({
        type: 'SET_PLAYLIST',
        selectedPlaylist: data
      });
    }
    getInitialPlaylist()
  }, [token, dispatch, selectedPlaylistId])


  const bodyRef = useRef()
  const [navBackground, setNavBackground] = useState(false)
  const [headerBackground, setHeaderBackground] = useState(false)
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 50
      ? setNavBackground(true)
      : setNavBackground(false)
    bodyRef.current.scrollTop >= 355
      ? setHeaderBackground(true)
      : setHeaderBackground(false)
  }

  return (
    <div className='body' ref={bodyRef} onScroll={bodyScrolled}>
      <Header navBackground={navBackground} />

      <div className="body_info">
        <img src={selectedPlaylist?.images[0]?.url} alt="bg" />
        <div className="body_infoText">
          <strong className='type'>
            PLAYLIST
          </strong>
          <h2 className='title'>{selectedPlaylist?.name}</h2>
          <p className='description'>
            {selectedPlaylist?.description}
          </p>
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className='body_shuffle' />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>

        <div className={`list ${headerBackground ? "bg" : null}`} >
          <div className="header_row">
            <div className="col">
              <span>#</span>
            </div>
            <div className="col">
              <span>TITLE</span>
            </div>
            <div className="col">
              <span>ALBUM</span>
            </div>
            <div className="col">
              <span><AccessTimeIcon /></span>
            </div>
          </div>
        </div>
        <div className="tracks">
          {
            selectedPlaylist?.tracks.items.map((item, index) =>
              <SongRow track={item.track} key={index} index={index}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Body
