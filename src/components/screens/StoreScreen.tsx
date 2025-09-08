import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Filter, Search } from "lucide-react";

const StoreScreen = () => {
  const categories = ["All", "Seeds", "Soil", "Sensors", "Tools", "Nutrients"];
  
  const products = [
    {
      id: 1,
      name: "Smart Soil Moisture Sensor",
      price: "$29.99",
      rating: 4.8,
      reviews: 124,
      category: "sensors",
      image: "📡",
      description: "IoT-enabled moisture sensor with app integration",
      inStock: true
    },
    {
      id: 2,
      name: "Organic Herb Seed Kit",
      price: "$12.99",
      rating: 4.6,
      reviews: 89,
      category: "seeds",
      image: "🌱",
      description: "Basil, parsley, cilantro, and mint seeds",
      inStock: true
    },
    {
      id: 3,
      name: "Premium Potting Mix",
      price: "$8.99",
      rating: 4.7,
      reviews: 156,
      category: "soil",
      image: "🪴",
      description: "Nutrient-rich soil blend for containers",
      inStock: true
    },
    {
      id: 4,
      name: "LED Grow Light",
      price: "$45.99",
      rating: 4.5,
      reviews: 67,
      category: "tools",
      image: "💡",
      description: "Full spectrum LED for indoor plants",
      inStock: false
    },
    {
      id: 5,
      name: "Tomato Starter Kit",
      price: "$15.99",
      rating: 4.9,
      reviews: 203,
      category: "seeds",
      image: "🍅",
      description: "Everything needed to grow cherry tomatoes",
      inStock: true
    }
  ];

  return (
    <div className="p-4 pb-20 space-y-4">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-foreground">Store</h1>
        <div className="flex gap-2">
          <div className="flex-1 bg-wireframe rounded-lg p-3 flex items-center gap-2">
            <Search className="text-muted-foreground" size={16} />
            <span className="text-muted-foreground text-sm">Search products...</span>
          </div>
          <Button size="sm" variant="outline" className="p-3">
            <Filter size={16} />
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={index === 0 ? "default" : "outline"}
            size="sm"
            className={`whitespace-nowrap ${
              index === 0 
                ? "bg-primary-green hover:bg-primary-green/90" 
                : ""
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Products */}
      <Card className="p-4 border-wireframe">
        <h2 className="font-semibold mb-3 text-foreground">Featured for Beginners</h2>
        <div className="grid grid-cols-2 gap-3">
          {products.slice(0, 2).map((product) => (
            <div key={product.id} className="bg-wireframe p-3 rounded-lg">
              <div className="text-center mb-2">
                <div className="text-3xl mb-1">{product.image}</div>
                <h3 className="font-medium text-sm text-foreground">{product.name}</h3>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-primary-green">{product.price}</span>
                <Button size="sm" className="bg-primary-green hover:bg-primary-green/90">
                  <ShoppingCart size={12} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Product Grid */}
      <div className="space-y-3">
        <h2 className="font-semibold text-foreground">All Products</h2>
        <div className="space-y-3">
          {products.map((product) => (
            <Card key={product.id} className="p-4 border-wireframe">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-wireframe rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{product.image}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-medium text-foreground">{product.name}</h3>
                    {!product.inStock && (
                      <Badge variant="secondary" className="bg-red-100 text-red-600 text-xs">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500" size={12} fill="currentColor" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary-green">{product.price}</span>
                    <Button 
                      size="sm" 
                      disabled={!product.inStock}
                      className="bg-primary-green hover:bg-primary-green/90"
                    >
                      <ShoppingCart size={14} className="mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      <Card className="p-4 border-wireframe bg-light-green/10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-foreground">Shopping Cart</h3>
            <p className="text-sm text-muted-foreground">2 items • $42.98</p>
          </div>
          <Button className="bg-primary-green hover:bg-primary-green/90">
            View Cart
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default StoreScreen;