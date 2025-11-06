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
      <Card className="overflow-hidden hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 border-2 border-border hover:border-primary/30 group">
        {/* Product Image */}
        <div className="relative h-48 bg-gradient-to-br from-secondary to-muted overflow-hidden">
          {image_url ? (
            <img
              src={image_url}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Battery className="h-20 w-20 text-muted-foreground/30" />
            </div>
          )}
          {/* Availability Badge */}
          <div className="absolute top-3 right-3">
            <Badge variant={availability ? "default" : "destructive"} className="font-semibold">
              {availability ? "In Stock" : "Out of Stock"}
            </Badge>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Battery className="h-4 w-4" />
              <span className="capitalize">{type}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>{warranty} Year{warranty > 1 ? 's' : ''}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center gap-1">
              <IndianRupee className="h-5 w-5 text-accent" />
              <span className="text-2xl font-bold text-foreground">{price.toFixed(2)}</span>
            </div>
            <span className="text-sm text-primary font-medium group-hover:underline">
              View Details →
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
