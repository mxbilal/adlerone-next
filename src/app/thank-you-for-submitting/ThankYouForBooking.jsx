import React from "react";
import SizedBox from "../../components/SizedBox/SizedBox";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

import "./ThankYou.css";

export default function ThankYouForBooking() {
	const navigator = useNavigate();

	return (
		<section className="thankyou">
			<h1 className="bold gray900">Thank you for Booking a Meeting!</h1>
			<p className="lg-regular gray500">
				We're really exciting to meet you and learn about your business
				and how we can help you achieve your goals!
			</p>
			<SizedBox height="0px" />
			<Button
				label="Return to Home"
				type="secondary"
				size="lg"
				onClick={() => {
					navigator("/");
				}}
			/>
		</section>
	);
}
