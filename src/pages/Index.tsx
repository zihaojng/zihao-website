
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, ExternalLink, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const blogPosts = [{
  title: "The Emotional Arbitrage: A Framework for Startup Ideation",
  url: "/blog/the-emotional-arbitrage-a-framework-for-startup-ideation"
}];

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
      await emailjs.send('service_nxtikpi',
      'template_pf1h3qi',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'jiangzihaoalex@gmail.com'
      }, 'f8_-PZk7Z52Zf0TyV');
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <div className="min-h-screen w-full mx-auto px-4 sm:px-6 py-12 max-w-5xl">
      <section className="fade-in bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full max-w-[250px] md:w-64 h-auto md:h-80 shrink-0 overflow-hidden rounded-lg order-1 md:order-2">
            <img src="/lovable-uploads/8c9529ac-8499-44e6-9bb0-75c9f1130a9e.png" alt="Zihao Jiang" className="w-full h-full object-cover object-center" />
          </div>
          <div className="flex-1 space-y-6 text-left order-2 md:order-1">
            <div className="space-y-4">
              <span className="font-medium" style={{
              color: '#dc7d06'
            }}>About</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">Hi, I'm Zihao</h1>
              <div className="space-y-4 text-base sm:text-lg text-slate-600">
                <p className="text-gray-950">Currently building AI agents to bring efficiency to lawsuits at <a href="https://legion.law" className="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer">
                    legion.law
                  </a>
                </p>
                <p className="text-gray-950 font-normal">Previously led product at a crypto company that raised $1B. Also PM for Assassin's Creed <img src="/lovable-uploads/5e5b86f8-e89c-4575-b42b-35b0f215ec0e.png" alt="Assassin's Creed Icon" className="inline-block h-6 w-6 -mt-1" /></p>
                <p className="text-gray-950 font-normal">BA @ Brown, JD/MBA @ U of Toronto</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a href="https://x.com/zeeitthru" target="_blank" rel="noopener noreferrer" className="social-button">
                  <Twitter size={20} />
                  <span className="hidden sm:inline">Say hi on Twitter</span>
                </a>
                <a href="https://www.linkedin.com/in/zihaoj/" target="_blank" rel="noopener noreferrer" className="social-button">
                  <Linkedin size={20} />
                  <span className="hidden sm:inline">Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 text-left mt-16 sm:mt-20">
        <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">Writing</h2>
        <div className="grid gap-4">
          {blogPosts.map((post, index) => <Link key={index} to={post.url} className="group transition-colors duration-200">
              <Card className="p-4 hover:bg-muted/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                <h3 className="text-lg blog-link inline-block">{post.title}</h3>
              </Card>
            </Link>)}
        </div>
      </section>

      <section className="space-y-6 text-left mt-16 sm:mt-20 mb-12">
        <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">Contact</h2>
        <Card className="p-6 bg-white/50 backdrop-blur-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Input placeholder="Name" className="bg-background/50 backdrop-blur-sm transition-colors focus:bg-background" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} required />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="bg-background/50 backdrop-blur-sm transition-colors focus:bg-background" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} required />
              </div>
              <div>
                <Textarea placeholder="Message" className="bg-background/50 backdrop-blur-sm transition-colors focus:bg-background" rows={4} value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} required />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="push-button w-40" disabled={isSubmitting} type="submit">
                <div className="button-outter">
                  <div className="button-inner">
                    <span>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </form>
        </Card>
      </section>
    </div>;
};

export default Index;
