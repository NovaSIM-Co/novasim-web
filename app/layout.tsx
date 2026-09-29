import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NovaSIM | eSIM for Europe",
  description:
    "Premium eSIM connectivity across Europe. Fast activation, large data plans and reliable 4G/5G connectivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
