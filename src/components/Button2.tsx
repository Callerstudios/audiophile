import type React from "react";
import arrowRight from "../assets/arrow-right.png"

type ButtonProps = {
  content: string;
  onClick: ()=>void
};
const Button2: React.FC<ButtonProps> = ({ content, onClick }) => {
  return (
    <div
      className={`w-fit gap-2 h-12 flex flex-row justify-center items-center hover:text-brown-1`}
      onClick={onClick}
    >
      <small
        className={`font-bold text-sm capitalize w-full h-full flex items-center justify-center`}
      >
        {content}
      </small>
      <img src={arrowRight} alt="" />
    </div>
  );
};

export default Button2;
