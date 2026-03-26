import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm'; 
import 'katex/dist/katex.min.css';

interface Props {
  content: string;
}

const MathRenderer = ({ content }: Props) => {
  return (
    // We keep the class here so the CSS above can find it
    <div className="math-content overflow-hidden">
      <ReactMarkdown 
        remarkPlugins={[remarkMath, remarkGfm]} 
        rehypePlugins={[rehypeKatex]}
        // We removed the custom 'p' and 'h3' objects here 
        // to let the CSS !important rules handle it cleanly.
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MathRenderer;