import React from "react";
import { motion } from "framer-motion";
import "./MobileMenu.css"; // Assuming you'll move the CSS to a separate file
import Button from "../../components/Button/Button";

import FacebookIcon from "../../assets/icons/facebook-icon.svg";
import InstagramIcon from "../../assets/icons/instagram-icon.svg";
import LinkedInIcon from "../../assets/icons/linkedin-icon.svg";
import TwitterIcon from "../../assets/icons/twitter-icon.svg";
// import { Link, useNavigate } from "react-router-dom";
import Link from 'next/link'
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useRouter } from 'next/navigation'

const variants = {
	open: { x: 0 },
	closed: { x: "100%" },
};

function MobileMenu({ isOpen, toggleMenu }) {
	const navigator = useRouter();
	const handleLinkClick = () => {
		toggleMenu();
	};

	const [serviceOpen, setServiceOpen] = React.useState(false);

	function handleScrollToSection(event) {
		if (event.currentTarget.hash) {
			event.preventDefault();
			const id = event.currentTarget.hash.slice(1); // remove the "#"
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
		toggleMenu();
	}

	return (
		<motion.div
			className="mobile-menu"
			variants={variants}
			initial="closed"
			animate={isOpen ? "open" : "closed"}
			transition={{ duration: 0.2 }}
		>
			<div className="mobile-menu-items">
				<Link
					href={"/"}
					onClick={handleScrollToSection}
					className="mobile-menu-item"
				>
					Home
				</Link>

				{/* <Link
					to="/services"
					onClick={handleScrollToSection}
					className="mobile-menu-item"
				>
					Services
				</Link> */}

				<div
					/* to={"/services"} */
					className="mobile-menu-item"
					/* onClick={() => {
						setServiceOpen(false);
					}} */
					style={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div
						onClick={() => {
							setServiceOpen(!serviceOpen);
						}}
					>
						Services{" "}
						<FeatherIcon
							icon={serviceOpen ? "chevron-up" : "chevron-down"}
							size={20}
							className={"nav-item-chevron"}
						/>
					</div>
				</div>
				{serviceOpen && (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Link
							href={"/services/accounting"}
							onClick={handleScrollToSection}
							className="mobile-menu-item"
						>
							Accounting & Taxation
						</Link>
						<Link
							href={"/services/sales-management"}
							onClick={handleScrollToSection}
							className="mobile-menu-item"
						>
							Sales Management
						</Link>
						<Link
							href={"/services/marketing-management"}
							onClick={handleScrollToSection}
							className="mobile-menu-item"
						>
							Marketing Management
						</Link>
						<Link
							href={"/services/customer-support"}
							onClick={handleScrollToSection}
							className="mobile-menu-item"
						>
							Customer Support
						</Link>
						<Link
							href={"/services/development"}
							onClick={handleScrollToSection}
							className="mobile-menu-item"
						>
							Development
						</Link>
					</div>
				)}
				<Link
					href={"/why-choose-us"}
					onClick={handleScrollToSection}
					className="mobile-menu-item"
				>
					Why Us
				</Link>

				<Link
					href={"/careers"}
					onClick={handleScrollToSection}
					className="mobile-menu-item"
				>
					Careers
				</Link>

				<Button
					label="Book a Strategy Call"
					type="primary"
					className="fill"
					onClick={() => {
						navigator.push("/schedule");
						window.scrollTo({ top: 0, behavior: "smooth" });
						toggleMenu();
					}}
				/>
				<div className="social-icons">
					<a
						href="https://www.facebook.com/Adlerone.de"
						target="_blank"
						rel="noopener noreferrer"
						onClick={handleLinkClick}
					>
						<img src={FacebookIcon} alt="Facebook" />
					</a>
					<a
						href="https://www.instagram.com/adlerone1/"
						target="_blank"
						rel="noopener noreferrer"
						onClick={handleLinkClick}
					>
						<img src={InstagramIcon} alt="Instagram" />
					</a>
					<a
						href="https://www.linkedin.com/company/adlerone"
						target="_blank"
						rel="noopener noreferrer"
						onClick={handleLinkClick}
					>
						<img src={LinkedInIcon} alt="LinkedIn" />
					</a>
					<a
						href="https://twitter.com/Adler__One"
						target="_blank"
						rel="noopener noreferrer"
						onClick={handleLinkClick}
					>
						<img src={TwitterIcon} alt="Twitter" />
					</a>
				</div>
			</div>
		</motion.div>
	);
}

export default MobileMenu;
