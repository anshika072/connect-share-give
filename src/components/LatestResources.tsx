import { Clock, MapPin, User, Heart } from "lucide-react";

const LatestResources = () => {
  const resources = [
    {
      id: 1,
      title: "Winter Clothes for Children",
      description: "Warm jackets, sweaters, and boots for kids aged 5-12. All items are clean and in good condition.",
      location: "Downtown Community Center",
      postedBy: "Sarah Johnson",
      timeAgo: "2 hours ago",
      category: "Clothing",
      urgent: false
    },
    {
      id: 2,
      title: "School Supplies & Books",
      description: "Notebooks, pencils, erasers, and textbooks for elementary students. Perfect for the new school year.",
      location: "East Side Library",
      postedBy: "Education First NGO",
      timeAgo: "5 hours ago",
      category: "Education",
      urgent: true
    },
    {
      id: 3,
      title: "Fresh Groceries & Meals",
      description: "Weekly food packages including vegetables, fruits, and ready-to-eat meals for families in need.",
      location: "Central Food Bank",
      postedBy: "Food Share Community",
      timeAgo: "1 day ago",
      category: "Food",
      urgent: false
    },
    {
      id: 4,
      title: "Medical Equipment",
      description: "Wheelchairs, walking aids, and basic medical supplies available for elderly community members.",
      location: "Health Care Center",
      postedBy: "Dr. Michael Chen",
      timeAgo: "2 days ago",
      category: "Healthcare",
      urgent: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Clothing": return "bg-blue-500/20 text-blue-400";
      case "Education": return "bg-purple-500/20 text-purple-400";
      case "Food": return "bg-green-500/20 text-green-400";
      case "Healthcare": return "bg-red-500/20 text-red-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Latest <span className="text-gradient">Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Discover the newest resources shared by our community members and find what you need most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div
              key={resource.id}
              className="bg-card-gradient border border-border rounded-2xl p-6 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(resource.category)}`}>
                  {resource.category}
                </div>
                {resource.urgent && (
                  <div className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium">
                    Urgent
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3 text-foreground line-clamp-2">
                {resource.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {resource.description}
              </p>

              {/* Meta Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{resource.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <User className="h-3 w-3" />
                  <span>{resource.postedBy}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{resource.timeAgo}</span>
                </div>
              </div>

              {/* Action */}
              <button className="w-full mt-4 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg py-2 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
                <Heart className="h-4 w-4" />
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 animate-fade-in">
          <button className="bg-gradient-button text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300">
            View All Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestResources;