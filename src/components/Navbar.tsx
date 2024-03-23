'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SvgIcon from "../../public/icon.svg";

const Navbar = () => {
    const path = usePathname()
    const pattern = /^\/branch\/PHM\/\d+$/;

    const isMatching = pattern.test(path)

    return (
        <>
            {
                !isMatching ? (
                    < header className="text-gray-600 body-font" >
                        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                            <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                                <Image
                                    src={SvgIcon}
                                    alt="icon"
                                    width={45}
                                    height={45}
                                />
                                <span className="ml-3 text-xl">CSVTU Result</span>
                            </Link>
                            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                                {
                                    ['Home', 'About', 'Contact'].map(navItem => (
                                        <Link key={navItem} href={`/${navItem === "Home" ? '' : navItem.toLowerCase()}`} className="mr-5 hover:text-gray-900">{navItem}</Link>
                                    ))
                                }
                            </nav>
                        </div>
                    </ header>
                ) : null
            }

        </>
    );
}

export default Navbar;