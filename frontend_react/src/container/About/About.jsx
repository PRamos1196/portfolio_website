import React, {useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import './About.scss';

const about = [
  {
    titles: 'Web Development',
    description: 'Amazing Fullstack Developer',
    imgUrl: images.about01
  },
  {
    titles: 'Frontend Development',
    description: 'Amazing Fullstack Developer',
    imgUrl: images.about02
  },
  {
    titles: 'Backend Development',
    description: 'Amazing Fullstack Developer',
    imgUrl: images.about03
  },
  {
    titles: 'Fullstack Development',
    description: 'Amazing Fullstack Developer',
    imgUrl: images.about04
  },
]
const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That
        <span> Good Apps </span>
        means
        <span> Good Business </span>
      </h2>

      <div className="app__profiles">
        {about.map((about, index)=> (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.titles + index}
          >
              <img src={about.imgUrl} alt={about.titles} />
              <h2 className="bold-text" style={{ marginTop: 20 }}> {about.titles} </h2>
              <p className="p-text" style={{ marginTop: 10 }}> {about.description} </p>
          </motion.div>
       
        ))}
      </div>
    </>
  )
}

export default About