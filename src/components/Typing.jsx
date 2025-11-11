import React, { useState, useEffect } from "react";

function Typing() {
    const texts = [
        "Welcome to My Portfolio",
        "Software Developer.",
        "Mern Stack Developer.",
    ];
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let typingSpeed = isDeleting ? 50 : 150; // speed for typing/deleting
        const fullText = texts[currentIndex];

        const handleTyping = () => {
            setCurrentText((prev) => {
                if (!isDeleting) {
                    // Typing phase
                    const updated = fullText.substring(0, prev.length + 1);
                    if (updated === fullText) {
                        // finished typing, wait 2s before deleting
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                    return updated;
                } else {
                    // Deleting phase
                    const updated = fullText.substring(0, prev.length - 1);
                    if (updated === "") {
                        // finished deleting, go to next text
                        setIsDeleting(false);
                        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
                    }
                    return updated;
                }
            });
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentIndex]);

    return (<span className="">
        {
            currentText.split("").map((char, index) => (
                <span
                    key={index}
                    className="inline-block animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))
        }
    </span>
);
}

export default Typing;