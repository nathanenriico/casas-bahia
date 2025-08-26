let currentPage = 0;
const itemsPerPage = 9;

function showPage(page) {
    const items = document.querySelectorAll('.category-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            if (index >= page * itemsPerPage && index < (page + 1) * itemsPerPage) {
                item.style.display = 'flex';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            } else {
                item.style.display = 'none';
            }
        }, index * 50);
    });
}

function nextPage() {
    const totalItems = document.querySelectorAll('.category-item').length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (currentPage < totalPages - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}



// Hero Carousel
let slideIndex = 1;

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[slideIndex - 1].classList.remove('active');
    dots[slideIndex - 1].classList.remove('active');
    
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    
    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[slideIndex - 1].classList.remove('active');
    dots[slideIndex - 1].classList.remove('active');
    
    slideIndex--;
    if (slideIndex < 1) slideIndex = slides.length;
    
    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}

function currentSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[slideIndex - 1].classList.remove('active');
    dots[slideIndex - 1].classList.remove('active');
    
    slideIndex = n;
    
    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}

// Banner Carousel
let bannerIndex = 1;

function nextBanner() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');
    
    slides[bannerIndex - 1].classList.remove('active');
    dots[bannerIndex - 1].classList.remove('active');
    
    bannerIndex++;
    if (bannerIndex > slides.length) bannerIndex = 1;
    
    slides[bannerIndex - 1].classList.add('active');
    dots[bannerIndex - 1].classList.add('active');
}

function prevBanner() {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');
    
    slides[bannerIndex - 1].classList.remove('active');
    dots[bannerIndex - 1].classList.remove('active');
    
    bannerIndex--;
    if (bannerIndex < 1) bannerIndex = slides.length;
    
    slides[bannerIndex - 1].classList.add('active');
    dots[bannerIndex - 1].classList.add('active');
}

function currentBanner(n) {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.banner-dot');
    
    slides[bannerIndex - 1].classList.remove('active');
    dots[bannerIndex - 1].classList.remove('active');
    
    bannerIndex = n;
    
    slides[bannerIndex - 1].classList.add('active');
    dots[bannerIndex - 1].classList.add('active');
}

// Carrossel de Produtos
let productScrollPosition = 0;

function nextProductSlide() {
    const container = document.getElementById('produtosCarousel');
    const cardWidth = 260; // largura do card + gap
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    productScrollPosition = Math.min(productScrollPosition + cardWidth, maxScroll);
    container.scrollTo({
        left: productScrollPosition,
        behavior: 'smooth'
    });
}

function prevProductSlide() {
    const container = document.getElementById('produtosCarousel');
    const cardWidth = 260;
    
    productScrollPosition = Math.max(productScrollPosition - cardWidth, 0);
    container.scrollTo({
        left: productScrollPosition,
        behavior: 'smooth'
    });
}

// Toggle Ofertas
let ofertasExpanded = false;

function toggleOfertas() {
    const allCards = document.querySelectorAll('#ofertasGrid .produto-card');
    const seta = document.getElementById('setaMais');
    
    if (!ofertasExpanded) {
        // Primeiro anima os existentes saindo
        allCards.forEach((card, index) => {
            if (index < 5) {
                card.style.transform = 'translateX(-100%)';
                card.style.opacity = '0';
            }
        });
        
        // Depois mostra os novos produtos deslizando
        setTimeout(() => {
            allCards.forEach((card, index) => {
                if (index >= 5) {
                    card.classList.remove('hidden');
                    card.style.transform = 'translateX(100%)';
                    card.style.opacity = '0';
                    
                    setTimeout(() => {
                        card.style.transform = 'translateX(0)';
                        card.style.opacity = '1';
                    }, (index - 5) * 100);
                }
            });
        }, 300);
        
        seta.innerHTML = '‹';
        ofertasExpanded = true;
    } else {
        // Anima os produtos extras saindo
        allCards.forEach((card, index) => {
            if (index >= 5) {
                card.style.transform = 'translateX(100%)';
                card.style.opacity = '0';
            }
        });
        
        // Depois mostra os originais voltando
        setTimeout(() => {
            allCards.forEach((card, index) => {
                if (index >= 5) {
                    card.classList.add('hidden');
                } else {
                    card.style.transform = 'translateX(-100%)';
                    card.style.opacity = '0';
                    
                    setTimeout(() => {
                        card.style.transform = 'translateX(0)';
                        card.style.opacity = '1';
                    }, index * 100);
                }
            });
        }, 300);
        
        seta.innerHTML = '›';
        ofertasExpanded = false;
    }
}

