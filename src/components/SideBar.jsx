import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import { assets } from "../assets/assets";

import "./style.css"

function SideBar() {
  const [extend, setExtend] = useState(false);

  const { prevPrompts,onSent} = useContext(Context);

  

  return (
    <div
      className={`relative flex flex-col gap-4  bg-slate-100  p-6 h-screen max-sm:hidden ${
        extend ? "w-[280px]" : "w-[80px]"
      } `}
    >
      <div
        className="menuButton mb-10 cursor-pointer "
        onClick={() => setExtend((prev) => !prev)}
      >
        <img src={assets.menu_icon} className="w-6" alt="menu-icon" />
      </div>
      <div onClick={()=>{
         setShowResult(false)
      }} className="newChat  cursor-pointer inline-flex items-center gap-10  bg-slate-200 px-4 py-4 -ml-2 min-w-[40px] h-[40px]  rounded-full">
        <img src={assets.plus_icon} width="20px" />
        {extend ? <p className=" text-gray-400">New chat</p> : null}
      </div>
      {extend ? (
        <div className="Recent-Prompt">
          <p className="mb-4">Recent</p>
          <div className=" Previous-Prompts flex flex-col gap-3   max-h-[150px] ">
            {
              prevPrompts.map((prevPrompt,index)=>{
                  return (
  
                    <p key={index} onClick={()=>onSent(prevPrompt)} className=" flex items-center gap-4 cursor-pointer hover:bg-slate-300 hover:rounded-full py-1 px-2 -ml-2">
                    <img
                      src={assets.message_icon}
                      className="w-6"
                    />
                   {prevPrompt.slice(0,18)} ...
                  </p>
                  )
                
              })
            }
           
          </div>
        </div>
      ) : null}
      <div className="setting-help-icons flex flex-col gap-4 absolute bottom-16 ">
        <div className="flex gap-5 ">
          {" "}
          <img src={assets.question_icon} className="w-6" />
          {extend ? <p>Help</p> : null}
        </div>
        <div className="flex gap-5">
          <img src={assets.history_icon} className="w-6" />
          {extend ? <p>Activity</p> : null}
        </div>
        <div className="flex gap-5">
          {" "}
          <img src={assets.setting_icon} className="w-6" />
          {extend ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
