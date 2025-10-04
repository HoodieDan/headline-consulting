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
        <nav className={cn("container", className)}>
            <div className="relative h-22.5 flex items-center justify-between bg-white md:px-10 px-4 rounded-[1.25rem]">
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

                {/* Mobile Nav */}
                <div
                    className={cn(
                        "absolute bottom-0 inset-x-0 translate-y-[calc(100%+(var(--spacing)*2))] overflow-hidden rounded-[1.25rem] px-4 py-10 bg-white md:hidden transition-all duration-300",
                        isOpen
                            ? "[clip-path:inset(0_0_0_0)]"
                            : "[clip-path:inset(0_0_100%_0)]",
                    )}
                >
                    <ul className={cn("flex flex-col gap-8")}>
                        {navLinks.map(({ href, name }, index) => (
                            <li
                                key={index}
                                className="flex text-center w-full text-primary text-sm font-medium"
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
            </div>
        </nav>
    );
};

export default Navbar;
