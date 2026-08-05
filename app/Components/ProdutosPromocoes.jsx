import Link from "next/link"
import Data from "../Data/Data.json"

//Falta botão, adicionar o conta matematica , calculo inteligente, porcentagem para desconto:novo e css, e botão para  ir para o carrinho:Novo
export default function ProdutosPromocoes(){
    return(
        <>
            {Data.map((item) => {
                if(item.Promoção==true){

                    return(
                        <div key={item.Nome}>
                        <img src={item.img} alt="" />
                        <h1>Nome: {item.Nome}</h1>
                        <p>Descrição:{item.Descrição}</p>
                        <p>Preço:{item.Preço}</p>
                        
                      
                        <Link href="/Carrinho">   
                        <button>Ir para o carrinho</button>
                        </Link>

                    </div>
                )
            }
            })}
        </>
    )
}