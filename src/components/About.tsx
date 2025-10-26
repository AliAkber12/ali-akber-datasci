import { Code2, Database, Brain, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Building predictive models and AI solutions"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "ETL pipelines and data architecture"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Analytics",
      description: "Statistical analysis and visualization"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Development",
      description: "Full-stack data applications"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Advanced-level data scientist passionate about leveraging data to solve complex problems 
            and drive business decisions through innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
