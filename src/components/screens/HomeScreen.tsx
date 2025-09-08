import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Sun, Thermometer, Wifi } from "lucide-react";

const HomeScreen = () => {
  return (
    <div className="p-4 pb-20 space-y-4">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">Farmily Dashboard</h1>
        <p className="text-muted-foreground">Good morning! Your plants are doing well today.</p>
      </div>

      {/* Plant Health Summary */}
      <Card className="p-4 border-wireframe">
        <h2 className="font-semibold mb-3 text-foreground">Plant Health Overview</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-wireframe p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Droplets className="text-blue w-4 h-4" />
              <span className="text-sm font-medium">Soil Moisture</span>
            </div>
            <div className="text-lg font-bold text-blue">72%</div>
            <div className="w-full bg-wireframe-dark h-2 rounded mt-1">
              <div className="bg-blue h-2 rounded w-3/4"></div>
            </div>
          </div>
          
          <div className="bg-wireframe p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Sun className="text-yellow-500 w-4 h-4" />
              <span className="text-sm font-medium">Sunlight</span>
            </div>
            <div className="text-lg font-bold text-yellow-600">Good</div>
            <div className="w-full bg-wireframe-dark h-2 rounded mt-1">
              <div className="bg-yellow-500 h-2 rounded w-4/5"></div>
            </div>
          </div>
          
          <div className="bg-wireframe p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Thermometer className="text-orange-500 w-4 h-4" />
              <span className="text-sm font-medium">Temperature</span>
            </div>
            <div className="text-lg font-bold text-orange-600">23°C</div>
            <div className="text-xs text-muted-foreground">Optimal range</div>
          </div>
          
          <div className="bg-wireframe p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Wifi className="text-primary-green w-4 h-4" />
              <span className="text-sm font-medium">Sensor Status</span>
            </div>
            <Badge variant="secondary" className="bg-light-green text-primary-green">
              Connected
            </Badge>
          </div>
        </div>
      </Card>

      {/* My Plants */}
      <Card className="p-4 border-wireframe">
        <h2 className="font-semibold mb-3 text-foreground">My Plants</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-wireframe rounded-lg">
            <div className="w-12 h-12 bg-light-green rounded-lg flex items-center justify-center">
              <span className="text-primary-green font-bold">🌿</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Basil Plant</h3>
              <p className="text-sm text-muted-foreground">Thriving • Last watered 2 days ago</p>
            </div>
            <Badge variant="secondary" className="bg-primary-green text-white">
              Healthy
            </Badge>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-wireframe rounded-lg">
            <div className="w-12 h-12 bg-light-green rounded-lg flex items-center justify-center">
              <span className="text-primary-green font-bold">🥬</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Lettuce</h3>
              <p className="text-sm text-muted-foreground">Growing • Needs watering soon</p>
            </div>
            <Badge variant="secondary" className="bg-yellow-500 text-white">
              Attention
            </Badge>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-wireframe rounded-lg">
            <div className="w-12 h-12 bg-light-green rounded-lg flex items-center justify-center">
              <span className="text-primary-green font-bold">🍅</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium">Cherry Tomatoes</h3>
              <p className="text-sm text-muted-foreground">Flowering • Ready to harvest soon</p>
            </div>
            <Badge variant="secondary" className="bg-primary-green text-white">
              Ready
            </Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HomeScreen;