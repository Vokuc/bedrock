import React from "react";
import { Formik, Form, Field } from "formik";
import Layout from "../components/layout";

const ContactPage = () => {
	return (
		<Layout>
			<div className="bg-gray-100 min-h-screen p-6">
				<div className="container mx-auto px-4">
					<h1 className="text-4xl font-bold mb-4">Contact Us</h1>
					<p className="text-lg leading-7 text-gray-700 mb-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Proin ornare magna eros, eu pellentesque tortor
						vestibulum ut. Maecenas non massa sem. Etiam finibus
						odio quis feugiat facilisis.
					</p>
					<Formik
						initialValues={{ name: "", email: "", message: "" }}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								setSubmitting(false);
							}, 400);
						}}
					>
						{({ isSubmitting }) => (
							<Form className="w-full max-w-md">
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
										<label
											className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
											htmlFor="name"
										>
											Name
										</label>
										<Field
											className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
											type="text"
											name="name"
											placeholder="John Smith"
										/>
									</div>
									<div className="w-full md:w-1/2 px-3">
										<label
											className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
											htmlFor="email"
										>
											Email
										</label>
										<Field
											className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											type="email"
											name="email"
											placeholder="john@example.com"
										/>
									</div>
								</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-full px-3">
										<label
											className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
											htmlFor="message"
										>
											Message
										</label>
										<Field
											className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											name="message"
											as="textarea"
											rows="8"
											placeholder="Your message here..."
										/>
									</div>
								</div>
								<div className="flex items-center justify-between">
									<button
										className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
										type="submit"
										disabled={isSubmitting}
									>
										Send Message
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</Layout>
	);
};

export default ContactPage;
