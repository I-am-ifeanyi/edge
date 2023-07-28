import React, {useState} from 'react'

import schoolIcon from "./Assets/schoolIcons/schoolIcon.png"
import HeaderComponent from './homepageComponents/HeaderComponent'


const School = () => {
     const [activeLinks, setActiveLinks] = useState({
       analytics: true,
       play: false,
       great: false
     })

     const {analytics} = activeLinks

 const subLinks = [
   {
     A: "Analytics",
     isActive: analytics
   }
 ]

   const locations = [
     {
       A: "Dashboard",
       isActive: false
     },
     {
       A: "General Analytics",
       isActive: true
     }
   ]



  return (
    <div>
      <div className="md:w-[90%] w-full absolute h-full right-0">
        <HeaderComponent
          icon={schoolIcon}
          title="General Analytics"
          subLinks={subLinks}
          locations={locations}
          buttonProps="Create new session"
        />
        School
      </div>
    </div>
  )
}

export default School