// Toggle Indicados
let indicadosExpanded = false;

function toggleIndicados() {
    const allCards = document.querySelectorAll('#indicadosGrid .produto-card');
    const seta = document.getElementById('setaIndicados');
    
    if (!indicadosExpanded) {
        // Primeiro anima os existentes saindo
        allCards.forEach((card, index) => {
            if (index < 5) {
                card.style.transform = 'translateX(-100%)';
                card.style.opacity = '0';
            }
        });
        
        // Depois mostra os novos produtos deslizando
        setTimeout(() => {
            allCards.forEach((card, index) => {
                if (index >= 5) {
                    card.classList.remove('hidden');
                    card.style.transform = 'translateX(100%)';
                    card.style.opacity = '0';
                    
                    setTimeout(() => {
                        card.style.transform = 'translateX(0)';
                        card.style.opacity = '1';
                    }, (index - 5) * 100);
                }
            });
        }, 300);
        
        seta.innerHTML = '‹';
        indicadosExpanded = true;
    } else {
        // Anima os produtos extras saindo
        allCards.forEach((card, index) => {
            if (index >= 5) {
                card.style.transform = 'translateX(100%)';
                card.style.opacity = '0';
            }
        });
        
        // Depois mostra os originais voltando
        setTimeout(() => {
            allCards.forEach((card, index) => {
                if (index >= 5) {
                    card.classList.add('hidden');
                } else {
                    card.style.transform = 'translateX(-100%)';
                    card.style.opacity = '0';
                    
                    setTimeout(() => {
                        card.style.transform = 'translateX(0)';
                        card.style.opacity = '1';
                    }, index * 100);
                }
            });
        }, 300);
        
        seta.innerHTML = '›';
        indicadosExpanded = false;
    }
}

// Toggle Tecnologia
let tecnologiaExpanded = false;

function toggleTecnologia() {
    const allCards = document.querySelectorAll('#tecnologiaGrid .produto-card');
    const seta = document.getElementById('setaTecnologia');
    
    if (!tecnologiaExpanded) {
        // Primeiro anima os existentes saindo
        allCards.forEach((card, index) => {
            if (index < 5) {
                card.style.transform = 'translateX(-100%)';
                card.style.opacity = '0';
            }
        });
        
        // Depois mostra os novos produtos deslizando
        setTimeout(() => {
            allCards.forEach((card, index) => {
                if (index >= 5) {
                    card.classList.remove('hidden');
                    card.style.transform = 'translateX(100%)';
                    card.style.opacity = '0';
                    
                    setTimeout(() => {
                        card.style.transform = 'translateX(0)';
                        card.style.opacity = '1';
                    }, (index - 5) * 100);
                }
            });
        }, 300);
        
        seta.innerHTML = '‹';
        tecnologiaExpanded = true;
    } else {
        // Anima os produtos extras saindo
        allCards.forEach((card, index) => {
            if (index >= 5) {
                card.style.transform = 'translateX(100%)';
                card.style.opacity = '0';
            }
        });
        
        // Depois mostra os originais voltando
        setTimeout(() => {
            allCards.forEach((card, index) => {
                if (index >= 5) {
                    card.classList.add('hidden');
                } else {
                    card.style.transform = 'translateX(-100%)';
                    card.style.opacity = '0';
                    
                    setTimeout(() => {
                        card.style.transform = 'translateX(0)';
                        card.style.opacity = '1';
                    }, index * 100);
                }
            });
        }, 300);
        
        seta.innerHTML = '›';
        tecnologiaExpanded = false;
    }
}

// Toggle Casa
let casaExpanded = false;

