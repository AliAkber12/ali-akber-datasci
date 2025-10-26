import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction",
      description: "Machine learning model predicting customer churn with 94% accuracy using ensemble methods and feature engineering.",
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
      github: "https://github.com/AliAkber12",
      demo: "#"
    },
    {
      title: "Real-time Sentiment Analysis",
      description: "NLP pipeline processing social media data streams with transformer models for brand sentiment monitoring.",
      tech: ["PyTorch", "BERT", "Apache Kafka", "Docker"],
      github: "https://github.com/AliAkber12",
      demo: "#"
    },
    {
      title: "Sales Forecasting Dashboard",
      description: "Interactive dashboard with time series models forecasting revenue and providing actionable business insights.",
      tech: ["Prophet", "Streamlit", "PostgreSQL", "AWS"],
      github: "https://github.com/AliAkber12",
      demo: "#"
    },
    {
      title: "Image Classification System",
      description: "Deep learning CNN model for multi-class image classification achieving 97% validation accuracy.",
      tech: ["TensorFlow", "Keras", "OpenCV", "Flask"],
      github: "https://github.com/AliAkber12",
      demo: "#"
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering system using matrix factorization and deep learning for personalized recommendations.",
      tech: ["PyTorch", "NumPy", "Redis", "FastAPI"],
      github: "https://github.com/AliAkber12",
      demo: "#"
    },
    {
      title: "Fraud Detection System",
      description: "Anomaly detection model identifying fraudulent transactions in real-time with minimal false positives.",
      tech: ["Scikit-learn", "PySpark", "Hadoop", "Airflow"],
      github: "https://github.com/AliAkber12",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcasing data science solutions and machine learning applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all hover:scale-105 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-background rounded text-xs text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
