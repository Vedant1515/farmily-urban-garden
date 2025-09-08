import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, BookOpen, Clock, Award } from "lucide-react";

const LearnScreen = () => {
  const tutorials = [
    {
      id: 1,
      title: "Setting Up Your First Indoor Garden",
      description: "Learn the basics of container gardening and soil selection",
      duration: "5 min",
      type: "Beginner",
      progress: 100,
      completed: true
    },
    {
      id: 2,
      title: "Understanding Soil Moisture Levels",
      description: "How to read sensor data and optimize watering schedules",
      duration: "8 min",
      type: "Beginner",
      progress: 60,
      completed: false
    },
    {
      id: 3,
      title: "Identifying Plant Diseases Early",
      description: "Visual guide to common plant health issues and solutions",
      duration: "12 min",
      type: "Intermediate",
      progress: 0,
      completed: false
    }
  ];

  const guides = [
    {
      title: "Quick Care Guide: Herbs",
      items: ["Basil", "Mint", "Parsley", "Cilantro"]
    },
    {
      title: "Seasonal Planting Calendar",
      items: ["Spring crops", "Summer care", "Fall harvest", "Winter prep"]
    },
    {
      title: "Troubleshooting Common Issues",
      items: ["Yellow leaves", "Wilting", "Slow growth", "Pests"]
    }
  ];

  return (
    <div className="p-4 pb-20 space-y-4">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">Learning Hub</h1>
        <p className="text-muted-foreground">Master the art of urban gardening</p>
      </div>

      {/* Progress Overview */}
      <Card className="p-4 border-wireframe">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-foreground">Your Progress</h2>
          <Badge variant="secondary" className="bg-primary-green text-white">
            <Award size={12} className="mr-1" />
            Beginner
          </Badge>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-wireframe p-3 rounded-lg">
            <div className="text-2xl font-bold text-primary-green">3</div>
            <div className="text-xs text-muted-foreground">Completed</div>
          </div>
          <div className="bg-wireframe p-3 rounded-lg">
            <div className="text-2xl font-bold text-blue">2</div>
            <div className="text-xs text-muted-foreground">In Progress</div>
          </div>
          <div className="bg-wireframe p-3 rounded-lg">
            <div className="text-2xl font-bold text-brown">45</div>
            <div className="text-xs text-muted-foreground">Minutes Learned</div>
          </div>
        </div>
      </Card>

      {/* Video Tutorials */}
      <Card className="p-4 border-wireframe">
        <h2 className="font-semibold mb-3 text-foreground">Video Tutorials</h2>
        <div className="space-y-3">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="bg-wireframe p-4 rounded-lg">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-wireframe-dark rounded-lg flex items-center justify-center">
                  <PlayCircle className="text-primary-green" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-foreground">{tutorial.title}</h3>
                    {tutorial.completed && (
                      <Badge variant="secondary" className="bg-primary-green text-white text-xs">
                        ✓ Done
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{tutorial.description}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{tutorial.duration}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {tutorial.type}
                    </Badge>
                  </div>
                  {tutorial.progress > 0 && (
                    <div className="mt-2">
                      <div className="w-full bg-wireframe-dark h-1.5 rounded">
                        <div 
                          className="bg-primary-green h-1.5 rounded" 
                          style={{ width: `${tutorial.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Guides */}
      <Card className="p-4 border-wireframe">
        <h2 className="font-semibold mb-3 text-foreground">Quick Reference Guides</h2>
        <div className="space-y-3">
          {guides.map((guide, index) => (
            <div key={index} className="bg-wireframe p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="text-brown" size={16} />
                <h3 className="font-medium text-foreground">{guide.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1">
                {guide.items.map((item, itemIndex) => (
                  <Badge key={itemIndex} variant="outline" className="text-xs">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default LearnScreen;