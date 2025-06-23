
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Result = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const { toast } = useToast();

  // Mock translation data
  const translationData = {
    originalText: "𓊪 𓏏 𓇯 𓈖 𓊪 𓇳 𓏏",
    translation: "Glory to the sun god Ra, eternal ruler of the heavens",
    confidence: 94,
    details: [
      { symbol: "𓊪", meaning: "Glory/Honor", position: "beginning" },
      { symbol: "𓏏", meaning: "to/for", position: "preposition" },
      { symbol: "𓇯", meaning: "the", position: "article" },
      { symbol: "𓈖", meaning: "of", position: "possession" },
      { symbol: "𓊪", meaning: "sun", position: "noun" },
      { symbol: "𓇳", meaning: "god Ra", position: "deity" },
      { symbol: "𓏏", meaning: "eternal ruler", position: "title" }
    ]
  };

  const handleSaveToHistory = () => {
    toast({
      title: "Saved to History!",
      description: "This translation has been added to your history.",
    });
  };

  const handleDownloadPDF = () => {
    toast({
      title: "PDF Generated!",
      description: "Your translation report is ready for download.",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "HieroVision Translation",
        text: `Translation: ${translationData.translation}`,
        url: window.location.href,
      });
    } else {
      toast({
        title: "Link Copied!",
        description: "Translation link has been copied to clipboard.",
      });
    }
  };

  const startAnimation = () => {
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 3000);
  };

  return (
    <div className="container mx-auto px-6 py-16 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-4xl text-[#B98E57] mb-4">✨</div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#5E4022] mb-4">
          Hieroglyphic Translation
        </h1>
        <p className="text-lg text-[#5E4022]/70">
          AI has decoded the ancient symbols. Discover the wisdom of the past.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Original Image */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-[#5E4022] text-center">
            Original Hieroglyphs
          </h2>
          
          {/* Museum-style frame */}
          <div className="relative bg-gradient-to-br from-[#8B4513] to-[#654321] p-6 rounded-3xl shadow-2xl">
            <div className="bg-[#F5E9D3] p-4 rounded-2xl shadow-inner">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 min-h-[300px] flex items-center justify-center border-2 border-[#B98E57]/30">
                {/* Mock hieroglyph image */}
                <div className="text-center">
                  <div className="text-6xl text-[#5E4022] mb-4 leading-relaxed">
                    𓊪 𓏏 𓇯 𓈖<br/>
                    𓊪 𓇳 𓏏
                  </div>
                  <p className="text-[#5E4022]/60 font-serif text-sm">
                    Ancient Egyptian Hieroglyphs
                  </p>
                </div>
              </div>
            </div>
            
            {/* Museum plaque */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-[#B98E57] text-white px-4 py-2 rounded-lg shadow-lg">
              <p className="text-xs font-serif">Confidence: {translationData.confidence}%</p>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute top-3 left-3 text-[#B98E57] text-xl">⚱️</div>
            <div className="absolute top-3 right-3 text-[#B98E57] text-xl">⚱️</div>
          </div>
        </div>

        {/* Right Side - Translation */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-[#5E4022] text-center">
            Modern Translation
          </h2>
          
          {/* Papyrus-style scroll */}
          <div className="relative bg-gradient-to-br from-[#F5E9D3] to-[#E3D2B7] p-8 rounded-3xl shadow-2xl border-2 border-[#B98E57]/30">
            {/* Papyrus texture overlay */}
            <div className="absolute inset-0 opacity-10 rounded-3xl bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            
            <div className="relative">
              <div className={`transition-all duration-1000 ${showAnimation ? 'opacity-100' : 'opacity-90'}`}>
                <div className="text-center mb-6">
                  <div className="text-2xl text-[#B98E57] mb-2">𓂀</div>
                  <h3 className="text-xl font-serif font-bold text-[#5E4022]">Translation</h3>
                </div>
                
                <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-[#B98E57]/20">
                  <p className="text-lg font-serif text-[#5E4022] leading-relaxed text-center italic">
                    "{translationData.translation}"
                  </p>
                </div>
                
                {/* Symbol breakdown */}
                <div className="space-y-3">
                  <h4 className="text-lg font-serif font-bold text-[#5E4022] text-center mb-4">
                    Symbol Breakdown
                  </h4>
                  {translationData.details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-4 bg-white/30 rounded-lg p-3 border border-[#B98E57]/20">
                      <span className="text-2xl">{detail.symbol}</span>
                      <div className="flex-1">
                        <p className="font-serif font-medium text-[#5E4022]">{detail.meaning}</p>
                        <p className="text-sm text-[#5E4022]/60 capitalize">{detail.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative scroll ends */}
            <div className="absolute top-4 left-4 text-[#B98E57]/40 text-lg">𓍝</div>
            <div className="absolute top-4 right-4 text-[#B98E57]/40 text-lg">𓍝</div>
            <div className="absolute bottom-4 left-4 text-[#B98E57]/40 text-lg">𓍝</div>
            <div className="absolute bottom-4 right-4 text-[#B98E57]/40 text-lg">𓍝</div>
          </div>
          
          {/* Animation button */}
          <div className="text-center">
            <Button
              onClick={startAnimation}
              variant="outline"
              className="border-[#B98E57] text-[#5E4022] hover:bg-[#B98E57]/10 font-serif"
            >
              <span className="flex items-center space-x-2">
                <span>✨</span>
                <span>Reveal Translation</span>
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-12">
        <Button
          onClick={handleSaveToHistory}
          className="bg-gradient-to-r from-[#B98E57] to-[#5E4022] hover:from-[#C69968] hover:to-[#6F4A33] text-white font-serif shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span className="flex items-center space-x-2">
            <span>💾</span>
            <span>Save to History</span>
          </span>
        </Button>
        
        <Button
          onClick={handleDownloadPDF}
          variant="outline"
          className="border-[#B98E57] text-[#5E4022] hover:bg-[#B98E57]/10 font-serif"
        >
          <span className="flex items-center space-x-2">
            <span>📄</span>
            <span>Download as PDF</span>
          </span>
        </Button>
        
        <Button
          onClick={handleShare}
          variant="outline"
          className="border-[#B98E57] text-[#5E4022] hover:bg-[#B98E57]/10 font-serif"
        >
          <span className="flex items-center space-x-2">
            <span>🔗</span>
            <span>Share</span>
          </span>
        </Button>
        
        <Link to="/upload">
          <Button
            variant="outline"
            className="border-[#5E4022] text-[#5E4022] hover:bg-[#5E4022]/10 font-serif"
          >
            <span className="flex items-center space-x-2">
              <span>📜</span>
              <span>Translate Another</span>
            </span>
          </Button>
        </Link>
      </div>

      {/* Historical Context */}
      <div className="mt-16 bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-[#B98E57]/20">
        <div className="text-center mb-6">
          <div className="text-3xl text-[#B98E57] mb-2">📚</div>
          <h3 className="text-2xl font-serif font-bold text-[#5E4022]">
            Historical Context
          </h3>
        </div>
        <p className="text-[#5E4022]/80 leading-relaxed max-w-3xl mx-auto">
          This inscription likely dates to the New Kingdom period (1550-1077 BCE) when solar worship 
          reached its zenith in ancient Egypt. References to Ra, the sun god, were common in religious 
          texts and tomb inscriptions, reflecting the central role of solar deities in Egyptian cosmology. 
          Such phrases often appeared on temple walls and papyri as invocations for divine protection and blessing.
        </p>
      </div>
    </div>
  );
};

export default Result;
