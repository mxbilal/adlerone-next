import React from "react";
// import { Link } from "react-router-dom";
import Link from 'next/link'

import "./Footer.css";

import FacebookIcon from "../../assets/icons/facebook-icon.svg";
import InstagramIcon from "../../assets/icons/instagram-icon.svg";
import LinkedInIcon from "../../assets/icons/linkedin-icon.svg";
import TwitterIcon from "../../assets/icons/twitter-icon.svg";
//import SizedBox from "./../../components/SizedBox/SizedBox";

import Logo from "../../assets/icons/logo.svg";
//import Button from "./../../components/Button/Button";
import Divider from "../../components/Divider/Divider";
//import { useNavigate } from "react-router-dom";

export default function Footer() {
	return (
		<footer>
			<section className="footer-upper">
				<div className="footer-content">
					<div className="logo">
						<img src={Logo?.src} alt="" />
						<h5 className="semibold white">Adler One</h5>
					</div>
					<p className="md-regular gray-100">
						Adler One is your strategic partner for success. We
						offer a range of professional virtual services to
						empower businesses of all sizes.
					</p>

					<p className="md-medium gray-100">
						For more information contact us at{" "}
						<a
							href="mailto:info@adlerone.de"
							style={{ color: "white" }}
						>
							info@adlerone.de
						</a>
					</p>

					<div className="social-icons">
						<a
							href="https://www.facebook.com/Adlerone.de"
							target="_blank"
							rel="noreferrer"
						>
							<img src={FacebookIcon?.src} alt="" />
						</a>
						<a
							href="https://www.instagram.com/adlerone1/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={InstagramIcon?.src} alt="" />
						</a>
						<a
							href="https://www.linkedin.com/company/adlerone"
							target="_blank"
							rel="noreferrer"
						>
							<img src={LinkedInIcon?.src} alt="" />
						</a>
						<a
							href="https://twitter.com/Adler__One"
							target="_blank"
							rel="noreferrer"
						>
							<img src={TwitterIcon?.src} alt="" />
						</a>
					</div>
				</div>
				<div className="footer-links-content">
					<div className="footer-links-content-column">
						<p className="lg-regular white">Company</p>
						<div className="footer-links-content-column-items">
							<Link
								href="/why-choose-us"
								className="md-medium gray-200"
							>
								Why Us
							</Link>
							<Link href="/careers" className="md-medium gray-200">
								Careers
							</Link>
						</div>
					</div>

					<div className="footer-links-content-column">
						<p className="lg-regular white">Services</p>
						<div className="footer-links-content-column-items">
							<Link
								href="/services/accounting"
								className="md-medium gray-200"
							>
								Accounting & Taxation
							</Link>
							<Link
								href="/services/sales-management"
								className="md-medium gray-200"
							>
								Sales Management
							</Link>
							<Link
								href="/services/marketing-management"
								className="md-medium gray-200"
							>
								Marketing Management
							</Link>
							<Link
								href="/services/customer-support"
								className="md-medium gray-200"
							>
								Customer Support
							</Link>
							<Link
								href="/services/development"
								className="md-medium gray-200"
							>
								Development
							</Link>
						</div>
					</div>

					<div className="footer-links-content-column">
						<p className="lg-regular white">Resources</p>
						<div className="footer-links-content-column-items">
							<Link href="/blog" className="md-medium gray-200">
								Blogs
							</Link>
						</div>
					</div>
				</div>
				{/* <Button
					label="Book a Strategy Call"
					type="primary"
					onClick={() => {
						navigator("/schedule");
					}}
				/> */}
			</section>
			<Divider
				className="footer-divider"
				color="bg-gray-600"
				orientation="horizontal"
			/>
			<section className="footer-lower">
				<p className="md-regular gray-300">
					Copyright © 2023 Adler One. All rights reserved.
				</p>
				<Link
					href="/privacy-policy"
					className="md-regular gray-300"
					style={{
						textDecoration: "underline",
					}}
				>
					Privacy Policy
				</Link>
			</section>
		</footer>
	);
}
