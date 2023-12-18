document.getElementById('menuButton').addEventListener('click', function() {
    var menuContainer = document.getElementById('menuContainer');
    if (!menuContainer.classList.contains('open')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
  
  // ABRIR MENU
  var menu = document.querySelector(".menu"); // Seleciona o elemento com a classe "menu"
  
  function openMenu() {
    menu.style.display = "block";
    menu.classList.add('open');
    var openingHeight = 0; // Altura inicial do menu abrindo (em pixels)
    var interval = setInterval(function() {
      if (openingHeight < 100) {
        menu.style.clipPath = `polygon(0 0, 100% 0, 100% ${openingHeight}%, 0 ${openingHeight}%)`;
        openingHeight += 5; // Aumenta a altura gradualmente
      } else {
        clearInterval(interval); // Limpa o intervalo quando o menu estiver totalmente aberto
        menu.style.clipPath = "none"; // Restaura o clipPath para a forma original
      }
    }, 20); // Intervalo de tempo em milissegundos entre cada movimento
  }
  
  // FECHAR MENU
  function closeMenu() {
    var closingHeight = 100; // Altura inicial do menu fechando (em pixels)
    var interval = setInterval(function() {
      if (closingHeight > 0) {
        menu.style.clipPath = `polygon(0 0, 100% 0, 100% ${closingHeight}%, 0 ${closingHeight}%)`;
        closingHeight -= 5; // Diminui a altura gradualmente
      } else {
        clearInterval(interval); // Limpa o intervalo quando o menu estiver totalmente fechado
        menu.style.display = "none";
        menu.classList.remove('open');
        menu.style.clipPath = "none"; // Restaura o clipPath para a forma original
      }
    }, 20); // Intervalo de tempo em milissegundos entre cada movimento
  }
  
  document.querySelector(".buttonstart").addEventListener("click", openMenu);
  document.querySelector("#buttonclose").addEventListener("click", closeMenu);
  
  
  // CERTIDAO DIGITAL
  function redirecionarParaEprotocolo() {
    // Redirecionar para a página correspondente à Pesquisa Qualificada
    window.location.href = 'escolha/index.html';
  }
  
  function redirecionarParaCertidaoDigital() {
    // Redirecionar para a página correspondente à Certidão Digital
    window.location.href = './flip-five/index.html';
  }
  
  function redirecionarParaPesquisaQualificada() {
    // Redirecionar para a página correspondente à Pesquisa Qualificada
    window.location.href = './flip-two/index.html';
  }
  
  function redirecionarParaPesquisaPrévia() {
    // Redirecionar para a página correspondente à Usucapião
    window.location.href = './flip-for/index.html';
  }
  
  function redirecionarParaAcompanhamentoRegistral() {
    // Redirecionar para a página correspondente à Certidão Digital
    window.location.href = './flip-five/index.html';
  }
  
  function redirecionarParaAssinadorDigital() {
    // Redirecionar para a página correspondente à Pesquisa Qualificada
    window.location.href = './flip-six/index.html';
  }
  
  function redirecionarParaCompradeCrédito() {
    // Redirecionar para a página correspondente à Central Eletrônica
    window.location.href = './flip-seven/index.html';
  }
  
  
  function redirecionarParaintimaçõesConsolidação() {
    // Redirecionar para a página correspondente à Usucapião
    window.location.href = './flip-eighth/index.html';
  }
  
  function redirecionarParaMatriculaonline() {
    // Redirecionar para a página correspondente à Central Eletrônica
    window.location.href = './flip-nine/index.html';
  }
  
  function redirecionarParaRepositórioConfiavél() {
    // Redirecionar para a página correspondente à Pesquisa Qualificada
    window.location.href = './flip-ten/index.html';
  }
  
  function redirecionarParaUsucapiao() {
    // Redirecionar para a página correspondente à Pesquisa Qualificada
    window.location.href = './flip-tree/index.html';
  }
  
  document.addEventListener("DOMContentLoaded", function() {
      var btnInicio = document.getElementById('btnInicio');
  
      // Adiciona um ouvinte de clique para o botão Início
      btnInicio.addEventListener('click', function() {
          // Redireciona para a página desejada usando um caminho absoluto
          window.location.href = '#';
      });
  });
