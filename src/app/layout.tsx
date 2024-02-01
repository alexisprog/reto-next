import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/libs";
import Header from "@/components/Header";
import { ThemeProviders } from "@/components/ThemeProviders";
import SectionContainer from "@/components/SectionConatiner";
import ReduxProvider from "./store/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteMetadata.language} className={inter.className}>
      <body> 
        <ReduxProvider>
          <ThemeProviders>
            <SectionContainer>
              <div className="flex h-screen flex-col justify-between font-sans">
                <Header />
                <main className="mb-auto">{children}</main>
              </div>
            </SectionContainer>
          </ThemeProviders>
        </ReduxProvider>
      </body>
    </html>
  );
}
