import React from "react";
import { X, Gamepad2, AlertCircle, CheckCircle } from "lucide-react";

const Dialog = ({
  isOpen,
  onClose,
  message,
  title = "Radiant",
  type = "info",
}) => {
  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-6 h-6 text-emerald-400" />;
      case "error":
        return <AlertCircle className="w-6 h-6 text-red-400" />;
      default:
        return <Gamepad2 className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
      <div className="relative bg-gray-900 w-full max-w-md rounded-lg overflow-hidden">
       
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600" />

      
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            {getIcon()}
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      
        <div className="p-6">
          <p className="text-gray-300 text-base leading-relaxed">{message}</p>
        </div>

       
        <div className="flex items-center gap-2 px-6 py-4 bg-gray-800/50">
          <div className="flex-1 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-sm text-gray-400">In Development</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors duration-200"
          >
            Got it
          </button>
        </div>

       
        <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-purple-400" />
        <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-purple-400" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-purple-400" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-purple-400" />
      </div>
    </div>
  );
};

export default Dialog;
