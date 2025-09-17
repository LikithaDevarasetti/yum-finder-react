import qrCodeNew from "@/assets/qr-code-new.png";

const AppDownloadSection = () => {
  return (
    <div className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-5xl mx-auto">
          <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get the FoodieExpress website now!
            </h2>
            <p className="text-gray-300 text-base">
              For best offers and discounts curated specially for you.
            </p>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone mockup */}
              <div className="bg-white rounded-[2rem] p-3 shadow-2xl relative z-10 w-56 h-96">
                <div className="bg-gray-100 rounded-[2rem] w-full h-full relative overflow-hidden">
                  {/* Phone notch */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-black rounded-full w-16 h-4 z-20"></div>
                  
                  {/* Screen content */}
                  <div className="pt-12 pb-6 px-4 h-full flex flex-col items-center justify-center">
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <img 
                        src={qrCodeNew} 
                        alt="QR Code to view website" 
                        className="w-32 h-32 mb-3"
                      />
                      <p className="text-orange-500 text-center font-semibold text-sm">
                        Scan to view
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating food emoji-style elements */}
              <div className="absolute -top-4 -left-6 text-6xl z-30">
                🍕
              </div>
              <div className="absolute top-1/3 -left-8 text-5xl z-30">
                🍔
              </div>
              <div className="absolute -bottom-4 left-6 text-5xl z-30">
                🥗
              </div>
              <div className="absolute top-16 -right-6 text-4xl z-30">
                🌮
              </div>
              <div className="absolute -bottom-2 -right-4 text-5xl z-30">
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