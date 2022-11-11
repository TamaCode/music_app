import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-max grid grid-cols-7 bg-white">
      {/* LOGO CONTAINER */}
      <div className="col-span-1 bg-gray-700 p-5 flex flex-row justify-center items-center">
      <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>
        <h1 className="text-center text-white font-bold ml-3 tracking-widest">SPOTIFY</h1>
      </div>

      {/* NAVBAR AND SEACH CONTAINER */}
      <ul className="col-span-2 text-gray-400 bg-gray-800 flex flex-row justify-start items-center">
        <Link href={"/"} className="font-bold ml-10 hover:text-green-500">
          <li>Music</li>
        </Link>
        <Link href={"/"} className="font-bold ml-10 hover:text-green-500">
          <li>Podcast</li>
        </Link>
        <Link href={"/"} className="font-bold ml-10 hover:text-green-500">
          <li>Live</li>
        </Link>
      </ul>

      <div className="w-full col-span-3 text-gray-400 bg-gray-800 flex flex-row justify-start items-center">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <input className="ml-5" type="text" />
      </div>

      <div className="col-span-1 bg-gray-800 flex flex-row justify-center items-center">
        <Link href={"/"} className="font-bold ml-10 text-gray-400 hover:text-green-500">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
        </Link>
      </div>

      {children}

    </div>
  );
};

export default Layout;
