import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>VHD CRM</h2>
        <Link href="/add-customer"> Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="https://vahidhosseini.net" target="_blank" rel="noreferrer">
          VHD
        </a>
        Next.js | CRM project &copy
      </footer>
    </>
  );
}

export default Layout;
