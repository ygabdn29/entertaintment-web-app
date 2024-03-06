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

          <ul className="flex flex-col gap-4">
            <li className="text-white">Test</li>
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
