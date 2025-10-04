import LogoBg from "@/assets/images/pngs/logo-bg.png";
import { navLinks, socialLinks } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import { Link } from "react-router";

const Footer = ({ className }: React.ComponentProps<"footer">) => {
    return (
        <footer className={cn("pt-12 pb-5 bg-primary", className)}>
            <div className="container flex flex-col gap-10 text-ice-white">
                <div className="flex flex-col gap-16">
                    <Link to="/" className="w-fit">
                        <img src={LogoBg} alt="Headline Consulting logo" />
                    </Link>

                    <div className="flex md:flex-row flex-col md:items-center justify-between md:gap-8 gap-16">
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-8 gap-4">
                            {navLinks.slice(1).map(({ href, name }, index) => (
                                <li key={index} className="text-sm font-medium">
                                    <Link to={href} title={name}>
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="flex items-center gap-4">
                            {socialLinks.map(({ href, name, icon }, index) => (
                                <li key={index}>
                                    <Link to={href} title={name}>
                                        <img
                                            src={icon}
                                            alt={`${name} icon`}
                                            className="size-4"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="h-10 flex md:items-end md:justify-end border-t border-secondary">
                    <div className="flex items-center gap-3 text-xs">
                        <span>© 2025 Headline Consulting</span>
                        <Dot className="size-3" />
                        <Link to="" title="Terms">
                            Terms
                        </Link>
                        <Dot className="size-3" />
                        <Link to="" title="Privacy">
                            Privacy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
