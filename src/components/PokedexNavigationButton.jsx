const PokedexNavigationButton = ({onClick, image, value, width}) => {

    return (
    <div className={`flex flex-col items-center justify-center rounded-3xl bg-blue-200/50 ${width} h-[100px] cursor-pointer animate-fade-down animate-ease-out`} onClick={onClick} > 
                {value} 
                <img src={image} alt="back"/>
                
                </div>
                )

}
export default PokedexNavigationButton;