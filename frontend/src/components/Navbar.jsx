import {HiMenuAlt4,} from 'react-icons/hi'
import {AiOutlineClose} from "react-icons/ai";
import {useState} from "react";
import React from 'react'


const NavbarItem = ({title, classProps}) => {
    return (
        <li className={`${classProps} mx-4 cursor-pointer`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <div className="text-2xl text-white">Web3App</div>
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">

                {['Market', 'Exchange', 'Wallet', 'Contact'].map((item, index) => (
                    <NavbarItem title={item} classProps={index === 0 ? 'text-2xl font-bold' : ''} key={index}/>
                ))}
                <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-3xl cursor-pointer hover:bg-[#2952e3]/90">Login</li>

            </ul>
            <div className="flex relative md:hidden">
                {toggleMenu ?
                    <AiOutlineClose fontSize={28} className="text-white" onClick={() => setToggleMenu(false)}/> :
                    <HiMenuAlt4 fontSize={28} className="text-white" onClick={() => setToggleMenu(true)}/>}
                {toggleMenu && (
                    <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex- flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
                        <li>
                            <AiOutlineClose fontSize={28} className="text-white" onClick={() => setToggleMenu(false)}/>
                            {['Market', 'Exchange', 'Wallet', 'Contact'].map((item, index) => (
                                <NavbarItem title={item} classProps={`my-2 text-xl`}
                                            key={index}/>
                            ))}
                        </li>
                    </ul>)
                }
            </div>
        </nav>
    )
}
export default Navbar
