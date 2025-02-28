
import { useParams, Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

const blogContent = {
  "the-emotional-arbitrage-a-framework-for-startup-ideation": {
    title: "The Emotional Arbitrage: A Framework for Startup Ideation",
    sections: [
      {
        heading: "",
        content: "The conventional wisdom in startup ideation focuses on finding \"pain points\" - but this framing, while useful, obscures a more fundamental dynamic: successful startups don't just solve problems, they arbitrage emotions at scale."
      },
      {
        heading: "The Emotional Arbitrage Framework",
        content: "The equation is simple:\n\n**Feeling × Audience = Potential**\n\nWhat makes this framework powerful is its predictive capability. When you observe intense emotional reactions (frustration, envy, anger) around a problem that affects a large addressable market, you're likely looking at fertile ground for disruption."
      },
      {
        heading: "The Framework in Action",
        content: "Consider Uber's emergence in 2009. The taxi industry had created perfect conditions for disruption:\n• Intense emotional negativity (unreliable service, perceived price gouging)\n• Universal experience (everyone who needed urban transportation)\n• Clear status quo villain (the taxi \"cartel\")\n\nUber's genius wasn't just technological - it was recognizing and weaponizing existing emotional intensity. Their early messaging (\"Everyone's private driver\") wasn't about anger; it was about empowerment. But it worked because the anger was already there, waiting to be channeled.\n\nAirbnb followed a similar pattern. The founders' origin story - renting air mattresses during a conference when hotels were price-gouging - resonated because it tapped into widespread frustration with traditional accommodation options. The emotional intensity around hotel prices and limited choices, combined with the massive scale of the travel market, created perfect conditions for their peer-to-peer solution."
      },
      {
        heading: "Modern Applications",
        content: "A fascinating recent example is the emergence of political stock trading apps. These platforms operate at the intersection of two powerful emotions:\n1. Moral outrage (\"Why do politicians get to trade on insider knowledge?\")\n2. Financial FOMO (\"How can I get those returns?\")\n\nThe addressable market includes both retail investors and anyone frustrated with political corruption - a potentially massive scale. While the efficient market hypothesis suggests this opportunity may be temporary, the emotional intensity × scale equation predicts strong initial traction."
      },
      {
        heading: "The Strategy",
        content: "For founders, this suggests a clear pathway for ideation:\n1. Look for strong emotional signals (Reddit rants, Twitter threads, viral complaints)\n2. Assess the potential scale (addressable market size, purchase power)\n3. Design solutions that don't just solve the problem, but validate and channel the underlying emotion\n\nThe most successful startups don't just build better mousetraps - they tap into and scale existing emotional currents. Understanding this dynamic is crucial for founders seeking to create truly transformative companies."
      },
      {
        heading: "How I Applied This to Legion",
        content: "When I was ideating around AI agents for litigation, I found my signal in the raw language lawyers used to describe discovery disputes: \"hate,\" \"mind-numbing,\" \"infuriating,\" \"bane of my practice.\"\n\n<div class=\"flex flex-col items-center space-y-4 my-8\">\n<img src=\"/lovable-uploads/d6712e56-82bf-4211-bf9a-0988b2530697.png\" alt=\"Reddit comment about discovery disputes\" class=\"max-w-full\" />\n<img src=\"/lovable-uploads/e0c7218b-4c35-41b6-a805-86607fe3dc1d.png\" alt=\"Reddit comment about discovery being the bane of practice\" class=\"max-w-full\" />\n<img src=\"/lovable-uploads/bbca1cda-6d82-4a78-b57e-628068efd999.png\" alt=\"Reddit comment about mind-numbing discovery\" class=\"max-w-full\" />\n<img src=\"/lovable-uploads/d27169c7-0886-4f61-b3e3-73b93485dc0a.png\" alt=\"Reddit comment about discovery bickering\" class=\"max-w-full\" />\n</div>\n\nThese weren't just complaints; they were emotional flares signaling deep professional pain. Each upvote represented another lawyer nodding in frustrated agreement. With 500,000 litigation lawyers in the US alone, the scale was significant. Not the biggest market, perhaps, but one with high purchasing power and intense, consistent pain."
      }
    ]
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const location = useLocation();
  console.log("Current slug:", slug);

  // Add an effect to scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug || !blogContent[slug]) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Post not found</h1>
        <p className="mt-4 text-gray-600">The blog post you're looking for doesn't exist.</p>
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mt-4 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
      </div>
    </div>;
  }

  const post = blogContent[slug];

  return (
    <div className="min-h-screen w-full px-4 py-12">
      <div className="max-w-[750px] mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Home
        </Link>
        <article className="prose prose-slate lg:prose-lg">
          <h1 className="text-4xl font-bold mb-8 text-left">{post.title}</h1>
          
          {post.sections.map((section, index) => (
            <div key={index} className="mb-12 text-left">
              {section.heading && <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>}
              <div 
                className="whitespace-pre-wrap" 
                dangerouslySetInnerHTML={{
                  __html: section.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
            </div>
          ))}
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
