import Image from "next/image";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

interface ILogo {
  width?: number;
  height?: number;
  fontSize?: string;
}

const Logo = ({ height = 120, width = 120, fontSize = "text-4xl" }: ILogo) => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo.svg"
        width={width}
        height={height}
        alt="Logo-invite-web"
      />
      <h1
        className={` flex flex-col items-center ${fontSize} ${righteous.className}`}
      >
        <div className="text-white">
          CONVIT<span className="text-blue-500">3</span>
        </div>
        <div className="text-white">DIGITAL</div>
      </h1>
    </div>
  );
};

export default Logo;
