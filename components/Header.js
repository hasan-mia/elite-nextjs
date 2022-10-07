import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
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
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6">
                <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                    <a href="#" className="flex items-center">
                        Pages
                    </a>
                </Typography>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6">
                <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                    <span>Buy Now</span>
                </Button>
            </div>
        </div>
    );
    return (
        <header>
            <Navbar className="mx-auto py-2 lg:px-2 lg:py-4">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <Typography as="a" href="#" variant="small" className="mr-4 cursor-pointer py-1.5 font-normal">
                        <span>The Honest Elite</span>
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