function toggleCasa() {
    const allCards = document.querySelectorAll('#casaGrid .produto-card');
    const seta = document.getElementById('setCasa');
    
    if (!casaExpanded) {
        // Anima todos os produtos atuais saindo para a esquerda
        allCards.forEach((card, index) => {
            if (index < 5) {
                card.style.transform = 'translateX(-100%)';
                card.style.opacity = '0';
            }
        });
        
        // Depois esconde os primeiros e mostra os novos
        setTimeout(() => {
            allCards.forEach((card, index) => {
                if (index < 5) {
                    card.classList.add('hidden');
                } else {
                    card.classList.remove('hidden');
                    card.style.transform = 'translateX(100%)';
                    card.style.opacity = '0';
                    
                    setTimeout(() => {
                        card.style.transform = 'translateX(0)';
                        card.style.opacity = '1';
                    }, (index - 5) * 100);
                }
            });
        }, 300);
        
        seta.innerHTML = '‹';
        casaExpanded = true;
    } else {
        // Anima os produtos atuais saindo para a direita
        allCards.forEach((card, index) => {
            if (index >= 5) {
                card.style.transform = 'translateX(100%)';
                card.style.opacity = '0';
            }
        });
        
        // Depois esconde os segundos e mostra os originais
        setTimeout(() => {
            allCards.forEach((card, index) => {
                if (index >= 5) {
                    card.classList.add('hidden');
                } else {
                    card.classList.remove('hidden');
                    card.style.transform = 'translateX(-100%)';
                    card.style.opacity = '0';
                    
                    setTimeout(() => {
                        card.style.transform = 'translateX(0)';
                        card.style.opacity = '1';
                    }, index * 100);
                }
            });
        }, 300);
        
        seta.innerHTML = '›';
        casaExpanded = false;
    }
}

// Toggle Patrocinados
let patrocinadosExpanded = false;

function togglePatrocinados() {
    const allCards = document.querySelectorAll('.patrocinados-grid .produto-patrocinado');
    const seta = document.getElementById('setaPatrocinados');
    
    if (!patrocinadosExpanded) {
        // Primeiro anima os existentes saindo
        allCards.forEach((card, index) => {
            if (index < 5) {
                card.style.transform = 'translateX(-100%)';
                card.style.opacity = '0';
            }
        });
        
        // Depois mostra os novos produtos deslizando
        setTimeout(() => {
            allCards.forEach((card, index) => {
                if (index >= 5) {
                    card.classList.remove('hidden');
                    card.style.transform = 'translateX(100%)';
                    card.style.opacity = '0';
                    
                    setTimeout(() => {
                        card.style.transform = 'translateX(0)';
                        card.style.opacity = '1';
                    }, (index - 5) * 100);
                }
            });
        }, 300);
        
        seta.innerHTML = '‹';
        patrocinadosExpanded = true;
    } else {
        // Anima os produtos extras saindo
        allCards.forEach((card, index) => {
            if (index >= 5) {
                card.style.transform = 'translateX(100%)';
                card.style.opacity = '0';
            }
        });
        
        // Depois mostra os originais voltando
        setTimeout(() => {
            allCards.forEach((card, index) => {
                if (index >= 5) {
                    card.classList.add('hidden');
                } else {
                    card.style.transform = 'translateX(-100%)';
                    card.style.opacity = '0';
                    
                    setTimeout(() => {
                        card.style.transform = 'translateX(0)';
                        card.style.opacity = '1';
                    }, index * 100);
                }
            });
        }, 300);
        
        seta.innerHTML = '›';
        patrocinadosExpanded = false;
    }
}

// Toggle Search Dropdown
function toggleSearch() {
    const dropdown = document.getElementById('searchDropdown');
    dropdown.classList.toggle('active');
}

// Toggle CEP Modal
function toggleCepModal() {
    const modal = document.getElementById('cepModal');
    modal.classList.toggle('active');
}

