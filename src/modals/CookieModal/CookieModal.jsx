"use client"
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";

import "./CookieModal.css";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CookieModal = () => {
	/* const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const cookiesAccepted = localStorage.getItem("cookies_accepted");
		if (cookiesAccepted) {
			setIsVisible(false);
		}
	}, []); */

	const [isVisible, setIsVisible] = useState(false); // Default visibility is set to false

	useEffect(() => {
		// Check if the user has already accepted the cookies
		if (!localStorage.getItem("cookies_accepted")) {
			const timer = setTimeout(() => {
				setIsVisible(true);
			}, 2000); // 2 seconds delay

			return () => clearTimeout(timer); // Cleanup on component unmount
		}
	}, []);

	const handleClose = () => {
		setIsVisible(false);
	};

	const handleAccept = () => {
		localStorage.setItem("cookies_accepted", "true");
		setIsVisible(false);
	};

	const modalVariants = {
		hidden: {
			y: "100%", // start from the bottom
			opacity: 0,
		},
		visible: {
			y: "0%",
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 20,
			},
		},
		exit: {
			y: "100%",
			opacity: 0,
			transition: {
				ease: "easeInOut",
			},
		},
	};

	return (
		isVisible && (
			<AnimatePresence mode="wait">
				{isVisible && (
					<motion.div
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={modalVariants}
						className="cookie-modal bg-white shadow-2xl"
					>
						<div className="cookie-content">
							<div className="cookie-text">
								<h5 className="bold">
									Cookie Notice & Privacy Policy
								</h5>
								<p className="md-regular gray-500">
									At AdlerOne, we prioritize your privacy. We
									use cookies to offer a tailored browsing
									experience, analyze site traffic, and
									present relevant content. By using our site,
									you consent to our use of cookies and agree
									to our{" "}
									<Link
										className="primary"
										href={"/privacy-policy"}
									>
										Privacy Policy
									</Link>
									. If desired, you can adjust cookie settings
									in your browser. Our commitment is to ensure
									transparency and safeguard your data. Thank
									you for your trust.
								</p>
							</div>
							<div className="cookie-actions">
								<Button
									label="Accept"
									size="sm"
									onClick={handleAccept}
								/>
							</div>
						</div>
						<FeatherIcon
							size={24}
							icon="x"
							className="close-button-abs"
							onClick={handleClose}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		)
	);
};

export default CookieModal;
