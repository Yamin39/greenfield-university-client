import { useContext, useState, useRef, useEffect } from "react";
import { Context } from "../../Context/Context";
import { 
  MessageCircle, 
  SendHorizontal, 
  User, 
  Bot, 
  Copy, 
  Trash2, 
  Lightbulb 
} from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { marked } from "marked";

const StudyChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Welcome to the Study Assistant! How can I help you today?"
    }
  ]);
  const { onSent } = useContext(Context);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!input.trim()) return;

     
    setMessages(prev => [...prev, { type: "user", content: input }]);
    setInput("");
     
    setMessages(prev => [...prev, { type: "typing" }]);
    
    try {
      const res = await onSent(`Academic research assistant: ${input}`);
      
      setMessages(prev => prev.filter(msg => msg.type !== "typing").concat({ 
        type: "bot", 
        content: res 
      }));
    } catch (error) {
      setMessages(prev => prev.filter(msg => msg.type !== "typing").concat({ 
        type: "bot", 
        content: "Sorry, I encountered an error processing your request. Please try again."
      }));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const clearChat = () => {
    setMessages([{
      type: "bot",
      content: "Chat cleared. How can I help with your studies today?"
    }]);
  };

  const renderContent = (content) => {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(content)) !== null) {
      // Add text before code block
      if (match.index > lastIndex) {
        const beforeText = content.slice(lastIndex, match.index);
        parts.push(
          <div key={lastIndex} className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ 
              __html: marked(beforeText, { breaks: true }) 
            }} />
          </div>
        );
      }

      const language = match[1] || "text";
      const code = match[2].trim();

      parts.push(
        <div key={match.index} className="my-3 rounded overflow-hidden border border-gray-300">
          <div className="bg-gray-100 px-3 py-1 flex justify-between items-center">
            <span className="text-gray-600 text-sm font-mono">{language}</span>
            <button
              onClick={() => navigator.clipboard.writeText(code)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              title="Copy code"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            className="text-sm"
          >
            {code}
          </SyntaxHighlighter>
        </div>
      );

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < content.length) {
      const remainingText = content.slice(lastIndex);
      parts.push(
        <div key={lastIndex} className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ 
            __html: marked(remainingText, { breaks: true }) 
          }} />
        </div>
      );
    }

    return parts.length > 0 ? parts : content;
  };

  const suggestedPrompts = [
    "How do I structure a research paper?",
    "Explain quantum computing simply",
    "Tips for effective note-taking",
    "Help me understand calculus derivatives"
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <h1 className="text-lg font-medium">Study Assistant</h1>
          </div>
          <button 
            onClick={clearChat}
            className="bg-gray-700 hover:bg-gray-600 p-2 rounded transition-colors"
            title="Clear chat"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Chat Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto flex flex-col overflow-hidden">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => {
            if (message.type === "user") {
              return (
                <div key={index} className="flex justify-end">
                  <div className="bg-blue-600 text-white p-3 rounded-lg rounded-tr-none max-w-[75%] shadow">
                    <div className="flex items-start gap-2">
                      <div className="bg-blue-700 p-1 rounded-full">
                        <User className="w-4 h-4" />
                      </div>
                      <div>{message.content}</div>
                    </div>
                  </div>
                </div>
              );
            } else if (message.type === "typing") {
              return (
                <div key={index} className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg rounded-tl-none max-w-[75%] shadow">
                    <div className="flex items-center gap-2">
                      <div className="bg-gray-100 p-1 rounded-full">
                        <Bot className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg rounded-tl-none max-w-[75%] shadow">
                    <div className="flex items-start gap-2">
                      <div className="bg-gray-100 p-1 rounded-full">
                        <Bot className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="text-gray-800">
                        {renderContent(message.content)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Suggested Prompts */}
        {messages.length === 1 && (
          <div className="px-4 py-3 grid grid-cols-1 md:grid-cols-2 gap-2">
            {suggestedPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => {
                  setInput(prompt);
                  inputRef.current.focus();
                }}
                className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded flex items-center gap-2 transition-colors text-left"
              >
                <Lightbulb className="w-4 h-4 text-yellow-500" />
                <span className="truncate">{prompt}</span>
              </button>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200">
          <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-4xl mx-auto">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask something..."
              className="flex-grow resize-none border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              rows="1"
            />
            <button 
              type="submit"
              className={`p-2 rounded-lg ${
                input.trim() 
                  ? "bg-blue-600 text-white hover:bg-blue-700" 
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!input.trim()}
            >
              <SendHorizontal className="w-5 h-5" />
            </button>
          </form>
          <div className="mt-1 text-xs text-center text-gray-400">
            Press Enter to send
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudyChat;