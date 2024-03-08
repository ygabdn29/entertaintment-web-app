import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <header className="max-h-240 h-240 max-w-24 w-full">
      <nav className="flex flex-col justify-between items-center h-full bg-dark-blue py-8 px-7 rounded-[20px] ">
        <div>
          <img
            src="../../src/assets/logo.svg"
            alt="Logo"
            className="max-w-8 w-full mb-16"
          />

          <ul className="flex flex-col gap-4 items-center">
            <li className="text-white">
              <NavLink to="home" className="text-light-blue active:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ">
                  <path
                    d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                    fill="currentColor"
                  />
                </svg>
              </NavLink>
            </li>
            <li className="text-white">Test</li>
            <li className="text-white">Test</li>
            <li className="text-white">Test</li>
          </ul>
        </div>

        <img
          src="../../src/assets/image-avatar.png"
          alt="Avatar Image"
          className="w-10 h-10 rounded-full border border-white"
        />
      </nav>
    </header>
  );
}

export default Sidebar;
