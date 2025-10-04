import Logo from "@/assets/images/pngs/logo.png";
import { navLinks } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Link } from "react-router";
import { Button } from "./ui/button";

type INavbar = React.ComponentProps<"nav">;

const Navbar = ({ className }: INavbar) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className={cn(
                "container w-[calc(100%-var(--spacing)*8)] bg-(--nav-bg)/90 md:px-10 rounded-[1.25rem] flex flex-col backdrop-blur-md fixed inset-x-0 z-20",
                className,
            )}
        >
            <div className="h-nav flex items-center justify-between">
                <Link to="/">
                    <img src={Logo} alt="Headline Consulting logo" />
                </Link>

                <ul className="md:flex hidden items-center gap-10">
                    {navLinks.map(({ href, name }, index) => (
                        <li
                            key={index}
                            className="text-primary text-sm font-medium"
                        >
                            <Link to={href} title={name}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hamburger (mobile) */}
                <Button
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen ? "true" : "false"}
                    className="md:hidden inline-flex bg-transparent hover:bg-transparent size-10 rounded-md"
                    onClick={() => setIsOpen((s) => !s)}
                >
                    <div className="flex items-center *:transition-all *:duration-300 [--bar-width:calc(var(--spacing)*6)]">
                        {/* Top bar */}
                        <div
                            className={cn(
                                "h-0.5 bg-primary w-(--bar-width) translate-x-full",
                                { "-translate-y-2": !isOpen },
                            )}
                        />
                        {/* Middle bar */}
                        <div
                            className={cn("h-0.5 bg-primary w-(--bar-width)")}
                        />
                        {/* Bottom bar */}
                        <div
                            className={cn(
                                "h-0.5 bg-primary w-(--bar-width) -translate-x-full",
                                { "translate-y-2": !isOpen },
                            )}
                        />
                    </div>
                </Button>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "md:hidden transition-all duration-300",
                    isOpen
                        ? "[clip-path:inset(0_0_0_0)] max-h-65 py-10"
                        : "[clip-path:inset(0_0_100%_0)] max-h-0 py-0",
                )}
            >
                <ul className={cn("flex flex-col gap-8")}>
                    {navLinks.map(({ href, name }, index) => (
                        <li
                            key={index}
                            className="flex text-center w-full text-primary text-sm font-semibold"
                        >
                            <Link
                                to={href}
                                title={name}
                                className="w-full"
                                onClick={() => setIsOpen(false)}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
