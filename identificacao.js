// Função para voltar à página anterior
function voltarPagina() {
    window.history.back();
}

// Função para validar CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
    
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;
    
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;
    
    return true;
}

// Função para validar CNPJ
function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    
    if (cnpj.length !== 14) return false;
    
    if (/^(\d)\1{13}$/.test(cnpj)) return false;
    
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }
    
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(0))) return false;
    
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }
    
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(1))) return false;
    
    return true;
}

// Função para formatar CPF/CNPJ
function formatarCpfCnpj(valor) {
    const numeros = valor.replace(/\D/g, '');
    
    if (numeros.length <= 11) {
        // Formato CPF: 000.000.000-00
        return numeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
        // Formato CNPJ: 00.000.000/0000-00
        return numeros.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
}

// Função para validar entrada
function validarEntrada() {
    const input = document.getElementById('cpfCnpj');
    const errorMessage = document.getElementById('errorMessage');
    const continuarBtn = document.getElementById('continuarBtn');
    const valor = input.value.replace(/\D/g, '');
    
    let isValid = false;
    
    if (valor.length === 11) {
        isValid = validarCPF(valor);
    } else if (valor.length === 14) {
        isValid = validarCNPJ(valor);
    }
    
    if (isValid) {
        input.classList.remove('error');
        errorMessage.style.display = 'none';
        continuarBtn.disabled = false;
        continuarBtn.classList.add('active');
    } else if (valor.length >= 11) {
        input.classList.add('error');
        errorMessage.style.display = 'block';
        continuarBtn.disabled = true;
        continuarBtn.classList.remove('active');
    } else {
        input.classList.remove('error');
        errorMessage.style.display = 'none';
        continuarBtn.disabled = true;
        continuarBtn.classList.remove('active');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('cpfCnpj');
    const continuarBtn = document.getElementById('continuarBtn');
    
    // Formatação e validação em tempo real
    input.addEventListener('input', function() {
        let valor = this.value.replace(/\D/g, '');
        
        // Limitar a 14 dígitos (CNPJ)
        if (valor.length > 14) {
            valor = valor.substring(0, 14);
        }
        
        this.value = formatarCpfCnpj(valor);
        validarEntrada();
    });
    
    // Ação do botão continuar
    continuarBtn.addEventListener('click', function() {
        if (!this.disabled) {
            // Aqui você pode implementar a lógica para prosseguir
            alert('Redirecionando para próxima etapa...');
            // window.location.href = 'proxima-pagina.html';
        }
    });
    
    // Botão do Google
    document.querySelector('.google-btn').addEventListener('click', function() {
        alert('Integração com Google em desenvolvimento...');
    });
});