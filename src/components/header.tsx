import Link from "next/link";

const Header = () => {

    return (
        <header className="sticky top-0 z-30  !w-full justify-between flex md:hidden pl-4 !h-14 border border-lemonchiffon bg-eerieblack sm:static sm:h-auto  ">

            <div className="grid grid-cols-3 space-x-3 text-lemonchiffon font-sans pr-2  font-light sm:text-md rounded-lg ">
                <Link href="/work" className="flex items-center ">
                    <div className="mx-auto items-center hover:border-b-2">
                       My Work
                    </div>
                </Link>
                <Link href="/hobbies" className="flex items-center">
                    <div className="mx-auto items-center hover:border-b-2">
                        Hobbies
                    </div>
                </Link>
                <Link href="/thoughts" className="flex items-center">
                    <div className="mx-auto items-center hover:border-b-2">
                        Thoughts
                    </div>
                </Link>
            </div>

            <div className=" bg-lemonchiffon font-bold font-display capitalize">
                <Link href="/" className="px-4 text-2xl text-bittersweet leading-3 my-auto flex align-middle items-center h-full">
                    TB
                </Link>
            </div>
        </header>
    );
}

export default Header;