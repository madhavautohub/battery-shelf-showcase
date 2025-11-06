import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Battery, Shield, IndianRupee } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  type: string;
  warranty: number;
  price: number;
  image_url?: string;
  availability: boolean;
}

const ProductCard = ({ id, name, type, warranty, price, image_url, availability }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="overflow-hidden hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer group h-full flex flex-col border-2 hover:border-primary/20 rounded-2xl bg-card/50 backdrop-blur-sm">
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50 relative">
          {image_url ? (
            <img
              src={image_url}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Battery className="h-16 w-16 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </div>
          )}
          <div className="absolute top-3 right-3">
            <Badge variant={availability ? "default" : "secondary"} className="shadow-lg">
              {availability ? "In Stock" : "Out of Stock"}
            </Badge>
          </div>
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-bold text-xl line-clamp-1 mb-3 group-hover:text-primary transition-colors">{name}</h3>
          
          <div className="space-y-2.5 text-sm flex-1">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-semibold text-foreground">Type:</span>
              <span>{type}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-semibold text-foreground">Warranty:</span>
              <span className="font-medium text-accent">{warranty} years</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ₹{price.toLocaleString()}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
