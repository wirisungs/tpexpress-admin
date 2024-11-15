import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

// Nhập text, width

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  customColor?: string;
  href?: string | undefined;
  type?: "button" | "submit";
}

interface LinkButtonProps extends ButtonProps {
  link: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  customColor,
  type,
  href = "/",
}) => {
  const Router = useRouter();
  const handleOnclick = () => {
    Router.push(href);
  };
  return (
    <button
      type={type || "button"}
      style={{
        backgroundColor: `${customColor ? `${customColor}` : `#D9D9D9`}`,
      }}
      onClick={handleOnclick}
      className="flex flex-row gap-[6px] w-full h-[42px] rounded-md justify-center items-center"
    >
      <div className="icon">{icon}</div>
      <div className="text flex items-center text-white font-bold text-xs h-full">
        {text}
      </div>
    </button>
  );
};

const ButtonBorder: React.FC<ButtonProps> = ({ text, icon, href }) => {
  const Router = useRouter();
  const handleOnclick = () => {
    if (href) {
      Router.push(href);
    }
  };
  return (
    <button
      type="button"
      onClick={handleOnclick}
      className="flex flex-row w-full gap-[6px] h-[42px] border-solid border-[1px] border-primaryText300 bg-none rounded-md justify-center items-center"
    >
      <div className="icon">{icon}</div>
      <div className="text flex items-center text-primaryText300 font-bold text-xs h-full">
        {text}
      </div>
    </button>
  );
};

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  icon,
  width,
  customColor,
  link,
}) => {
  return (
    <button
      style={{
        width: `${width ? `${width}` : "152px"}`,
        background: `${customColor ? `${customColor}` : `#D9D9D9`}`,
      }}
      className="flex flex-row gap-[6px] h-[42px] rounded-md justify-center items-center"
    >
      <Link href={link}>
        <div className="icon">{icon}</div>
        <div className="text flex items-center text-white font-bold text-xs h-full">
          {text}
        </div>
      </Link>
    </button>
  );
};

export default Button;
export { LinkButton, ButtonBorder };
