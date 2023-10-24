import React, { useState } from "react";

import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Divider from "../Divider/Divider";

import "./FAQs.css";
import applyOrder from "../../services/applyOrder";
import { useEffect } from "react";

const FAQs = ({ title, subheading, questions }) => {
	const FAQItem = ({ question, answer, key }) => {
		const [isOpen, setIsOpen] = useState(false);

		useEffect(() => {
			applyOrder ? setIsOpen(true) : setIsOpen(false);
		}, []);

		return (
			<div className="faq-item" key={key}>
				<div
					className="faq-item-question"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					<h6 className="semibold gray-800">{question}</h6>
					<FeatherIcon
						icon="chevron-down"
						size="20"
						style={{
							transition: "all 0.2s ease-in-out",
							transform: isOpen
								? "rotate(-180deg)"
								: "rotate(0deg)",
						}}
					/>
				</div>

				{isOpen && <p className="md-regular gray-500">{answer}</p>}
			</div>
		);
	};

	const renderFAQs = () => {
		return questions?.map((question, i) => {
			return (
				<div className="faqs-item-content">
					<FAQItem
						key={i}
						question={question.question}
						answer={question.answer}
					/>
					{questions.length - 1 !== i && <Divider />}
				</div>
			);
		});
	};

	return (
		<section className="faqs">
			<div className="faqs-header">
				<h2 className="bold gray-900">{title}</h2>
				<p className="lg-regular gray-500">{subheading}</p>
			</div>
			<div className="faqs-content">{renderFAQs()}</div>
		</section>
	);
};

export default FAQs;
