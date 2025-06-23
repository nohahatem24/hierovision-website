
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";

interface BookingData {
  landmark: string;
  date: Date | undefined;
  visitors: number;
  tour: string;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
}

const landmarks = [
  {
    id: "giza",
    name: "Great Pyramid of Giza",
    price: 150,
    tours: ["Standard Tour", "VIP Experience", "Sunrise Tour"],
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "karnak",
    name: "Temple of Karnak",
    price: 120,
    tours: ["Guided Tour", "Audio Tour", "Night Illumination"],
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=400&h=300"
  },
  {
    id: "valley",
    name: "Valley of the Kings",
    price: 180,
    tours: ["Tomb Explorer", "Archaeological Tour", "Photography Tour"],
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=400&h=300"
  }
];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    landmark: "",
    date: undefined,
    visitors: 1,
    tour: "",
    contact: {
      name: "",
      email: "",
      phone: ""
    }
  });

  const selectedLandmark = landmarks.find(l => l.id === bookingData.landmark);
  const totalPrice = selectedLandmark ? selectedLandmark.price * bookingData.visitors : 0;

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleBookingSubmit = () => {
    // Here you would typically send the booking data to your backend
    alert("Booking submitted successfully! You will receive a confirmation email shortly.");
  };

  return (
    <div className="container mx-auto px-6 py-16 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="text-4xl text-[#B98E57] mb-4">🎫</div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#5E4022] mb-4">
          Book Your Egyptian Adventure
        </h1>
        <p className="text-lg text-[#5E4022]/70 max-w-3xl mx-auto">
          Reserve your spot to explore the magnificent monuments and sacred sites of ancient Egypt
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex justify-center items-center space-x-4">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold ${
                step >= num 
                  ? "bg-[#B98E57] text-white" 
                  : "bg-white/20 text-[#5E4022]/50 border-2 border-[#B98E57]/30"
              }`}>
                {num}
              </div>
              {num < 4 && (
                <div className={`w-16 h-1 mx-2 ${
                  step > num ? "bg-[#B98E57]" : "bg-[#B98E57]/20"
                }`}></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <div className="text-[#5E4022]/70 font-serif">
            Step {step} of 4: {
              step === 1 ? "Choose Destination" :
              step === 2 ? "Select Date & Tour" :
              step === 3 ? "Contact Details" :
              "Confirm Booking"
            }
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Booking Form */}
        <div className="lg:col-span-2">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-[#B98E57]/20 shadow-lg">
            {/* Step 1: Choose Landmark */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#5E4022] mb-6 text-center">
                  Choose Your Destination
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {landmarks.map((landmark) => (
                    <Card
                      key={landmark.id}
                      className={`cursor-pointer transition-all duration-300 ${
                        bookingData.landmark === landmark.id
                          ? "border-[#B98E57] bg-[#B98E57]/10 scale-105"
                          : "border-[#B98E57]/20 hover:border-[#B98E57]/50"
                      }`}
                      onClick={() => setBookingData(prev => ({ ...prev, landmark: landmark.id }))}
                    >
                      <img
                        src={landmark.image}
                        alt={landmark.name}
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      <CardHeader>
                        <CardTitle className="font-serif text-[#5E4022]">
                          {landmark.name}
                        </CardTitle>
                        <div className="flex justify-between items-center">
                          <Badge className="bg-[#B98E57] text-white">
                            ${landmark.price} per person
                          </Badge>
                          <div className="text-[#B98E57] text-xl">𓉴</div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date and Tour Selection */}
            {step === 2 && selectedLandmark && (
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#5E4022] mb-6 text-center">
                  Select Date & Tour Type
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#5E4022] mb-4">Choose Date</h3>
                    <div className="bg-white/30 rounded-xl p-4 border border-[#B98E57]/20">
                      <Calendar
                        mode="single"
                        selected={bookingData.date}
                        onSelect={(date) => setBookingData(prev => ({ ...prev, date }))}
                        disabled={(date) => date < new Date()}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-serif font-bold text-[#5E4022] mb-4">Tour Type</h3>
                      <div className="space-y-2">
                        {selectedLandmark.tours.map((tour) => (
                          <Card
                            key={tour}
                            className={`cursor-pointer p-4 transition-all duration-300 ${
                              bookingData.tour === tour
                                ? "border-[#B98E57] bg-[#B98E57]/10"
                                : "border-[#B98E57]/20 hover:border-[#B98E57]/50"
                            }`}
                            onClick={() => setBookingData(prev => ({ ...prev, tour }))}
                          >
                            <div className="font-serif text-[#5E4022]">{tour}</div>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-bold text-[#5E4022] mb-4">Number of Visitors</h3>
                      <div className="flex items-center space-x-4">
                        <Button
                          variant="outline"
                          onClick={() => setBookingData(prev => ({ 
                            ...prev, 
                            visitors: Math.max(1, prev.visitors - 1) 
                          }))}
                          className="border-[#B98E57] text-[#5E4022]"
                        >
                          -
                        </Button>
                        <span className="text-2xl font-serif text-[#5E4022] px-4">
                          {bookingData.visitors}
                        </span>
                        <Button
                          variant="outline"
                          onClick={() => setBookingData(prev => ({ 
                            ...prev, 
                            visitors: prev.visitors + 1 
                          }))}
                          className="border-[#B98E57] text-[#5E4022]"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#5E4022] mb-6 text-center">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[#5E4022] font-serif mb-2">Full Name</label>
                    <Input
                      placeholder="Enter your full name"
                      value={bookingData.contact.name}
                      onChange={(e) => setBookingData(prev => ({
                        ...prev,
                        contact: { ...prev.contact, name: e.target.value }
                      }))}
                      className="bg-white/50 border-[#B98E57]/30 focus:border-[#B98E57]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#5E4022] font-serif mb-2">Email Address</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={bookingData.contact.email}
                      onChange={(e) => setBookingData(prev => ({
                        ...prev,
                        contact: { ...prev.contact, email: e.target.value }
                      }))}
                      className="bg-white/50 border-[#B98E57]/30 focus:border-[#B98E57]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#5E4022] font-serif mb-2">Phone Number</label>
                    <Input
                      placeholder="Enter your phone number"
                      value={bookingData.contact.phone}
                      onChange={(e) => setBookingData(prev => ({
                        ...prev,
                        contact: { ...prev.contact, phone: e.target.value }
                      }))}
                      className="bg-white/50 border-[#B98E57]/30 focus:border-[#B98E57]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#5E4022] mb-6 text-center">
                  Confirm Your Booking
                </h2>
                <div className="space-y-4">
                  <Card className="bg-white/30 border-[#B98E57]/20">
                    <CardContent className="p-6">
                      <h3 className="font-serif font-bold text-[#5E4022] mb-4">Booking Summary</h3>
                      <div className="space-y-2 text-[#5E4022]">
                        <p><strong>Destination:</strong> {selectedLandmark?.name}</p>
                        <p><strong>Date:</strong> {bookingData.date?.toLocaleDateString()}</p>
                        <p><strong>Tour:</strong> {bookingData.tour}</p>
                        <p><strong>Visitors:</strong> {bookingData.visitors}</p>
                        <p><strong>Contact:</strong> {bookingData.contact.name}</p>
                        <div className="border-t border-[#B98E57]/30 pt-4 mt-4">
                          <p className="text-xl font-bold"><strong>Total: ${totalPrice}</strong></p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={handlePrevStep}
                variant="outline"
                className="border-[#5E4022] text-[#5E4022] hover:bg-[#5E4022]/10 font-serif"
                disabled={step === 1}
              >
                Previous
              </Button>
              
              {step < 4 ? (
                <Button
                  onClick={handleNextStep}
                  className="bg-gradient-to-r from-[#B98E57] to-[#5E4022] text-white font-serif"
                  disabled={
                    (step === 1 && !bookingData.landmark) ||
                    (step === 2 && (!bookingData.date || !bookingData.tour)) ||
                    (step === 3 && (!bookingData.contact.name || !bookingData.contact.email))
                  }
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleBookingSubmit}
                  className="bg-gradient-to-r from-[#B98E57] to-[#5E4022] text-white font-serif"
                >
                  Confirm Booking
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Booking Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-[#F5E9D3] to-[#E3D2B7] rounded-2xl p-6 border-2 border-[#B98E57]/30 shadow-lg sticky top-8">
            <h3 className="text-xl font-serif font-bold text-[#5E4022] mb-4 text-center">
              Booking Summary
            </h3>
            
            {selectedLandmark ? (
              <div className="space-y-4">
                <img
                  src={selectedLandmark.image}
                  alt={selectedLandmark.name}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <div className="text-[#5E4022]">
                  <p className="font-serif font-bold">{selectedLandmark.name}</p>
                  {bookingData.date && (
                    <p className="text-sm">📅 {bookingData.date.toLocaleDateString()}</p>
                  )}
                  {bookingData.tour && (
                    <p className="text-sm">🎭 {bookingData.tour}</p>
                  )}
                  <p className="text-sm">👥 {bookingData.visitors} visitor(s)</p>
                </div>
                <div className="border-t border-[#B98E57]/30 pt-4">
                  <div className="flex justify-between text-[#5E4022]">
                    <span>Subtotal:</span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="flex justify-between font-serif font-bold text-[#5E4022] text-lg">
                    <span>Total:</span>
                    <span>${totalPrice}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-[#5E4022]/60">
                <div className="text-4xl mb-4">🏺</div>
                <p className="font-serif">Select a destination to see booking details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
