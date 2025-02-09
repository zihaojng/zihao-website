
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const decodedTitle = decodeURIComponent(title || "");

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-12 space-y-8">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mb-8 -ml-2"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      
      <article className="prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold tracking-tight mb-8">{decodedTitle}</h1>
        <p className="text-lg text-muted-foreground">Coming soon</p>
      </article>
    </div>
  );
};

export default BlogPost;
