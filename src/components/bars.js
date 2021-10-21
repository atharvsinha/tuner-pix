export default function Bars () {
    const nBars = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1];
    const barObject = []
    nBars.forEach((i)=>{
        barObject.push({
            id: barObject.length,
            value : i
        })
    })
    return (
        <div className="bars">
        {
            barObject.map((i)=>{
                
                if (i.value===1){
                    return( 
                    <div className={"bars"+i.value} id={"bar"+i.id} style={{
                        position:"absolute",
                        width:" 6px",
                        height:" 80px",
                        top:" 175px",               
                        background:" #cecece",
                        left: `${i.id*21+18}px`
                    }}
                    >
                    </div>
                    )
                } else {
                    return (
                        <div className={"bars"+i.value} id={"bar"+i.id} style={{
                        position:"absolute",
                        width:" 6px",
                        height:" 40px",
                        top:" 195px",               
                        background:" #cecece",
                        left: `${i.id*21+18}px`
                    }}
                    >
                    </div>
                    )
                }
            })
        }
        </div>
    )
}