const PokedexNavigationButton = ({onClick, image, value}) => {

    return (
    <div className={`flex flex-col items-center border-2 border-black border-opacity-60 justify-center rounded-3xl bg-blue-200/50 w-[100px] h-[100px] cursor-pointer animate-fade-down animate-ease-out hover:text-3xl transition-all hover:border-opacity-100`} onClick={onClick} > 
                {value} 
                <img src={image} alt="back"/>
                
                </div>
                )

}
export default PokedexNavigationButton;