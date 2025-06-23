
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Landmark {
  id: number;
  name: string;
  location: string;
  type: string;
  description: string;
  image: string;
  hieroglyphName: string;
}

const landmarks: Landmark[] = [
  {
    id: 1,
    name: "Great Pyramid of Giza",
    location: "Giza",
    type: "pyramid",
    description: "The last remaining wonder of the ancient world, built for Pharaoh Khufu around 2580-2560 BCE.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&h=600",
    hieroglyphName: "𓉴 𓊪 𓇳"
  },
  {
    id: 2,
    name: "Temple of Karnak",
    location: "Luxor",
    type: "temple",
    description: "A vast temple complex dedicated to Amun-Ra, constructed over 2000 years by successive pharaohs.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&h=600",
    hieroglyphName: "𓉟 𓊪 𓇳"
  },
  {
    id: 3,
    name: "Valley of the Kings",
    location: "Luxor",
    type: "tomb",
    description: "Royal burial ground containing the tombs of pharaohs including Tutankhamun and Ramesses II.",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&h=600",
    hieroglyphName: "𓇳 𓊪 𓈖"
  }
];

const Landmarks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark | null>(null);

  const filteredLandmarks = landmarks.filter(landmark => {
    const matchesSearch = landmark.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         landmark.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || landmark.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-4xl text-[#B98E57] mb-4">🏛️</div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#5E4022] mb-4">
          Ancient Egyptian Landmarks
        </h1>
        <p className="text-lg text-[#5E4022]/70 max-w-3xl mx-auto">
          Explore the magnificent monuments and sacred sites that have stood for millennia, 
          each telling the story of one of history's greatest civilizations.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12 bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-[#B98E57]/20">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1">
            <Input
              placeholder="Search landmarks or locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/50 border-[#B98E57]/30 focus:border-[#B98E57] font-serif"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {["all", "pyramid", "temple", "tomb"].map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
                className={`font-serif capitalize ${
                  selectedType === type
                    ? "bg-[#B98E57] text-white"
                    : "border-[#B98E57] text-[#5E4022] hover:bg-[#B98E57]/10"
                }`}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Landmarks Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredLandmarks.map((landmark) => (
          <Card
            key={landmark.id}
            className="group cursor-pointer bg-white/20 backdrop-blur-sm border border-[#B98E57]/20 hover:border-[#B98E57] transition-all duration-300 hover:shadow-xl overflow-hidden"
            onClick={() => setSelectedLandmark(landmark)}
          >
            {/* Egyptian frame decoration */}
            <div className="relative">
              <div className="absolute top-2 left-2 text-[#B98E57]/40 text-xl z-10">𓍝</div>
              <div className="absolute top-2 right-2 text-[#B98E57]/40 text-xl z-10">𓍝</div>
              <div className="absolute bottom-2 left-2 text-[#B98E57]/40 text-xl z-10">𓍝</div>
              <div className="absolute bottom-2 right-2 text-[#B98E57]/40 text-xl z-10">𓍝</div>
              
              <img
                src={landmark.image}
                alt={landmark.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Hieroglyph overlay */}
              <div className="absolute bottom-4 right-4 bg-[#5E4022]/80 text-[#B98E57] px-3 py-1 rounded-lg font-serif">
                {landmark.hieroglyphName}
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="font-serif text-[#5E4022] group-hover:text-[#B98E57] transition-colors">
                {landmark.name}
              </CardTitle>
              <div className="flex gap-2">
                <Badge variant="outline" className="border-[#B98E57]/50 text-[#5E4022]">
                  {landmark.location}
                </Badge>
                <Badge variant="outline" className="border-[#B98E57]/50 text-[#5E4022] capitalize">
                  {landmark.type}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-[#5E4022]/70 text-sm leading-relaxed">
                {landmark.description.substring(0, 120)}...
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Landmark Detail Modal */}
      {selectedLandmark && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#F5E9D3] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border-4 border-[#B98E57]">
            {/* Close button */}
            <button
              onClick={() => setSelectedLandmark(null)}
              className="absolute top-4 right-4 text-[#5E4022] hover:text-[#B98E57] text-2xl z-10"
            >
              ✕
            </button>
            
            {/* Modal content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={selectedLandmark.image}
                      alt={selectedLandmark.name}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5E4022]/20 to-transparent"></div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-center mb-4">
                      <div className="text-3xl text-[#B98E57] mb-2">{selectedLandmark.hieroglyphName}</div>
                      <h2 className="text-3xl font-serif font-bold text-[#5E4022]">
                        {selectedLandmark.name}
                      </h2>
                      <p className="text-[#B98E57] font-serif">
                        {selectedLandmark.location}
                      </p>
                    </div>
                    
                    <div className="bg-white/30 rounded-xl p-6 border border-[#B98E57]/20">
                      <p className="text-[#5E4022] leading-relaxed font-serif">
                        {selectedLandmark.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="flex-1 bg-gradient-to-r from-[#B98E57] to-[#5E4022] text-white font-serif">
                      Book Visit
                    </Button>
                    <Button variant="outline" className="border-[#5E4022] text-[#5E4022] font-serif">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 text-[#B98E57]/30 text-2xl">𓂀</div>
            <div className="absolute bottom-4 right-4 text-[#B98E57]/30 text-2xl">𓂀</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landmarks;
