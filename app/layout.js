export const metadata = {
  title: 'Blog',
  description: 'A minimal markdown-powered blog',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={headerStyle}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/blog" style={linkStyle}>Blog</a>
        </header>
        <main style={mainStyle}>{children}</main>
      </body>
    </html>
  );
}

const headerStyle = {
  padding: '1rem 2rem',
  borderBottom: '1px solid #e5e5e5',
  display: 'flex',
  gap: '1.5rem',
};
const linkStyle = { color: '#333', textDecoration: 'none' };
const mainStyle = { maxWidth: '720px', margin: '0 auto', padding: '2rem' };
