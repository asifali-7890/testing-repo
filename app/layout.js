import Navbar from '../components/Navbar.jsx';

export default function RootLayout({ children }) {
    // Hide Navbar on login page
    const isLogin = typeof window !== 'undefined' && window.location.pathname === '/';

    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
