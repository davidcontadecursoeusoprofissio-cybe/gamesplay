"use client"

import Link from "next/link"
import Data from "../Data/Data.json"

//Falta botão, adicionar o conta matematica , calculo inteligente, porcentagem para desconto:novo e css, e botão para  ir para o carrinho:Novo
export default function ProdutosPromocoes(){

    function adicionarCarrinho(item){

        const desconto = 20
        const precoDesconto = item.Preço - (item.Preço * desconto / 100)

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

        const existe = carrinho.find((produto) => produto.Nome === item.Nome)

        if(!existe){

            carrinho.push({
                ...item,
                Preço: precoDesconto,
                Desconto: desconto
            })

            localStorage.setItem("carrinho", JSON.stringify(carrinho))
        }

    }

    return(
        <>
            {Data.map((item) => {
                if(item.Promoção==true){

                    const desconto = 20
                    const precoDesconto = item.Preço - (item.Preço * desconto / 100)

                    return(
                        <div key={item.Nome}>
                        <img src={item.img} alt="" />
                        <h1>Nome: {item.Nome}</h1>
                        <p>Descrição:{item.Descrição}</p>
                        <p>Preço antigo:{item.Preço}</p>
                        <p>Desconto:{desconto}%</p>
                        <p>Preço final:{precoDesconto}</p>
                        
                        <Link href="/Carrinho">   
                        <button onClick={() => adicionarCarrinho(item)}>
                        Ir para o carrinho
                        </button>
                        </Link>

                    </div>
                )
            }
            })}
        </>
    )
}