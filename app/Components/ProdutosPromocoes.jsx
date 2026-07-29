import Data from '../Data.json'

export default function ProdutosPromoções(){
    return(
        <>
            {Data.map((item) => {
                return(
                    <div key={item.Nome}>
                        <img src={item.img} alt="" />
                        <h1>Nome: {item.Nome}</h1>
                        <p>Descrição:{item.Descrição}</p>
                        <p>Preço:{item.Preço}</p>
                        
                    </div>
                )
            })}
        </>
    )
}