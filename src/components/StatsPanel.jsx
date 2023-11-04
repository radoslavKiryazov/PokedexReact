import StatBox from "./StatBox";
import DisplayTypeBox from "./DisplayTypeBox";


const StatsPanel = ({ stats, types }) => {
    return (
        <div className="flex flex-col items-center bg-blue-200/50 p-2 w-[300px] h-[540px] rounded-3xl">
                <h1 className="font-pokemonName text-4xl"> STATS </h1>
                {stats.map((stat) => (<StatBox stat={stat.stat.name} value={stat.base_stat} key={stat.stat.name} />))}
                <h1 className="font-pokemonName text-4xl pt-5"> TYPE </h1>

                <div className="flex flex-row space-x-3">
                    {types.map((type) => (
                        <DisplayTypeBox type={type.type.name} key={type.slot} />
                    ))}
                </div>
            </div>
    )

}
export default StatsPanel;