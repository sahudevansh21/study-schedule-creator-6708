import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Study Schedule Creator',
  description: 'Personalized study schedules for effective learning.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-wrapper">
          <nav className="navbar glass-card">
            <Link href="/" className="nav-logo">StudyFlow</Link>
            <div className="nav-links">
              <Link href="/schedule-builder" className="nav-item">Schedule Builder</Link>
              <Link href="/weekly-view" className="nav-item">Weekly View</Link>
              <Link href="/settings" className="nav-item">Settings</Link>
            </div>
          </nav>
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
