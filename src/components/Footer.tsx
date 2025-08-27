import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              FoodieExpress
            </h3>
            <p className="opacity-90 mb-6">
              Delivering happiness, one meal at a time. Fresh, fast, and always delicious.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-yellow-300 transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-yellow-300 transition-colors" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-yellow-300 transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-90">
              <li><a href="#" className="hover:text-yellow-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Restaurants</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 opacity-90">
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 opacity-90">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Food Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(555) 123-FOOD</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@foodieexpress.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center opacity-90">
          <p>&copy; 2024 FoodieExpress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;