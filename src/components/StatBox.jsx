
const StatBox =  ({stat, value}) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between font-pokemonName text-xl pr-1">
                <p className="animate-fade-right">{stat.toUpperCase()}</p>
                <p className="animate-fade-left">{value}</p>
            </div>
            <progress className="animate-fade-up w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-400" value={value} max="255"></progress>
</div>

    );
}
export default StatBox;