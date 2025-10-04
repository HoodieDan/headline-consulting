import LightBulbImg from "@/assets/images/pngs/light-bulb.png";
import { buttonVariants } from "@/components/ui/button";
import { impactServices } from "@/lib/data/our-services";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

const OurServices = () => {
    return (
        <>
            {/* ---------------------  Hero  --------------------- */}
            <header className="container pt-section pb-25 flex flex-col md:gap-16 gap-8">
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-heading text-[3.5rem]">
                        Solutions That Drive
                        <br className="md-br" /> Growth and Impact.
                    </h1>
                    <p>
                        At Headline Consulting, our services are built to solve
                        real challenges and create
                        <br className="md-br" /> lasting results. From strategy
                        to execution, we partner with you to drive sustainable
                        <br className="md-br" /> growth.
                    </p>
                    <Link
                        to=""
                        title="Book a Consultation"
                        className={cn(buttonVariants(), "w-fit mx-auto mt-4")}
                    >
                        Book a Consultation
                    </Link>
                </div>

                <figure className="md:h-178 h-100 rounded-3xl overflow-hidden">
                    <img
                        src={LightBulbImg}
                        alt=""
                        className="size-full object-cover"
                    />
                </figure>
            </header>

            {/* ---------------------  Strategic Guidance, Lasting Impact.  --------------------- */}
            <section className="container py-25">
                <div className="space-y-2 text-center">
                    <h2 className="text-heading text-[2.5rem]">
                        Strategic Guidance, Lasting Impact.
                    </h2>
                    <p>
                        At Headline Consulting, we provide a wide range of
                        services designed to help organizations innovate, scale,
                        <br className="md-br" />
                        and succeed. Whether you're seeking strategic guidance,
                        technology support, or industry-specific expertise,
                        <br className="md-br" /> our team delivers solutions
                        tailored to your unique needs.
                    </p>
                </div>

                <div className="md:mt-20 mt-10 flex flex-col md:gap-20 gap-10">
                    {impactServices.map(
                        ({ description, heading, image }, index) => (
                            <div
                                key={heading + index}
                                className="flex md:flex-row md:even:flex-row-reverse flex-col items-start md:justify-between md:gap-30 gap-4"
                            >
                                <figure className="shrink-0">
                                    <img
                                        src={image}
                                        alt=""
                                        className="size-full object-cover"
                                    />
                                </figure>

                                <div className="space-y-3">
                                    <h4 className="font-general-sans font-medium text-2xl text-primary leading-[140%] tracking-[-0.5px]">
                                        {heading}
                                    </h4>
                                    <p className="text-lg leading-[150%] tracking-[-0.5px] whitespace-pre-line">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ),
                    )}
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
                        <div className="flex flex-col justify-end gap-3 p-6 md:h-auto h-100 bg-[linear-gradient(360deg,rgba(2,48,71,0.75)_17.17%,rgba(255,255,255,0)_50%),url(@/assets/images/jpegs/trusted-expertise.jpg)] bg-no-repeat bg-cover bg-center rounded-xxl">
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
                            <div className="flex flex-col justify-end gap-3 p-6 md:h-auto h-100 bg-[linear-gradient(360deg,rgba(2,48,71,0.75)_17.17%,rgba(255,255,255,0)_50%),url(@/assets/images/jpegs/fast-sevices-2.jpg)] bg-no-repeat bg-cover bg-center rounded-xxl md:flex-1">
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
                            <div className="flex flex-col justify-end gap-3 p-6 md:h-auto h-100 bg-[linear-gradient(360deg,rgba(2,48,71,0.75)_17.17%,rgba(255,255,255,0)_50%),url(@/assets/images/jpegs/support-2.jpg)] bg-no-repeat bg-cover bg-center rounded-xxl md:flex-1">
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

            {/* ---------------------  Ready to transform your business? Let’s talk.  --------------------- */}
            <section className="py-22.5">
                <div className="flex flex-col gap-6">
                    <div className="space-y-1 text-center">
                        <h2 className="text-heading text-[2rem]">
                            Ready to transform your business? Let's talk.
                        </h2>
                        <p className="text-sm">
                            Contact us if you have any other questions.
                        </p>
                    </div>

                    <Link
                        to="/contact-us"
                        title="Contact us"
                        className={cn(buttonVariants(), "w-fit mx-auto")}
                    >
                        Book a Consultation
                    </Link>
                </div>
            </section>
        </>
    );
};

export default OurServices;
