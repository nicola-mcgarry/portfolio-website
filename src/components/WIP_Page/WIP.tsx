import "./WIP.css";
import { useEffect, useState } from "react";

const messages = [
  "Waiting for npm...",
  "Restarting Visual Studio...",
  "Brewing coffee...",
  "Cleaning solution...",
  "Rebuilding solution...",
  "Removing breakpoints...",
  "Naming variables is hard...",
  "Checking if it's a cache issue...",
  "One more feature...",
  "Just one more feature...",
  "Why is it working now...?",
  "Rewriting perfectly good code...",
  "It worked five minutes ago...",
  "Fixing the fix...",
  "Works on my machine™",
  "Building reusable components...",
  "Writing C# APIs...",
  "Making it responsive...",
  "Resolving NuGet packages...",
  "Brewing more coffee...",
  "Fixing merge conflicts...",
  "Formatting code...",
  "Optimising assets...",
  "Chasing a NullReferenceException...",
  "Looking for the missing bracket...",
  "Untangling CSS...",
  "Fighting the z-index...",
  "Aligning one last div...",
  "Questioning life choices...",
];

const WIP = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="wip" className="container">
      <div className="row d-flex justify-content-end align-items-center mt-1">
        <div className="col d-flex flex-column">
          <h1 className="hero-h1">Work in Progress</h1>

          <div className="loading-bar">
            <div className="loading-fill"></div>
          </div>

          <p key={messageIndex} className="loading-text">
            {messages[messageIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WIP;