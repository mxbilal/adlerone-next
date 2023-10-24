import { useEffect } from "react";

function useHubSpotScript() {
	useEffect(() => {
		const script = document.createElement("script");

		script.src = "//js-eu1.hs-scripts.com/143224690.js";
		script.async = true;
		script.defer = true;
		script.id = "hs-script-loader";

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);
}

export default useHubSpotScript;
