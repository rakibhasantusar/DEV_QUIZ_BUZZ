import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <NavLink
          to="/"
          className="inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="64" height="64"
            viewBox="0 0 64 64"
            fill="currentColor"
            className="flex-shrink-0 w-8 h-8 rounded-full text-gray-900"
          ><linearGradient id="oW~p_RiaEY0sx0g_n0VfFa_28CjWZRNcgWK_gr1" x1="30.5" x2="30.5" y1="21.425" y2="35.294" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6dc7ff"></stop><stop offset="1" stopColor="#e6abff"></stop></linearGradient><path fill="url(#oW~p_RiaEY0sx0g_n0VfFa_28CjWZRNcgWK_gr1)" d="M27.31,36.5c-0.703,0-1.363-0.283-1.86-0.795L20.5,30.57l2.478-2.554l4.333,4.497L38.022,21.5	l2.478,2.554L29.17,35.705C28.673,36.217,28.013,36.5,27.31,36.5z"></path>
            <linearGradient id="oW~p_RiaEY0sx0g_n0VfFb_28CjWZRNcgWK_gr2" x1="32" x2="32" y1="6.872" y2="55.649" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#oW~p_RiaEY0sx0g_n0VfFb_28CjWZRNcgWK_gr2)" d="M51,15.924v-2.719C51,10.335,48.665,8,45.795,8h-32.59C10.335,8,8,10.335,8,13.205v32.487 C8,48.619,10.381,51,13.308,51h2.616c0,2.757,2.243,5,5,5H51c2.757,0,5-2.243,5-5V20.924C56,18.167,53.757,15.924,51,15.924z M13.308,49C11.483,49,10,47.517,10,45.692V13.205C10,11.438,11.438,10,13.205,10h32.59C47.563,10,49,11.438,49,13.205v32.487 C49,47.517,47.517,49,45.692,49H13.308z M54,51c0,1.654-1.346,3-3,3H20.924c-1.654,0-3-1.346-3-3h27.769 C48.619,51,51,48.619,51,45.692V17.924c1.654,0,3,1.346,3,3V51z"></path><linearGradient id="oW~p_RiaEY0sx0g_n0VfFc_28CjWZRNcgWK_gr3" x1="20" x2="20" y1="6.872" y2="55.649" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient>
            <path fill="url(#oW~p_RiaEY0sx0g_n0VfFc_28CjWZRNcgWK_gr3)" d="M16,18v6h2v-6h6v-2h-6C16.897,16,16,16.897,16,18z"></path><linearGradient id="oW~p_RiaEY0sx0g_n0VfFd_28CjWZRNcgWK_gr4" x1="39" x2="39" y1="6.872" y2="55.649" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" ></stop></linearGradient><path fill="url(#oW~p_RiaEY0sx0g_n0VfFd_28CjWZRNcgWK_gr4)" d="M41,41h-6v2h6c1.103,0,2-0.897,2-2v-6h-2V41z"></path><linearGradient id="oW~p_RiaEY0sx0g_n0VfFe_28CjWZRNcgWK_gr5" x1="29.5" x2="29.5" y1="6.872" y2="55.649" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#1a6dff"></stop><stop offset="1" stopColor="#c822ff"></stop></linearGradient><path fill="url(#oW~p_RiaEY0sx0g_n0VfFe_28CjWZRNcgWK_gr5)" d="M47,43.871V15.129C47,13.403,45.597,12,43.871,12H15.129C13.403,12,12,13.403,12,15.129 v28.742C12,45.597,13.403,47,15.129,47h28.742C45.597,47,47,45.597,47,43.871z M45,43.871C45,44.493,44.493,45,43.871,45H15.129 C14.507,45,14,44.493,14,43.871V15.129C14,14.507,14.507,14,15.129,14h28.742C44.493,14,45,14.507,45,15.129V43.871z"></path></svg>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            Dev-Quiz-Buzz
          </span>
        </NavLink>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? 'text-red-400 font-bold' :
                  'font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 '}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive ? 'text-red-400 font-bold' :
                  'font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 '}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? 'text-red-400 font-bold' :
                  'font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 '}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <NavLink
                      to="/"
                      className="inline-flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="64" height="64"
                        viewBox="0 0 64 64"
                        fill="currentColor"
                        className="flex-shrink-0 w-8 h-8 rounded-full text-gray-900"
                      ><linearGradient id="oW~p_RiaEY0sx0g_n0VfFa_28CjWZRNcgWK_gr1" x1="30.5" x2="30.5" y1="21.425" y2="35.294" gradientUnits="userSpaceOnUse"></linearGradient><path fill="url(#oW~p_RiaEY0sx0g_n0VfFa_28CjWZRNcgWK_gr1)" d="M27.31,36.5c-0.703,0-1.363-0.283-1.86-0.795L20.5,30.57l2.478-2.554l4.333,4.497L38.022,21.5	l2.478,2.554L29.17,35.705C28.673,36.217,28.013,36.5,27.31,36.5z"></path><linearGradient id="oW~p_RiaEY0sx0g_n0VfFb_28CjWZRNcgWK_gr2" x1="32" x2="32" y1="6.872" y2="55.649" gradientUnits="userSpaceOnUse"></linearGradient><path fill="url(#oW~p_RiaEY0sx0g_n0VfFb_28CjWZRNcgWK_gr2)" d="M51,15.924v-2.719C51,10.335,48.665,8,45.795,8h-32.59C10.335,8,8,10.335,8,13.205v32.487 C8,48.619,10.381,51,13.308,51h2.616c0,2.757,2.243,5,5,5H51c2.757,0,5-2.243,5-5V20.924C56,18.167,53.757,15.924,51,15.924z M13.308,49C11.483,49,10,47.517,10,45.692V13.205C10,11.438,11.438,10,13.205,10h32.59C47.563,10,49,11.438,49,13.205v32.487 C49,47.517,47.517,49,45.692,49H13.308z M54,51c0,1.654-1.346,3-3,3H20.924c-1.654,0-3-1.346-3-3h27.769 C48.619,51,51,48.619,51,45.692V17.924c1.654,0,3,1.346,3,3V51z"></path><linearGradient id="oW~p_RiaEY0sx0g_n0VfFc_28CjWZRNcgWK_gr3" x1="20" x2="20" y1="6.872" y2="55.649" gradientUnits="userSpaceOnUse"></linearGradient><path fill="url(#oW~p_RiaEY0sx0g_n0VfFc_28CjWZRNcgWK_gr3)" d="M16,18v6h2v-6h6v-2h-6C16.897,16,16,16.897,16,18z"></path><linearGradient id="oW~p_RiaEY0sx0g_n0VfFd_28CjWZRNcgWK_gr4" x1="39" x2="39" y1="6.872" y2="55.649" gradientUnits="userSpaceOnUse"></linearGradient><path fill="url(#oW~p_RiaEY0sx0g_n0VfFd_28CjWZRNcgWK_gr4)" d="M41,41h-6v2h6c1.103,0,2-0.897,2-2v-6h-2V41z"></path><linearGradient id="oW~p_RiaEY0sx0g_n0VfFe_28CjWZRNcgWK_gr5" x1="29.5" x2="29.5" y1="6.872" y2="55.649" gradientUnits="userSpaceOnUse"></linearGradient><path fill="url(#oW~p_RiaEY0sx0g_n0VfFe_28CjWZRNcgWK_gr5)" d="M47,43.871V15.129C47,13.403,45.597,12,43.871,12H15.129C13.403,12,12,13.403,12,15.129 v28.742C12,45.597,13.403,47,15.129,47h28.742C45.597,47,47,45.597,47,43.871z M45,43.871C45,44.493,44.493,45,43.871,45H15.129 C14.507,45,14,44.493,14,43.871V15.129C14,14.507,14.507,14,15.129,14h28.742C44.493,14,45,14.507,45,15.129V43.871z"></path></svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        DEV-QUIZ-BUZZ
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <button
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/statistics"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Statistics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

export default Header;
