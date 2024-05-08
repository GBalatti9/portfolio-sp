import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const CustomAccordion = () => {
    return (
        <Accordion type="single" collapsible className="w-5/12 bg-white border shadow-lg p-4">
            <AccordionItem value="item-1">
                <AccordionTrigger>Fui viral?</AccordionTrigger>
                <AccordionContent>
                    No
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Soy gracioso?</AccordionTrigger>
                <AccordionContent>
                    Tampoco
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Algo mas sobre mí?</AccordionTrigger>
                <AccordionContent>
                    Le vendí un auto a Pachi de 5ta a fondo
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default CustomAccordion;