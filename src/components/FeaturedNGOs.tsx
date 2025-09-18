import { MapPin, Users, Star, ExternalLink } from "lucide-react";

const FeaturedNGOs = () => {
  const ngos = [
    {
      id: 1,
      name: "Hope Foundation",
      description: "Dedicated to providing education and healthcare to underprivileged children in urban communities.",
      location: "New York, NY",
      members: "2,500+",
      rating: 4.9,
      category: "Education & Health",
      image: "🏫",
      activeProjects: 15,
      verified: true
    },
    {
      id: 2,
      name: "Green Earth Initiative",
      description: "Environmental conservation and sustainable living programs for communities worldwide.",
      location: "San Francisco, CA",
      members: "1,800+",
      rating: 4.8,
      category: "Environment",
      image: "🌱",
      activeProjects: 22,
      verified: true
    },
    {
      id: 3,
      name: "Food for All",
      description: "Fighting hunger by distributing meals and groceries to families facing food insecurity.",
      location: "Chicago, IL",
      members: "3,200+",
      rating: 4.9,
      category: "Food Security",
      image: "🍽️",
      activeProjects: 8,
      verified: true
    },
    {
      id: 4,
      name: "Elder Care Network",
      description: "Supporting elderly community members with healthcare, companionship, and daily assistance.",
      location: "Boston, MA",
      members: "900+",
      rating: 4.7,
      category: "Elder Care",
      image: "👴",
      activeProjects: 12,
      verified: true
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Featured <span className="text-gradient">NGOs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Connect with trusted organizations making a real difference in communities around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ngos.map((ngo, index) => (
            <div
              key={ngo.id}
              className="bg-card-gradient border border-border rounded-2xl p-6 hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{ngo.image}</div>
                {ngo.verified && (
                  <div className="flex items-center gap-1 bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    <Star className="h-3 w-3 fill-current" />
                    Verified
                  </div>
                )}
              </div>

              {/* NGO Info */}
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {ngo.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {ngo.description}
              </p>

              {/* Category */}
              <div className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block">
                {ngo.category}
              </div>

              {/* Stats */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{ngo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>{ngo.members} members</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Star className="h-3 w-3" />
                  <span>{ngo.rating} rating • {ngo.activeProjects} active projects</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg py-2 text-sm font-medium transition-all duration-300">
                  Follow
                </button>
                <button className="p-2 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-lg transition-all duration-300">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 animate-fade-in">
          <button className="bg-gradient-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow hover:scale-105 transition-all duration-300">
            Explore All NGOs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNGOs;