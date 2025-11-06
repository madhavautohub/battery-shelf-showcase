import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Battery, Shield, IndianRupee, AlertCircle } from "lucide-react";
import { Loader2 } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <AlertCircle className="h-16 w-16 mx-auto text-destructive mb-4" />
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Button onClick={() => navigate("/")}>Back to Products</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <Card className="overflow-hidden p-0">
            <div className="relative h-[400px] bg-gradient-to-br from-secondary to-muted">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Battery className="h-32 w-32 text-muted-foreground/30" />
                </div>
              )}
            </div>
          </Card>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-3">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  {product.name}
                </h1>
                <Badge variant={product.availability ? "default" : "destructive"} className="text-sm">
                  {product.availability ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Battery className="h-5 w-5" />
                  <span className="capitalize text-lg">{product.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-lg">{product.warranty} Year{product.warranty > 1 ? 's' : ''} Warranty</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <IndianRupee className="h-8 w-8 text-accent" />
                <span className="text-4xl font-bold text-foreground">{product.price.toFixed(2)}</span>
              </div>
            </div>

            <Card className="p-6 bg-secondary/30 border-2">
              <h2 className="text-xl font-bold mb-3 text-foreground">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description || "No description available for this product."}
              </p>
            </Card>

            <Card className="p-6 bg-accent/5 border-2 border-accent/20">
              <h3 className="font-semibold text-lg mb-2 text-foreground">Note</h3>
              <p className="text-sm text-muted-foreground">
                This is a display catalog. For purchase inquiries, please contact us through the Contact page.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
