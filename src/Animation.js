export const pageAnimation={
    hidden:{
        opcity:0,
        y:300
    },
    show:{
        opcity:1,
        y:0,
        transition:{
            duration:1,
            when:"beforeChildren",
            staggerChildren:0.25,
            
        }
    },
    exit:{
        opcity:0,
        
        transition:{
            duration:0.5,
        }
            
    }
}


export const titleAnim={
    hidden:{y:200},
    show:{
        y:0,
        transition:{duration:0.75, ease:"easeOut"},

    }
};

export const fade={
    hidden:{opacity:0},
    show:{opacity:1,
        transition: {ease:"easeOut",duration:0.75}
    
    }
}

export const photoAnimation={
    hidden:{opacity:0,scale:1.5 },
    show:{
        scale:1,
        opacity:1,
        transition: {ease:"easeOut", duration:0.75},
    }
}

export const lineAnim ={
hidden:{width:"0%"},
show:{
    width:"100%",
    transition: {duration:1},

},
};

export const slider={
    hidden:{x: '-130%' , skew: '45deg'},
    show:{
        x:"100%",
        skew:'0deg',
        transition: {duration:1 ,ease:"easeOut"} 
    }
}

export const sliderContainer = {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity: 1,
  
      transition: {
        staggerChildren: 0.15,
        ease: 'easeOut',
        duration: 1,
      },
    },
  };

  export const scrollReveal={
      hidden:{opacity:0 , scale:1.2,duration:0.5},
      show:{opacity:1 ,scale:1 ,
        transition:{duration:0.5,}
    }
  }