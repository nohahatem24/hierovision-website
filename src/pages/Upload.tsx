
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      setUploadedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      toast({
        title: "Image uploaded successfully!",
        description: "Your hieroglyph image is ready for translation.",
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (PNG, JPG, etc.)",
        variant: "destructive",
      });
    }
  };

  const handleReset = () => {
    setUploadedFile(null);
    setPreviewUrl("");
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
  };

  return (
    <div className="container mx-auto px-6 py-16 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-4xl text-[#B98E57] mb-4">📜</div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#5E4022] mb-4">
          Upload a Picture to Translate
        </h1>
        <p className="text-lg text-[#5E4022]/70 max-w-2xl mx-auto">
          Choose an image from your gallery to begin translation. Our AI will analyze the hieroglyphs and provide detailed meanings.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Upload Area */}
        <div className="space-y-6">
          <div
            className={`relative border-3 border-dashed rounded-2xl p-8 text-center transition-all duration-300 min-h-[300px] flex flex-col justify-center bg-white/20 backdrop-blur-sm ${
              dragActive
                ? "border-[#B98E57] bg-[#B98E57]/10 scale-105"
                : "border-[#B98E57]/50 hover:border-[#B98E57] hover:bg-[#B98E57]/5"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {/* Papyrus scroll decorative corners */}
            <div className="absolute top-2 left-2 text-[#B98E57]/30 text-xl">𓍝</div>
            <div className="absolute top-2 right-2 text-[#B98E57]/30 text-xl">𓍝</div>
            <div className="absolute bottom-2 left-2 text-[#B98E57]/30 text-xl">𓍝</div>
            <div className="absolute bottom-2 right-2 text-[#B98E57]/30 text-xl">𓍝</div>

            <div className="space-y-4">
              <div className="text-5xl text-[#B98E57]">
                {dragActive ? "📜" : "🏺"}
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#5E4022] mb-2">
                  Drop your hieroglyph image here
                </h3>
                <p className="text-[#5E4022]/60 mb-4">
                  or click to browse your files
                </p>
              </div>
              
              <input
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              <Button
                variant="outline"
                className="border-[#B98E57] text-[#5E4022] hover:bg-[#B98E57]/10 font-serif"
              >
                Choose File
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link to="/result" className="flex-1">
              <Button
                disabled={!uploadedFile}
                className="w-full py-3 bg-gradient-to-r from-[#B98E57] to-[#5E4022] hover:from-[#C69968] hover:to-[#6F4A33] text-white font-serif text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center space-x-2">
                  <span>✨</span>
                  <span>Translate Now</span>
                </span>
              </Button>
            </Link>
            
            <Button
              onClick={handleReset}
              variant="outline"
              className="px-6 border-[#5E4022] text-[#5E4022] hover:bg-[#5E4022]/10 font-serif"
            >
              Reset
            </Button>
          </div>
        </div>

        {/* Preview Area */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif font-bold text-[#5E4022] text-center">
            Preview
          </h3>
          
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-[#B98E57]/20 shadow-lg min-h-[300px] flex items-center justify-center">
            {previewUrl ? (
              <div className="w-full">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={previewUrl}
                    alt="Uploaded hieroglyph"
                    className="w-full h-auto max-h-64 object-contain bg-[#F5E9D3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5E4022]/10 to-transparent"></div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-[#5E4022]/70 font-serif">
                    <strong>File:</strong> {uploadedFile?.name}
                  </p>
                  <p className="text-[#5E4022]/70 font-serif text-sm">
                    Ready for translation ✨
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="text-6xl text-[#B98E57]/30 mb-4">𓂀</div>
                <p className="text-[#5E4022]/50 font-serif">
                  Your hieroglyph image will appear here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="mt-16 bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-[#B98E57]/20">
        <h3 className="text-2xl font-serif font-bold text-[#5E4022] mb-6 text-center">
          Tips for Best Results
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl mb-2">📸</div>
            <h4 className="font-serif font-bold text-[#5E4022] mb-2">Clear Images</h4>
            <p className="text-[#5E4022]/70 text-sm">Ensure hieroglyphs are clearly visible and well-lit</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🔍</div>
            <h4 className="font-serif font-bold text-[#5E4022] mb-2">High Quality</h4>
            <p className="text-[#5E4022]/70 text-sm">Upload high-resolution images for better accuracy</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">📏</div>
            <h4 className="font-serif font-bold text-[#5E4022] mb-2">Proper Framing</h4>
            <p className="text-[#5E4022]/70 text-sm">Include the full hieroglyph sequence in the frame</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
