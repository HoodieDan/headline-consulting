import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data/home";

const FAQs = () => {
    return (
        <Accordion
            type="single"
            defaultValue="item-0"
            collapsible
            className="grid gap-3"
        >
            {faqs.map(({ answer, question }, index) => (
                <AccordionItem
                    key={question + index}
                    value={`item-${index}`}
                    className="bg-soft-snow data-[state=open]:bg-ice-white"
                >
                    <AccordionTrigger className="text-primary [&>svg]:text-primary">
                        {question}
                    </AccordionTrigger>
                    <AccordionContent className="whitespace-pre-line">
                        {answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default FAQs;
