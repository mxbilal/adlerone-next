// hubspotService.js

const submitToHubSpot = async (formData) => {
	const portalId = "143224690";
	const formGuid = "316e3890-182e-4799-8143-c53abc4658a9"; // Replace with your form GUID

	const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

	const data = {
		fields: Object.keys(formData).map((name) => ({
			name: name,
			value: formData[name],
		})),
		context: {
			pageUri: window.location.href,
			pageName: document.title,
		},
	};
	console.log(JSON.stringify(data));

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		const errorData = await response.json();
		console.error("HubSpot error:", errorData);
		throw new Error("Failed to submit form to HubSpot");
	}

	return response.json();
};

export default submitToHubSpot;
