
const StatBox =  ({stat, value}) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between font-pokemonName text-xl pr-1">
                <p>{stat.toUpperCase()}</p>
                <p>{value}</p>
            </div>
            <progress className="w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-400" value={value} max="255"></progress>
</div>

    );
}
export default StatBox;