// Função para buscar os dados do JSON e preencher a tabela
function carregarProdutos() {
    fetch('db.json') // Caminho para o seu arquivo JSON
      .then(response => response.json())
      .then(data => {
        const table = document.getElementById('tableClient');
        const tbody = document.createElement('tbody');
        
        data.produtos.forEach(produto => {
          const row = document.createElement('tr');
          row.innerHTML = `
          <td>${produto.id}</td>
          <td>${produto.nome}</td>
          <td>${produto.unidadeMedida}</td>
          <td>${produto.qntEstoqueMin}</td>
          <td>${produto.qntEstoqueAtual}</td>
          <td>${produto.classe}</td>
          `;
          tbody.appendChild(row);
        });

        table.appendChild(tbody);
      })
      .catch(error => console.error('Erro ao carregar os produtos:', error));
    }

    // Chama a função para carregar os produtos quando a página carregar
    document.addEventListener('DOMContentLoaded', carregarProdutos);

/* Tanto a minha função criada para filtar por categoria,
 tanto a função criada para trocar de páginas a cada 10 produtos.

irei deixar indexado os códigos abaixos em comentário:
function carregarProdutos() {
  // ... Seu código existente ...

  const classeFiltro = document.getElementById('classeFiltro');

  // Adicione um ouvinte de evento para a caixa de seleção
  classeFiltro.addEventListener('change', () => {
    const selectedClass = classeFiltro.value;
    const filteredData = data.produtos.filter(produto => {
      // Se a classe selecionada for vazia, mostre todos os produtos
      if (selectedClass === "") {
        return true;
      }
      // Caso contrário, filtre os produtos com base na classe selecionada
      return produto.classe === selectedClass;
    });

    // Limpe a tabela atual
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    // Preencha a tabela com os dados filtrados
    filteredData.forEach(produto => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${produto.id}</td>
        <td>${produto.nome}</td>
        <td>${produto.unidadeMedida}</td>
        <td>${produto.qntEstoqueMin}</td>
        <td>${produto.qntEstoqueAtual}</td>
        <td>${produto.classe}</td>
      `;
      tbody.appendChild(row);
    });
  });

  table.appendChild(tbody);
}

document.addEventListener('DOMContentLoaded', carregarProdutos);
*/