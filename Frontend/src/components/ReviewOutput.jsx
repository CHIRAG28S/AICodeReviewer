import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const ReviewOutput = ({ loading, review }) => {
    return (
        <div className="flex-1 min-h-[50%] md:min-h-full bg-neutral-900 rounded-[0.7rem] shadow-lg text-zinc-400 p-5 text-xl overflow-auto leading-relaxed whitespace-pre-wrap">
            {loading ? (
                <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
                    <p className="ml-3 text-2xl">Processing your code...</p>
                </div>
            ) : review ? (
                <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
            ) : (
                <p className="text-center text-gray-500 text-2xl italic">
                    🚀 Click "Review Code" to analyze!
                </p>
            )}
        </div>
    );
};

export default ReviewOutput;
