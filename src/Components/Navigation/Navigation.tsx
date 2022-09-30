import React, {  } from 'react'
import { Link } from 'react-router-dom'
import { useAppState } from '../../Stores/Hooks'

const Navigation = () => {

    const state = useAppState(state => state.credentials)
    
    
  return (
    <div className='tw-absolute tw-w-full tw-bg-slate-800 tw-flex tw-justify-between tw-items-center tw-p-3 tw-text-white tw-font-sans'>
        <div className='tw-font-medium tw-text-lg'>Auth Tester</div>
        <div className='tw-flex tw-justify-between tw-items-center tw-gap-2 tw-text-base tw-w-auto'>
            {state.auth? <span className='tw-w-6 tw-h-6 tw-rounded-full tw-bg-center tw-bg-contain tw-bg-no-repeat' style={{backgroundImage: `url("${state.user?.profilePic}")`}}></span>:<></>}
            {state.auth? <p className='tw-text-white tw-my-0 tw-mx-2 tw-px-3 tw-py-0.5 tw-rounded tw-bg-slate-500 tw-bg-opacity-25'>@ {state.user?.name}</p>:<></>}
            {state.auth ? <Link className='tw-text-white tw-py-0.5 tw-px-1.5 tw-rounded hover:tw-bg-slate-500 hover:tw-bg-opacity-25' to={"/"}>Home</Link>:<></>}
            {!state.auth ? <><Link className='tw-text-white tw-py-0.5 tw-px-1.5 tw-rounded hover:tw-bg-slate-500 hover:tw-bg-opacity-25' to={"/signin"}>Signin</Link>
            <Link className='tw-text-white tw-py-0.5 tw-px-1.5 tw-rounded hover:tw-bg-slate-500 hover:tw-bg-opacity-25' to={"/signup"}>Signup</Link></> : <></>}
            {state.auth ? <Link className='tw-text-white tw-py-0.5 tw-px-1.5 tw-rounded hover:tw-bg-slate-500 hover:tw-bg-opacity-25' to={"/signout"}>Signout</Link>:<></>}
        </div>
    </div>
  )
}

export default Navigation