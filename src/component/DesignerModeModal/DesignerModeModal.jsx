import React from 'react'
import {AiOutlineDownload,AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const DesignerModeModal = ({setShow}) => {
  return (
    <div className='relative w-full h-full'>
        <div className=' fixed z-[99] w-full h-full bg-gray-500 opacity-[0.5]'onClick={()=>setShow(false)}>
            
        </div>
        <div className='fixed z-[100] top-[25%] left-[25%] w-[50%] bg-white rounded-md flex flex-col justify-center px-6 py-10'>
                <div className=' container '>
                    <div className="logo flex justify-center w-full h-full p-2 ">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="300"
                        height="30"
                        viewBox="0 0 160 55.986"
                    >
                        
                        <path
                        id="Path_583"
                        data-name="Path 583"
                        d="M9.2,8.589a4.539,4.539,0,0,0,2.544.828,3.674,3.674,0,0,0,2.13-.65A9.316,9.316,0,0,0,16.184,6.2,19.434,19.434,0,0,0,17.664,1.97l7.981-30.449h8.732L26.458,1.968a29.556,29.556,0,0,1-4.846,10.523,12.109,12.109,0,0,1-4.7,2.808,18.642,18.642,0,0,1-6.353,1.094,15.06,15.06,0,0,1-4.9-.769Q-.608,14.146-.608,7.17A14.594,14.594,0,0,1-.194,3.623L4.532-12.044,6.6-20.025a9.12,9.12,0,0,1-4.787,1.242A15.116,15.116,0,0,1-.017-18.9l1.476-5.56H2.936q3.838,0,5.847-4.02h8.741L13.3-12.037,8.729,3.919a12.823,12.823,0,0,0-.236,2.247Q8.493,8.234,9.2,8.589ZM61.679,20.058a3.091,3.091,0,0,0,2.6-1.123l1.773,5.321q-2.6,2.956-7.787,3.192a6.836,6.836,0,0,1-5.309-2.13,13.707,13.707,0,0,1-2.418-4.555,50.2,50.2,0,0,1-1.593-4.911L45.4,2.875,36.431,15.861H26.044L42.372-7.976,38.594-21.8a11.123,11.123,0,0,1-8.231,3.08,16.309,16.309,0,0,1-2.368-.174l1.477-5.561h1.477q3.841,0,5.791-4.02h9.219l2.958,10.95,7.5-10.95H66.805L51.9-6.725l6.171,22.585Q58.783,19.822,61.679,20.058Zm5.5-40.024a9.475,9.475,0,0,1-4.787,1.182,13.712,13.712,0,0,1-1.773-.115l1.477-5.56H63.57q3.782,0,5.791-4.02h9.4a15.976,15.976,0,0,1,12,5.2A10.648,10.648,0,0,1,92.7-17.01q0,4.611-3.782,8.986a17.885,17.885,0,0,1-7.21,3.843,18.53,18.53,0,0,1-7.623.591l1.3-5.38q7.446.65,9.1-7.035.059-.591.059-1.182a4.6,4.6,0,0,0-2.543-4.375,7.438,7.438,0,0,0-3.784-.828,4.7,4.7,0,0,1-1.065,0L67.187,15.861H57.778ZM111.736-6.014H101.289l-4.1,15.726h14.9l-1.773,6.148H86.794l9.338-35.826A9.154,9.154,0,0,1,91.4-18.783a15.116,15.116,0,0,1-1.832-.115l1.477-5.56h1.477q3.841,0,5.85-4.02h23.165l-1.777,6.089H105.5l-2.57,10.228h10.578ZM121.9-19.966a9.154,9.154,0,0,1-4.729,1.182,15.116,15.116,0,0,1-1.832-.115l1.477-5.56h1.477q3.841,0,5.85-4.02h9.4a15.976,15.976,0,0,1,12,5.2,10.719,10.719,0,0,1,2.127,6.5q0,4.611-3.959,8.75a12.327,12.327,0,0,1-7.269,3.843,15.646,15.646,0,0,1,2.423,8.395,38.31,38.31,0,0,1-.473,5.114,38.767,38.767,0,0,0-.473,4.345,3.23,3.23,0,0,0,.591,2.187,14.987,14.987,0,0,0,1.241,1.36,1.934,1.934,0,0,0,1.418.591,7.652,7.652,0,0,0,2.541-.65l1.123,6.326a16.956,16.956,0,0,1-8.392,2.542,8.546,8.546,0,0,1-4.787-1.243,8.083,8.083,0,0,1-3.487-6.984,18.134,18.134,0,0,1,.532-3.877q.532-2.338,1.123-4.765a34.581,34.581,0,0,0,.886-7.044q0-4.2-1.891-5.741l1.359-5.386q7.387.177,9.042-7.044a6.968,6.968,0,0,0,.118-1.243,4.615,4.615,0,0,0-2.524-4.38,7.047,7.047,0,0,0-3.815-.829,2.517,2.517,0,0,1-1,.131L121.965,15.861h-9.4Zm26.829-2.424a7.669,7.669,0,0,0-5.32,2.247l-1.832-5.321q2.778-2.9,7.978-3.074,5.437.059,23.52.059l-1.765,6.089h-9.057L152.2,15.861h-8.735l9.988-38.25Z"
                        transform="translate(0.608 28.538)"
                        fill="#0085f7"
                        />
                        </svg>
                    </div>
                    <div className="body flex flex-col gap-7">
                        <div className='flex container justify-center'>
                            <h2 className='text-2xl font-semibold text-[#0085F7]'>Great! Your Design is Created Successfully</h2>
                        </div>
                        <div className='flex justify-between container px-[10%] xs:p-[5%]'>
                            <button className='text-white bg-[#004AF7] rounded-sm gap-2 items-center flex xl:px-4 lg:px-4 md:px-4 sm:px-1 xs:px-1 py-[2px] hover:opacity-[0.8] active:opacity-[0.5] transition-all'><AiOutlineDownload className='font-bold text-lg'/> Html</button>
                            <button className='text-white bg-[#004AF7] rounded-sm gap-2 items-center flex xl:px-4 lg:px-4 md:px-4 sm:px-1 xs:px-1 py-[2px] hover:opacity-[0.8] active:opacity-[0.5] transition-all'><AiOutlineDownload className='font-bold text-lg'/>React</button>
                            <button className='text-white bg-[#004AF7] rounded-sm gap-2 items-center flex xl:px-4 lg:px-4 md:px-4 sm:px-1 xs:px-1 py-[2px] hover:opacity-[0.8] active:opacity-[0.5] transition-all'><AiOutlineDownload className='font-bold text-lg'/>Vue</button>
                        </div>
                        <Link to="/" className='flex justify-center items-center gap-4 hover:text-[#006AF7] transition-all select-none cursor-pointer'> <AiOutlineArrowLeft/> back to home page</Link>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default DesignerModeModal