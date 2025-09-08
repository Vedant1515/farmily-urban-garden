import { Button } from "@/components/ui/button";
import { Home, Bell, GraduationCap, Users, ShoppingBag } from "lucide-react";

interface BottomNavigationProps {
  activeScreen: string;
  onScreenChange: (screen: string) => void;
}

const BottomNavigation = ({ activeScreen, onScreenChange }: BottomNavigationProps) => {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "alerts", icon: Bell, label: "Alerts" },
    { id: "learn", icon: GraduationCap, label: "Learn" },
    { id: "community", icon: Users, label: "Community" },
    { id: "store", icon: ShoppingBag, label: "Store" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-wireframe">
      <div className="flex justify-around items-center py-2 max-w-md mx-auto">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            className={`flex flex-col items-center gap-1 p-2 h-auto ${
              activeScreen === item.id 
                ? "text-primary-green" 
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => onScreenChange(item.id)}
          >
            <item.icon size={20} />
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;