import ProdutosSemPromocoes from "@/app/Components/ProdutosSemPromocoes"
import ProdutosPromocoes from "@/app/Components/ProdutosPromocoes";
import Nav from "@/app/Components/Nav"

export default function Produtos(){
    return(
        <>
       <Nav/>
       <ProdutosSemPromocoes/>
       <ProdutosPromocoes/>
        </>
    )
}