import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"
import { Poppins } from "next/font/google";
import "./globals.css";


const getPoppins = Poppins({
  variable:"--Poppins",
  subsets:["latin"],
  weight: ["200", "400", "500", "800"]
});
export const metadata: Metadata = {
  title: "Gestor de Contraseñas Seguro | Crea y Administra Contraseñas Eficientemente",
  description: "Protege tus datos con nuestro gestor de contraseñas de máxima seguridad. Genera y administra contraseñas fuertes y únicas con facilidad. Aumenta tu seguridad en línea con nuestras herramientas avanzadas.",
  keywords: "gestor de contraseñas, crear contraseñas, seguridad en línea, contraseñas fuertes, protección de datos, gestión de contraseñas",
  authors: [{ name: 'Bertolusso' }, { name: 'Enzo', url: 'https://www.linkedin.com/in/enzobertolusso/' }],
  robots: "index, follow",
  creator: 'Enzo Daniel Bertolusso',
 
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${getPoppins.variable}  antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}