import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import navItem from '../utils/NavData';
import { BiChevronDown, BiChevronUp, BiMenu, BiX } from 'react-icons/bi';
// import { FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {


  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState('');

  return (
    <div className="">
      {/* main nav container above */}

      <div className=" flex items-center font-medium justify-between ">
        {/* logo */}
        <div className="p-5 lg:w-auto w-full flex justify-between ">

          <img
            src={logo}
            alt=""
            className="z-101 object-contain md:cursor-pointer w-11" />


          <div
            className="z-101 lg:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <BiX /> : <BiMenu />}
          </div>
        </div>
        {/* primary nav */}
        <div className="lg:flex hidden  items-center justify-between max-w-full mx-auto font-[Poppins]  ">
          {/* desktop Menu */}
          <>
            {navItem.map((navlinks) => (
              <div
                className=" px-3 text-left md:cursor-pointer group "
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
                    <div className="p-3">
                      <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="bg-[#000032]">
                        <h1 className="py-3 px-3 text-white">
                          {navlinks.portfolio}
                        </h1>

                        <img
                          src={navlinks.src}
                          alt=""

                          className="w-full"
                        />
                      </div>
                      <div className=" bg-white w-64">
                        {navlinks.sublinks.map((e) => (
                          <div className="  p-2.5 bg-white w-64" key={e.id}>
                            <Link
                              href={e.link}
                              className="text-sm hover:text-primary "
                            >
                              {e.subnav}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </>






        </div>
        <Link to="/login" className="xl:block hidden px-2 text-sm">
          <button className="bg-white text-gray-900 px-5 py-2 rounded-sm text-sm border-solid border-2 border-gray-800">
            LOGIN
          </button>
        </Link>

      </div>

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
    </div>
  );
};

export default Navbar;
