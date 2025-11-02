import type React from "react";

type ButtonProps = {
  content: string;
  type: "primary" | "secondary" | "black";
  onClick: () => void;
};
const Button1: React.FC<ButtonProps> = ({ content, type, onClick }) => {
  const styles: Record<ButtonProps["type"], string> = {
    primary: "bg-brown-1 hover:bg-brown-2 text-white",
    secondary:
      " bg-transparent border border-black hover:bg-black text-black hover:text-white",
    black: "bg-black hover:bg-white hover:text-black text-white",
  };
  return (
    <div
      className={`w-40 h-12 cursor-pointer
         flex justify-center items-center ${styles[type]}`}
      onClick={onClick}
    >
      <small
        className={`font-bold w-full h-full uppercase flex items-center justify-center`}
      >
        {content}
      </small>
    </div>
  );
};

export default Button1;
