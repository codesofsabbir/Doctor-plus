import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../Button";

import FooterBottom from "./FooterBottom";
export default function Footer() {
  return (
    <>
        <footer className="bg-[#1e1e4a] text-white rounded-[50px]">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-11 gap-14  py-28">
            
            {/* Contact Section */}
            <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <div className="flex flex-col gap-3 py-5">
                <h3 className="text-gray-300 flex gap-5 text-justify text-lg">
                    <strong>Address:</strong>
                    <p>
                        4517 Washington Ave. Manchester, Kentucky 39495
                    </p>
                </h3>
                <h3 className="text-gray-300 flex gap-5 text-lg">
                    <strong>Phone:</strong> 
                    <p>
                        (629) 555-0129
                    </p>
                </h3>
                <h3 className="text-gray-300 flex gap-5 text-lg">
                    <strong>Email:</strong>
                    <p>
                        support@mavis.com
                    </p>
                </h3>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-5">
                <div className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full hover:border-yellow-500 cursor-pointer transition">
                <FaTimes className="text-gray-300" />
                </div>
                <div className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full hover:border-yellow-500 cursor-pointer transition">
                <FaFacebookF className="text-gray-300" />
                </div>
                <div className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full hover:border-yellow-500 cursor-pointer transition">
                <FaInstagram className="text-gray-300" />
                </div>
                <div className="w-9 h-9 flex items-center justify-center border border-gray-400 rounded-full hover:border-yellow-500 cursor-pointer transition">
                <FaLinkedinIn className="text-gray-300" />
                </div>
            </div>

            {/* Get Directions Link */}
            <a
                href="#"
                className="text-yellow-400 font-semibold flex items-center space-x-2 mt-4 hover:text-white hover:tracking-wide transition-all duration-300"
            >
                <span>Get Directions</span>
                <FaArrowRightLong />
            </a>
            </div>

            {/* Services Section */}
            <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">Services</h2>
            <ul className="text-gray-300 space-y-2 py-5">
                <li>Lab Tests</li>
                <li>Telemedicine Services</li>
                <li>Physical Rehabilitation</li>
                <li>Women’s Health</li>
                <li>Urgent Care</li>
                <li>Telehealth Services</li>
                <li>Diagnostic Services</li>
            </ul>
            </div>

            {/* Our Practice Section */}
            <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Our Practice</h2>
            <ul className="text-gray-300 space-y-2 py-5">
                <li>About Us</li>
                <li>Appointment</li>
                <li>Contact Us</li>
                <li>Find A Location</li>
                <li>Doctors</li>
                <li>Our Services</li>
                <li>Doctor Search</li>
            </ul>
            </div>

            {/* Working Hours Section */}
            <div className="bg-[#d5e7b2] text-[#1e1e4a] p-6 rounded-xl lg:col-span-4">
            <h2 className="text-3xl font-bold mb-4">Working Hours</h2>
            <div className="space-y-2 text-base">
                <div className="flex justify-between">
                <span>Mon - Wed</span>
                <span>8:00 AM - 7:00 PM</span>
                </div>
                <hr className="border-gray-400" />
                <div className="flex justify-between">
                <span>Thu</span>
                <span>8:00 AM - 5:00 PM</span>
                </div>
                <hr className="border-gray-400" />
                <div className="flex justify-between">
                <span>Fri</span>
                <span>8:00 AM - 5:00 PM</span>
                </div>
                <hr className="border-gray-400" />
                <div className="flex justify-between">
                <span>Sat - Sun</span>
                <span>8:00 AM - 4:00 PM</span>
                </div>
            </div>

            {/* Book A Visit Button */}
            
            <Button buttonTitle={"Book A Visit"} className="mt-16 mb-5"/>
            </div>

        </div>
        </footer>
        <FooterBottom />
    </>
  );
}
