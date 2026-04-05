import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import QueryProvider from "~/components/QueryProvider";

export const metadata: Metadata = {
	title: "Next.js Template",
	description:
		"Production-ready Next.js template with TanStack Query, Drizzle, better-auth, shadcn/ui",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={`${geist.variable}`} lang="en">
			<body>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
