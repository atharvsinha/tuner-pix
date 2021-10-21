function Strings(){
    const stringList = ['E', 'A', 'D', 'G', 'B', 'E1'];

    let stringObject = [];

    stringList.forEach(string=>{
        stringObject.push({id:string, text:string.charAt(0)})
    })
    
    const String = ({id, text}) => {return(
            <div className="strings" id={id}>{text}</div>
    )}
    return(
        <>
        {stringObject.map((item)=>{
            return (<String key={item.id} {...item} />)
        })}
        </>
    )
    
}

export default Strings;