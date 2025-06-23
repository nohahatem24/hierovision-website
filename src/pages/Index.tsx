
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="relative mb-8">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 text-4xl text-[#B98E57]/50">
            𓂀
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#5E4022] mb-4 pt-8">
            Welcome to HieroVision
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif text-[#B98E57] mb-8">
            Decode the Secrets of Ancient Egypt
          </h2>
        </div>
        
        <p className="text-lg text-[#5E4022]/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Unlock the mysteries of ancient Egyptian hieroglyphs with cutting-edge AI technology. 
          Transform ancient symbols into modern understanding with just a simple upload.
        </p>
      </div>

      {/* Hero Image */}
      <div className="relative mb-16 h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-4xl">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B98E57]/20 to-[#5E4022]/20 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=1200&h=600"
          alt="Egyptian pyramids in desert landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">𓉴</div>
            <p className="text-xl font-serif">Ancient Wisdom Awaits</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
        <Link to="/upload">
          <Button className="group relative px-8 py-4 bg-gradient-to-r from-[#B98E57] to-[#5E4022] hover:from-[#C69968] hover:to-[#6F4A33] text-white font-serif text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl min-w-[200px]">
            <span className="flex items-center space-x-2">
              <span>📜</span>
              <span>Upload Hieroglyph Image</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </Button>
        </Link>
        
        <Link to="/history">
          <Button variant="outline" className="px-8 py-4 border-2 border-[#B98E57] text-[#5E4022] hover:bg-[#B98E57]/10 font-serif text-lg rounded-xl min-w-[200px] transition-all duration-300">
            <span className="flex items-center space-x-2">
              <span>📚</span>
              <span>View My History</span>
            </span>
          </Button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 rounded-xl bg-white/30 backdrop-blur-sm border border-[#B98E57]/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-serif font-bold text-[#5E4022] mb-2">AI-Powered Analysis</h3>
          <p className="text-[#5E4022]/70">Advanced machine learning algorithms decode complex hieroglyphic symbols with remarkable accuracy.</p>
        </div>
        
        <div className="text-center p-6 rounded-xl bg-white/30 backdrop-blur-sm border border-[#B98E57]/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-serif font-bold text-[#5E4022] mb-2">Instant Translation</h3>
          <p className="text-[#5E4022]/70">Get immediate translations of your hieroglyph images with detailed explanations and context.</p>
        </div>
        
        <div className="text-center p-6 rounded-xl bg-white/30 backdrop-blur-sm border border-[#B98E57]/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="text-4xl mb-4">📖</div>
          <h3 className="text-xl font-serif font-bold text-[#5E4022] mb-2">Historical Context</h3>
          <p className="text-[#5E4022]/70">Learn about the historical significance and cultural meaning behind each hieroglyphic symbol.</p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="flex justify-center items-center space-x-8 text-[#B98E57]/40 text-2xl">
        <span>𓈖</span>
        <span>𓇳</span>
        <span>𓊨</span>
        <span>𓋹</span>
        <span>𓌻</span>
      </div>
    </div>
  );
};

export default Index;
