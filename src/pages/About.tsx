import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Battery, Shield, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About BatteryHub
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for premium vehicle batteries with guaranteed warranty
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 border-2">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Battery className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Wide Range</h3>
              <p className="text-muted-foreground">
                Batteries for all vehicle types - 2-wheelers, 3-wheelers, 4-wheelers, and trucks
              </p>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 border-2">
              <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Quality Assured</h3>
              <p className="text-muted-foreground">
                All batteries come with warranty ranging from 2 to 4 years
              </p>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 border-2">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Premium Quality</h3>
              <p className="text-muted-foreground">
                We stock only the best brands with proven track records
              </p>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 border-2">
              <div className="p-3 bg-accent/10 rounded-lg w-fit mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Customer First</h3>
              <p className="text-muted-foreground">
                Dedicated support team to help you choose the right battery
              </p>
            </Card>
          </div>

          {/* About Text */}
          <Card className="p-8 border-2">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At BatteryHub, we are committed to providing high-quality vehicle batteries that keep you moving. 
                With years of experience in the automotive battery industry, we understand the importance of reliability 
                and performance.
              </p>
              <p>
                Our extensive catalog features batteries for all vehicle types, from motorcycles to commercial trucks. 
                Each product in our inventory is carefully selected based on quality, durability, and customer satisfaction.
              </p>
              <p>
                We believe in transparency and customer education. This platform serves as a comprehensive catalog 
                where you can explore our products, compare specifications, and make informed decisions about your 
                battery needs.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
