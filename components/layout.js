import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
//import toggleDarkMode from "../utils/dark-mode";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Layout({ children, home }) {
	useEffect(() => {
		function bindToggleButtonEventListener() {
			const toggleButton = document.querySelector("#dark-mode-toggle");
			toggleButton.addEventListener("click", toggleDarkMode);
		}

		function unbindToggleButtonEventListener() {
			const toggleButton = document.querySelector("#dark-mode-toggle");
			toggleButton.addEventListener("click", toggleDarkMode);
		}

		function toggleDarkMode() {
			document.body.classList.toggle("dark-mode");
		}

		bindToggleButtonEventListener();
		return unbindToggleButtonEventListener;
	}, []);

	return (
		<div className=" flex flex-col min-h-screen">
			<nav className="bg-purple-900 my-4 mr py-6 px-4">
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
			<button
				id="dark-mode-toggle"
				className="bg-blue-500 hover:bg-blue-700 font-bold m-2 text-white p-2 dark-mode rounded-full"
			>
				Toggle Dark Mode
			</button>

			<main className="py-6">
				<div className="container mx-auto px-4">
					{children}
					{!home && (
						<Link href="/" className="bg-green-900 p-4 m-4 w-4 h-4">
							<a>Home Page</a>
						</Link>
					)}
				</div>
			</main>
			<footer className="bg-gray-800 py-6 ">
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
