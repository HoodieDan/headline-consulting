import { buttonVariants } from "@/components/ui/button";
import { ourClients } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import { Link } from "react-router";
import ContactUsHero from "@/assets/images/pngs/contact-us.jpg";
import Mail from "@/assets/images/svgs/mail.svg";
import Location from "@/assets/images/svgs/location.svg";
import Phone from "@/assets/images/svgs/phone.svg";

const ContactUs = () => {
    const contactItems = [
        {
            id: 1,
            title: "Email",
            icon: Mail,
            content: "headlineconsulting@gmail.com",
            href: "mailto:headlineconsulting@gmail.com",
        },
        {
            id: 2,
            title: "Office",
            icon: Location,
            content: "24, Isaac Gerald Road, Victoria Island, Lagos",
        },
        {
            id: 3,
            title: "Phone",
            icon: Phone,
            content: "+234 902 467 1200",
            href: "tel:+2349024671200",
        },
    ];
    return (
        <>
            {/* ---------------------  Get in touch Hero  --------------------- */}
            <section className="container pt-section pb-8">
                <div className="space-y-8">
                    <div className="space-y-4 text-center">
                        <h1 className="text-heading text-[3rem] md:text-[3.5rem]">
                            Get in touch
                        </h1>
                        <p className="text-base text-gray-600 max-w-3xl mx-auto">
                            Connect with Headline Consulting to explore tailored solutions for your business needs. Our team is ready to listen, collaborate, and help you move forward with confidence.
                        </p>
                    </div>

                    {/* Hero Image */}
                    <div className="w-full">
                        <img
                            src={ContactUsHero}
                            alt="Office phone on desk"
                            className="w-full h-auto rounded-2xl object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ---------------------  Contact Information  --------------------- */}
            <section className="container py-10">

                <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
                    {contactItems.map(({ id, title, icon: Icon, content, href }) => (
                        <div
                            key={id}
                            className="flex flex-col  space-y-6 bg-[#FAFAFA] p-5 rounded-[20px]"
                        >
                            <div className="rounded-[20px] bg-[#F5F5F5] p-6 w-fit md:mb-20 mb-5 flex items-center justify-center">
                                <img src={Icon} className="w-6 h-6 text-primary" />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-heading text-base sm:mb-8">{title}</h3>

                                {href ? (
                                    <a href={href} className="text-[#023047] text-xs font-semibold hover:underline block">
                                        {content}
                                    </a>
                                ) : (
                                    <p className="text-[#023047] text-xs font-semibold">{content}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------------  Meet Our Clients  --------------------- */}
            <section className="md:px-16 px-4 py-16 bg-primary flex md:flex-row flex-col items-center justify-between md:gap-16 gap-8">
                <div className="space-y-3 shrink-0">
                    <h3 className="text-heading text-[2.5rem] text-frost-white">
                        Meet Our Clients
                    </h3>
                    <p className="text-sm text-ice-white">
                        We partner with forward-thinking businesses
                        <br className="md-br" /> across industries,
                        helping them achieve
                        <br className="md-br" /> remarkable results
                    </p>
                </div>

                <div className="flex flex-wrap items-center md:justify-between justify-center gap-x-16 gap-y-8">
                    {ourClients.map(({ name, img }, index) => (
                        <img
                            key={name + index}
                            src={img}
                            alt={`${name} logo`}
                        />
                    ))}
                </div>
            </section>

            {/* ---------------------  Ready to transform your business? Let's talk.  --------------------- */}
            <section className="py-22.5">
                <div className="flex flex-col gap-6">
                    <div className="space-y-1 text-center">
                        <h2 className="text-heading text-[2rem]">
                            Ready to transform your business? Let's talk.
                        </h2>
                        <p className="text-sm text-gray-600">
                            Contact us if you have any other questions.
                        </p>
                    </div>

                    <Link
                        to="/contact-us"
                        title="Book a Consultation"
                        className={cn(buttonVariants(), "w-fit mx-auto")}
                    >
                        Book a Consultation
                    </Link>
                </div>
            </section>
        </>
    );
};

export default ContactUs;