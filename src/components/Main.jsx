import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/Context";
import "./style.css";

function Main() {
  const {
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context);


  return (
    <>
      <div className="m-4 w-screen h-screen relative max-sm:w-full">
        <div className="nav flex items-center justify-between max-sm:justify-around ">
          <h1 className="text-xl">Gemini Ai</h1>
          <img
            src={assets.user_icon}
            className="rounded-full w-14"
            alt="profile-icon"
          />
        </div>

        {showResult ? (
          <div className="result h-[60vh] w-[60vw] m-auto overflow-scroll space-y-4">
            <div>
              <img src={assets.user_icon} className="rounded" width={45} />
              <h1 className="text-xl mt-2 text-indigo-800">{recentPrompt} ?</h1>
              <img src={assets.gemini_icon} width={44} />
              {loading ? (
                <div className="loader flex flex-col gap-4 ">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : null}
            </div>
            <p
              className=" text-xl leading-7"
              dangerouslySetInnerHTML={{ __html: resultData }}
            ></p>
          </div>
        ) : null}
        {!showResult ? (
          <div className="main-Content-Result flex flex-col items-center gap-16 max-sm:gap-4">
            <h1 className="text-4xl max-sm:text-[25px] bg-gradient-to-tr from-indigo-500 to-pink-400 color text-transparent bg-clip-text  ">
              How can I help you today?
            </h1>

            <div className="flex gap-6 max-sm:flex-wrap max-sm:justify-center">
              <div className="flex flex-col justify-between bg-slate-200 rounded-lg h-[200px] p-3 hover:bg-indigo-200 cursor-pointer max-sm:w-[160px] max-sm:h-[160px]">
                <h1 className="w-[170px] max-sm:w-fit">
                  Create a 12-week study plan for learning a new language
                </h1>
                <img
                  src={assets.message_icon}
                  className=" self-end"
                  width={45}
                />
              </div>
              <div className="flex flex-col justify-between bg-slate-200 rounded-lg h-[200px] p-3  hover:bg-indigo-200 cursor-pointer max-sm:w-[160px] max-sm:h-[160px]">
                <h1 className="w-[170px] max-sm:w-fit">
                  What's the time it takes to walk to several landmarks
                </h1>
                <img
                  src={assets.message_icon}
                  className=" self-end"
                  width={45}
                />
              </div>
              <div className="flex flex-col justify-between bg-slate-200 rounded-lg h-[200px] p-3  hover:bg-indigo-200 cursor-pointer max-sm:w-[160px] max-sm:h-[160px]">
                <h1 className="w-[170px] max-sm:w-fit">
                  Come up with a product name for a new app
                </h1>
                <img
                  src={assets.message_icon}
                  className=" self-end"
                  width={45}
                />
              </div>
              <div className="flex flex-col justify-between bg-slate-200 rounded-lg h-[200px] p-3  hover:bg-indigo-200 cursor-pointer max-sm:w-[160px] max-sm:h-[160px]">
                <h1 className="w-[170px] max-sm:w-fit">
                  Plan a low-carb meal with what's available in my fridge
                </h1>
                <img
                  src={assets.message_icon}
                  className=" self-end"
                  width={45}
                />
              </div>
            </div>
          </div>
        ) : null}

        <div className="prompt absolute bottom-16 w-full   max-sm:bottom-0 max-sm:relative max-sm:mt-4 ">
          <div className=" w-[60%] max-sm:w-fit m-auto relative rounded-full">
            <input
              type="text"
              className=" bg-slate-200 p-4 w-full rounded-full outline-none relative"
              placeholder="Enter a prompt here"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
            <img
              src={assets.send_icon}
              className="w-[33px] py-4 absolute right-5 -top-1 cursor-pointer"
              onClick={() => {
                onSent(input);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
