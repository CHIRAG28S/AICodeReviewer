import React from "react";

const ReviewButton = ({ reviewCode, loading }) => {
    return (
        <div className="absolute bottom-4 right-4 md:bottom-7 md:right-7">
            <button
                className="px-4 md:px-[15px] py-2 md:py-[7px] rounded-lg text-lg md:text-[1.1rem] bg-white text-black shadow-md hover:bg-gray-200 transition"
                onClick={reviewCode}
                disabled={loading}
            >
                {loading ? "Processing..." : "Review Code"}
            </button>
        </div>
    );
};

export default ReviewButton;
