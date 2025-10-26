import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "aliakberhyder@gmail.com",
      link: "mailto:aliakberhyder@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Karachi, Pakistan",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      link: "https://github.com/AliAkber12"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ali-akber-chandio-480344329/"
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      label: "Kaggle",
      link: "https://www.kaggle.com/aliakber12"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Open to collaborations, consulting opportunities, and interesting data science projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Let's Work Together</h3>
            <p className="text-muted-foreground mb-6">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10"
                  onClick={() => window.open(social.link, '_blank')}
                >
                  {social.icon}
                  <span className="ml-2">{social.label}</span>
                </Button>
              ))}
            </div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              onClick={() => window.location.href = 'mailto:aliakberhyder@gmail.com'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
