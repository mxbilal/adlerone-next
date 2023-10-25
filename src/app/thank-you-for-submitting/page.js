"use client"
import React from "react";
import SizedBox from "../../components/SizedBox/SizedBox";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/navigation'
import "./ThankYou.css";

export default function ThankYouForSubmitting() {
	const navigator = useRouter();

	console.log("Hello darkness");
	return (
		<>
			<section className="thankyou" style={{background:'white'}}>
				<h1 className="bold gray900">
					Thank you for submitting your information!
				</h1>
				<p className="lg-regular gray500">
					Our team will be in touch with you shortly. We apprecaite your
					patence!
				</p>
				<SizedBox height="0px" />
				<Button
					label="Return to Home"
					type="secondary"
					size="lg"
					onClick={() => {
						navigator.push("/");
					}}
				/>
			</section>
		</>
	);
}
