"use client";

import { useRouter } from "next/navigation";

export default function ProdutosSemPromocoes({ produtos = [] }) {
  const router = useRouter();

  function adicionarCarrinho(item) {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const produto = {
      ...item,
      SemDesconto: true,
    };

    const existe = carrinho.find(
      (produto) => produto.Nome === item.Nome
    );

    if (!existe) {
      carrinho.push(produto);

      localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
      );
    }

    router.push("/Carrinho");
  }

  return (
    <>
      {produtos.map((item) => {
        if (item["Promoção"] !== false) {
          return null;
        }

        return (
          <div
            className="rounded overflow-hidden bg-[#2f0966] h-120 w-120 text-white mt-12 ms-3"
            key={item.Nome}
          >
            <img
              className="object-contain h-72 w-80 ms-20 mt-10"
              src={item.img}
              alt={item.Nome}
            />

            <h1 className="ms-38">Nome: {item.Nome}</h1>

            <p className="text-[12px] ms-4">
              Descrição: {item.Descrição}
            </p>

            <p className="ms-50">Preço: {item.Preço}</p>

            <button
              className="rounded bg-green-400 h-6 w-70 ms-27 cursor-pointer"
              onClick={() => adicionarCarrinho(item)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        );
      })}
    </>
  );
}



