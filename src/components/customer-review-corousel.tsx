import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { customerReviews } from "@/lib/data/home";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

type ICustomerReviewCorousel = React.ComponentProps<typeof Carousel>;

const CustomerReviewCorousel = ({ className }: ICustomerReviewCorousel) => {
    return (
        <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[
                Autoplay({
                    delay: 10000,
                }),
            ]}
            className={cn(className)}
        >
            <CarouselContent className="-ml-2">
                {customerReviews.map(
                    ({ avatar, companyLogo, name, review, role }, index) => (
                        <CarouselItem
                            key={name + index}
                            className="lg:basis-1/4 md:basis-1/2 pl-2"
                        >
                            <div className="h-105 flex flex-col justify-between p-8 rounded-xxl bg-ice-white">
                                <figure>
                                    <img
                                        src={companyLogo}
                                        alt={`${name} company logo`}
                                        className="object-cover"
                                    />
                                </figure>
                                <p className="text-steel-gray leading-[150%] tracking-[-0.3px]">
                                    {review}
                                </p>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={avatar}
                                        alt={`${name} avatar`}
                                        className="size-8"
                                    />
                                    <div>
                                        <h6 className="text-primary font-general-sans font-medium leading-[150%] tracking-[-0.3px]">
                                            {name}
                                        </h6>
                                        <span className="text-sm leading-[150%] tracking-[-0.3px]">
                                            {role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ),
                )}
            </CarouselContent>

            <div className="mt-15 flex items-center gap-2">
                <CarouselPrevious
                    variant="secondary"
                    className="static -translate-y-0"
                />
                <CarouselNext
                    variant="secondary"
                    className="static -translate-y-0"
                />
            </div>
        </Carousel>
    );
};

export default CustomerReviewCorousel;
