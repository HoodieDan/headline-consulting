import { navLinks } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import Logo from "@/assets/images/pngs/logo.png";
import { Link } from "react-router";

type INavbar = React.ComponentProps<"nav">;

const Navbar = ({ className }: INavbar) => {
    return (
        <nav
            className={cn(
                "container h-22.5 flex items-center justify-between bg-white px-10 rounded-[1.25rem]",
                className,
            )}
        >
            <Link to="/">
                <img src={Logo} alt="" />
            </Link>

            <ul className="flex items-center gap-10">
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
        </nav>
    );
};

export default Navbar;
