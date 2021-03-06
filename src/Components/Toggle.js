import { motion } from 'framer-motion';
import {useState} from 'react';

function Toggle({children,title}) {//children by defulaut haya divy aknai <Toogle> abna childy <Toogle>
    const[toggle,setToggle]=useState(false);
  return (
  <motion.div layout className="question" onClick={()=>setToggle(!toggle)} >
  <motion.h4 layout >{title}</motion.h4>
  {toggle?children:""}
  <div className="faq-line"></div>
  </motion.div>

  );
}



export default Toggle;
