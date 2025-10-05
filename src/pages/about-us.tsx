import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router";
import Makanju from "@/assets/images/pngs/tubi-makanjuola.jpg";

const AboutUs = () => {
    const teamMembers = [
        {
            name: "Makanjuola Tubi",
            role: "Founder & CEO",
            image: Makanju,
            bgColor: "bg-slate-800"
        },
        {
            name: "Chloe Adams",
            role: "CTO",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            bgColor: "bg-slate-100"
        },
        {
            name: "Grace Miller",
            role: "Head of Product",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
            bgColor: "bg-amber-50"
        },
        {
            name: "Benjamin Ross",
            role: "Backend Engineer",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
            bgColor: "bg-stone-300"
        },
        {
            name: "Elijah Scott",
            role: "Data Scientist",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
            bgColor: "bg-slate-100"
        },
        {
            name: "Scarlett Bennett",
            role: "Marketing Manager",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
            bgColor: "bg-amber-200"
        }
    ];

    const coreValues = [
        {
            title: "Collaboration",
            description: "We see ourselves as partners on your journey. By engaging and working closely with you, we create solutions that reflects your unique goals."
        },
        {
            title: "Client-Centricity",
            description: "Our clients are the heart of everything we do. We tailor our strategies to meet your specific needs and align with your vision."
        },
        {
            title: "Innovation",
            description: "In our constantly evolving world, we embrace strategies, and technologies to stay ahead and create forward-thinking solutions that are sustainable for the future."
        },
        {
            title: "Excellence",
            description: "Through diligence, expertise, and a passion for results, we go beyond expectations to ensure our clients achieve lasting success."
        }
    ];

    return (
        <>
            {/* ---------------------  Hero Section  --------------------- */}
            <section className="pb-20 md:pb-25  pt-section">
                <div className="container">
                    <div className="space-y-8">
                        <div className="space-y-4 text-center max-w-4xl mx-auto">
                            <h1 className="text-heading text-[2.5rem] md:text-[3rem] leading-[120%]">
                                We Take Pride in Delivering
                                <br />
                                Exceptional Results.
                            </h1>
                            <p className="text-base text-[#7C7C7C] max-w-4xl mx-auto">
                                Headline Consulting is a team of experienced strategists, innovators, and industry experts passionate about delivering impact. We combine global best practices with deep local insights to create tailored solutions that work for businesses of all sizes, from startups to established enterprises.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <Link
                                to="/contact-us"
                                title="Contact Us"
                                className={cn(buttonVariants())}
                            >
                                Contact Us
                            </Link>
                        </div>

                        {/* Hero Image */}
                        <div className="w-full">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
                                alt="Business strategy chart"
                                className="w-full h-auto rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------  Our Vision  --------------------- */}
            <section className="pt-16 bg-[#F8FDFF]">
                <div className="container">
                    <div className="space-y-3">
                        <h2 className="text-heading text-[2.5rem] leading-[120%]">
                            Our Vision
                        </h2>
                        <p className="text-base text-[#7C7C7C]">
                            "To be the trusted partner that empowers organizations to grow sustainably, embrace innovation, and lead confidently in their industries."
                        </p>
                    </div>
                    <div className="space-y-3 mt-20">
                        <h2 className="text-heading text-[2.5rem] leading-[120%]">
                            Our Mission
                        </h2>
                        <p className="text-base text-[#7C7C7C]">
                            "At Headline Consulting, we deliver tailored strategies, actionable insights, and practical solutions that help businesses solve complex challenges, unlock opportunities, and achieve measurable success."
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------------------  Our Mission & Build the Future  --------------------- */}
            <section className="pb-16">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <h3 className="text-heading text-[2rem] leading-[120%]">
                                        Build the Future
                                        <br />
                                        With Us
                                    </h3>
                                    <p className="text-base text-[#7C7C7C] md:max-w-xs">
                                        Join a team of passionate thinkers, makers, and doers. Help shape products that matter, while growing your career.
                                    </p>
                                </div>

                                <Link
                                    to="/contact-us"
                                    title="Contact Us"
                                    className={cn(buttonVariants())}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Image Grid */}
                        <div className="overflow-hidden">
                            <div className="grid grid-cols-3 gap-3 mt-16 overflow-hidden -mb-10">
                                <div className="space-y-2 -mt-18">
                                    <img
                                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop"
                                        alt="Team collaboration"
                                        className="w-full sm:h-62 h-44 object-cover rounded-xl"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
                                        alt="Business meeting"
                                        className="w-full sm:h-62 h-44 object-cover rounded-xl"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop"
                                        alt="Team discussion"
                                        className="w-full sm:h-62 h-44 object-cover rounded-xl"
                                    />
                                </div>
                                <div className="space-y-2 -mt-24">
                                    <img
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                                        alt="Office workspace"
                                        className="w-full sm:h-62 h-44 object-cover rounded-xl"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=300&fit=crop"
                                        alt="Team meeting"
                                        className="w-full sm:h-62 h-44 object-cover rounded-xl"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop"
                                        alt="Presentation"
                                        className="w-full sm:h-62 h-44 object-cover rounded-xl"
                                    />
                                </div>
                                <div className="space-y-2 -mt-18">
                                    <img
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                                        alt="Office workspace"
                                        className="w-full sm:h-62 h-44 object-cover rounded-xl"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=300&fit=crop"
                                        alt="Team meeting"
                                        className="w-full sm:h-62 h-44 object-cover rounded-xl"
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop"
                                        alt="Presentation"
                                        className="w-full sm:h-62 h-44 object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ---------------------  Our Core Values  --------------------- */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <div className="space-y-3 py-16">
                        <h2 className="text-heading text-[2.5rem] leading-[120%]">
                            Our Core Values
                        </h2>
                        <p className="text-base text-[#7C7C7C]">
                            The principles that guide every decision, every partnership, and every solution we deliver. At Headline Consulting, our values are not just words, they are the standard we live by.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left Column - Values */}
                        <div className="space-y-8">

                            <div className="md:space-y-22 space-y-10">
                                {coreValues.map((value, index) => (
                                    <div key={index} className="space-y-2">
                                        <h3 className="text-lg font-medium text-primary">
                                            {value.title}
                                        </h3>
                                        <p className="text-base text-[#7C7C7C] leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="w-full">
                            <img
                                src="https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?w=700&h=800&fit=crop"
                                alt="Balanced stones representing core values"
                                className="w-full h-auto rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------  Meet our team  --------------------- */}
            <section className="py-20 bg-[#F8FDFF]">
                <div className="container">
                    <div className="space-y-12">
                        <div className="space-y-3 text-center">
                            <h2 className="text-heading text-[2.5rem] leading-[120%]">
                                Meet our team
                            </h2>
                            <p className="text-base text-[#5E5E5E] max-w-4xl mx-auto  mb-10">
                                Our strength lies in our people. At Headline Consulting, we bring together a team of experienced professionals whose expertise, dedication, and collaborative spirit drive meaningful results for our clients.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 max-w-2xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="space-y-4">
                                    <div className={cn("rounded-2xl overflow-hidden sm:h-[250px]", member.bgColor)}>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="space-y-0.5">
                                        <h3 className="text-lg font-medium text-primary">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-[#7C7C7C]">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------  Why Choose Us?  --------------------- */}
            <section className="py-25 bg-primary">
                <div className="container flex md:flex-row flex-col items-start md:gap-15 gap-8 text-white">
                    <div className="space-y-3 shrink-0">
                        <h4 className="text-heading text-white text-[2.5rem] leading-[120%]">
                            Why Choose Us?
                        </h4>
                        <p className="text-sm leading-[150%] tracking-[-0.2px]">
                            We are here to provide easily, accessible, reliable
                            <br className="md-br" />
                            and innovative solutions, supported by technology
                            <br className="md-br" />
                            and a team of experienced experts.
                        </p>
                    </div>

                    <div className="md:h-125 flex md:flex-row flex-col gap-3">
                        <div className="flex flex-col justify-end gap-3 p-6 md:h-auto h-100 bg-[linear-gradient(360deg,rgba(2,48,71,0.75)_17.17%,rgba(255,255,255,0)_50%),url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop)] bg-no-repeat bg-cover bg-center rounded-xxl">
                            <h5 className="text-2xl font-medium font-general-sans leading-[140%]">
                                Trusted Expertise
                            </h5>
                            <p className="text-sm leading-[150%] tracking-[-0.2px]">
                                We focus on delivering tangible outcomes that
                                translate into real growth, increased
                                profitability, and long-term value for your
                                business, Consultations without long queues with
                                strict personal data protection.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col justify-end gap-3 p-6 md:h-auto h-100 bg-[linear-gradient(360deg,rgba(2,48,71,0.75)_17.17%,rgba(255,255,255,0)_50%),url(https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop)] bg-no-repeat bg-cover bg-center rounded-xxl md:flex-1">
                                <h5 className="text-2xl font-medium font-general-sans leading-[140%]">
                                    Fast and Safe Services
                                </h5>
                                <p className="text-sm leading-[150%] tracking-[-0.2px]">
                                    We focus on delivering tangible outcomes
                                    that translate into real growth, increased
                                    profitability, and long-term value for your
                                    business, Consultations without long queues
                                    with strict personal data protection.
                                </p>
                            </div>
                            <div className="flex flex-col justify-end gap-3 p-6 md:h-auto h-100 bg-[linear-gradient(360deg,rgba(2,48,71,0.75)_17.17%,rgba(255,255,255,0)_50%),url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop)] bg-no-repeat bg-cover bg-center rounded-xxl md:flex-1">
                                <h5 className="text-2xl font-medium font-general-sans leading-[140%]">
                                    24/7 Support
                                </h5>
                                <p className="text-sm leading-[150%] tracking-[-0.2px]">
                                    We focus on delivering tangible outcomes
                                    that translate into real growth, increased
                                    profitability, and long-term value for your
                                    business, Consultations without long queues
                                    with strict personal data protection.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------  Ready to transform your business? Let's talk.  --------------------- */}
            <section className="py-22.5">
                <div className="flex flex-col gap-6">
                    <div className="space-y-1 text-center">
                        <h2 className="text-heading text-[2rem]">
                            Ready to transform your business? Let's talk.
                        </h2>
                        <p className="text-sm text-[#7C7C7C]">
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

export default AboutUs;