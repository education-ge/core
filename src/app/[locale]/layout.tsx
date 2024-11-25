import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/shared/ui/utils";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { headers } from "next/headers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GeoStudy",
  description: "About education in Georgia",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale?: string };
}>) {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");

  const locale =
    params?.locale || acceptLanguage?.split(",")[0].split("-")[0] || "en";

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body
        className={cn(
          "min-h-screen flex flex-col bg-background bg-gray-50 font-sans antialiased",
          fontSans.variable,
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
