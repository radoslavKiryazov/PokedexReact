import StatBox from "./StatBox";
import DisplayTypeBox from "./DisplayTypeBox";


const StatsPanel = ({ stats, types, colorVariant }) => {
    return (
        <div className={`flex flex-col items-center ${colorVariant} p-2 w-[300px] h-[540px] border-opacity-60 rounded-3xl animate-fade-up border-2 border-black`}>
                <h1 className="font-pokemonName text-4xl animate-fade"> STATS </h1>
                {stats.map((stat) => (<StatBox stat={stat.stat.name} value={stat.base_stat} key={stat.stat.name} />))}
                <h1 className="font-pokemonName text-4xl pt-5 animate-fade"> TYPE </h1>

                <div className="flex flex-row space-x-3">
                    {types.map((type) => (
                        <DisplayTypeBox type={type.type.name} key={type.slot} />
                    ))}
                </div>
            </div>
    )

}
export default StatsPanel;