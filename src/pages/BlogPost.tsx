
import { useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

const blogContent = {
  "The Emotional Arbitrage: A Framework for Startup Ideation": {
    title: "The Emotional Arbitrage: A Framework for Startup Ideation",
    sections: [
      {
        heading: "Introduction",
        content: "The conventional wisdom in startup ideation focuses on finding 'pain points'—but this framing, while useful, obscures a more fundamental dynamic: successful startups don't just solve problems, they arbitrage emotions at scale."
      },
      {
        heading: "The Emotional Arbitrage Framework",
        content: "The equation is simple: \n      Feeling × Audience = Potential\n      \n      What makes this framework powerful is its predictive capability. When you observe intense emotional reactions (frustration, envy, anger) around a problem that affects a large addressable market, you're likely looking at fertile ground for disruption."
      },
      {
        heading: "The Framework in Action",
        examples: [
          {
            title: "Uber",
            conditions: [
              "Intense emotional negativity (unreliable service, perceived price gouging)",
              "Universal experience (everyone who needed urban transportation)",
              "Clear status quo villain (the taxi 'cartel')"
            ],
            key_takeaway: "Uber's genius wasn't just technological—it was recognizing and weaponizing existing emotional intensity."
          },
          {
            title: "Airbnb",
            conditions: [
              "Founders experienced high hotel prices and limited availability",
              "Tapping into widespread frustration with traditional accommodation options"
            ],
            key_takeaway: "Emotional intensity around hotel prices and limited choices, combined with the massive scale of the travel market, created perfect conditions for their peer-to-peer solution."
          },
          {
            title: "Political Stock Trading Apps",
            conditions: [
              "Moral outrage ('Why do politicians get to trade on insider knowledge?')",
              "Financial FOMO ('How can I get those returns?')"
            ],
            key_takeaway: "While the efficient market hypothesis suggests this opportunity may be temporary, the emotional intensity × scale equation predicts strong initial traction."
          }
        ]
      },
      {
        heading: "The Strategy",
        steps: [
          "Look for strong emotional signals (Reddit rants, Twitter threads, viral complaints)",
          "Assess the potential scale (addressable market size, purchase power)",
          "Design solutions that don't just solve the problem, but validate and channel the underlying emotion"
        ],
        conclusion: "The most successful startups don't just build better mousetraps—they tap into and scale existing emotional currents."
      },
      {
        heading: "How I Applied This to Legion",
        content: "When I was ideating around AI agents for litigation, I found my signal in the raw language lawyers used to describe discovery disputes: 'hate,' 'mind-numbing,' 'infuriating,' 'bane of my practice.' These weren't just complaints; they were emotional flares signaling deep professional pain. With 500,000 litigation lawyers in the US alone, the scale was significant. Not the biggest market, perhaps, but one with high purchasing power and intense, consistent pain."
      }
    ]
  }
};

const BlogPost = () => {
  const { title } = useParams();
  const post = blogContent[title as keyof typeof blogContent];

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Post not found</h1>
        <p className="mt-4 text-gray-600">The blog post you're looking for doesn't exist.</p>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-6 py-12">
      <article className="prose prose-slate lg:prose-lg mx-auto">
        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
        
        {post.sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
            
            {'content' in section && (
              <div className="whitespace-pre-wrap">{section.content}</div>
            )}
            
            {'examples' in section && (
              <div className="space-y-8">
                {section.examples.map((example, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">{example.title}</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {example.conditions.map((condition, condIdx) => (
                        <li key={condIdx}>{condition}</li>
                      ))}
                    </ul>
                    <p className="mt-4 font-medium">{example.key_takeaway}</p>
                  </div>
                ))}
              </div>
            )}
            
            {'steps' in section && (
              <>
                <ul className="list-decimal pl-5 space-y-2">
                  {section.steps.map((step, stepIdx) => (
                    <li key={stepIdx}>{step}</li>
                  ))}
                </ul>
                {section.conclusion && (
                  <p className="mt-4 font-medium">{section.conclusion}</p>
                )}
              </>
            )}
          </div>
        ))}
      </article>
    </div>
  );
};

export default BlogPost;
