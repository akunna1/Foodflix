import type { Metadata } from "next";
import ClientLayout from "./clientLayout";
import "./globals.css";

// Global setup + Metadata + HTML/body structure => Layout.tsx
// Font was moved to global.css

export const metadata: Metadata = {
  title: "Foodflix",
  description: "Foodflix is a personal recipe app that helps you discover and keep track of meal ideas, recipes, and drinks. Explore flavors, try new combinations, and make cooking fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen" suppressHydrationWarning={true}> 
          <ClientLayout>
            {children}
          </ClientLayout>
      </body>
    </html>
  );
}