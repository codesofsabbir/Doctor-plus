'use client'
import { useState } from "react";
import DoctorCard from "./DoctorCard";
const doctors = [
    { name: "Dr. Emily Walker", title: "Pediatricians", image: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/doctor1.jpg" },
    { name: "Dr. Olivia Bennett", title: "Gynecologists", image: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/doctor2.jpg" },
    { name: "Dr. Hellen Low", title: "Gynecologists", image: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/doctor13.jpg" },
    { name: "Dr. Nathan Anderson", title: "Cardiologists", image: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/doctor3.jpg" },
    { name: "Dr. Irene Dermott", title: "Cardiologists", image: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/doctor14.jpg" },
    { name: "Dr. Jasmine Jordan", title: "Orthopedic", image: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/doctor4.jpg" },
    { name: "Dr. Grace Mitchell", title: "Orthopedic", image: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/doctor15.jpg" },
    { name: "Dr. Sussie Wolff", title: "Pediatricians", image: "https://themes.envytheme.com/mavis/wp-content/uploads/2024/04/doctor12.jpg" }
];

const DoctorFilter = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredDoctors = selectedCategory === "All" ? doctors : doctors.filter(doctor => doctor.title === selectedCategory);

    return (
        <div className='w-full flex justify-center mt-10'>
            <div className="mx-auto w-[80%]">
                <div className='hidden md:flex flex-wrap gap-5 justify-center text-xl text-blue-900'>
                    {['All', 'Cardiologists', 'Gynecologists', 'Orthopedic', 'Pediatricians'].map(category => (
                        <button 
                            key={category}
                            className={`cursor-pointer px-5 py-2 rounded-full ${selectedCategory === category ? 'bg-blue-900 text-white' : 'bg-gray-200 text-blue-900'}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className='flex justify-center md:hidden'>
                    <select 
                        className='bg-blue-950 text-2xl px-5 py-2 rounded-full text-white' 
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        value={selectedCategory}
                    >
                        <option value="All">All</option>
                        <option value="Cardiologists">Cardiologists</option>
                        <option value="Gynecologists">Gynecologists</option>
                        <option value="Orthopedic">Orthopedic</option>
                        <option value="Pediatricians">Pediatricians</option>
                    </select>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-7 mt-10'>
                    {filteredDoctors.map((doctor, index) => (
                        <DoctorCard 
                            key={index} 
                            DoctorName={doctor.name} 
                            DoctorTitle={doctor.title} 
                            DoctorImageURL={doctor.image} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorFilter;
