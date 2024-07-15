import React from 'react'
import Carousel from './Carousel';
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaAngular } from "react-icons/fa6";


const CodeStack: React.FC = () => {
    const CodeStasckIcons = [
        { component: FaHtml5 },
        { component: FaSass },
        { component: FaCss3Alt},
        { component: FaBootstrap},
        { component: FaReact },
        { component: SiTypescript},
        { component: SiJavascript },
        { component: SiCsharp},
        { component: SiMysql},
        { component: FaAngular},
    ]
  return (
    <Carousel icons={CodeStasckIcons} />
  );
}

export default CodeStack