class CaixaDaLanchonete {
    constructor() {
      this.cardapio = [
        { codigo: "cafe", descricao: "Café", valor: 3.0 },
        { codigo: "chantily", descricao: "Chantily (extra do Café)", valor: 1.5 },
        { codigo: "suco", descricao: "Suco Natural", valor: 6.2 },
        { codigo: "sanduiche", descricao: "Sanduíche", valor: 6.5 },
        { codigo: "queijo", descricao: "Queijo (extra do Sanduíche)", valor: 2.0 },
        { codigo: "salgado", descricao: "Salgado", valor: 7.25 },
        { codigo: "combo1", descricao: "1 Suco e 1 Sanduíche", valor: 9.5 },
        { codigo: "combo2", descricao: "1 Café e 1 Sanduíche", valor: 7.5 },
      ];
  
      this.formasDePagamento = ["dinheiro", "debito", "credito"];
    }
  
    calcularValorDaCompra(formaDePagamento, itens) {
      if (!this.formasDePagamento.includes(formaDePagamento)) {
        return "Forma de pagamento inválida!";
      }
  
      let total = 0;
      let extraSemPrincipal = false;
  
      for (const itemStr of itens) {
        const [pedido, quantidade] = itemStr.split(",");
        const quantidadeNum = parseInt(quantidade, 10);
  
        if (isNaN(quantidadeNum) || quantidadeNum <= 0) {
          return "Quantidade inválida!";
        }
  
        const itemMenu = this.cardapio.find(item => item.codigo === pedido);
        if (!itemMenu) {
          return "Item inválido!";
        }


        if(itemStr === 'cafe' && itemStr === 'chantily'){
          extraSemPrincipal = false
        }
        else if (itemStr === "chantily" ) {
          extraSemPrincipal = true
        }
        else if(itemStr === 'sanduiche' && itemStr === 'queijo'){
          extraSemPrincipal = false
        }
        else if(itemStr === "queijo"){
          extraSemPrincipal = true
        }
        
  
        total += itemMenu.valor * quantidadeNum;

      }
  
      if (extraSemPrincipal) {
        return "Item extra não pode ser pedido sem o principal.";
      }
      
  
      if (total === 0) {
        return "Não há itens no carrinho de compra!";
      }
  
      if (formaDePagamento === "dinheiro") {
        total *= 0.95;
      } else if (formaDePagamento === "credito") {
        total *= 1.03; 
      }
  
      return `Total a pagar: R$ ${total.toFixed(2)}`;
    }
  }


const caixa = new CaixaDaLanchonete().calcularValorDaCompra('dinheiro', ['chantily, 1']);
console.log(caixa)

const caixa2 = new CaixaDaLanchonete()
.calcularValorDaCompra('debito', ['cafe,1','chantily,1']);
console.log(caixa2)

const caixa3 = new CaixaDaLanchonete()
.calcularValorDaCompra('credito', ['combo1,1','cafe,2']);
console.log(caixa3)

export { CaixaDaLanchonete };
