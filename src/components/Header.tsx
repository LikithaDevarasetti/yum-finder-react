import CartSidebar from "./CartSidebar";
import ProfileDialog from "./ProfileDialog";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            FoodieExpress
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <ProfileDialog />
          <CartSidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;