
import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug) {
      import(`../../blog/${slug}.md`)
        .then(res => {
          fetch(res.default)
            .then(response => response.text())
            .then(text => {
              setContent(text)
              setLoading(false);
            })
            .catch(err => {
              console.error("Error fetching markdown:", err);
              setLoading(false);
            });
        })
        .catch(err => {
          console.error("Error importing markdown module:", err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!content) {
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
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;
