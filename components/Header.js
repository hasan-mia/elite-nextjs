import { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, Button, IconButton, Input, Select, Option, } from "@material-tailwind/react";
import logo from '../assets/logo.png'
import Image from "next/image";
const Header = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between">
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6 mr-0 lg:mr-48">
                <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                    <a href="#" className="flex items-center">
                        Pages
                    </a>
                </Typography>
                <>
                    <Select variant="outlined" label="Select Version" className="bg-white">
                        <Option>Tailwind HTML</Option>
                        <Option>Tailwind React</Option>
                        <Option>Tailwind Vue</Option>
                        <Option>Tailwind Angular</Option>
                        <Option>Tailwind Svelte</Option>
                    </Select>
                    <Input label="Input With Icon" icon={<i className="fas fa-search" />} />
                </>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6">
                <a className="text-gray-600"><i className="fal fa-file text-xl"></i></a>
                <a className="text-gray-600"><i className="fal fa-bell text-xl"></i></a>
                <a className="text-gray-600"><i className="fal fa-envelope text-xl"></i></a>
                <a className="text-gray-600"><i className="fal fa-user text-xl"></i></a>
                <Button size="sm" className="hidden lg:inline-block  bg-pink-500 py-2 text-lg">
                    <span>Upload all related</span>
                </Button>
            </div>
        </div>
    );
    return (
        <header>
            <Navbar className="mx-auto py-2 lg:px-2 lg:py-4">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <Typography as="a" href="#" variant="small" className="mr-4 cursor-pointer py-1.5 font-normal">
                        <Image src={logo} width={100}
                            height={40} alt="image" />
                    </Typography>

                    <div className="hidden lg:block">{navList}</div>

                    <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)}>
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                </MobileNav>
            </Navbar>
        </header>
    );
};

export default Header;