import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';

export const useScroll=()=>{
    const controls=useAnimation();
    const[element,view]=useInView({threshold:0.3}); //niway scroll component component
    if(view){//la gall scroll view true false adat 
            controls.start('show')
    }
    else{
        controls.start("hidden")
    }
    return[element,controls];
};