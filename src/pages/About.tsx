import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-h1 font-bold text-foreground mb-6">
              About Lagoon Technologies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 25 years of experience, we are the leading software development 
              company in the UAE, specializing in innovative enterprise solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="stats-number">150+</div>
              <p className="text-muted-foreground font-medium">In-House Specialists</p>
            </div>
            <div className="text-center">
              <div className="stats-number">1000+</div>
              <p className="text-muted-foreground font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="stats-number">25+</div>
              <p className="text-muted-foreground font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="stats-number">100%</div>
              <p className="text-muted-foreground font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Client-Centric",
                description: "We put our clients at the heart of everything we do, ensuring their success is our success."
              },
              {
                icon: Target,
                title: "Innovation",
                description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in every project, delivering quality that exceeds expectations."
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "While rooted in the UAE, we create solutions that make a global impact."
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="gradient-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;