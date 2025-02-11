
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/ui/use-toast";

const blogPosts = [
  {
    title: "Starting Legion: Assemble the Team",
    url: "/blog/Starting Legion: Assemble the Team",
  },
  {
    title: "Why Entrepreneurship - Have My Cake and Eat It Too",
    url: "/blog/Why Entrepreneurship - Have My Cake and Eat It Too",
  },
  {
    title: "Wrappers vs vertical AI",
    url: "/blog/Wrappers vs vertical AI",
  },
  {
    title: "On Accountability - Build a Braintrust",
    url: "/blog/On Accountability - Build a Braintrust",
  },
  {
    title: "Love Your Early Customers, Get Their Phone Number",
    url: "/blog/Love Your Early Customers, Get Their Phone Number",
  },
  {
    title: "Do Unfamiliar Things, Be Uncomfortable",
    url: "/blog/Do Unfamiliar Things, Be Uncomfortable",
  },
  {
    title: "Being a Founder vs Being a Pirate (Black Sails)",
    url: "/blog/Being a Founder vs Being a Pirate (Black Sails)",
  },
  {
    title: "Idea Evaluation Framework: Total Amount of Emotion * Number of People Who Can Understand It",
    url: "/blog/Idea Evaluation Framework: Total Amount of Emotion * Number of People Who Can Understand It",
  },
];

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_nxtikpi', // Updated Service ID
        'template_pf1h3qi', // Updated Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'jiangzihaoalex@gmail.com',
        },
        'f8_-PZk7Z52Zf0TyV' // Updated Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="space-y-6 fade-in">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <Avatar className="w-48 h-48">
            <AvatarImage src="/lovable-uploads/551865d6-c9b8-4337-b701-97c9d739b3a7.png" alt="Zihao Jiang" />
          </Avatar>
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight">Zihao Jiang</h1>
            <div className="space-y-4 text-lg text-muted-foreground slide-up">
              <p>Currently building AI agents to bring efficiency to lawsuits (<a href="https://legion.law" className="text-primary hover:text-primary/80 inline-flex items-center" target="_blank" rel="noopener noreferrer">legion.law <ExternalLink className="ml-1 h-4 w-4" /></a>)</p>
              <p>Previously led product at a crypto company that raised $1B. Also PM for Assassin's Creed</p>
              <p>BA @ Brown, JD/MBA @ U of Toronto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Writing</h2>
        <div className="grid gap-4">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={post.url}
              className="group transition-colors duration-200"
            >
              <Card className="p-4 hover:bg-muted/50 transition-colors">
                <h3 className="text-lg blog-link inline-block">{post.title}</h3>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <Card className="p-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Input 
                  placeholder="Name" 
                  className="bg-background" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-background" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Message" 
                  className="bg-background" 
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
            </div>
            <Button className="w-full sm:w-auto" disabled={isSubmitting}>
              <Mail className="mr-2 h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
      </section>
    </div>
  );
};

export default Index;
