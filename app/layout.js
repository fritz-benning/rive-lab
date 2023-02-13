import Nav from "@/components/Nav";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className="main">
          <div className="animation">{children}</div>
          <Nav />
        </main>
      </body>
    </html>
  );
}
