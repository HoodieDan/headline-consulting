import FastServicesImg from "@/assets/images/jpegs/fast-sevices.jpg";
import SupportImg from "@/assets/images/jpegs/support.jpg";
import TrustedExpertiseImg from "@/assets/images/jpegs/trusted-expertise.jpg";
import CustomerReviewCorousel from "@/components/customer-review-corousel";
import Navbar from "@/components/navbar";
import { buttonVariants } from "@/components/ui/button";
import { ourClients, ourServices } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

export default function Home() {
    return (
        <main>
            {/* ---------------------  Hero  --------------------- */}
            <header className="h-dvh pt-10 bg-[linear-gradient(0deg,#02304780,#02304780),url(@/assets/images/jpegs/hero-bg.jpg)] bg-no-repeat bg-cover flex flex-col">
                <Navbar />

                <div className="h-full flex flex-col justify-center gap-8">
                    <div className="space-y-4 text-white text-center">
                        <h1 className="text-heading text-white text-[3.5rem]">
                            Helping You Navigate Today,
                            <br /> While Building Tomorrow.
                        </h1>
                        <p>
                            From market analysis to operational excellence, we
                            partner with you to develop
                            <br className="md:inline hidden" /> bespoke
                            solutions that deliver sustainable impact and
                            accelerate your success.
                        </p>
                    </div>
                    <Link
                        to="/contact-us"
                        title="Contact us"
                        className={cn(
                            buttonVariants({ variant: "secondary" }),
                            "w-fit mx-auto",
                        )}
                    >
                        Contact us
                    </Link>
                </div>
            </header>

            {/* ---------------------  Why Choose Headline Consulting?  --------------------- */}
            <section className="bg-[url(@/assets/images/pngs/diamond-vector.png),url(@/assets/images/pngs/diamond-vector.png)] bg-no-repeat bg-position-[top,bottom] py-25">
                <div className="space-y-4 text-center">
                    <h2 className="text-heading text-[3.125rem]">
                        Why Choose Headline Consulting?
                    </h2>
                    <p>
                        We are here to provide easily, accessible, reliable and
                        innovative solutions,
                        <br className="md:inline hidden" /> supported by
                        technology and a team of experienced experts.
                    </p>
                </div>

                <div className="container flex flex-col gap-2 mt-20">
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="md:flex-2 p-8 rounded-xxl bg-ice-white flex flex-col gap-8">
                            <div className="space-y-3">
                                <h4 className="text-2xl text-primary font-medium font-general-sans">
                                    Trusted Expertise
                                </h4>
                                <p className="text-sm">
                                    Access to a multi-disciplinary team of
                                    seasoned consultants, thought leaders, and
                                    industry specialists at anytime, including
                                    times of emergencies.
                                </p>
                            </div>

                            <figure className="md:h-105">
                                <img
                                    src={TrustedExpertiseImg}
                                    alt=""
                                    className="size-full object-cover rounded-xxl"
                                />
                            </figure>
                        </div>

                        <div className="md:flex-1 p-8 rounded-xxl bg-ice-white flex flex-col gap-8">
                            <figure className="size-full">
                                <img
                                    src={FastServicesImg}
                                    alt=""
                                    className="size-full object-cover rounded-xxl"
                                />
                            </figure>

                            <div className="space-y-3">
                                <h4 className="text-2xl text-primary font-medium font-general-sans">
                                    Fast and Safe Services
                                </h4>
                                <p className="text-sm">
                                    We focus on delivering tangible outcomes
                                    that translate into real growth, increased
                                    profitability, and long-term value for your
                                    business, Consultations without long queues
                                    with strict personal data protection.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-xxl bg-ice-white flex flex-col gap-8">
                        <figure className="md:h-110">
                            <img
                                src={SupportImg}
                                alt=""
                                className="size-full object-cover rounded-xxl"
                            />
                        </figure>

                        <div className="space-y-3">
                            <h4 className="text-2xl text-primary font-medium font-general-sans">
                                24/7 Support
                            </h4>
                            <p className="text-sm">
                                Your success is our priority. We foster
                                collaborative partnerships, ensuring your goals
                                are met with transparency and dedication at
                                anytime, including times of emergencies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------  Meet Our Clients  --------------------- */}
            <section className="p-16 bg-primary flex items-center justify-between">
                <div className="space-y-3">
                    <h3 className="text-heading text-[2.5rem] text-frost-white">
                        Meet Our Clients
                    </h3>
                    <p className="text-sm text-ice-white">
                        We partner with forward-thinking businesses
                        <br className="md:inline hidden" /> across industries,
                        helping them achieve
                        <br className="md:inline hidden" /> remarkable results
                    </p>
                </div>

                <div className="flex items-center gap-16">
                    {ourClients.map(({ name, img }, index) => (
                        <img key={name + index} src={img} alt="" />
                    ))}
                </div>
            </section>

            {/* ---------------------  Our Services  --------------------- */}
            <section className="container py-25">
                <div className="space-y-2">
                    <h2 className="text-heading text-[2.5rem]">Our Services</h2>
                    <p>
                        We deliver strategic consulting solutions designed to
                        help businesses grow, adapt, and succeed, our services
                        are built around your unique goals.
                    </p>
                </div>

                <div className="mt-10 grid md:grid-cols-3 gap-3">
                    {ourServices.map(
                        ({ icon, description, heading }, index) => (
                            <div
                                key={heading + index}
                                className="flex flex-col gap-4 p-8 rounded-xxl bg-ice-white"
                            >
                                <img src={icon} alt="" className="size-8" />
                                <h4 className="text-2xl font-medium text-primary leading-[140%] whitespace-pre-line">
                                    {heading}
                                </h4>
                                <p className="text-sm leading-[150%]">
                                    {description}
                                </p>
                            </div>
                        ),
                    )}
                </div>
            </section>

            {/* ---------------------  Subscribe to our newsletter  --------------------- */}
            <section className="py-22.5">
                <div className="container p-20 bg-ice-white md:bg-[url(@/assets/images/pngs/bars.png)] bg-no-repeat bg-position-[calc(100%-80px)_100%] flex flex-col gap-8 rounded-xxl">
                    <div className="space-y-2">
                        <h3 className="text-heading text-[2.5rem]">
                            Subscribe to our newsletter
                        </h3>
                        <p>
                            Get the latest updates and exclusive offers from
                            Headline Consulting.
                        </p>
                    </div>

                    <Link
                        to=""
                        className={cn(
                            buttonVariants({ variant: "secondary" }),
                            "w-fit",
                        )}
                    >
                        Learn more
                    </Link>
                </div>
            </section>

            {/* ---------------------  Our Customer Reviews  --------------------- */}
            <section className="container py-25">
                <div className="space-y-2">
                    <h2 className="text-heading text-[2.5rem]">
                        Our Customer Reviews
                    </h2>
                    <p>
                        See what clients are saying about their experience with
                        Headline Consulting.
                    </p>
                </div>

                <CustomerReviewCorousel className="mt-15" />
            </section>
        </main>
    );
}
