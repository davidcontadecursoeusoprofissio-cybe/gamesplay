import Data from '../Data.json'
//Falta botão, adicionar o conta matematica, calculo inteligente, porcentagem para desconto e css
export default function ProdutosPromoções(){
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

                    </div>
                )
            }
            })}
        </>
    )
}