// Confirm CEP
function confirmCep() {
    const cepInput = document.getElementById('cepInput');
    const cepText = document.getElementById('cepText');
    const cep = cepInput.value.trim();
    
    // Validar se o CEP tem o formato correto (8 dígitos)
    const cepNum = cep.replace(/\D/g, '');
    
    if (cep && cepNum.length === 8) {
        // Simular cálculo de região baseado no CEP
        let regiao = 'Região não identificada';
        
        if (cepNum.startsWith('01') || cepNum.startsWith('02') || cepNum.startsWith('03') || cepNum.startsWith('04') || cepNum.startsWith('05') || cepNum.startsWith('08')) {
            regiao = 'São Paulo - SP';
        } else if (cepNum.startsWith('20') || cepNum.startsWith('21') || cepNum.startsWith('22') || cepNum.startsWith('23') || cepNum.startsWith('24') || cepNum.startsWith('28')) {
            regiao = 'Rio de Janeiro - RJ';
        } else if (cepNum.startsWith('30') || cepNum.startsWith('31') || cepNum.startsWith('32') || cepNum.startsWith('33') || cepNum.startsWith('34') || cepNum.startsWith('35') || cepNum.startsWith('36') || cepNum.startsWith('37') || cepNum.startsWith('38') || cepNum.startsWith('39')) {
            regiao = 'Minas Gerais - MG';
        } else if (cepNum.startsWith('40') || cepNum.startsWith('41') || cepNum.startsWith('42') || cepNum.startsWith('43') || cepNum.startsWith('44') || cepNum.startsWith('45') || cepNum.startsWith('46') || cepNum.startsWith('47') || cepNum.startsWith('48')) {
            regiao = 'Bahia - BA';
        } else if (cepNum.startsWith('50') || cepNum.startsWith('51') || cepNum.startsWith('52') || cepNum.startsWith('53') || cepNum.startsWith('54') || cepNum.startsWith('55') || cepNum.startsWith('56')) {
            regiao = 'Pernambuco - PE';
        } else if (cepNum.startsWith('60') || cepNum.startsWith('61') || cepNum.startsWith('62') || cepNum.startsWith('63')) {
            regiao = 'Ceará - CE';
        } else if (cepNum.startsWith('70') || cepNum.startsWith('71') || cepNum.startsWith('72') || cepNum.startsWith('73') || cepNum.startsWith('76')) {
            regiao = 'Brasília - DF';
        } else if (cepNum.startsWith('80') || cepNum.startsWith('81') || cepNum.startsWith('82') || cepNum.startsWith('83') || cepNum.startsWith('84') || cepNum.startsWith('85') || cepNum.startsWith('86') || cepNum.startsWith('87')) {
            regiao = 'Paraná - PR';
        } else if (cepNum.startsWith('90') || cepNum.startsWith('91') || cepNum.startsWith('92') || cepNum.startsWith('93') || cepNum.startsWith('94') || cepNum.startsWith('95') || cepNum.startsWith('96')) {
            regiao = 'Rio Grande do Sul - RS';
        } else {
            // Para CEPs como 12950-660 (Atibaia)
            if (cepNum.startsWith('12')) {
                regiao = 'Atibaia - SP';
            }
        }
        
        // Atualizar o texto do CEP
        cepText.innerHTML = `Entregar em:<br><strong>${cep} - ${regiao}</strong>`;
        
        // Fechar modal
        toggleCepModal();
        
        // Limpar input
        cepInput.value = '';
    } else {
        alert('Por favor, digite um CEP válido com 8 dígitos.');
    }
}

// Fechar dropdown ao clicar fora
document.addEventListener('click', function(event) {
    const searchContainer = document.querySelector('.search-container');
    const dropdown = document.getElementById('searchDropdown');
    
    if (!searchContainer.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

// Formatação do CEP
function formatCep(input) {
    let value = input.value.replace(/\D/g, '');
    
    // Limita a 8 dígitos
    if (value.length > 8) {
        value = value.substring(0, 8);
    }
    
    // Adiciona hífen no 5º dígito
    if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5);
    }
    
    input.value = value;
}

// Função para abrir página de identificação
function abrirIdentificacao() {
    window.location.href = 'identificacao.html';
}

// Toggle Departamentos Dropdown
function toggleDepartamentos() {
    const dropdown = document.getElementById('departamentosDropdown');
    dropdown.classList.toggle('active');
}

// Fechar dropdown de departamentos ao clicar fora
document.addEventListener('click', function(event) {
    const departamentos = document.querySelector('.departamentos');
    const dropdown = document.getElementById('departamentosDropdown');
    const searchContainer = document.querySelector('.search-container');
    const searchDropdown = document.getElementById('searchDropdown');
    
    // Fechar dropdown de departamentos
    if (dropdown && !departamentos.contains(event.target)) {
        dropdown.classList.remove('active');
    }
    
    // Fechar dropdown de busca
    if (searchDropdown && !searchContainer.contains(event.target)) {
        searchDropdown.classList.remove('active');
    }
});

// Função para redirecionar para produto Galaxy A06
function irParaProdutoA06() {
    window.location.href = './produto.html';
    return false;
}

// Inicializar primeira página
document.addEventListener('DOMContentLoaded', function() {
    showPage(0);
    
    // Adicionar evento de formatação ao input do CEP
    const cepInput = document.getElementById('cepInput');
    if (cepInput) {
        cepInput.addEventListener('input', function() {
            formatCep(this);
        });
    }
    
    // Interceptar cliques em produtos Galaxy A06
    const produtosA06 = document.querySelectorAll('.produto-card');
    produtosA06.forEach(produto => {
        const titulo = produto.querySelector('h4');
        if (titulo && titulo.textContent.includes('Galaxy A06')) {
            produto.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                irParaProdutoA06();
            };
        }
    });
});