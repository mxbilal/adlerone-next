/* import { SanityClient } from "@sanity/client";

const sanityClient = new SanityClient({
	projectId: "dkr5780q", // you can find this in sanity.json
	dataset: "production", // or whatever you named your dataset
	useCdn: true, // `false` if you want to ensure fresh data
});

export default sanityClient;
 */

/* import { createClient } from "@sanity/client";

const sanityClient = createClient({
	projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // import from .env file or process.env.REACT_APP_SANITY_PROJECT_ID,
	dataset: process.env.REACT_APP_SANITY_DATASET,
	useCdn: true,
	token: process.env.REACT_APP_SANITY_TOKEN,
	apiVersion: "2021-03-25",
});

export default sanityClient; */

import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "dkr5780q", // find this at manage.sanity.io or in your sanity.json
	dataset: "production", // this is from those question during 'sanity init'
	useCdn: false,
});

export const sanityProjectId = "dkr5780q";
export const sanityDataset = "production";
