import { useEffect } from "react";

function useHashScroll() {
	useEffect(() => {
		// On mount, check if we have a hash in the URL
		const hash = typeof window !== 'undefined' ? window.location.hash : "";

		if (hash) {
			// Find the element with that id
			const element = document.getElementById(hash.substring(1));
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, []); // Empty dependency array means this useEffect runs once when component mounts
}

export default useHashScroll;
