import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our team for any inquiries
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 border-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Phone</h3>
                  <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                  <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 border-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Email</h3>
                  <p className="text-muted-foreground">info@batteryhub.com</p>
                  <p className="text-muted-foreground">support@batteryhub.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 border-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Address</h3>
                  <p className="text-muted-foreground">
                    123 Battery Street<br />
                    Auto District<br />
                    City, State - 123456
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 border-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Saturday</p>
                  <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground text-sm mt-1">Closed on Sundays</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-2">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Need Product Information?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For detailed product specifications, pricing, and availability, please reach out to our team. 
              We're happy to help you choose the right battery for your vehicle and provide expert guidance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You can also visit our showroom during business hours to see our products in person and 
              speak with our knowledgeable staff.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;
