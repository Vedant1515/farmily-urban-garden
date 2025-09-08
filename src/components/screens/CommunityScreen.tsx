import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share, PlusCircle, Search } from "lucide-react";

const CommunityScreen = () => {
  const posts = [
    {
      id: 1,
      user: "GreenThumb_Sarah",
      time: "2h ago",
      content: "My basil is finally ready for harvest! 🌿 Any tips for preserving fresh herbs?",
      image: true,
      likes: 24,
      comments: 8,
      tags: ["herbs", "harvest", "basil"]
    },
    {
      id: 2,
      user: "UrbanFarmer_Mike",
      time: "5h ago",
      content: "Question: Why are my tomato leaves turning yellow? Using the moisture sensor but still having issues...",
      image: false,
      likes: 12,
      comments: 15,
      tags: ["help", "tomatoes", "troubleshooting"]
    },
    {
      id: 3,
      user: "PlantMom_Jessica",
      time: "1d ago",
      content: "Amazing lettuce harvest from my apartment setup! The IoT sensors made such a difference 📊",
      image: true,
      likes: 45,
      comments: 12,
      tags: ["success", "lettuce", "indoor-garden"]
    }
  ];

  return (
    <div className="p-4 pb-20 space-y-4">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-foreground">Community</h1>
        <div className="flex gap-2">
          <div className="flex-1 bg-wireframe rounded-lg p-3 flex items-center gap-2">
            <Search className="text-muted-foreground" size={16} />
            <span className="text-muted-foreground text-sm">Search posts, users...</span>
          </div>
          <Button size="sm" className="bg-primary-green hover:bg-primary-green/90">
            <PlusCircle size={16} />
          </Button>
        </div>
      </div>

      {/* Community Stats */}
      <Card className="p-4 border-wireframe">
        <h2 className="font-semibold mb-3 text-foreground">Community Activity</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-wireframe p-3 rounded-lg">
            <div className="text-xl font-bold text-primary-green">1.2k</div>
            <div className="text-xs text-muted-foreground">Gardeners</div>
          </div>
          <div className="bg-wireframe p-3 rounded-lg">
            <div className="text-xl font-bold text-blue">234</div>
            <div className="text-xs text-muted-foreground">Posts Today</div>
          </div>
          <div className="bg-wireframe p-3 rounded-lg">
            <div className="text-xl font-bold text-brown">89</div>
            <div className="text-xs text-muted-foreground">Questions Answered</div>
          </div>
        </div>
      </Card>

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="p-4 border-wireframe">
            {/* Post Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-light-green rounded-full flex items-center justify-center">
                <span className="text-primary-green font-bold">
                  {post.user.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{post.user}</h3>
                <p className="text-xs text-muted-foreground">{post.time}</p>
              </div>
            </div>

            {/* Post Content */}
            <div className="mb-3">
              <p className="text-foreground mb-2">{post.content}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Image Placeholder */}
              {post.image && (
                <div className="w-full h-32 bg-wireframe rounded-lg flex items-center justify-center mb-3">
                  <span className="text-muted-foreground text-sm">📸 Image</span>
                </div>
              )}
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-wireframe">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="flex items-center gap-1 p-1">
                  <Heart size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{post.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1 p-1">
                  <MessageCircle size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{post.comments}</span>
                </Button>
                <Button variant="ghost" size="sm" className="p-1">
                  <Share size={16} className="text-muted-foreground" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Popular Topics */}
      <Card className="p-4 border-wireframe">
        <h2 className="font-semibold mb-3 text-foreground">Popular Topics</h2>
        <div className="flex flex-wrap gap-2">
          {["#beginners", "#hydroponics", "#herbs", "#troubleshooting", "#harvest", "#indoor-garden", "#sensors"].map((topic, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CommunityScreen;