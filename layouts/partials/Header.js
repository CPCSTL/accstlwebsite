import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
  //router
  const router = useRouter();

  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [navOpen, setNavOpen] = useState(false);

  // logo source
  const { logo } = config.site;
  const { enable, label, link } = config.nav_button;

  return (
    <header className="header">
      <nav style={{width:"100%"}} className="navbar container">
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
            <svg className="h-6 fill-current z-1000" viewBox="0 0 20 20">
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
          <ul className="navbar-nav block w-full z-1000 md:flex md:w-auto lg:space-x-1">
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group ">
                    <span className="nav-link inline-flex items-center ">
                      {menu.name}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <ul style={{color:"black", zIndex:"1000"}} className="nav-dropdown-list w-100 text-start hidden z-1000 bg-zinc-100 pt-3 border-zinc-950 border-b-2  text-grey-550 group-hover:block md:invisible md:absolute top-11 pb-5 px-5 md:z-1000 md:block md:opacity-100:h-screen w-200 md:group-hover:visible md:group-hover:opacity-100">
                      {menu.children.map((child, i) => (
                        <li className="nav-dropdown-item z-1000" key={`children-${i}`}>
                          <Link
                            href={child.url}
                            className="nav-dropdown-link block"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
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
              </React.Fragment>
            ))}
            {enable && (
              <li className="md:hidden">
                <Link
                  className="btn btn-primary z-0 py-[14px]"
                  href={link}
                  rel=""
                  target="_blank"
                >
                  {label}
                </Link>
              </li>
            )}
          </ul>
        </div>
        {enable && (
          <div className="d-flex flex-column gap-1 hidden min-w-[100px] items-center justify-end md:ml-0 md:flex md:order-2">
            <Link className="btn btn-primary w-50px z-0 py-[14px]" href={link} rel="" target="_blank">
              {label}
            </Link>
            <Link className="btn btn-primary text-10px w-50px z-0 py-[14px]" href={link} rel="" target="_blank">
              Support Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
