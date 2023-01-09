import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import React from "react";
import Link from "next/link";


export default function LandingPage() {
	return (
		<Layout>
			<div className="container mx-auto py-20">
				<div
					id="carousel"
					className="overflow-hidden rounded-md shadow-lg"
				>
					{/* Carousel content goes here */}
				</div>
			</div>
			<h2 className="text-2xl font-bold mb-4">
				What We&aposve Been Up To
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				
			</div>
		</Layout>
	);
}
