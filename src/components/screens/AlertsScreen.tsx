import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Sun, Scissors, Clock, CheckCircle } from "lucide-react";

const AlertsScreen = () => {
  const alerts = [
    {
      id: 1,
      type: "watering",
      icon: Droplets,
      title: "Water your Lettuce",
      description: "Soil moisture is below optimal level",
      time: "2 hours ago",
      priority: "high",
      color: "text-blue"
    },
    {
      id: 2,
      type: "harvest",
      icon: Scissors,
      title: "Harvest Cherry Tomatoes",
      description: "Fruits are ready for picking",
      time: "1 day ago",
      priority: "medium",
      color: "text-primary-green"
    },
    {
      id: 3,
      type: "sunlight",
      icon: Sun,
      title: "Move Basil to Sunlight",
      description: "Plant needs more direct sunlight",
      time: "3 hours ago",
      priority: "low",
      color: "text-yellow-500"
    }
  ];

  return (
    <div className="p-4 pb-20 space-y-4">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">Reminders & Alerts</h1>
        <p className="text-muted-foreground">Keep your plants healthy with timely care</p>
      </div>

      {/* Active Alerts */}
      <Card className="p-4 border-wireframe">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-foreground">Active Alerts</h2>
          <Badge variant="secondary" className="bg-red-100 text-red-600">
            {alerts.length} pending
          </Badge>
        </div>
        
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className="bg-wireframe p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className={`p-2 bg-card rounded-lg ${alert.color}`}>
                  <alert.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-foreground">{alert.title}</h3>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${
                        alert.priority === 'high' ? 'bg-red-100 text-red-600' :
                        alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {alert.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} />
                    <span>{alert.time}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mt-3">
                <Button size="sm" className="flex-1 bg-primary-green hover:bg-primary-green/90">
                  <CheckCircle size={14} className="mr-1" />
                  Mark Done
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Clock size={14} className="mr-1" />
                  Snooze 1hr
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Schedule */}
      <Card className="p-4 border-wireframe">
        <h2 className="font-semibold mb-3 text-foreground">Today's Schedule</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-wireframe rounded-lg opacity-60">
            <CheckCircle className="text-primary-green" size={20} />
            <div>
              <p className="font-medium line-through">Morning check - All plants</p>
              <p className="text-sm text-muted-foreground">Completed at 8:00 AM</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 bg-light-green/20 rounded-lg border border-light-green">
            <Clock className="text-primary-green" size={20} />
            <div>
              <p className="font-medium">Evening watering</p>
              <p className="text-sm text-muted-foreground">Scheduled for 6:00 PM</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AlertsScreen;