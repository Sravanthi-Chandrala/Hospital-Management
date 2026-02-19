import "./globals.css";

export const metadata = {
  title: "Appointment Booking",
  description: "Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-white">
        {children}
      </body>
    </html>
  );
}