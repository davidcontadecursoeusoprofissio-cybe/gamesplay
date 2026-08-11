import ProdutosSemPromocoes from "@/app/Components/ProdutosSemPromocoes"
import ProdutosPromocoes from "@/app/Components/ProdutosPromocoes";
import Nav from "@/app/Components/Nav"

export default function Produtos(){
    return(
        <>
       <Nav/>
       <div className="flex  flex-wrap gap-3 ">
       <ProdutosSemPromocoes/>
       <ProdutosPromocoes/>

       </div>
      
        </>
    )
}