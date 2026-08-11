//Colocar No Carrinho,CSS,Adicionar todos os produtos, colocar o if e else




"use client"

import { useRouter } from "next/navigation"
import Data from "../Data/Data.json"

export default function ProdutosSemPromoções() {

    const router = useRouter()

    function adicionarCarrinho(item) {

        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

        const produto = {
            ...item,
            SemDesconto: true
        }

        const existe = carrinho.find((produto) => produto.Nome === item.Nome)

        if (!existe) {
            carrinho.push(produto)

            localStorage.setItem(
                "carrinho",
                JSON.stringify(carrinho)
            )
        }

        router.push("/Carrinho")
    }

    return (
        <>
            {Data.map((item) => {

                if(item.Promoção == false)

                return (
                    
                    <div className="bg-[#2f0966] h-120 w-120 text-white"  key={item.Nome}>

                        <img className="object-contain h-72 w-80 ms-20 mt-10" src={item.img} alt="" />

                        <h1 className="ms-28">Nome: {item.Nome}</h1>

                        <p className="text-[12px]">Descrição: {item.Descrição}</p>

                        <p>Preço: {item.Preço}</p>

                        <button className="bg-green-400 h-6 w-70 ms-27 " onClick={() => adicionarCarrinho(item)}>
                            Adicionar ao carrinho
                        </button>

                    </div>
                )

            })}
        </>
    )
}


