import type React from "react";

type ButtonProps = {
  content: string;
  type: "primary" | "secondary";
  onClick: () => void;
};
const Button1: React.FC<ButtonProps> = ({ content, type, onClick }) => {
  return (
    <div
      className={`w-40 h-12  flex justify-center items-center ${type == "primary" ? "bg-brown-1 hover:bg-brown-2" : "      bg-white border-black hover:bg-black"}`}
      onClick={onClick}
    >
      <small
        className={`font-bold w-full h-full flex items-center justify-center ${type === "primary" ? "text-white" : "text-black hover:text-white"}`}
      >
        {content}
      </small>
    </div>
  );
};

export default Button1;
