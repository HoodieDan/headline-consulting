import AstraImg from "@/assets/images/pngs/astra.png";
import AtlasImg from "@/assets/images/pngs/atlas.png";
import AudlabsImg from "@/assets/images/pngs/audlabs.png";
import ImagineAiImg from "@/assets/images/pngs/imagine-ai.png";
import ShapeImg from "@/assets/images/pngs/shape.png";
import DiceFour from "@/assets/images/svgs/DiceFour.svg";
import DoorOpen from "@/assets/images/svgs/DoorOpen.svg";
import DropboxLogo from "@/assets/images/svgs/DropboxLogo.svg";
import FileDoc from "@/assets/images/svgs/FileDoc.svg";
import FilePlus from "@/assets/images/svgs/FilePlus.svg";
import NavigationArrow from "@/assets/images/svgs/NavigationArrow.svg";

export const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/our-services" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
];

export const ourClients = [
    { name: "Astra", img: AstraImg },
    { name: "Atlas", img: AtlasImg },
    { name: "Audlabs", img: AudlabsImg },
    { name: "Imagine AI", img: ImagineAiImg },
    { name: "Shape", img: ShapeImg },
];

export const ourServices = [
    {
        icon: DiceFour,
        heading: "Business Services",
        description:
            "We help organizations refine their strategies, optimize operations, and unlock new opportunities for growth through expert guidance and practical solutions.",
    },
    {
        icon: DropboxLogo,
        heading: "Risk Management and Insurance",
        description:
            "We design innovative travel programs and solutions that support business expansion, cultural exchange, and global partnerships.",
    },
    {
        icon: DoorOpen,
        heading: "IT Solutions",
        description:
            "Our technology experts help organizations implement, integrate, and manage digital systems that improve efficiency and drive transformation.",
    },
    {
        icon: FilePlus,
        heading: "Financial Services",
        description:
            "From financial planning and advisory to risk management, we ensure businesses make smart, data-driven financial decisions for long-term stability.",
    },
    {
        icon: NavigationArrow,
        heading: "Quality Resourcing",
        description:
            "We connect businesses with the right talent, tools, and resources to deliver high-quality outcomes and strengthen internal capabilities.",
    },
    {
        icon: FileDoc,
        heading: "Product Management",
        description:
            "We support companies in developing, launching, and managing products that meet market needs and achieve commercial success.",
    },
];
