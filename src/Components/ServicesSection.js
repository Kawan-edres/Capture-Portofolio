//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

//styles
import{About,Description,Image} from '../styles';
import styled from "styled-components";
import{scrollReveal} from "../Animation";

import {useScroll}from "./useScroll";



function ServicesSection() {
    const[element,controls]=useScroll();
   
    return (
        <Services  variants={scrollReveal} animate={controls} ref={element}>
            <Description>
                <h2>High <span>quality </span> services</h2>
                <Cards>
                     {/* first card */}
                    <Card>
                        <div className="icon">
                        <img src={clock} alt="icon" />
                        <h3>Effecint</h3>

                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                        {/* second card */}
                    <Card>
                        <div className="icon">
                        <img src={teamwork} alt="icon" />
                        <h3>Team Work</h3>

                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                        {/* third card */}

                    <Card>
                        <div className="icon">
                        <img src={diaphragm} alt="icon" />
                        <h3>Diaphragm</h3>

                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                        {/* forth card */}

                    <Card>
                        <div className="icon">
                        <img src={money} alt="icon" />
                        <h3>Afforadble</h3>

                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
            <img src={home2} alt="Camera" />
            </Image>
            
        </Services>
    )
}

//amanawe customize y about bkain about man fetch krdwaw customizy akain  
//ba styled(About) hamw propertyakani deninawa 

const Services=styled(About)`
h2{
    padding-bottom: 5rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem ;

}


`;

const Cards=styled.div`
display:flex;
flex-wrap:wrap;
@media(max-width:1300px){
    justify-content:center;
    }

`;

const Card=styled.div`
flex-basis: 20rem;

.icon{
    display: flex;
    align-items:center;
    h3{
        margin-left: 1rem;
        background:white;
        color:black;
        padding:1rem;       
    }
}

`;

export default ServicesSection;
