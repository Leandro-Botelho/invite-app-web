interface IBoxNameEventAlias {
  nameEvent: string;
  alias: string;
}

const BoxNameEventAlias = ({ alias, nameEvent }: IBoxNameEventAlias) => {
  return (
    <p
      className={`border-[1px] rounded-md py-2 px-4 text-white font-bold text-lg shadow-md border-bd_primary`}
    >
      {alias}: <span className="text-[#c2bdc6] font-light">{nameEvent}</span>
    </p>
  );
};

export default BoxNameEventAlias;
