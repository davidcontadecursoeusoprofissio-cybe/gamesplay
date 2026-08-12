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
        <div className="flex flex-wrap gap-3">

         

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
                    <div  className="bg-[#2f0966] h-120 w-120 text-white object-contain ms-4 mt-4 rounded"  key={item.Nome}>

                        <img className="object-contain h-72 w-80 ms-17" src={item.img} alt={item.Nome} width="200"/>

                        <h2 className="ms-32">{item.Nome}</h2>

                        <p className="text-[12px] ms-1">{item.Descrição}</p>

                        <p className="ms-35">
                            Preço antigo: R$ {item.Preço}
                        </p>

                        <p className="ms-35">
                            Desconto: {desconto}%
                        </p>

                        <p className="ms-35">
                            Preço final: R$ {precoFinal.toFixed(2)}
                        </p>

                        <button className="bg-red-600 ms-30 w-50 rounded cursor-pointer " onClick={() => removerProduto(item.Nome)}>
                            Remover
                        </button>

                    </div>
                )

            })}

        </div>
    )
}
