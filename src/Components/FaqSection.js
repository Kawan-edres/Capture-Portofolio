import styled from "styled-components";
import useState from 'react';
import{About}from "../styles";
import Toggle from "./Toggle"
import{AnimateSharedLayout} from "framer-motion";

import {useScroll}from "./useScroll";
import{scrollReveal} from "../Animation";


function FaqSection() {
    const[element,controls]=useScroll();

    return ( 
        <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
        

        <h2>Any Questions <span>FAQ</span></h2>
        <AnimateSharedLayout>
        <Toggle title="How Do I Start ?">
      
            
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ratione.</p>

            </div>
       
        </Toggle>
        <Toggle title="Daily Scedule">
        
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ratione.</p>
                
            </div>
      
        </Toggle>


        <Toggle title="Diffrential Payment Methode">
        
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ratione.</p>
                
            </div>
        
        </Toggle>
        <Toggle title="What Product Do You Offer ?">
        
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ratione.</p>
            </div>
        </Toggle>
        </AnimateSharedLayout> 
        </Faq>
    )
}


const Faq=styled(About)`

display: block;

span{
    display:block;
}

h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}

.faq-line{
    background:#cccccc;
    height:0.2rem;
    margin:2rem 0rem;
    width :100%;
}


.questions{
    padding:3rem 0;
    cursor:pointer;
}
.answer{
    padding:2rem 0rem;
    p{
        padding: 1rem 0rem;
    }
}

`;
export default FaqSection
