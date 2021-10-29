
import React, { useEffect, useState } from 'react'; 
import CategoryBar from './components/CategoryBar';
import EmojiMenu from './components/EmojiMenu';

const App = () => {
    const [category, setCategory] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false); 

    const changeCategory = (name) => {
        setCategory(name); 
    }

    const toggleSideBar = () => {
        setSidebarOpen(!sidebarOpen)
    }


    return (
        <div className="relative min-h-screen md:flex">
            <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden"> 
                <p className="block p-4 text-white font-bold">SoyebMoji</p>
                <button onClick={() => toggleSideBar()} className="p-4 focus:outline-none focus:bg-gray-700">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </button>
            </div>

            <div className={(sidebarOpen ? "" : "-translate-x-full ") + "bg-blue-800 text-blue-100 w-64 space-y-6 px-2 py-7 absolute inset-y-0 left-0  transform md:relative md:translate-x-0 transition duration-200 ease-in-out"}> 
                <a href="#" className="text-white flex items-center space-x-2 px-4">
                    <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span className="text-2xl font-extrabold">SoyebMoji</span> 
                </a>

                <nav>
                    <CategoryBar changeCategory={changeCategory} category={category} /> 
                </nav>
            </div>
            
            <div className="flex-1 p-5">
                <EmojiMenu category={category ? category : "smileys-emotion"} />
            </div>
        </div>
    );
}

export default App;
