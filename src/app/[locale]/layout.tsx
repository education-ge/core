import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/shared/ui/utils";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { headers } from "next/headers";
import ReactQueryProvider from "./_providers/react-query-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GeoStudy",
  description: "About education in Georgia",
};

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }>,
) {
  const params = await props.params;

  const { children } = props;

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
        <ReactQueryProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
