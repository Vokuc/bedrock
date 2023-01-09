export default {
	name: "photos",
	title: "Photos",
	type: "document",
	fields: [
		{
			name: "imageTitle",
			title: "Image Title",
			type: "string",
		},
		{
			name: "mainImage",
			title: "Main Image",
			type: "image",
		},
	],
};
