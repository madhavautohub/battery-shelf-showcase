import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddProduct from "@/components/admin/AddProduct";
import ManageInventory from "@/components/admin/ManageInventory";
import GenerateBill from "@/components/admin/GenerateBill";

const AdminDashboard = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <div className="border-b bg-card/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Dashboard - MadhavAuto Store
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="add-product" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 h-auto bg-card/50 backdrop-blur-sm p-1.5 rounded-xl shadow-md">
            <TabsTrigger value="add-product" className="text-sm md:text-base rounded-lg data-[state=active]:shadow-lg">
              Add Product
            </TabsTrigger>
            <TabsTrigger value="manage-inventory" className="text-sm md:text-base rounded-lg data-[state=active]:shadow-lg">
              Manage Inventory
            </TabsTrigger>
            <TabsTrigger value="generate-bill" className="text-sm md:text-base rounded-lg data-[state=active]:shadow-lg">
              Generate Bill
            </TabsTrigger>
          </TabsList>

          <TabsContent value="add-product">
            <AddProduct />
          </TabsContent>

          <TabsContent value="manage-inventory">
            <ManageInventory />
          </TabsContent>

          <TabsContent value="generate-bill">
            <GenerateBill />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
