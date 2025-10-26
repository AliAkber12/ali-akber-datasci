const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "R", "SQL", "JavaScript", "Scala"]
    },
    {
      category: "ML/AI Frameworks",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"]
    },
    {
      category: "Data Tools",
      skills: ["Pandas", "NumPy", "Apache Spark", "Hadoop", "Airflow"]
    },
    {
      category: "Visualization",
      skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Cassandra"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive toolkit for modern data science and engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-background rounded-lg text-sm text-foreground border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
