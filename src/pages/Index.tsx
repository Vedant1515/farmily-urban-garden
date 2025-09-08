import { useState } from "react";
import BottomNavigation from "@/components/layout/BottomNavigation";
import HomeScreen from "@/components/screens/HomeScreen";
import AlertsScreen from "@/components/screens/AlertsScreen";
import LearnScreen from "@/components/screens/LearnScreen";
import CommunityScreen from "@/components/screens/CommunityScreen";
import StoreScreen from "@/components/screens/StoreScreen";

const Index = () => {
  const [activeScreen, setActiveScreen] = useState("home");

  const renderScreen = () => {
    switch (activeScreen) {
      case "home":
        return <HomeScreen />;
      case "alerts":
        return <AlertsScreen />;
      case "learn":
        return <LearnScreen />;
      case "community":
        return <CommunityScreen />;
      case "store":
        return <StoreScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      <main className="overflow-y-auto">
        {renderScreen()}
      </main>
      <BottomNavigation 
        activeScreen={activeScreen} 
        onScreenChange={setActiveScreen} 
      />
    </div>
  );
};

export default Index;
