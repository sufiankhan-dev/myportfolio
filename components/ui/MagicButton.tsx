import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 font-medium shadow-xl"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] bg-[conic-gradient(from_90deg_at_50%_50%,#D4B5FF_0%,#8D91F2_50%,#D4B5FF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer px-7 py-1 items-center justify-center rounded-lg dark:bg-slate-950 bg-white dark:text-white hover:bg-gray-100 duration-150 text-slate-950 backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
