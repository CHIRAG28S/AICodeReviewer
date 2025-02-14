import React, { useState ,useEffect} from "react";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

const App = () => {
    const [code, setCode] = useState(`function findSum(arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const arr = [3, 7, 2, 9, 5];
console.log(findSum(arr));
`);
    const [review, setReview] = useState("");
    const [loading, setLoading] = useState(false);

    const reviewCode = async () => {
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:3000/ai/get-review", { code });
            setReview(response.data);
        } catch (error) {
            setReview("❌ Error fetching review. Please try again.");
        }
        setLoading(false);
    };

    const minLines = 37;
    const emptyLines = "\n";

    useEffect(() => {
        const lines = code.split("\n").length;
        if (lines < minLines) {
            setCode((prev) => prev + emptyLines.repeat(minLines - lines));
        }
    }, [code]);
    
    return (
        <div className="h-screen w-screen flex flex-col md:flex-row p-6 gap-6 bg-zinc-800 ">
            <div className="relative flex-1 min-h-[50%] md:min-h-full p-4 rounded-[0.7rem] bg-zinc-950 shadow-lg overflow-auto border border-zinc-500 flex flex-col">
                <h1 className="text-white font-semibold text-lg md:text-3xl text-center mb-4 md:mb-8 mt-2 tracking-wide">
                    ✨ Code Playground - Try Out Some JavaScript 💻
                </h1>

                <div className="flex-1 overflow-auto ">
                    <CodeMirror
                        value={code}
                        extensions={[javascript()]}
                        onChange={(value) => setCode(value)}
                        theme={dracula}
                        basicSetup={{ lineNumbers: true }}
                        className="w-full h-full border border-zinc-600 rounded-lg overflow-auto text-[15px]"
                    />
                </div>

                <div className="absolute bottom-7 right-7">
                    <button
                        className="px-[15px] py-[7px] rounded-[0.7rem] text-[1.1rem] bg-white text-black shadow-md hover:bg-gray-200 transition"
                        onClick={reviewCode}
                        disabled={loading}
                    >
                        {loading ? "Processing..." : "Review Code"}
                    </button>
                </div>
            </div>

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

            <style>
                {`
                [contenteditable]:focus, textarea:focus, input:focus, pre:focus, code:focus {
                    outline: none !important;
                    border: none !important;
                    box-shadow: none !important;
                }
                `}
            </style>
        </div>
    );
};

export default App;
