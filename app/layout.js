export const metadata = {
<<<<<<< HEAD
  title: 'Blog',
  description: 'A minimal markdown-powered blog',
=======
  title: "BlogAI by AdsGupta",
  description: "Industrial Luxury Tech Blog"
>>>>>>> 85494f0aa5b6802bb934a6c00f7b9e29c43efdeb
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>
        <header style={headerStyle}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/blog" style={linkStyle}>Blog</a>
        </header>
        <main style={mainStyle}>{children}</main>
=======
      <body style={{ background: "#0f1115", color: "#e6faff", margin: 0 }}>
        {children}
>>>>>>> 85494f0aa5b6802bb934a6c00f7b9e29c43efdeb
      </body>
    </html>
  );
}
<<<<<<< HEAD

const headerStyle = {
  padding: '1rem 2rem',
  borderBottom: '1px solid #e5e5e5',
  display: 'flex',
  gap: '1.5rem',
};
const linkStyle = { color: '#333', textDecoration: 'none' };
const mainStyle = { maxWidth: '720px', margin: '0 auto', padding: '2rem' };
=======
>>>>>>> 85494f0aa5b6802bb934a6c00f7b9e29c43efdeb
