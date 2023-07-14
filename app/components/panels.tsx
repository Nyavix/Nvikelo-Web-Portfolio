"use client";
import React, { useEffect} from "react";
import {IoChevronForwardOutline} from 'react-icons/io5'
import {LuJoystick} from 'react-icons/lu'
import {LuLayout} from 'react-icons/lu'
import {LuGithub} from 'react-icons/lu'
import {LuFileQuestion} from 'react-icons/lu'

interface PanelProps {
    ProjectName?: string,
    Description?: string,
    ToolsUsed?: string,
    WebLink?: string,
    TypeNumber?: number,
}

function Panel ({
    ProjectName = "",
    Description = "",
    ToolsUsed = "",
    WebLink = "#",
    TypeNumber = 0,

}:PanelProps) {

    var TypeIcon = LuFileQuestion;
    
    return (
        <a href={WebLink} 
            className='group max-w-md w-96 h-72 p-4
            bg-off-white bg-opacity-10 rounded-xl border
            border-off-white transition ease-in-out hover:shadow-lg hover:scale-105'>
              <div className='text-off-white h-full'>
                <div className="flex justify-between">
                    <h1 className="flex-1 text-xl">{ProjectName}</h1>
                    <LuJoystick className={TypeNumber==1? "visible flex-initial":"hidden flex=none"}/>
                    <LuFileQuestion className={TypeNumber==0? "visible flex-initial":"hidden flex=none"}/>
                    <LuLayout className={TypeNumber==2? "visible flex-initial":"hidden flex=none"}/>
                    <LuGithub className={TypeNumber==3? "visible flex-initial":"hidden flex=none"}/>
                </div>
                <div className="flex flex-col h-5/6 justify-between">
                  <p className='p-4'>
                    {Description}
                  </p>
                  <div className='flex justify-between'>
                    <h1 className='text-xs text-pastel-pink text-opacity-60'>
                          {ToolsUsed}
                    </h1>
                    <IoChevronForwardOutline className='group-hover:animate-ping'/>
                  </div>
                </div>
              </div>
            </a>
    );
}

export default Panel;