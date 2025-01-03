import './styles/globals.css'
import { openSans } from '@/public/fonts/fonts';

export const metadata = {
  title: "Mi Primer Trabajo",
  description: "Entrá al mundo laboral por primera vez, no necesitas experiencia previa. Todos en algún momento comenzamos de cero.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${openSans.className}`}>
        {children}
      </body>
    </html>
  );
}