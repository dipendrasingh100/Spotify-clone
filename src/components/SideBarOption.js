import React from 'react'
import "../css/sidebar_option.css"

const SideBarOption = ({ title, Icon }) => {
    return (
        <div className='sideBarOption'>
            { Icon && <Icon className="sideBarOption_icon" fontSize="small"/>}
            {Icon ? <h5>{title}</h5> : <p>{title}</p>}
        </div>
    )
}

export default SideBarOption
