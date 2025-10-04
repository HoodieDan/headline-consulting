import AlexAvatar from "@/assets/images/pngs/alex.png";
import AstraPrimaryImg from "@/assets/images/pngs/astra-primary.png";
import AstraImg from "@/assets/images/pngs/astra.png";
import AtlasImg from "@/assets/images/pngs/atlas.png";
import AudlabsImg from "@/assets/images/pngs/audlabs.png";
import BaseImg from "@/assets/images/pngs/base.png";
import DanielAvatar from "@/assets/images/pngs/daniel.png";
import GraphiteImg from "@/assets/images/pngs/graphite.png";
import ImagineAiImg from "@/assets/images/pngs/imagine-ai.png";
import JordanAvatar from "@/assets/images/pngs/jordan.png";
import LayerImg from "@/assets/images/pngs/layer.png";
import SamanthaAvatar from "@/assets/images/pngs/samantha.png";
import ShapeImg from "@/assets/images/pngs/shape.png";
import DiceFour from "@/assets/images/svgs/DiceFour.svg";
import DoorOpen from "@/assets/images/svgs/DoorOpen.svg";
import DropboxLogo from "@/assets/images/svgs/DropboxLogo.svg";
import Facebook from "@/assets/images/svgs/Facebook.svg";
import FileDoc from "@/assets/images/svgs/FileDoc.svg";
import FilePlus from "@/assets/images/svgs/FilePlus.svg";
import Instagram from "@/assets/images/svgs/Instagram.svg";
import LinkedIn from "@/assets/images/svgs/LinkedIn.svg";
import NavigationArrow from "@/assets/images/svgs/NavigationArrow.svg";
import X from "@/assets/images/svgs/X.svg";

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
        heading: "Business\n Services",
        description:
            "We help organizations refine their strategies, optimize operations, and unlock new opportunities for growth through expert guidance and practical solutions.",
    },
    {
        icon: DropboxLogo,
        heading: "Risk Management\n and Insurance",
        description:
            "We design innovative travel programs and solutions that support business expansion, cultural exchange, and global partnerships.",
    },
    {
        icon: DoorOpen,
        heading: "IT\n Solutions",
        description:
            "Our technology experts help organizations implement, integrate, and manage digital systems that improve efficiency and drive transformation.",
    },
    {
        icon: FilePlus,
        heading: "Financial\n Services",
        description:
            "From financial planning and advisory to risk management, we ensure businesses make smart, data-driven financial decisions for long-term stability.",
    },
    {
        icon: NavigationArrow,
        heading: "Quality\n Resourcing",
        description:
            "We connect businesses with the right talent, tools, and resources to deliver high-quality outcomes and strengthen internal capabilities.",
    },
    {
        icon: FileDoc,
        heading: "Product\n Management",
        description:
            "We support companies in developing, launching, and managing products that meet market needs and achieve commercial success.",
    },
];

export const socialLinks = [
    { name: "X", href: "", icon: X },
    { name: "Facebook", href: "", icon: Facebook },
    { name: "Instagram", href: "", icon: Instagram },
    { name: "LinkedIn", href: "", icon: LinkedIn },
];

export const customerReviews = [
    {
        companyLogo: BaseImg,
        review: `“Headline Consults saved us weeks of design work. The components are beautifully crafted and easy to plug in.”`,
        avatar: AlexAvatar,
        name: "Alex Carter",
        role: "Director, Base",
    },
    {
        companyLogo: GraphiteImg,
        review: `“I've tried dozens of firms, this is by far the cleanest and most versatile one yet.”`,
        avatar: DanielAvatar,
        name: "Daniel White",
        role: "HR Manager, Nova",
    },
    {
        companyLogo: AstraPrimaryImg,
        review: `“The design quality is top-tier. It gave our MVP a polished feel right from day one.”`,
        avatar: SamanthaAvatar,
        name: "Samantha Lee",
        role: "Business Developer, Pixel",
    },
    {
        companyLogo: LayerImg,
        review: `“It's rare to find a firm that works perfectly out of the box. Headline Consulting just gets it right.”`,
        avatar: JordanAvatar,
        name: "Jordan Kim",
        role: "Frontend Engineer, Atlas",
    },
    {
        companyLogo: BaseImg,
        review: `“Headline Consults saved us weeks of design work. The components are beautifully crafted and easy to plug in.”`,
        avatar: AlexAvatar,
        name: "Alex Carter",
        role: "Director, Base",
    },
    {
        companyLogo: GraphiteImg,
        review: `“I've tried dozens of firms, this is by far the cleanest and most versatile one yet.”`,
        avatar: DanielAvatar,
        name: "Daniel White",
        role: "HR Manager, Nova",
    },
    {
        companyLogo: AstraPrimaryImg,
        review: `“The design quality is top-tier. It gave our MVP a polished feel right from day one.”`,
        avatar: SamanthaAvatar,
        name: "Samantha Lee",
        role: "Business Developer, Pixel",
    },
    {
        companyLogo: LayerImg,
        review: `“It's rare to find a firm that works perfectly out of the box. Headline Consulting just gets it right.”`,
        avatar: JordanAvatar,
        name: "Jordan Kim",
        role: "Frontend Engineer, Atlas",
    },
];
