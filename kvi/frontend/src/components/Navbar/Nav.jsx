import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import navItem from '../utils/NavData';
import { BiChevronDown, BiChevronUp, BiMenu, BiX } from 'react-icons/bi';
// import { FiShoppingCart } from 'react-icons/fi'

const Nav = () => {

    // Open and close state of the Navbar & sub menu items
    const [open, setOpen] = useState(false);
    const [clicked, setClicked] = useState('');

    return (

        <>




            {/* Main Navbar starts here */}
            <div className=" flex items-center font-medium justify-between bg-[#adcee2]">

                {/* logo */}
                    <Link to="/">
                <div className="p-5 lg:w-auto w-full flex justify-between items-center ">

                        <img
                            src={logo}
                            alt=""
                            className="z-101 object-contain md:cursor-pointer w-[77px]" />
                        <h1 className='text-[#032b35] font-semibold text-xl'>Kanstars Vision</h1>

                    <div
                        className="z-101 lg:hidden text-3xl"
                        onClick={() => setOpen(!open)}
                        >
                        {open ? <BiX /> : <BiMenu />}
                    </div>
                </div>
                        </Link>
                {/* primary nav */}
                <div className="lg:flex hidden  items-center justify-between max-w-full mx-auto font-[Poppins]  ">

                    {/* desktop Menu */}
                    <>
                        {navItem.map((navlinks) => (
                            <div
                                className=" px-3 text-left md:cursor-pointer group"
                                key={navlinks.id}
                            >
                                <h1
                                    className="py-7   text-sm flex justify-between items-center md:pr-0 pr-5"
                                    onClick={() =>
                                        clicked !== navlinks.navitem
                                            ? setClicked(navlinks.navitem)
                                            : setClicked('')
                                    }
                                >
                                    {navlinks.navitem}

                                    <span className="text-xl md:mt-1 md:ml-2 inline">


                                        {clicked === navlinks.navitem ? (
                                            <BiChevronDown />
                                        ) : (
                                            <BiChevronUp />
                                        )}
                                    </span>
                                </h1>
                                {navlinks.submenu && (
                                    <div className=" z-100 absolute top-[62px] hidden group-hover:md:block hover:md:block">


                                        <div className='absolute top-0 -left-48 transition group-hover:marker:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500
                        ease-in-out group-hover:transform z-100 min-w-[427px] transform'>

                                            <div className='relative top-9 p-6 bg-[#adcee2] rounded-xl shadow-xl w-full grid-cols-1'>

                                                <div className=' w-10 h-10 bg-[#adcee2] transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm'>

                                                </div>

                                                {/* Dropdown Menu Starts Here */}
                                                <div className=' grid grid-cols-2 gap-4'>


                                                    {navlinks.sublinks.map((e) => (
                                                        <div class="relative z-10  " key={e.id}>


                                                            <div className="mt-1 text-[15px] ">

                                                                <Link to={e.link}
                                                                    className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600" >
                                                                    {e.subnav}
                                                                </Link>


                                                            </div>
                                                        </div>

                                                    ))}
                                                </div>
                                                {/* Dropdown Menu Ends Here */}


                                            </div>

                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </>






                </div >
                <Link to="/login" className="xl:block hidden px-2 text-sm">
                    <button className="bg-white text-gray-900 px-5 py-2 rounded-sm text-sm border-solid border-2 border-gray-800">
                        LOGIN
                    </button>
                </Link>

            </div >

            <div
                className={`z-100 bg-white
          lg:hidden absolute w-full h-full bottom-0 py-24 pl-4 
          duration-500 ${open ? 'left-0' : 'left-[-100%]'}
          `}
            >
                <>
                    {navItem.map((link) => (
                        <div key={link.id}>
                            <div className=" px-3 text-left md:cursor-pointer group">
                                <h1
                                    className="py-7   text-sm flex justify-between items-center md:pr-0 pr-5"
                                    onClick={() =>
                                        clicked !== link.navitem
                                            ? setClicked(link.navitem)
                                            : setClicked('')
                                    }
                                >
                                    {link.navitem}

                                    <span className="text-xl md:mt-1 md:ml-2 inline">

                                        {clicked === link.navitem ? (
                                            <BiChevronDown />
                                        ) : (
                                            <BiChevronUp />
                                        )}
                                    </span>
                                </h1>
                            </div>
                            {/* END desktop menu */}

                            {/* mobile menu start*/}

                            <div
                                className={`z-105 
          
                    ${clicked === link.navitem ? 'lg:hidden' : 'hidden'}
          `}
                            >
                                {link.sublinks.map((slink) => (
                                    <div key={slink.id}>
                                        <div className=" bg-white">
                                            <Link
                                                to={slink.link}
                                                className="  pl-5 md:pr-0 pr-5"
                                                onClick={() => setOpen(!open)}
                                            >
                                                {slink.subnav}
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* END mobile menu */}
                        </div>
                    ))}
                </>
            </div>

        </>
    );
};

export default Nav;
