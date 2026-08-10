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
                    <div key={item.Nome}>

                        <img src={item.img} alt="" />

                        <h1>Nome: {item.Nome}</h1>

                        <p>Descrição: {item.Descrição}</p>

                        <p>Preço: {item.Preço}</p>

                        <button onClick={() => adicionarCarrinho(item)}>
                            Adicionar ao carrinho
                        </button>

                    </div>
                )

            })}
        </>
    )
}


