import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { motion } from 'framer-motion';

const Faq = () => {
    const faqs = [
        {
            "question": "How do I place an order?",
            "answer": "To place an order, browse the menu, add items to your cart, and proceed to checkout."
        },
        {
            "question": "Can I track my food order?",
            "answer": "Yes, you can track your order in real-time from your account's order history section."
        },
        {
            "question": "Do you offer home delivery?",
            "answer": "Yes, we provide home delivery services within our service areas."
        },
        {
            "question": "How can I make a reservation?",
            "answer": "You can book a table by visiting the 'Reservations' page and selecting your preferred date and time."
        },
        {
            "question": "Are there any discounts or special offers available?",
            "answer": "Yes, we offer special promotions and discounts. Check the 'Sales Promotion' page for current deals."
        },
        {
            "question": "Can I customize my food order?",
            "answer": "Yes, you can add special instructions while placing your order to customize your meal."
        },
        {
            "question": "How do I contact customer support?",
            "answer": "You can reach our support team via the 'Contact Us' page for assistance."
        }
    ]
    ;

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container max-w-6xl mx-auto p-6 mb-10">
            <motion.h2
                className="text-center my-8 text-3xl font-bold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                Frequently Ask Questions
            </motion.h2>
            
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item border rounded-lg">
                        <button
                            className="w-full text-left p-4 font-semibold bg-base-100 hover:bg-base-300"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                        </button>
                        <Collapse isOpened={openIndex === index}>
                            <div className="p-4 bg-base-200 border-t"> <strong>Answer:</strong> {faq.answer}</div>
                        </Collapse>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;

