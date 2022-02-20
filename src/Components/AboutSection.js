import React from 'react'
import home1 from "../img/home1.png";
//framer motion
import { motion } from 'framer-motion';
import { titleAnim } from '../Animation';
import { fade } from '../Animation';
import { photoAnimation } from '../Animation';

import Wave from './Wave';

import{About,Description,Image,Hide} from '../styles';


function AboutSection() {
    return (
        <About>
       
            <Description>
                <div className='title'>
                    <Hide>
                        <motion.h2 variants={titleAnim} >I work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >true</motion.h2>
                    </Hide>

                </div>
                <motion.p variants={fade}>Cotact us for any photography or vediography ideas that you have 
                 we have profesionals with amazing skills</motion.p>
                 <motion.button variants={fade}><a href='https://www.linkedin.com/in/kawan-edres-babb66216/n'>Contact Me</a></motion.button>

              

            </Description>
            
            
       
        <Image>
            <motion.img variants={photoAnimation} src={home1} alt="guy with a camera image " />

         </Image>
         <Wave />
        </About>
    );
   
};

export default AboutSection
