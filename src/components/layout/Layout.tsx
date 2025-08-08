import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  isHomePage?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isHomePage = false }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isHomePage={isHomePage} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 