import qrCode from "@/assets/qr-code.png";

const AppDownloadSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get the FoodieExpress website now!
            </h2>
            <p className="text-gray-300 text-lg">
              For best offers and discounts curated specially for you.
            </p>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative">
                {/* Phone frame */}
                <div className="bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl relative z-10 w-64 h-[500px]">
                  <div className="bg-white rounded-[2rem] w-full h-full relative overflow-hidden">
                    {/* Phone notch */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black rounded-full w-32 h-6 z-20"></div>
                    
                    {/* Screen content */}
                    <div className="pt-16 pb-8 px-6 h-full flex flex-col items-center justify-center">
                      <div className="bg-gray-50 rounded-2xl p-6 flex-1 flex flex-col items-center justify-center">
                        <img 
                          src={qrCode} 
                          alt="QR Code Scanner" 
                          className="w-40 h-40 mb-4"
                        />
                        <p className="text-orange-500 text-center font-semibold text-sm">
                          Scan to download
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating food elements */}
              <div className="absolute -top-6 -left-8 z-30">
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg">
                  <img src="/src/assets/pizza-card.jpg" alt="Pizza" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute top-1/4 -left-12 z-30">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                  <img src="/src/assets/burger-card.jpg" alt="Burger" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-6 left-4 z-30">
                <div className="w-18 h-18 rounded-full overflow-hidden shadow-lg">
                  <img src="/src/assets/salad-card.jpg" alt="Salad" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute top-12 -right-8 z-30">
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg">
                  <img src="/src/assets/tacos-card.jpg" alt="Tacos" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-6 z-30">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                  <img src="/src/assets/smoothie-card.jpg" alt="Smoothie" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>
    </div>
  );
};

export default AppDownloadSection;