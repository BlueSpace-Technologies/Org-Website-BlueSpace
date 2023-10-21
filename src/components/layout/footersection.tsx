import { Header } from "../NavBar/Header";
import Footer from "../footer/footer";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}

    </div>
  );
};

export default Layout;
