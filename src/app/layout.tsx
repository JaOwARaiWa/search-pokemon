"use client"

import { Inter } from "next/font/google";
import Link from "next/link";
import client from "@/lib/pokemon-client";
import { ApolloProvider } from '@apollo/client';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
  	return (
		<ApolloProvider client={client}>
			<html lang="en">
				<body className={inter.className}>
					<main className="flex min-h-screen flex-col items-center p-24">
						<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
							<Link href="/">
								<h2 className="text-2xl text-bold">PokeDex</h2>
							</Link>
						</div>
						{children}
					</main>
				</body>
			</html>
		</ApolloProvider>
  	);
}
