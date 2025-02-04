import "./globals.css";

export const metadata = {
  title: "Aneeq Shaffy",
  description: "Frontend Developer with a strong foundation in HTML, CSS & JavaScript",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <link 
          rel="icon" 
          href="/Aneeq-Shaffy/favicon.ico" 
          type="image/x-icon" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}