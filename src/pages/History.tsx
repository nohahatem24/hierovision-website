
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const History = () => {
  const { toast } = useToast();
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  // Mock history data
  const historyItems = [
    {
      id: 1,
      image: "𓊪 𓏏 𓇯",
      translation: "Glory to the sun god Ra",
      date: "2024-06-20",
      time: "14:30",
      location: "Karnak Temple",
      confidence: 94,
      fullTranslation: "Glory to the sun god Ra, eternal ruler of the heavens",
      type: "temple"
    },
    {
      id: 2,
      image: "𓈖 𓂋 𓏏",
      translation: "Life, prosperity, health",
      date: "2024-06-19",
      time: "09:15",
      location: "Valley of Kings",
      confidence: 98,
      fullTranslation: "May you have life, prosperity, and health",
      type: "tomb"
    },
    {
      id: 3,
      image: "𓊪 𓇳 𓏺",
      translation: "Royal cartouche",
      date: "2024-06-18",
      time: "16:45",
      location: "Great Pyramid",
      confidence: 87,
      fullTranslation: "Khufu, son of Ra, beloved of the gods",
      type: "pyramid"
    },
    {
      id: 4,
      image: "𓎟 𓊪 𓏏",
      translation: "Sacred offering",
      date: "2024-06-17",
      time: "11:20",
      location: "Luxor Temple",
      confidence: 91,
      fullTranslation: "Sacred offering for the afterlife journey",
      type: "temple"
    },
    {
      id: 5,
      image: "𓏺 𓈖 𓏤",
      translation: "Divine protection",
      date: "2024-06-16",
      time: "13:55",
      location: "Abu Simbel",
      confidence: 89,
      fullTranslation: "Divine protection for the pharaoh's eternal reign",
      type: "temple"
    },
    {
      id: 6,
      image: "𓂋 𓈖 𓊪",
      translation: "Book of the Dead",
      date: "2024-06-15",
      time: "10:30",
      location: "Cairo Museum",
      confidence: 96,
      fullTranslation: "Spell for safe passage through the underworld",
      type: "papyrus"
    }
  ];

  const getIconForType = (type: string) => {
    switch (type) {
      case "temple": return "🏛️";
      case "tomb": return "⚱️";
      case "pyramid": return "🔺";
      case "papyrus": return "📜";
      default: return "🏺";
    }
  };

  const handleViewDetails = (item: any) => {
    setSelectedItem(item.id);
    toast({
      title: "Translation Details",
      description: `Viewing details for: ${item.translation}`,
    });
  };

  const handleDownload = (item: any) => {
    toast({
      title: "Download Started",
      description: `Downloading translation: ${item.translation}`,
    });
  };

  return (
    <div className="container mx-auto px-6 py-16 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-4xl text-[#B98E57] mb-4">📚</div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#5E4022] mb-4">
          My Translation History
        </h1>
        <p className="text-lg text-[#5E4022]/70 max-w-2xl mx-auto">
          Revisit your journey through ancient Egyptian wisdom. Each translation tells a story from the past.
        </p>
      </div>

      {/* Stats Summary */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-[#B98E57]/20 text-center">
          <div className="text-3xl text-[#B98E57] mb-2">📊</div>
          <div className="text-2xl font-serif font-bold text-[#5E4022]">{historyItems.length}</div>
          <p className="text-[#5E4022]/70">Total Translations</p>
        </div>
        <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-[#B98E57]/20 text-center">
          <div className="text-3xl text-[#B98E57] mb-2">🎯</div>
          <div className="text-2xl font-serif font-bold text-[#5E4022]">
            {Math.round(historyItems.reduce((acc, item) => acc + item.confidence, 0) / historyItems.length)}%
          </div>
          <p className="text-[#5E4022]/70">Average Accuracy</p>
        </div>
        <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-[#B98E57]/20 text-center">
          <div className="text-3xl text-[#B98E57] mb-2">🏛️</div>
          <div className="text-2xl font-serif font-bold text-[#5E4022]">
            {new Set(historyItems.map(item => item.location)).size}
          </div>
          <p className="text-[#5E4022]/70">Locations Explored</p>
        </div>
      </div>

      {/* History Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {historyItems.map((item) => (
          <div
            key={item.id}
            className={`group relative bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-[#B98E57]/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
              selectedItem === item.id ? 'ring-2 ring-[#B98E57] scale-105' : 'hover:scale-102'
            }`}
            onClick={() => handleViewDetails(item)}
          >
            {/* Egyptian border decorations */}
            <div className="absolute top-2 left-2 text-[#B98E57]/30 text-sm">𓍝</div>
            <div className="absolute top-2 right-2 text-[#B98E57]/30 text-sm">𓍝</div>
            <div className="absolute bottom-2 left-2 text-[#B98E57]/30 text-sm">𓍝</div>
            <div className="absolute bottom-2 right-2 text-[#B98E57]/30 text-sm">𓍝</div>

            {/* Type indicator */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">{getIconForType(item.type)}</span>
              <div className="text-right">
                <div className="text-xs text-[#5E4022]/60 font-serif">{item.date}</div>
                <div className="text-xs text-[#5E4022]/60 font-serif">{item.time}</div>
              </div>
            </div>

            {/* Hieroglyph preview */}
            <div className="bg-[#F5E9D3]/50 rounded-xl p-4 mb-4 min-h-[80px] flex items-center justify-center border border-[#B98E57]/20">
              <div className="text-3xl text-[#5E4022] text-center leading-relaxed">
                {item.image}
              </div>
            </div>

            {/* Translation preview */}
            <div className="mb-4">
              <h3 className="font-serif font-bold text-[#5E4022] mb-2 line-clamp-2">
                {item.translation}
              </h3>
              <p className="text-sm text-[#5E4022]/70 font-serif">
                📍 {item.location}
              </p>
            </div>

            {/* Confidence indicator */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-[#5E4022]/60">Confidence</span>
              <div className="flex items-center space-x-2">
                <div className="w-16 h-2 bg-[#5E4022]/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#B98E57] to-[#5E4022] transition-all duration-500"
                    style={{ width: `${item.confidence}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-[#5E4022]">{item.confidence}%</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewDetails(item);
                }}
                size="sm"
                className="flex-1 bg-[#B98E57] hover:bg-[#C69968] text-white font-serif text-xs"
              >
                View Details
              </Button>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(item);
                }}
                size="sm"
                variant="outline"
                className="border-[#5E4022] text-[#5E4022] hover:bg-[#5E4022]/10 font-serif text-xs"
              >
                📄
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal/Details view */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-[#F5E9D3] to-[#E3D2B7] rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#B98E57]/30 shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-serif font-bold text-[#5E4022]">
                Translation Details
              </h2>
              <Button
                onClick={() => setSelectedItem(null)}
                variant="outline"
                size="sm"
                className="border-[#5E4022] text-[#5E4022] hover:bg-[#5E4022]/10"
              >
                ✕
              </Button>
            </div>

            {(() => {
              const item = historyItems.find(h => h.id === selectedItem);
              if (!item) return null;

              return (
                <div className="space-y-6">
                  <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#B98E57]/20">
                    <div className="text-center mb-4">
                      <div className="text-4xl text-[#5E4022] mb-2">{item.image}</div>
                      <p className="text-sm text-[#5E4022]/60 font-serif">
                        {item.location} • {item.date} at {item.time}
                      </p>
                    </div>
                    <p className="text-lg font-serif text-[#5E4022] italic text-center">
                      "{item.fullTranslation}"
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Link to="/result" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-[#B98E57] to-[#5E4022] hover:from-[#C69968] hover:to-[#6F4A33] text-white font-serif">
                        View Full Analysis
                      </Button>
                    </Link>
                    <Button
                      onClick={() => handleDownload(item)}
                      variant="outline"
                      className="border-[#B98E57] text-[#5E4022] hover:bg-[#B98E57]/10 font-serif"
                    >
                      Download PDF
                    </Button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="text-center">
        <Link to="/upload">
          <Button className="bg-gradient-to-r from-[#B98E57] to-[#5E4022] hover:from-[#C69968] hover:to-[#6F4A33] text-white font-serif text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="flex items-center space-x-2">
              <span>📜</span>
              <span>Translate New Image</span>
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default History;
