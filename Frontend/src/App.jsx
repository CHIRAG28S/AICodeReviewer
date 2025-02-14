import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Editor from "./components/Editor";
import ReviewButton from "./components/ReviewButton";
import ReviewOutput from "./components/ReviewOutput";

const App = () => {
    const boilerplateCode = `function findSum(arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

const arr = [3, 7, 2, 9, 5];
console.log(findSum(arr));`;

    const [code, setCode] = useState(boilerplateCode);
    const [review, setReview] = useState("");
    const [loading, setLoading] = useState(false);

    const reviewCode = async () => {
        setLoading(true);
        try {
            const response = await axios.post("https://codecritic-backend.onrender.com", { code });
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
                <Header />
                <Editor code={code} setCode={setCode} />
                <ReviewButton reviewCode={reviewCode} loading={loading} />
            </div>
            <ReviewOutput loading={loading} review={review} />
        </div>
    );
};

export default App;
