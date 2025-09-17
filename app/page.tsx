"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Wifi, Car, Home, MessageCircle, Clock, Euro } from "lucide-react"

export default function ApartmentRental() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-17%20at%2021.12.04-2YaR4UDTPkY6T9D9NWbEhYBUYZUrGl.jpeg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Experience Amsterdam in comfort</h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
            Cityloftbolo – Contact me for long term stay discount
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"> */}
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-secondary border-white hover:bg-white/90 px-8 py-4 text-lg"
              onClick={() => window.open("https://wa.me/your-number", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Message
            </Button>
          {/* </div> */}

          {/* <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Book Your Stay
          </Button> */}
        </div>
      </section>

      {/* Apartment Description */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">Your Home Away From Home</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Feel at home in this loft-style apartment in the vibrant Bos & Lommer neighborhood. Renovated at the end
                of 2024, the bright living room connects to the hallway and semi-separate bedroom (thick curtains
                provide privacy and block light and sound).
              </p>
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                The fully equipped kitchen includes a dishwasher, built-in oven, and washing machine. 100 Mbps internet
                makes work and streaming seamless. Perfect for singles or couples.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Home className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-sm font-medium">Loft-style</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-sm font-medium">100 Mbps WiFi</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-17%20at%2021.12.29-AZD9JMuudaguSoyGdeup81nPHLDQ6C.jpeg"
                alt="Modern kitchen with checkered floor"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">Apartment gallery</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-17%20at%2021.11.58-Ehj9dCTefLLGOkFlcxlephAZCyiIlw.jpeg",
                alt: "Living room with corner windows",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-17%20at%2021.12.27-3IiRPE6uhrkWOgB93OFsle0zFVVVMA.jpeg",
                alt: "Kitchen with checkered floor and plants",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-17%20at%2021.12.28-1DjIWE33K5UTCSHplw3lR3mzJHrQEc.jpeg",
                alt: "Kitchen workspace",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-17%20at%2021.12.08-9KeuzkeTmF9jRACkHrXsjVLrqEL3yJ.jpeg",
                alt: "Bright hallway with plants",
              },
             
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-17%20at%2021.11.59-9g2aBncHu3GkjUZ4FgbUaOFYvHvK2L.jpeg",
                alt: "Hallway with floating shelves",
              },
              
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-17%20at%2021.12.07-uLB2DtJ0IsVmQCyuuLTv4r1VNRM8YS.jpeg",
                alt: "Cozy bedroom",
              },
            ].map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">Discover Bos & Lommer</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
              Explore a lively area full of restaurants, cafés, shops, and small parks. Only 15 minutes by bike to the
              city center and 30 minutes to Schiphol Airport.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">City Center</h3>
                <p className="text-muted-foreground">Just 15 minutes by bike to Amsterdam's historic center</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Schiphol Airport</h3>
                <p className="text-muted-foreground">30 minutes to the airport by public transport</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Local Life</h3>
                <p className="text-muted-foreground">Restaurants, cafés, shops, and parks nearby</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* House Rules & Parking */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">House Rules & Parking</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Home className="w-6 h-6 text-secondary" />
                  House Rules
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Calm neighborhood with young families</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>No parties or groups allowed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Respectful of neighbors and quiet hours</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Car className="w-6 h-6 text-secondary" />
                  Parking Information
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Paid street parking: 09:00–23:00 (€5.18/hour)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Free parking outside these hours and Sundays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Indoor P+R at Bos en Lommerplein (6 min walk)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">Location</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">Located in the vibrant Bos & Lommer neighborhood</p>
          </div>

          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Bos en Lommer, Amsterdam</h3>
            <p className="text-muted-foreground mb-6">Exact address will be provided upon booking confirmation</p>
            <div className="checkered-pattern opacity-10 h-32 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Your Stay?</h2>
          <p className="text-xl mb-8 opacity-90 text-balance">
            Contact me directly via WhatsApp for availability and pricing. Long-term stay discounts available!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-secondary border-white hover:bg-white/90 px-8 py-4 text-lg"
              onClick={() => window.open("https://wa.me/your-number", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Message
            </Button>
          </div>

          {/* <div className="flex items-center justify-center gap-2 text-lg opacity-90">
            <Euro className="w-5 h-5" />
            <span>Nightly price: To be discussed</span>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-primary text-primary-foreground text-center">
        <p className="text-sm opacity-80">© 2024 Cityloftbolo. Direct booking only - no Airbnb fees.</p>
      </footer>
    </div>
  )
}
