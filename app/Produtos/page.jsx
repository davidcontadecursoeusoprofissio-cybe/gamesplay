"use client"

import { useState, useEffect } from "react"

import ProdutosSemPromocoes from "@/app/Components/ProdutosSemPromocoes"
import ProdutosPromocoes from "@/app/Components/ProdutosPromocoes"
import Nav from "@/app/Components/Nav"
import Data from "../Data/Data.json"


export default function Produtos() {

    const [produtosFiltrados, setProdutosFiltrados] = useState(Data)


    useEffect(() => {

        const parametros = new URLSearchParams(window.location.search)

        const generoSelecionado = parametros.get("genero")


        if (generoSelecionado) {

            const resultado = Data.filter((item) => {

                return item.Genero === generoSelecionado

            })

            setProdutosFiltrados(resultado)

        } else {

            setProdutosFiltrados(Data)

        }

    }, [])


    return (
        <>

            <Nav />


            <div className="flex flex-wrap gap-3">

                <ProdutosSemPromocoes
                    produtos={produtosFiltrados}
                />


                <ProdutosPromocoes
                    produtos={produtosFiltrados}
                />

            </div>

        </>
    )
}