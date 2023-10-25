
const TypeBox = ({value, key}) => {
    return(
        <div key={key} className="bg-white font-bold rounded-lg text-xs w-[50px] text-center">
            {value}
        </div>
    );

}
export default TypeBox;