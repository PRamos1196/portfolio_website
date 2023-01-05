import React from 'react'

const Navigation = ({ active }) => {
  return (
    <div className="app__navigation">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <li key={item}>
                <a href={`#$(item)`} onClick={()=> setToggle(false)}>
                    {item}
                </a>
            </li>
        ))}
    </div>
  )
}

export default Navigation