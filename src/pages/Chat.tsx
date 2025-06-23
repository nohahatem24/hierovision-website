
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome to HieroVision's AI Oracle! I am here to share the wisdom of ancient Egypt. Ask me about hieroglyphs, pharaohs, monuments, or any aspect of this magnificent civilization.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    "Tell me about the pyramids",
    "Explain hieroglyphs",
    "Who was Cleopatra?",
    "What is the Book of the Dead?",
    "Describe ancient Egyptian gods",
    "How were mummies made?"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        "pyramids": "The pyramids of Egypt are among humanity's most remarkable achievements. The Great Pyramid of Giza, built for Pharaoh Khufu around 2580-2560 BCE, originally stood 146.5 meters tall and was constructed using over 2 million stone blocks. These monuments served as eternal resting places for pharaohs, designed to aid their journey to the afterlife. The precision of their construction continues to astound archaeologists today. 𓉴",
        "hieroglyphs": "Hieroglyphs were the sacred writing system of ancient Egypt, combining logographic and alphabetic elements. The word 'hieroglyph' means 'sacred carving' in Greek. These beautiful symbols could represent sounds, words, or concepts. The Rosetta Stone, discovered in 1799, was key to deciphering this ancient script. Hieroglyphs were used for over 3,000 years! 𓊪𓏏𓇯",
        "cleopatra": "Cleopatra VII was the last active pharaoh of ancient Egypt, ruling from 69-30 BCE. Contrary to popular belief, she was likely of Macedonian Greek descent and was known for her intelligence and political acumen rather than just her beauty. She spoke multiple languages and was highly educated. Her relationships with Julius Caesar and Mark Antony were strategic political alliances. 𓇳𓄿𓇋𓈖",
      };

      const responseKey = Object.keys(responses).find(key => 
        inputMessage.toLowerCase().includes(key)
      );

      const aiResponse: Message = {
        id: messages.length + 2,
        text: responseKey ? responses[responseKey as keyof typeof responses] : 
              "That's a fascinating question about ancient Egypt! The civilization that flourished along the Nile for over 3,000 years holds countless mysteries and wonders. Each aspect - from their advanced engineering to their complex religious beliefs - reveals the sophistication of this remarkable culture. What specific aspect would you like to explore further? 𓂀",
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="container mx-auto px-6 py-16 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-4xl text-[#B98E57] mb-4">🔮</div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#5E4022] mb-4">
          Oracle of Ancient Egypt
        </h1>
        <p className="text-lg text-[#5E4022]/70">
          Consult with our AI-powered oracle to unlock the secrets and wisdom of ancient Egypt
        </p>
      </div>

      {/* Chat Container */}
      <div className="relative bg-gradient-to-br from-[#F5E9D3] to-[#E3D2B7] rounded-3xl p-8 shadow-2xl border-2 border-[#B98E57]/30 min-h-[600px] flex flex-col">
        {/* Papyrus texture overlay */}
        <div className="absolute inset-0 opacity-5 rounded-3xl bg-gradient-to-r from-transparent via-[#B98E57]/20 to-transparent"></div>
        
        {/* Decorative corners */}
        <div className="absolute top-4 left-4 text-[#B98E57]/40 text-2xl">𓍝</div>
        <div className="absolute top-4 right-4 text-[#B98E57]/40 text-2xl">𓍝</div>
        <div className="absolute bottom-4 left-4 text-[#B98E57]/40 text-2xl">𓍝</div>
        <div className="absolute bottom-4 right-4 text-[#B98E57]/40 text-2xl">𓍝</div>

        {/* Messages Area */}
        <div className="flex-1 relative z-10 mb-6 space-y-4 overflow-y-auto max-h-96">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <Card className={`max-w-xs md:max-w-md ${
                message.isUser 
                  ? 'bg-[#B98E57] text-white border-[#B98E57]' 
                  : 'bg-white/60 backdrop-blur-sm border-[#B98E57]/20'
              }`}>
                <CardContent className="p-4">
                  <p className={`text-sm font-serif leading-relaxed ${
                    message.isUser ? 'text-white' : 'text-[#5E4022]'
                  }`}>
                    {message.text}
                  </p>
                  <p className={`text-xs mt-2 ${
                    message.isUser ? 'text-white/70' : 'text-[#5E4022]/50'
                  }`}>
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <Card className="bg-white/60 backdrop-blur-sm border-[#B98E57]/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#B98E57] rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-[#B98E57] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-[#B98E57] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="text-[#5E4022]/70 text-sm font-serif">Oracle is consulting the ancient texts...</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Quick Questions */}
        <div className="relative z-10 mb-6">
          <h3 className="text-lg font-serif font-bold text-[#5E4022] mb-3 text-center">
            Quick Questions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {quickQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleQuickQuestion(question)}
                className="border-[#B98E57]/50 text-[#5E4022] hover:bg-[#B98E57]/10 font-serif text-xs"
              >
                {question}
              </Button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="relative z-10 flex gap-2">
          <Input
            placeholder="Ask the Oracle about ancient Egypt..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 bg-white/50 border-[#B98E57]/30 focus:border-[#B98E57] font-serif"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="bg-gradient-to-r from-[#B98E57] to-[#5E4022] text-white font-serif px-6"
          >
            <span className="flex items-center space-x-2">
              <span>Send</span>
              <span>𓂀</span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
