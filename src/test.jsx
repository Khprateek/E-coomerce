import { delay, motion } from "framer-motion";
import React, { useState } from "react";
const Test = () => {

  const [open, setOpen] = useState(true)

  const variants = {
    visible: (i)=>({
      opacity:1,
      x:100,
      transition: {delay: i*0.3}
    }),
    hidden :{opacity:0, x:0},
  }
  const items =["item1", "item1", "item3", "item4"];
  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
      {items.map((item,i)=>(
        <motion.li key={item} custom={i}>{item}</motion.li>
      ))}
      </motion.ul>
    </div>
  )
}

export default Test
