
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Gallery = () => {
  const { toast } = useToast();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // Mock gallery data
  const galleryItems = [
    {
      id: 1,
      image: "𓊪 𓇳 𓏺",
      translation: "Pharaoh Khufu, Builder of the Great Pyramid",
      location: "Great Pyramid of Giza",
      type: "pyramid",
      contributor: "Explorer_Sarah",
      likes: 142,
      date: "2024-06-20",
      fullTranslation: "Khufu, son of Ra, beloved of the gods, eternal ruler who built this monument for eternity"
    },
    {
      id: 2,
      image: "𓈖 𓂋 𓏏 𓊪",
      translation: "May the gods grant eternal life",
      location: "Valley of the Kings",
      type: "tomb",
      contributor: "ArcheoMaster",
      likes: 98,
      date: "2024-06-19",
      fullTranslation: "May the gods grant eternal life, prosperity, and health to the deceased in the afterlife"
    },
    {
      id: 3,
      image: "𓊨 𓏏 𓇯",
      translation: "Sacred temple of Amun",
      location: "Karnak Temple",
      type: "temple",
      contributor: "HieroHunter",
      likes: 156,
      date: "2024-06-18",
      fullTranslation: "Sacred temple of Amun, king of the gods, house of divine power"
    },
    {
      id: 4,
      image: "𓎟 𓊪 𓏤",
      translation: "Offering to the sun god Ra",
      location: "Abu Simbel",
      type: "temple",
      contributor: "PyramidSeeker",
      likes: 203,
      date: "2024-06-17",
      fullTranslation: "Sacred offering to the sun god Ra, bringer of light and life to all creation"
    },
    {
      id: 5,
      image: "𓂋 𓈖 𓊪 𓏺",
      translation: "Book of the Dead - Spell 125",
      location: "Cairo Museum",
      type: "papyrus",
      contributor: "AncientScribe",
      likes: 89,
      date: "2024-06-16",
      fullTranslation: "Spell from the Book of the Dead for weighing the heart against the feather of truth"
    },
    {
      id: 6,
      image: "𓇳 𓊪 𓈖",
      translation: "Divine protection of Horus",
      location: "Edfu Temple",
      type: "temple",
      contributor: "TempleWalker",
      likes: 134,
      date: "2024-06-15",
      fullTranslation: "Divine protection of Horus, the falcon god, guardian of the pharaoh"
    },
    {
      id: 7,
      image: "𓊪 𓏏 𓇯 𓈖",
      translation: "Queen Nefertiti's cartouche",
      location: "Tell el-Amarna",
      type: "palace",
      contributor: "RoyalHunter",
      likes: 187,
      date: "2024-06-14",
      fullTranslation: "Nefertiti, the beautiful one has come, beloved wife of Akhenaten"
    },
    {
      id: 8,
      image: "𓎟 𓇳 𓏺",
      translation: "Ritual for the afterlife",
      location: "Saqqara",
      type: "tomb",
      contributor: "TombRaider92",
      likes: 112,
      date: "2024-06-13",
      fullTranslation: "Sacred ritual for safe passage through the trials of the afterlife journey"
    }
  ];

  const filters = [
    { id: "all", label: "All Discoveries", icon: "🏺" },
    { id: "pyramid", label: "Pyramids", icon: "🔺" },
    { id: "temple", label: "Temples", icon: "🏛️" },
    { id: "tomb", label: "Tombs", icon: "⚱️" },
    { id: "papyrus", label: "Papyrus", icon: "📜" },
    { id: "palace", label: "Palaces", icon: "🏰" }
  ];

  const filteredItems = selectedFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.type === selectedFilter);

  const getTypeIcon = (type: string) => {
    const filterItem = filters.find(f => f.id === type);
    return filterItem ? filterItem.icon : "🏺";
  };

  const handleImageClick = (item: any) => {
    setSelectedImage(item);
  };

  const handleLike = (item: any) => {
    toast({
      title: "Liked!",
      description: `You liked "${item.translation}"`,
    });
  };

  return (
    <div className="container mx-auto px-6 py-16 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-4xl text-[#B98E57] mb-4">🌍</div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#5E4022] mb-4">
          Shared Gallery
        </h1>
        <p className="text-lg text-[#5E4022]/70 max-w-2xl mx-auto">
          Explore hieroglyph translations shared by our global community of explorers and archaeologists.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              className={`font-serif transition-all duration-300 ${
                selectedFilter === filter.id
                  ? "bg-gradient-to-r from-[#B98E57] to-[#5E4022] text-white shadow-lg"
                  : "border-[#B98E57] text-[#5E4022] hover:bg-[#B98E57]/10"
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#B98E57]/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
            onClick={() => handleImageClick(item)}
          >
            {/* Museum plaque header */}
            <div className="bg-gradient-to-r from-[#B98E57] to-[#5E4022] p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{getTypeIcon(item.type)}</span>
                  <span className="font-serif font-bold text-sm">{item.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-xs">❤️</span>
                  <span className="text-xs font-bold">{item.likes}</span>
                </div>
              </div>
            </div>

            {/* Hieroglyph display */}
            <div className="bg-[#F5E9D3]/50 p-8 min-h-[150px] flex items-center justify-center relative">
              {/* Decorative corners */}
              <div className="absolute top-2 left-2 text-[#B98E57]/30 text-sm">𓍝</div>
              <div className="absolute top-2 right-2 text-[#B98E57]/30 text-sm">𓍝</div>
              <div className="absolute bottom-2 left-2 text-[#B98E57]/30 text-sm">𓍝</div>
              <div className="absolute bottom-2 right-2 text-[#B98E57]/30 text-sm">𓍝</div>
              
              <div className="text-4xl text-[#5E4022] text-center leading-relaxed">
                {item.image}
              </div>
            </div>

            {/* Translation info */}
            <div className="p-4">
              <h3 className="font-serif font-bold text-[#5E4022] mb-2 line-clamp-2">
                {item.translation}
              </h3>
              <div className="flex items-center justify-between text-sm text-[#5E4022]/60">
                <span>by {item.contributor}</span>
                <span>{item.date}</span>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#5E4022]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(item);
                  }}
                  size="sm"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white/20 font-serif"
                >
                  ❤️ Like This Translation
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for detailed view */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-[#F5E9D3] to-[#E3D2B7] rounded-2xl p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto border-2 border-[#B98E57]/30 shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#5E4022] mb-2">
                  {selectedImage.translation}
                </h2>
                <p className="text-[#5E4022]/70 font-serif">
                  📍 {selectedImage.location} • by {selectedImage.contributor}
                </p>
              </div>
              <Button
                onClick={() => setSelectedImage(null)}
                variant="outline"
                size="sm"
                className="border-[#5E4022] text-[#5E4022] hover:bg-[#5E4022]/10"
              >
                ✕
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Image side */}
              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#B98E57]/20">
                <div className="text-center">
                  <div className="text-6xl text-[#5E4022] mb-4 leading-relaxed">
                    {selectedImage.image}
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-sm text-[#5E4022]/60">
                    <span>{getTypeIcon(selectedImage.type)} {selectedImage.type}</span>
                    <span>❤️ {selectedImage.likes} likes</span>
                  </div>
                </div>
              </div>

              {/* Translation side */}
              <div className="space-y-4">
                <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-[#B98E57]/20">
                  <h3 className="font-serif font-bold text-[#5E4022] mb-3">Full Translation</h3>
                  <p className="text-[#5E4022] font-serif italic leading-relaxed">
                    "{selectedImage.fullTranslation}"
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => handleLike(selectedImage)}
                    className="flex-1 bg-gradient-to-r from-[#B98E57] to-[#5E4022] hover:from-[#C69968] hover:to-[#6F4A33] text-white font-serif"
                  >
                    ❤️ Like
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#B98E57] text-[#5E4022] hover:bg-[#B98E57]/10 font-serif"
                  >
                    📤 Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats summary */}
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-[#B98E57]/20 text-center">
        <h3 className="text-2xl font-serif font-bold text-[#5E4022] mb-4">
          Community Stats
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl font-serif font-bold text-[#B98E57]">{galleryItems.length}</div>
            <p className="text-[#5E4022]/70">Shared Translations</p>
          </div>
          <div>
            <div className="text-2xl font-serif font-bold text-[#B98E57]">
              {new Set(galleryItems.map(item => item.location)).size}
            </div>
            <p className="text-[#5E4022]/70">Historic Sites</p>
          </div>
          <div>
            <div className="text-2xl font-serif font-bold text-[#B98E57]">
              {new Set(galleryItems.map(item => item.contributor)).size}
            </div>
            <p className="text-[#5E4022]/70">Contributors</p>
          </div>
          <div>
            <div className="text-2xl font-serif font-bold text-[#B98E57]">
              {galleryItems.reduce((acc, item) => acc + item.likes, 0)}
            </div>
            <p className="text-[#5E4022]/70">Total Likes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
