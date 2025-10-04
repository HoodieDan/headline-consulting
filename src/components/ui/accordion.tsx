import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

function Accordion({
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
    return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn("px-6 py-5.5 flex flex-col gap-3 rounded-[0.75rem]", className)}
            {...props}
        />
    );
}

function AccordionTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start gap-3 rounded-md text-left font-medium transition-all outline-none cursor-pointer focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:-rotate-90",
                    className,
                )}
                {...props}
            >
                <ChevronRight className="text-muted-foreground pointer-events-none size-5 shrink-0 translate-y-0.5 transition-transform duration-200" />
                {children}
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm leading-[150%] tracking-[-0.2px]"
            {...props}
        >
            <div className={cn("pl-8", className)}>{children}</div>
        </AccordionPrimitive.Content>
    );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
