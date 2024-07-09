import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Progress Loader JS",
  description:
    "Aprende a usar Progress Loader JS, es un apquete de JavaScript que ayuda a mostrar un indicador de carga en tiempo real.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar />
        <div className="container">
          <div className="row justify-content-md-center mt-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
