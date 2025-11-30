import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import initDb from "@/utils/initDb";


export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  
  await initDb();

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=apps,density_medium"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}