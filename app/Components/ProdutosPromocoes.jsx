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
                        <div  className=" rounded  overflow-hidden bg-[#2f0966] h-120 w-120 text-white mt-12 ms-3"  key={item.Nome}>
                        <img className="object-contain h-72 w-80 ms-20 m-1 " src={item.img} alt="" />
                        <h1 className="ms-26">Nome: {item.Nome}</h1>
                        <p className="text-[12px] ms-5">Descrição:{item.Descrição}</p>
                        <p className="ms-45">Preço antigo:{item.Preço}</p>
                        <p className="ms-45">Desconto:{desconto}%</p>
                        <p className="ms-45">Preço final:{precoDesconto}</p>
                        
                        <Link href="/Carrinho">   
                        <button className=" rounded bg-green-400 h-6 w-70 ms-27 cursor-pointer " onClick={() => adicionarCarrinho(item)}>
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