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
			<nav className="bg-purple-900 my-4 mr-8 py-6 px-4">
				<div className="container mx-auto flex items-center justify-between">
					<Link className="text-white font-bold text-xl" href="/">
						THE BEDROCK INITIATIVE
					</Link>
					<div className="flex items-center">
						<Link
							className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
							href="/about"
						>
							About
						</Link>
						<Link
							className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white  focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
							href="/projects"
						>
							Projects
						</Link>
						<Link
							className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
							href="/donate"
						>
							Donate
						</Link>
						<Link
							className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white  focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
							href="/contact"
						>
							Contact
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
				<div className="container ">
					{children}
					{!home && (
						<Link href="/" className="bg-green-900 p-4 m-4 w-4 h-4">
							Home Page
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
						<Link
							className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
							href="/about"
						>
							About
						</Link>
						<Link
							className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
							href="/projects"
						>
							Projects
						</Link>
						<Link
							className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
							href="/donate"
						>
							Donate
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
