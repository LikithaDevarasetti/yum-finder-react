import qrCodeFoodie from "@/assets/qr-code-foodie.png";
import logo from "@/assets/foodie-express-logo.png";

const AppDownloadSection = () => {
  return (
    <div className="bg-gray-900 text-white py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
          <div className="lg:w-1/2 mb-4 lg:mb-0 text-left lg:pl-8">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="FoodieExpress Logo" className="h-12 w-12" />
              <span className="text-2xl font-bold">FoodieExpress</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Get the FoodieExpress website now!
            </h2>
            <p className="text-gray-300 text-sm">
              For best offers and discounts curated specially for you.
            </p>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-8">
            <div className="relative">
              {/* Phone mockup */}
              <div className="bg-white rounded-[1.5rem] p-2 shadow-2xl relative z-10 w-40 h-72">
                <div className="bg-gray-100 rounded-[1.5rem] w-full h-full relative overflow-hidden">
                  {/* Phone notch */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-black rounded-full w-10 h-3 z-20"></div>
                  
                  {/* Screen content */}
                  <div className="pt-8 pb-4 px-3 h-full flex flex-col items-center justify-center">
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <img 
                        src={qrCodeFoodie} 
                        alt="QR Code to download FoodieExpress" 
                        className="w-32 h-32 mb-2"
                      />
                      <p className="text-orange-500 text-center font-semibold text-xs">
                        Scan to download
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating food emoji-style elements */}
              <div className="absolute -top-3 -left-4 text-3xl z-30">
                🍕
              </div>
              <div className="absolute top-1/4 -left-5 text-2xl z-30">
                🍔
              </div>
              <div className="absolute -bottom-3 left-4 text-2xl z-30">
                🥗
              </div>
              <div className="absolute top-12 -right-4 text-xl z-30">
                🌮
              </div>
              <div className="absolute -bottom-2 -right-3 text-2xl z-30">
                🍱
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;