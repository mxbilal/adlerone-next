"use client"
import React, { useState } from "react";
import "./Header.css";
// import { Link, useNavigate } from "react-router-dom";
import Link from 'next/link'

import Button from "../../components/Button/Button";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import MobileMenu from "./MobileMenu";
import { useRouter } from 'next/navigation'

import { motion } from "framer-motion";

import Logo from "../../assets/icons/logo.svg";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const navigator = useRouter();

	const [serviceOpen, setServiceOpen] = useState(false);

	const services = [
		{
			label: "Accounting & Taxation",
			path: "/services/accounting",
		},
		{
			label: "Sales Management",
			path: "/services/sales-management",
		},
		{
			label: "Marketing Management",
			path: "/services/marketing-management",
		},
		{
			label: "Customer Support",
			path: "/services/customer-support",
		},
		{
			label: "Development",
			path: "/services/development",
		},
	];

	return (
		<div
			className="nav-bg"
			style={{
				width: "100%",
				backgroundColor: "#fff",
				position: "sticky",
				top: 0,
				zIndex: 100,
			}}
		>
			<nav className="main-nav wide-monitor">
				<Link
					href={"/"}
					className="logo"
					style={{
						textDecoration: "none",
						cursor: "pointer",
					}}
				>
					<img src={Logo?.src} alt="" />
					<h5 className="semibold gray-700">Adler One</h5>
				</Link>

				<div className="nav-items">
					<Link href={"/"} className="nav-item">
						Home
					</Link>

					{/* <Link to={"/services"} className="nav-item">
						Services
					</Link> */}

					<div

						className="nav-item"
						onMouseLeave={() => {
							setServiceOpen(false);
						}}
					>
						<div
							onMouseEnter={() => {
								setServiceOpen(true);
							}}
							style={{ display: 'flex', gap: '3px' }}
						>
							Services{" "}
							<FeatherIcon
								icon={
									serviceOpen ? "chevron-up" : "chevron-down"
								}
								size={20}
								className={"nav-item-chevron"}
								style={{ marginTop: '2px' }}
							/>
						</div>
						{serviceOpen && <MenuDropdown items={services} />}
					</div>

					{/* <Link to={"/whyus"} className="nav-item">
						Why Choose Us
					</Link> */}

					<Link href={"/why-choose-us"} className="nav-item">
						Why Us
					</Link>

					<Link href={"/careers"} className="nav-item">
						Careers
					</Link>

					{/* <Link to={"/contact"} className="nav-item">
						Contact
					</Link> */}
				</div>
				<div className="nav-btns">
					<Button
						label="Book a Strategy Call"
						type="primary"
						size="sm"
						className="desktop-btn"
						onClick={() => {
							navigator.push("/schedule");
							window.scrollTo({ top: 0, behavior: "smooth" });
						}}
					/>
					<motion.div
						initial={{ rotate: 0 }}
						animate={{ rotate: isOpen ? 90 : 0 }}
					>
						<FeatherIcon
							icon={isOpen ? "x" : "menu"}
							className="menu-icon gray-500"
							onClick={() => setIsOpen(!isOpen)}
						/>
					</motion.div>

					<MobileMenu
						isOpen={isOpen}
						toggleMenu={() => setIsOpen(!isOpen)}
					/>
				</div>
			</nav>
		</div>
	);
}

const MenuDropdown = ({ items }) => {
	/* const DropdownItem = () => {
		return (
			<div className="dropdown-item">
				{items.map((item) => {
					return (
						<Link to={item.path} className="dropdown-item-link">
							{item.label}
						</Link>
					);
				})}
			</div>
		);
	} */

	return (
		<div className="menu-dropdown">
			<div className="dropdown-items">
				{items.map((item) => {
					return (
						<Link
							href={`${item.path}`}
							className=" md-regular gray-600 dropdown-item"
						>
							{item.label}
						</Link>
					);
				})}
			</div>
		</div>
	);
};
