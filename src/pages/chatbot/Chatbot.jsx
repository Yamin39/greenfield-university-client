import  { useContext, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Context } from "../../Context/Context";
import { BookOpen, SendHorizontal, User, Bot } from "lucide-react";

const StudyChat = () => {
  const [response, setResponse] = useState("Welcome to Greenfield University Study Assistant! Ask about assignments, research, or academic topics.");
  const [input, setInput] = useState("");
  const [submittedInput, setSubmittedInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { onSent } = useContext(Context);

  const handleStudyQuery = async () => {
    if (!input.trim()) return;

    setSubmittedInput(input);
    setInput("");
    setIsTyping(true);
    
    const res = await onSent(`Academic research assistant: ${input}`);
    setResponse(res);
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col mt-12 items-center justify-center min-h-screen bg-slate-50 text-slate-800 p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg border border-slate-200 h-[90vh] flex flex-col">
        <div className="bg-emerald-600 text-white p-4 rounded-t-xl flex items-center space-x-3">
          <BookOpen className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Greenfield University Study Chat</h1>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          <div className="flex justify-start ">
            <div className="bg-emerald-50 p-3 rounded-lg max-w-[80%] flex items-center space-x-2">
              <Bot className="w-8 h-8 text-emerald-600" />
              <p className="text-slate-700">Welcome to Greenfield University Study Assistant! Ask about assignments, research, or academic topics.</p>
            </div>
          </div>

          {submittedInput && (
            <div className="flex justify-end">
              <div className="bg-slate-200 p-3 rounded-lg max-w-[80%] flex items-center space-x-2">
                <User className="w-6 h-6 text-slate-600" />
                <p className="text-slate-800">{submittedInput}</p>
              </div>
            </div>
          )}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-emerald-50 p-3 rounded-lg flex items-center space-x-2">
                <Bot className="w-8 h-8 text-emerald-600" />
                <p className="text-slate-700 animate-pulse">Preparing your academic response...</p>
              </div>
            </div>
          )}

          {/* AI Response */}
          {!isTyping && response !== "Welcome to Greenfield University Study Assistant! Ask about assignments, research, or academic topics." && (
            <div className="flex justify-start">
              <div className="bg-emerald-50 p-3 rounded-lg max-w-[80%] flex items-center space-x-2">
                <Bot className="w-8 h-8 text-emerald-600" />
                <TypeAnimation
                  sequence={[response]}
                  speed={50}
                  className="text-slate-700"
                />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-slate-100 rounded-b-xl flex items-center space-x-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a study-related question..."
            className="flex-grow resize-none border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-emerald-500"
            rows="2"
          />
          <button 
            onClick={handleStudyQuery}
            className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors"
            disabled={!input.trim()}
          >
            <SendHorizontal className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyChat;