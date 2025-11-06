import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, FileText } from "lucide-react";
import { toast } from "sonner";
import jsPDF from "jspdf";

const GenerateBill = () => {
  const [selectedProductId, setSelectedProductId] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [isGenerating, setIsGenerating] = useState(false);

  const { data: products, isLoading } = useQuery({
    queryKey: ["products-for-bill"],
    queryFn: async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) throw error;
      return data;
    },
  });

  const selectedProduct = products?.find((p) => p.id === selectedProductId);

  const generatePDF = async () => {
    if (!selectedProduct) return;

    setIsGenerating(true);

    try {
      const qty = parseInt(quantity);
      const subtotal = selectedProduct.price * qty;
      const gstPercentage = 18;
      const gstAmount = (subtotal * gstPercentage) / 100;
      const total = subtotal + gstAmount;

      // Save to database
      await supabase.from("bills").insert({
        product_id: selectedProduct.id,
        product_name: selectedProduct.name,
        quantity: qty,
        price: selectedProduct.price,
        subtotal,
        gst_percentage: gstPercentage,
        gst_amount: gstAmount,
        total,
      });

      // Generate PDF
      const doc = new jsPDF();
      
      doc.setFontSize(20);
      doc.text("MadhavAuto Store", 105, 20, { align: "center" });
      doc.setFontSize(12);
      doc.text("Tax Invoice", 105, 30, { align: "center" });
      
      doc.setFontSize(10);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 50);
      doc.text(`Invoice #: ${Date.now()}`, 20, 55);
      
      doc.line(20, 65, 190, 65);
      
      doc.setFontSize(12);
      doc.text("Product Details:", 20, 75);
      doc.setFontSize(10);
      doc.text(`Product: ${selectedProduct.name}`, 20, 85);
      doc.text(`Type: ${selectedProduct.type}`, 20, 92);
      doc.text(`Warranty: ${selectedProduct.warranty} Years`, 20, 99);
      doc.text(`Quantity: ${qty}`, 20, 106);
      doc.text(`Price per unit: ₹${selectedProduct.price.toFixed(2)}`, 20, 113);
      
      doc.line(20, 120, 190, 120);
      
      doc.text(`Subtotal: ₹${subtotal.toFixed(2)}`, 20, 130);
      doc.text(`GST (${gstPercentage}%): ₹${gstAmount.toFixed(2)}`, 20, 137);
      doc.setFontSize(12);
      doc.text(`Total: ₹${total.toFixed(2)}`, 20, 147);
      
      doc.save(`Invoice-${Date.now()}.pdf`);
      
      toast.success("Bill generated and saved successfully!");
      setSelectedProductId("");
      setQuantity("1");
    } catch (error: any) {
      toast.error(error.message || "Failed to generate bill");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Generate Bill</h2>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Select Product *</Label>
          <Select value={selectedProductId} onValueChange={setSelectedProductId}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a product" />
            </SelectTrigger>
            <SelectContent>
              {isLoading ? (
                <div className="p-4 text-center">
                  <Loader2 className="h-4 w-4 animate-spin mx-auto" />
                </div>
              ) : (
                products?.map((product) => (
                  <SelectItem key={product.id} value={product.id}>
                    {product.name} - ₹{product.price}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity *</Label>
          <Input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        {selectedProduct && (
          <Card className="p-4 bg-secondary/30">
            <h3 className="font-semibold mb-3">Bill Preview</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Product:</span>
                <span className="font-medium">{selectedProduct.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity:</span>
                <span>{quantity}</span>
              </div>
              <div className="flex justify-between">
                <span>Price per unit:</span>
                <span>₹{selectedProduct.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{(selectedProduct.price * parseInt(quantity)).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (18%):</span>
                <span>₹{((selectedProduct.price * parseInt(quantity) * 18) / 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2 border-t">
                <span>Total:</span>
                <span className="text-accent">
                  ₹{((selectedProduct.price * parseInt(quantity) * 118) / 100).toFixed(2)}
                </span>
              </div>
            </div>
          </Card>
        )}

        <Button
          onClick={generatePDF}
          disabled={!selectedProductId || isGenerating}
          className="w-full"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <FileText className="mr-2 h-4 w-4" />
              Generate & Download PDF
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default GenerateBill;
