import { Button } from "@/app/shared/components/shadcn-components/button";
import Link from "next/link";

interface BoxEventProps {
  url_image: string;
  nameEvent: string;
  description: string;
  id: number;
}

const BoxEvent = ({ url_image, nameEvent, description, id }: BoxEventProps) => {
  return (
    <div className="bg-[#28272a] rounded-md w-72">
      <div
        className={`relative border-b-1 border-bd_primary flex-row items-center gap-4 bg-cover bg-center h-20`}
        style={{
          backgroundImage: `url(${url_image})`,
        }}
      ></div>

      <div className="flex justify-center flex-col items-center p-4">
        <p className="font-bold">{nameEvent}</p>
        <p className="text-primary">{description}</p>
      </div>
      <div className="flex justify-center gap-4 p-4">
        <Link href={`/admin/event-detail/${id}`}>
          <Button className="bg-button hover:bg-btnHover">Detalhes</Button>
        </Link>
        <Link href={`/admin/invite/${id}`}>
          <Button className="bg-[#23c55e] hover:bg-[#1c8843]">Convite</Button>
        </Link>
      </div>
    </div>
  );
};

export default BoxEvent;
