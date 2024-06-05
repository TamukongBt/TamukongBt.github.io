
const Header = () => {

    return (
        <div className=" w-full md:!h-auto   border-b border-gray-500 bg-darkpurple">
            <header className="sticky top-0 z-30 flex justify-center !h-14 items-center gap-4 border-b bg-darkpurple px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">

                <div className="text-center flex ">
                    <div className="text-white font-heading pr-2  md:text-3xl sm:text-md rounded-lg tracking-[0.2em]">COCKTAIL</div>

                    <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-r from-lightpurple to-pink-700  w-3 h-7 text-sm px-16 rounded-lg">

                        </div>
                        <div className="text-white font-sans pl-2 md:text-4xl sm:text-md  rounded-lg tracking-[0.2em]">
                            NIGHTOUT
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;