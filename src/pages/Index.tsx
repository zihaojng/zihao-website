
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const blogPosts = [
  {
    title: "Starting Legion: Assemble the Team",
    url: "#",
  },
  {
    title: "Why Entrepreneurship - Have My Cake and Eat It Too",
    url: "#",
  },
  {
    title: "Wrappers vs vertical AI",
    url: "#",
  },
  {
    title: "On Accountability - Build a Braintrust",
    url: "#",
  },
  {
    title: "Love Your Early Customers, Get Their Phone Number",
    url: "#",
  },
  {
    title: "Do Unfamiliar Things, Be Uncomfortable",
    url: "#",
  },
  {
    title: "Being a Founder vs Being a Pirate (Black Sails)",
    url: "#",
  },
  {
    title: "Idea Evaluation Framework: Total Amount of Emotion * Number of People Who Can Understand It",
    url: "#",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-12 space-y-24">
      {/* Hero Section */}
      <section className="space-y-6 fade-in">
        <div className="flex items-start gap-8">
          <Avatar className="w-48 h-48">
            <AvatarImage src="/lovable-uploads/551865d6-c9b8-4337-b701-97c9d739b3a7.png" alt="Zihao Jiang" />
          </Avatar>
          <div className="space-y-6">
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
            <a
              key={index}
              href={post.url}
              className="group transition-colors duration-200"
            >
              <Card className="p-4 hover:bg-muted/50 transition-colors">
                <h3 className="text-lg blog-link inline-block">{post.title}</h3>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <Card className="p-6">
          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <Input placeholder="Name" className="bg-background" />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="bg-background" />
              </div>
              <div>
                <Textarea placeholder="Message" className="bg-background" rows={4} />
              </div>
            </div>
            <Button className="w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </Card>
      </section>
    </div>
  );
};

export default Index;
