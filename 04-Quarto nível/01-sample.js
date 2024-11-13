async function buscarPlaneta() {
    try {
        const resposta = await fetch("https://swapi.dev/api/planets/1/");
        
        if (!resposta.ok) {
            throw new Error("Erro ao buscar o planeta.");
        }
        
        const planeta = await resposta.json();
        console.log(planeta.name);

        exibirNomePlaneta(planeta.name);
    } catch (erro) {
        console.error("Erro: ", erro.message);
    }
}

const exibirNomePlaneta = (nome) => {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = `<div class="alert alert-info" role="alert">O nome do planeta é: ${nome}</div>`;
};

buscarPlaneta();
;