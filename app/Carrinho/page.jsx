
"use client"

import { useEffect, useState } from "react"

export default function Carrinho(){

    const [produtos, setProdutos] = useState([])

    useEffect(() => {

        const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

        setProdutos(carrinho)

    }, [])


    function removerProduto(nome){

        const novoCarrinho = produtos.filter((item) => item.Nome !== nome)

        setProdutos(novoCarrinho)

        localStorage.setItem(
            "carrinho",
            JSON.stringify(novoCarrinho)
        )

    }


    return(
        <div>

            <h1>Carrinho de compras</h1>

            {produtos.map((item) => {

                let desconto
                let precoFinal

                if (item.Promoção == true) {
                    desconto = 20
                    precoFinal = item.Preço - (item.Preço * desconto / 100)
                } else {
                    desconto = 0
                    precoFinal = item.Preço
                }

                return(
                    <div key={item.Nome}>

                        <img src={item.img} alt={item.Nome} width="200"/>

                        <h2>{item.Nome}</h2>

                        <p>{item.Descrição}</p>

                        <p>
                            Preço antigo: R$ {item.Preço}
                        </p>

                        <p>
                            Desconto: {desconto}%
                        </p>

                        <p>
                            Preço final: R$ {precoFinal.toFixed(2)}
                        </p>

                        <button onClick={() => removerProduto(item.Nome)}>
                            Remover
                        </button>

                    </div>
                )

            })}

        </div>
    )
}

