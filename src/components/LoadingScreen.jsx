import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello Wolrd />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
<<<<<<< HEAD
    <div className="fixed inset-0 z-50 bg-black text-red-500 flex flex-col items-center justify-center">
=======
    <div className="fixed inset-0 z-50 bg-black text-purple-600 flex flex-col items-center justify-center">
>>>>>>> 372d23404b3ac9ee4b3606ee5166aa255e80883a
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
<<<<<<< HEAD
        <div className="w-[40%] h-full bg-gradient-to-br from-red-600 to-yellow-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
=======
        <div className="w-[40%] h-full bg-gradient-to-br from-blue-600 to-red-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
>>>>>>> 372d23404b3ac9ee4b3606ee5166aa255e80883a
      </div>
    </div>
  );
};
