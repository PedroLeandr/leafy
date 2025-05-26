import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Switchthemebtn } from "@/components/themebtn/switchthemebtn";
import ScrollToTopButton from "@/components/topbtn/topbtn";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Leafy-AI",
  description: "Mais que um vaso inteligente.",
  icons: {
    icon: "/Logo.png",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning className="scroll-smooth">
      <body className={`${sora.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-1">
            <div className="w-11 h-10 flex items-center justify-center">
              <Switchthemebtn />
            </div>
            <div className="w-11 h-10 flex items-center justify-center">
              <ScrollToTopButton />
            </div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
