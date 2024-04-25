import React from 'react'
import './programs.css'

import program_1 from  '../../assets/program-1.png'
import program_2 from  '../../assets/program-2.png'
import program_3 from  '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import gallery_4 from '../../assets/gallery-4.png'
const Programs = () => {
  return (
 <div className="programs">
    <div className="program">
        <img src = {program_1} alt = "" />
        <div className="caption">
            <img src = {program_icon_1} alt = " "/>
            <p>Graduation Degree</p>
        </div>
    </div>
    <br/>
    <div className="program">
        <img src = {program_2} alt = "" />
        <div className="caption">
            <img src = {program_icon_2} alt = " "/>
            <p>Masters Degree</p>
        </div>
    </div>
    <br></br>
    <div className="program">
        <img src = {program_3} alt = "" />
        <div className="caption">
            <img src = {program_icon_3} alt = " "/>
            <p>Post Graduation </p>
        </div>
        
    </div>
 </div>
  )
}

export default Programs;
//34:42