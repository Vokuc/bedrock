import React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
	return (
		<Layout>
			<div className="bg-black min-h-screen p-6">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl font-bold mb-4">
						About Our Non-Profit
					</h1>
					<p className="text-lg leading-7 text-gray-700 mb-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Proin ornare magna eros, eu pellentesque tortor
						vestibulum ut. Maecenas non massa sem. Etiam finibus
						odio quis feugiat facilisis.
					</p>
					<h2 className="text-2xl font-bold mb-4">Our History</h2>
					<p className="text-lg leading-7 text-gray-700 mb-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Proin ornare magna eros, eu pellentesque tortor
						vestibulum ut. Maecenas non massa sem. Etiam finibus
						odio quis feugiat facilisis.
					</p>
					<h2 className="text-2xl font-bold mb-4">Our Mission</h2>
					<p className="text-lg leading-7 text-gray-700 mb-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Proin ornare magna eros, eu pellentesque tortor
						vestibulum ut. Maecenas non massa sem. Etiam finibus
						odio quis feugiat facilisis.
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default AboutPage;
