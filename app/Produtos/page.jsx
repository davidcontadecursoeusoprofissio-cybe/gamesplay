"use client";

import { useState, useRef } from "react";
import ProdutosSemPromocoes from "@/app/Components/ProdutosSemPromocoes";
import ProdutosPromocoes from "@/app/Components/ProdutosPromocoes";
import Nav from "@/app/Components/Nav";
import Data from "../Data/Data.json";

export default function Produtos() {
  const [produtosFiltrados, setProdutosFiltrados] = useState(Data);
  const genero = useRef(null);

  function busca() {
    const generoSelecionado = genero.current.value;

    const resultado = Data.filter((item) => {
      return item.genero === generoSelecionado;
    });

    setProdutosFiltrados(resultado);
  }

  return (
    <>
      <Nav />

      <div className="flex flex-wrap gap-3">
        <select ref={genero} name="genero" id="genero">
          <option value="açao">Ação</option>
          <option value="terror">Terror</option>
          <option value="aventura">Aventura</option>
        </select>

        <button onClick={busca}>Buscar</button>

        <ProdutosSemPromocoes produtos={produtosFiltrados} />
        <ProdutosPromocoes produtos={produtosFiltrados} />
      </div>
    </>
  );
}
