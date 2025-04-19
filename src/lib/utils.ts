import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getGradientStyle = (theme: "light" | "dark") => {
  if (theme === "light") {
    return {
      background: "linear-gradient(45deg, #5BC0EB, #FFA07A, #F0F0F0)",
      backgroundSize: "400% 400%",
      animation: "gradient 15s ease infinite",
    };
  }

  return {
    background: "linear-gradient(45deg, #2C2F4A, #5BC0EB, #2A2A3A)",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
  };
};

export const getAnimatedGradientStyle = () => {
  return {
    keyframes: {
      gradient: {
        '0%': {
          backgroundPosition: '0% 50%',
        },
        '50%': {
          backgroundPosition: '100% 50%',
        },
        '100%': {
          backgroundPosition: '0% 50%',
        }
      }
    }
  };
};
