import type React from "react";
import LoadingCircle from "./LoadingCircle/LoadingCircle";

type ButtonProps = {
  content: string;
  center?: boolean;
  type: "primary" | "secondary" | "black";
  stretch?: boolean;
  onClick: () => void;
  loading?: boolean;
};
const Button1: React.FC<ButtonProps> = ({
  content,
  type,
  onClick,
  center,
  stretch,
  loading,
}) => {
  const styles: Record<ButtonProps["type"], string> = {
    primary: "bg-brown-1 hover:bg-brown-2 text-white",
    secondary:
      " bg-transparent border border-black hover:bg-black text-black hover:text-white",
    black: "bg-black hover:bg-[#4C4C4C] text-white",
  };
  return (
    <div
      className={`${stretch ? "w-full" : "w-40"} h-12 cursor-pointer py-3 ${center ? "mx-auto" : ""}
         flex justify-center items-center ${styles[type]}`}
      onClick={onClick}
    >
      {loading ? (
        <LoadingCircle />
      ) : (
        <small
          className={`font-bold w-full h-full uppercase flex items-center justify-center`}
        >
          {content}
        </small>
      )}
    </div>
  );
};

export default Button1;
