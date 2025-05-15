
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
        content: "Consider Uber's emergence in 2009. The taxi industry had created perfect conditions for disruption:\n<ul class=\"list-disc pl-8 my-2\">\n<li>Intense emotional negativity (unreliable service, perceived price gouging)</li>\n<li>Universal experience (everyone who needed urban transportation)</li>\n<li>Clear status quo villain (the taxi \"cartel\")</li>\n</ul>Uber's genius wasn't just technological - it was recognizing and weaponizing existing emotional intensity. Their early messaging (\"Everyone's private driver\") wasn't about anger; it was about empowerment. But it worked because the anger was already there, waiting to be channeled.\n\nAirbnb followed a similar pattern. The founders' origin story - renting air mattresses during a conference when hotels were price-gouging - resonated because it tapped into widespread frustration with traditional accommodation options. The emotional intensity around hotel prices and limited choices, combined with the massive scale of the travel market, created perfect conditions for their peer-to-peer solution."
      },
      {
        heading: "Modern Applications",
        content: "A fascinating recent example is the emergence of political stock trading apps. These platforms operate at the intersection of two powerful emotions:\n<ol class=\"list-decimal pl-8 my-2\">\n<li>Moral outrage (\"Why do politicians get to trade on insider knowledge?\")</li>\n<li>Financial FOMO (\"How can I get those returns?\")</li>\n</ol>The addressable market includes both retail investors and anyone frustrated with political corruption - a potentially massive scale. While the efficient market hypothesis suggests this opportunity may be temporary, the emotional intensity × scale equation predicts strong initial traction."
      },
      {
        heading: "The Strategy",
        content: "For founders, this suggests a clear pathway for ideation:\n<ol class=\"list-decimal pl-8 my-2\">\n<li>Look for strong emotional signals (Reddit rants, Twitter threads, viral complaints)</li>\n<li>Assess the potential scale (addressable market size, purchase power)</li>\n<li>Design solutions that don't just solve the problem, but validate and channel the underlying emotion</li>\n</ol>The most successful startups don't just build better mousetraps - they tap into and scale existing emotional currents. Understanding this dynamic is crucial for founders seeking to create truly transformative companies."
      },
      {
        heading: "How I Applied This to Legion",
        content: "When I was ideating around AI agents for litigation, I found my signal in the raw language lawyers used to describe discovery disputes: \"hate,\" \"mind-numbing,\" \"infuriating,\" \"bane of my practice.\"\n\n<div class=\"flex flex-col items-center space-y-2 my-4\">\n<img src=\"/pics/d6712e56-82bf-4211-bf9a-0988b2530697.png\" alt=\"Reddit comment about discovery disputes\" class=\"max-w-full\" />\n<img src=\"/pics/e0c7218b-4c35-41b6-a805-86607fe3dc1d.png\" alt=\"Reddit comment about discovery being the bane of practice\" class=\"max-w-full\" />\n<img src=\"/pics/bbca1cda-6d82-4a78-b57e-628068efd999.png\" alt=\"Reddit comment about mind-numbing discovery\" class=\"max-w-full\" />\n<img src=\"/pics/d27169c7-0886-4f61-b3e3-73b93485dc0a.png\" alt=\"Reddit comment about discovery bickering\" class=\"max-w-full\" />\n</div>\n\nIt's no guarantee for a billion dollar exit, but it's interesting enough for me to go down that rabbit hole."
      }
    ]
  },
  "lawyers-ai-and-the-stuff-machines-cant-touch": {
    title: "Lawyers, AI, and the Stuff Machines Can't Touch",
    sections: [
      {
        heading: "",
        content: "AI's crashing into everything these days, and law's no exception. You've got headlines screaming about robots replacing lawyers, but let's cut through the noise—that's not what's happening. It's not a cage match between humans and code; it's more like the job's getting a serious remix. Lawyers aren't going anywhere—they're just figuring out where they shine while AI chews up the boring bits."
      },
      {
        heading: "Law Isn't Just Logic—It's a Human Mess (In the Best Way)",
        content: "Here's the deal: law has never been a purely logical system. It's a gloriously messy human creation, full of contradictions, compromises, and cultural baggage. It's what happens when centuries of human arguments, power struggles, and societal values get codified into rules we agree to follow. A contract isn't just clauses; it's a promise shaped by how people think trust works. A courtroom ruling? That's not some equation—it's a snapshot of what a society's freaking out about or fighting over at that moment.\n\nAI's slick at spotting patterns—give it a pile of cases, and it'll tell you what's what. But it's clueless about the why behind it all. It doesn't get how a judge's decision in 1960s Alabama carries the weight of segregation, or why a law in 2025 might bend because TikTok's got everyone riled up. Humans, though? We feel that stuff in our bones. Lawyers don't just read the law—they read the room, the history, the vibe. That's not a nice-to-have; that's the gig."
      },
      {
        heading: "Human Sensors with Edge Computing",
        content: "Picture this: a lawyer is sitting with a client, and they're spilling their guts about some mess they're in. AI can record the words, maybe flag a legal angle. But the lawyer? He is watching the guy's hands shake, catching the pause when he skips a detail, knowing he's scared shitless even if he won't say it. That's data perceived by humans but left unrecorded by machines (maybe the advent of AR/VR will change that?).\n\nLawyers are wired for the messy stuff:\n<ul class=\"list-disc pl-8 my-2\">\n<li>Reading the unsaid: know when someone's holding back, lying through their teeth, or just too wrecked to think straight. AI doesn't.</li>\n<li>Making sense of chaos: Life's not a spreadsheet. Clients throw out half-stories and mixed-up facts; lawyers figure it out anyway.</li>\n<li>Connecting the dots: pull in what's known about their business, their town, their world—not just some legal playbook.</li>\n</ul>That's why lawyers are still the ones clients lean on—they're not just info collectors; they're the ones who get what's really going on."
      },
      {
        heading: "Trust Isn't Programmable",
        content: "Clients don't just want answers; they want someone who gives a damn. Take a guy whose shop's getting sued—he's not just sweating the lawsuit; he's picturing his kid's college fund going up in smoke. AI can spit out odds of winning, but it can't look him in the eye and say, \"Hey, we'll figure this out.\" That's a lawyer's job—making people feel heard, not just processed.\n\nIt's the same in a settlement negotiation. You're not swapping numbers with the other side—you're sizing them up, feeling out when they're bluffing, knowing when to crack a joke to loosen things up. AI can crunch stats, but it doesn't feel the air shift or catch the moment to push harder - that's human territory."
      },
      {
        heading: "The Gut Calls AI Can't Make",
        content: "Law's full of moments where the \"right\" answer isn't in the books—it's a gut-wrenching call you've got to make when the stakes are murky. AI can spit out options that'll hold up in court, no sweat. But figuring out what's actually right? That's where human lawyers step up, wrestling with dilemmas no algorithm's wired to handle.\n\nTake a client who's got a loophole to dodge a tax hit—legal, sure, but it'll torch their reputation when word gets out. Or a company that can win a case but might screw over a community in the process. AI sees the moves: \"Here's what's allowed.\" A lawyer sees the fallout: \"Yeah, but should you?\" That's moral reasoning—messy, human, and loaded with shades of gray. You're not just crunching law; you're juggling what's fair, what's decent, what'll haunt the client later.\n\nIt's not about data—it's about judgment. You weigh the social blowback, the hit to their name, the ripple effects nobody's talking about yet. AI's blind to that; it doesn't care if a win feels slimy or if the \"legal\" play screws someone vulnerable. Lawyers do. We've got the scars and the instincts to know when a choice isn't just about winning—it's about living with it. That's the edge no machine's touching."
      },
      {
        heading: "The Future: Augmentation, Not Replacement",
        content: "As AI continues to automate research, drafting, and administrative tasks, lawyers will spend less time on rote legal work and more time where they truly excel: advocacy, strategy, and high-stakes decision-making. Their value will lie in their ability to:\n<ol class=\"list-decimal pl-8 my-2\">\n<li>Build relationships and trust with clients</li>\n<li>Negotiate effectively with opposing parties</li>\n<li>Influence courts and regulators</li>\n<li>Make tough judgment calls in uncertain situations</li>\n<li>Advocate for justice in complex and evolving legal landscapes</li>\n</ol>Far from replacing lawyers, AI will enhance their ability to focus on what makes them indispensable: their human insight, strategic thinking, and ability to navigate the ever-changing complexities of the legal system."
      }
    ]
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const location = useLocation();
  console.log("Current slug:", slug);

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
      <div className="max-w-[630px] mx-auto">
        <div className="text-left">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Home
          </Link>
        </div>
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
