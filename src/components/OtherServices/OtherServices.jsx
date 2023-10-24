import {
	CustomerSupportIcon,
	AccountingIcon,
	SalesManagementIcon,
	WebDesignIcon,
	MarketingIcon,
} from "../../assets/images";
import { SerivceCard } from "../../app/Sections/Services";
import CenterHeading from "../CenterHeading/CenterHeading";

const OtherServices = ({ currentServiceTitle }) => {
	const services = [
		{
			title: "Accounting",
			text: "Precision-led record-keeping for financial clarity",
			icon: AccountingIcon?.src,
			to: "accounting",
		},
		{
			title: "Sales Management",
			text: "Driving revenue with strategic sales optimization",
			icon: SalesManagementIcon?.src,
			to: "sales-management",
		},
		{
			title: "Development",
			text: "Crafting user-centric platforms with precision and flair",
			icon: WebDesignIcon?.src,
			to: "development",
		},
		{
			title: "Marketing Management",
			text: "Tailored campaigns to amplify reach and results",
			icon: MarketingIcon?.src,
			to: "marketing-management",
		},
		{
			title: "Customer Support",
			text: "Boosting loyalty through responsive, personalized care",
			icon: CustomerSupportIcon?.src,
			to: "customer-support",
		},
	];

	const renderServices = () => {
		return services
			.filter((service) => service.title !== currentServiceTitle) // Filtering out the currentService
			.map((service, i) => (
				<SerivceCard
					title={service.title}
					text={service.text}
					key={i}
					icon={service.icon}
					slug={service.to}
				/>
			));
	};

	return (
		<div className="services">
			<section className="services-content">
				<CenterHeading light title="Other Services We Offer" />
				<div className="other-services-grid">{renderServices()}</div>
			</section>
		</div>
	);
};

export default OtherServices;
