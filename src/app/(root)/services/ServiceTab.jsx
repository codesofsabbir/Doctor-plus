'use client'
import { useState, useEffect } from "react";
import React from 'react'

const tabs = [
    { name: "Facial Procedures", active: true },
    { name: "Body Contouring", active: false },
    { name: "Breast Surgery", active: false },
    { name: "Hair Restoration", active: false },
    { name: "Skin Rejuvenation", active: false },
];

function ServiceTab({ onSelect }) {
    const [activeTab, setActiveTab] = useState(tabs[0].name);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prevTab) => {
                const currentIndex = tabs.findIndex(tab => tab.name === prevTab);
                const nextIndex = (currentIndex + 1) % tabs.length;
                return tabs[nextIndex].name;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Call onSelect only when activeTab changes
    useEffect(() => {
        onSelect(activeTab);
    }, [activeTab, onSelect]);

    return (
        <div className="">
            <span className="text-lg text-[#724060] font-semibold">Our Solutions</span>
            <h2 className="text-xl md:text-5xl md:leading-14 text-blue-950 tracking-wider">
                Explore our Comprehensive Range of <span className="text-[#724060] italic">Surgical and Non-Surgical</span> Cosmetic Procedures
            </h2>
            <div className="p-2 md:p-6 w-full ">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`block w-full text-left py-2 md:py-3 rounded-md md:mb-2 text-base md:text-xl cursor-pointer transition-all duration-500 ${
                            activeTab === tab.name
                                ? "bg-[#f8e7e7] text-[#744362] font-semibold pl-5"
                                : "text-gray-600"
                        }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            <p className="text-base md:text-lg text-blue-950 tracking-wider pb-10">
                Tailored solutions for facial rejuvenation, body contouring, breast enhancement, and more to enhance your natural beauty and confidence.
            </p>
        </div>
    );
}

export default ServiceTab;
