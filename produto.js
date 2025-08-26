let currentPage = 1;

function toggleProdutos() {
    const page1 = document.getElementById('produtos-page-1');
    const page2 = document.getElementById('produtos-page-2');
    const arrow = document.querySelector('.nav-arrow');
    
    if (currentPage === 1) {
        page1.style.display = 'none';
        page2.style.display = 'grid';
        arrow.innerHTML = '◀';
        currentPage = 2;
    } else {
        page1.style.display = 'grid';
        page2.style.display = 'none';
        arrow.innerHTML = '▶';
        currentPage = 1;
    }
}

function toggleDescricao() {
    const content = document.getElementById('descricao-content');
    const arrow = document.getElementById('expand-arrow');
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        arrow.innerHTML = '⌃';
    } else {
        content.style.display = 'none';
        arrow.innerHTML = '⌄';
    }
}

function toggleSecao(secaoId) {
    const content = document.getElementById(secaoId + '-content');
    const btn = document.getElementById(secaoId + '-btn');
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        btn.innerHTML = '-';
    } else {
        content.style.display = 'none';
        btn.innerHTML = '+';
    }
}

function openModal() {
    document.getElementById('modal-caracteristicas').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-caracteristicas').style.display = 'none';
}

function showTab(tabId) {
    // Remove active class from all tabs and contents
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    event.target.classList.add('active');
    document.getElementById('tab-' + tabId).classList.add('active');
}

function openEspecificacoesModal() {
    document.getElementById('modal-especificacoes').style.display = 'flex';
}

function closeEspecificacoesModal() {
    document.getElementById('modal-especificacoes').style.display = 'none';
}

function openDimensoesModal() {
    document.getElementById('modal-dimensoes').style.display = 'flex';
}

function closeDimensoesModal() {
    document.getElementById('modal-dimensoes').style.display = 'none';
}

function openContatoModal() {
    document.getElementById('modal-contato').style.display = 'flex';
}

function closeContatoModal() {
    document.getElementById('modal-contato').style.display = 'none';
}

// Zoom da imagem do produto
const imageContainer = document.getElementById('image-container');
const zoomOverlay = document.getElementById('zoom-overlay');

if (imageContainer && zoomOverlay) {
    imageContainer.addEventListener('mousemove', function(e) {
        const rect = imageContainer.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        zoomOverlay.style.backgroundPosition = `${x}% ${y}%`;
    });
}