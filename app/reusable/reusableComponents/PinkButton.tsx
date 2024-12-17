interface ButtonProps {
  text: string;
  useIcon?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  size?: "normal" | "small" | "large" | "xlarge";
}

export default function PinkButton({ text, onClick, size }: ButtonProps) {
  return (
    <button
      className={`flex flex-wrap justify-center gap-6 ${
        size === "small"
          ? "scale-90"
          : size === "large"
          ? "scale-110"
          : size === "xlarge"
          ? "scale-125"
          : ""
      }`}
      onClick={onClick}
    >
      <div className="relative">
        <div className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-white hover:bg-pink dark:hover:bg-pink"></div>
        <div className="fold-bold relative inline-block h-full w-full rounded border-2 border-black dark:border-white bg-white dark:bg-black px-3 py-1 text-base font-bold text-black dark:text-white transition duration-100 hover:bg-pink dark:hover:bg-darkPink hover:text-gray-900 dark:hover:text-gray-100">
          {text}
        </div>
      </div>
    </button>
  );
}
