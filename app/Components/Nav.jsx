"use client"

import { useState, useRef } from "react"

export default function Nav(){

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

        </nav>
    )
}