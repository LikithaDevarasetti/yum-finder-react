import qrCode from "@/assets/qr-code.png";

const AppDownloadSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex items-center mb-6">
              <div className="bg-primary rounded-lg p-3 mr-4">
                <span className="text-white font-bold text-xl">FE</span>
              </div>
              <span className="text-2xl font-bold">FoodieExpress</span>
            </div>
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
              <div className="bg-white rounded-3xl p-6 shadow-2xl relative z-10">
                <div className="bg-gray-900 rounded-xl mx-auto mb-4 w-32 h-6"></div>
                <img 
                  src={qrCode} 
                  alt="QR Code" 
                  className="w-48 h-48 mx-auto"
                />
                <p className="text-orange-500 text-center font-semibold mt-4">
                  Scan to download
                </p>
              </div>
              
              {/* Floating food elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl z-20">
                🍕
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-xl">
                🍔
              </div>
              <div className="absolute -bottom-4 left-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-xl">
                🥗
              </div>
              <div className="absolute top-8 -right-6 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl">
                🍟
              </div>
              <div className="absolute -bottom-2 -right-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-2xl">
                🥤
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