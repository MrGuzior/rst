import React from 'react'

const HomeItem = ({component, title}) => {
    return(
        <div className='home-item'>
            <div className='home-item-title'>{title}</div>
            {component}
        </div>
    )
}

export default HomeItem