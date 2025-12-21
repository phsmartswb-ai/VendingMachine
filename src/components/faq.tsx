import { ChevronsDown, ChevronsUp } from 'lucide-react';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { motion } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "How does the machine placement process work?",
        answer:
            "Getting started is simple! Contact our team, and we'll conduct a site assessment to determine the best location for your vending machine. Once approved, we handle the entire installation process—delivery, setup, and activation—at no cost to you. The whole process typically takes 5-7 business days.",
    },
    {
        question: "Is there any cost to have a machine placed at my location?",
        answer:
            "No upfront costs or hidden fees! We provide, install, and maintain the vending machines completely free of charge. Our revenue comes from product sales, so there's zero financial risk for property owners or managers.",
    },
    {
        question: "Who handles restocking and maintenance?",
        answer:
            "Our dedicated team manages everything. We use smart monitoring technology to track inventory levels in real-time, ensuring machines are restocked before running low. Regular maintenance and cleaning are performed on a scheduled basis, and our 24/7 support line handles any urgent issues.",
    },
    {
        question: "Can I customize the product selection for my location?",
        answer:
            "Absolutely! We tailor product selections based on your audience and preferences. Whether you need healthy options for a gym, kid-friendly snacks for a school, or premium beverages for an office building, we'll curate the perfect mix. You can request changes anytime.",
    },
    {
        question: "What payment methods do the machines accept?",
        answer:
            "Our modern machines support multiple payment options: contactless cards, mobile payments (Apple Pay, Google Pay), UPI, and traditional cash. The fully digital, touch-free experience ensures quick and convenient transactions for all users.",
    },
    {
        question: "What happens if a machine malfunctions or a product gets stuck?",
        answer:
            "We've got you covered! Our machines feature smart sensors that detect issues instantly. Users can report problems via QR code on the machine, and our support team responds within hours. Refunds are processed automatically for any failed transactions.",
    },
    {
        question: "What are the minimum requirements for machine placement?",
        answer:
            "We require a location with a standard electrical outlet, adequate space (approximately 3x3 feet), and a minimum expected foot traffic. Ideal locations include lobbies, break rooms, common areas, and high-traffic corridors. Our team will assess suitability during the site visit.",
    },
    {
        question: "How often are the machines restocked?",
        answer:
            "Restocking frequency depends on consumption patterns at your location. High-traffic areas may receive weekly visits, while others are restocked bi-weekly. Our IoT-enabled machines send real-time alerts, so we always arrive before stock runs out.",
    },
];

export const FAQ = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <section id="benefits" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
                        Frequently Asked Questions
                    </h2>

                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqData.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-card border border-border rounded-xl px-6 shadow-soft data-[state=open]:shadow-card transition-shadow duration-300 py-4"
                            >
                                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary hover:no-underline py-5">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    {/* {faqData.map((item, index) => (
                        <div key={index} className="bg-gradient-to-br faq-item from-blue-600 mb-4 px-4 py-4 rounded-3xl text-white to-blue-800"
                            onClick={() => setExpanded(expanded === index ? null : index)}>
                            <button
                                className="faq-question flex w-100% justify-between items-center cursor-pointer"
                            >
                                {item.question}
                                {
                                    expanded === index ? (
                                        <span>
                                            <ChevronsDown />
                                        </span>
                                    ) : (
                                        <ChevronsUp />
                                    )
                                }
                            </button>

                            {expanded === index && (
                                <p className="faq-answer">{item.answer}</p>
                            )}
                        </div>
                    ))} */}
                </motion.div>
            </div>
        </section >
        // <section className="py-20 lg:py-28 bg-muted/30">
        //     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        //         <motion.div
        //             initial={{ opacity: 0, y: 20 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             viewport={{ once: true }}
        //             transition={{ duration: 0.6 }}
        //             className="text-center mb-12 lg:mb-16"
        //         >
        //             <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
        //                 Got Questions?
        //             </span>
        //             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        //                 Frequently Asked{" "}
        //                 <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        //                     Questions
        //                 </span>
        //             </h2>
        //             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        //                 Everything you need to know about partnering with us for vending machine placement.
        //             </p>
        //         </motion.div>

        //         <motion.div
        //             initial={{ opacity: 0, y: 30 }}
        //             whileInView={{ opacity: 1, y: 0 }}
        //             viewport={{ once: true }}
        //             transition={{ duration: 0.6, delay: 0.2 }}
        //             className="max-w-3xl mx-auto"
        //         >
        //             <Accordion type="single" collapsible className="space-y-4">
        //                 {faqData.map((faq, index) => (
        //                     <AccordionItem
        //                         key={index}
        //                         value={`item-${index}`}
        //                         className="bg-card border border-border rounded-xl px-6 shadow-soft data-[state=open]:shadow-card transition-shadow duration-300"
        //                     >
        //                         <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary hover:no-underline py-5">
        //                             {faq.question}
        //                         </AccordionTrigger>
        //                         <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
        //                             {faq.answer}
        //                         </AccordionContent>
        //                     </AccordionItem>
        //                 ))}
        //             </Accordion>
        //         </motion.div>
        //     </div>
        // </section>
    );
};