import React, { useState } from 'react'
import {delay, motion} from "framer-motion"
import Links from "./links/Links"
import "./sidebar.scss"
import Toggle from "./toggle/Toggle"
import { circle, clipPath } from "framer-motion/client"

const Sidebar = () => {

    const [open,setOpen] = useState(false)
    const variants = {
        open:{
            clipPath:"circle(1300px at 30px 30px)",
            transition:{
                type:"spring",
                stiffness:20,

            }
        },
        closed:{
            clipPath:"circle(25px at 30px 30px)",
            transition:{
                type:"spring",
                stiffness:150,
                damping: 20,
            }
        }
    }

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
        <Links/>
        </motion.div>
        <Toggle setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
