import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { showToast } from 'utils/functions';
import { clearNotifications } from 'store/reducers/notifications.reducer';
import { signOutUser } from 'store/reducers/user.reducer';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import mycss from "mycss";


const Header = () => {

//menu mui 
const [anchorEl, setAnchorEl] = React.useState(null);
const [activeMenu, setActiveMenu] = useState(null);

const open = Boolean(anchorEl);
const handleClick = (event, index) => {
  setAnchorEl(event.currentTarget); // This should be the element you click
  setActiveMenu(activeMenu === index ? null : index);
};


const handleClose = () => {
  setAnchorEl(null);
  setActiveMenu(null);
};

  //router
  const router = useRouter();

  // redux
  const dispatch = useDispatch()
  const notifications = useSelector(state=>state.notifications)
const user = useSelector(state=>state.user)

  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [navOpen, setNavOpen] = useState(false);

  // logo source
  const { logo } = config.site;
  const { enable, label, link } = config.nav_button;

  // useEffect
  useEffect(() => {
 
    let {global} = notifications
     
    if(notifications && global.success){
      const msg = global.msg ? global.msg : "Success"
      showToast("SUCCESS", msg);
      dispatch(clearNotifications())
    }
    if(notifications && global.error){
      const msg = global.msg ? global.msg : "Error"
      showToast("ERROR", msg)
      dispatch(clearNotifications())
    }
    
    
    }, [notifications])


  return (
    <header className="header">
      <nav className="navbar container">
        {/* logo */}
        <div className="order-0">
          <Logo src={logo} />
        </div>

        {/* navbar toggler */}
        <button
          id="show-button"
          className="order-2 flex cursor-pointer items-center md:hidden md:order-1"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          id="nav-menu"
          className={`order-3 md:order-1 ${
            navOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <ul className="navbar-nav block w-full md:flex md:w-auto lg:space-x-1">
            {main.map((menu, i) => (
              <div key={`menu-${i}`}
              

              >
                {menu.hasChildren ? (
                  <li className=" group relative" 
                  >
                    <span className="nav-link inline-flex items-center"
                    onClick={(event) => handleClick(event, i)}>
                      {menu.name}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <Menu
                    key={`menu-${i}`}
                    //  className=" hidden group-hover:block  sticky
                    //  top-full left-0 w-full bg-white z-22220 shadow-md
                    //   "

                    id="fade-menu"
                    MenuListProps={{
                      'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={activeMenu === i}
                    onClose={() => {
                      setAnchorEl(null);
                      setActiveMenu(null);
                    }}
                    TransitionComponent={Fade}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        // filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 0,
                        bgcolor:mycss.colors.grey4,
                        zIndex: 22220,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&::before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          left: 14,
                          width: 10,
                          height: 10,
                          bgcolor: mycss.colors.grey4,
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    }}
            
                    

                      >
                      {menu.children.map((child, i) => (
                        <MenuItem key={`i`}
                        onClick={handleClose}
                        >
                          <Link
                            href={child.url}
                            className="nav-dropdown-link block"
                          >
                            {child.name}
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      onClick={() => setNavOpen(false)}
                      className={`nav-link block ${
                        router.asPath === menu.url ? "nav-link-active" : ""
                      }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </div>
            ))}
            {enable && (
              <li className="md:hidden">
                <a
                  className="btn btn-primary z-0 py-[14px]"
                  href={link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {label}
                </a>
              </li>
            )}
          </ul>
        </div>
        {enable && (
          <div className="d-flex order-1 ml-auto hidden min-w-[200px] items-center justify-end md:ml-0 md:flex md:order-2">
            <a className="btn btn-primary z-0 py-[14px]" href={link} rel="" target="_blank">
              {label}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
