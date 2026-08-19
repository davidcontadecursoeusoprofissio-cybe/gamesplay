"use client"

import Data from "../Data/Data.json"

import { useState, useRef } from "react"

export default function Nav(props){

//variavel-if else-variavel mais o ?data?=Nav(item) map=Data e criar um elemento para o data-input


const[buscas, setBuscas]= useState(0)


  function Busca(){

    return(

      Data.map((item)=>{

        if(item.Nome == buscas){

          console.log("achei")

        }
        else{

          console.log("nao achei")

        }

      })

    )

  }


    return(
        <nav className="flex bg-[#110966] text-white h-20">

            <ul className="flex items-center gap-4">

                <li><img src="" alt="" /></li>

                <li>
                    <a href="http://localhost:3000/">
                        Home
                    </a>
                </li>

                <li>
                    <a href="http://localhost:3000/Produtos">
                        Produtos
                    </a>
                </li>

                <li>

                    <select
                        onChange={(e) => {
                            if (e.target.value !== "") {
                                window.location.href = `/Produtos?genero=${e.target.value}`
                            }
                        }}
                        className="bg-[#110966] text-white"
                        defaultValue=""
                    >

                        <option value="" disabled>
                            Categoria
                        </option>

                        <option value="açao">
                            Ação
                        </option>

                        <option value="terror">
                            Terror
                        </option>

                        <option value="aventura">
                            Aventura
                        </option>

                    </select>

                </li>

                <li>Entra</li>

                <li>
                    <a href="http://localhost:3000/Carrinho">
                        Carrinho
                    </a>
                </li>

            </ul>


            <input
                type="text"
                value={buscas}
                onChange={(e) => setBuscas(e.target.value)}
                placeholder="Buscar produto"
            />


            <button onClick={Busca}>
                Buscar
            </button>


        </nav>
    )
}