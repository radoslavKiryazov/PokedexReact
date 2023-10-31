const StatBox =  ({stat, value}) => {
    const statValue = value === 45 && "w-[45%]" 



    return (
        <>
        <p>{stat}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div className={`bg-blue-600 h-2.5 rounded-full ${statValue}`}></div>
</div>
</>

    );
}
export default StatBox;