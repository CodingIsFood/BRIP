import Navbar from '../Navbar';
import Footer from '../Footer';

/**
 * Wraps every inner page with the shared global header + footer.
 */
export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
