import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="bg-black w-full flex md:flex-row flex-col justify-evenly items-start p-5 xl:p-20 lg:p-28">
				<div className="p-5 ">
					<ul>
						<p className="text-white font-bold text-4xl pb-6 xl:text-8xl lg:text-7xl sm:text-5xl">
							Let{"`"}s<span className="text-blue-600">Talk</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl text-white cursor-pointer hover:text-yellow-900" />
							<FaTwitter className="text-2xl text-white cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl text-white cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl text-white cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-3xl pb-4">Product</p>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Stocks
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Futures & Options
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Mutual Funds
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Fixed deposits
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-unisans font-bold text-3xl pb-4">Company</p>
						<li className="text-white font-unisans text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About
						</li>
						<li className="text-white font-unisans text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Products
						</li>
						<li className="text-white font-unisans text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Pricing
						</li>
						<li className="text-white font-unisans text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Careers
						</li>
						<li className="text-white font-unisans text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Press & Media
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-3xl pb-4">Support</p>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Support Portals
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							List Of Charges
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-white text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
			</div>
			
		</>
	);
}

export default Footer;