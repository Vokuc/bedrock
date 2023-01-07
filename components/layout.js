import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import React from "react";
import Link from "next/link";

export default function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen">
			<nav className="bg-gray-800 py-6 px-4">
				<div className="container mx-auto flex items-center justify-between">
					<Link href="/">
						<a className="text-white font-bold text-xl">
							THE BEDROCK INITIATIVE
						</a>
					</Link>
					<div className="flex items-center">
						<Link href="/about">
							<a className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
								About
							</a>
						</Link>
						<Link href="/projects">
							<a className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
								Projects
							</a>
						</Link>
						<Link href="/donate">
							<a className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
								Donate
							</a>
						</Link>
						<Link href="/contact">
							<a className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
								Contact
							</a>
						</Link>
					</div>
				</div>
			</nav>
			
			<main className="bg-gray-100 py-6">
				<div className="container mx-auto px-4">
					{children}
				</div>
			</main>
			<footer className="bg-gray-800 py-6">
				<div className="container mx-auto flex items-center justify-between">
					<div className="text-white font-bold text-xl">
						Non-Profit Organization
					</div>
					<div className="flex items-center">
						<Link href="/about">
							<a className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
								About
							</a>
						</Link>
						<Link href="/projects">
							<a className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
								Projects
							</a>
						</Link>
						<Link href="/donate">
							<a className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
								Donate
							</a>
						</Link>
						<a
							href="#"
							className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
						>
							Contact
						</a>
						<a
							href="#"
							className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
						>
							Terms of Use
						</a>
						<a
							href="#"
							className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
						>
							Privacy Policy
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
