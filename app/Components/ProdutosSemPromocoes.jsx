import Link from "next/link"
import Data from "../Data/Data.json"

export default function ProdutosSemPromoções(){
    return(
        {Data.map((item)=>{
            return(
                <div key={item}>
                
                </div>
            )
        })}

    )
}