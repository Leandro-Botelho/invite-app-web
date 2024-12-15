interface ITabsConfirmed {
  tabs: string[];
  activeTab: "yes" | "no";
  label: string;
  setActiveTab: (tab: "yes" | "no") => void;
}

const TabsConfirmed = ({
  activeTab,
  label,
  tabs,
  setActiveTab,
}: ITabsConfirmed) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="text-white font-bold text-center">{label}</p>
      <div className="flex justify-between p-1 rounded-lg gap-4 bg-[#18181b]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "yes" | "no")}
            className={`${
              activeTab === tab
                ? "bg-black text-white"
                : " text-[#c2bdc6]"
            } w-full rounded-lg p-2`}
          >
            {tab === "yes" ? "Sim" : "Não"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabsConfirmed;
