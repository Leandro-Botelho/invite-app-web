import Image from "next/image";

interface ICardDetailsEvent {
  src: string;
  title: string;
  number: number;
}

const CardDetailsEvent = ({ src, number, title }: ICardDetailsEvent) => {
  return (
    <div className="flex flex-1 justify-between items-center gap-2 py-4 px-3 bg-[#18181b] rounded-lg">
      <div className="flex flex-col">
        <h3 className="text-primary font-light">{title}:</h3>
        <p className="font-bold text-white text-xl">{number}</p>
      </div>

      <Image width={50} height={50} src={src} alt={`alt -  ${title}`} />
    </div>
  );
};

export default CardDetailsEvent;
