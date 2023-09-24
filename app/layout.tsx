import SideNav from "@/app/sideNav";
import { ThemeProvider } from "@/app/theme-provider";
import Topbar from "@/app/topbar";
import { Providers } from "@/src/context/providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "karson 👨‍💻",
  description:
    "a cool front-end wizard who's conjuring websites and whatnot, all to fund his awesome life adventures",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-sm transition ease-linear duration-1000">
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative min-h-screen w-full flex justify-between">
              <SideNav />
              <main className="flex-1 max-h-screen overflow-y-auto">
                <Topbar />
                {children}
              </main>
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
