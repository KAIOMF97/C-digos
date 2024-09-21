let listaAlunos = []

function inserir() {
    const ra = document.getElementById("ra").value;
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);

    let Alunos = new Aluno(ra, nome, nota1, nota2, nota3, nota4);
    listaAlunos.push(Alunos);
}

function listar() {
    let saida = document.getElementById("outputListaSaida");
    saida.innerHTML = "";
    for (let i = 0; i < listaAlunos.length; i++) {
        let f = listaAlunos[i];
        saida.innerHTML +=
            f.ra + " - " +
            f.nome + " - " +
            f.nota1b + " - " +
            f.nota2b + " - " +
            f.nota3b + " - " +
            f.nota4b +
            "<br>";

    }
}

function mediaTurma() {
    let soma1 = 0;
    let soma2 = 0;
    let soma3 = 0;
    let soma4 = 0;

    for (let i = 0; i < listaAlunos.length; i++) {
        aluno = listaAlunos[i];
        soma1 += aluno.nota1b
        soma2 += aluno.nota2b
        soma3 += aluno.nota3b
        soma4 += aluno.nota4b;
    }

    let media1 = soma1 / listaAlunos.length;
    let media2 = soma2 / listaAlunos.length;
    let media3 = soma3 / listaAlunos.length;
    let media4 = soma4 / listaAlunos.length;
    let mediaTotal = (media1 + media2 + media3 + media4) / 4;

    document.getElementById("outputListaSaida").innerHTML = "Média da Turma no 1º Bimestre: " + media1.toFixed(1) + "<br>" +
        "Média da Turma no 2º Bimestre: " + media2.toFixed(1) + "<br>" + "Média da Turma no 3º Bimestre: " + media3.toFixed(1) + "<br>" +
        "Média da Turma no 4º Bimestre: " + media4.toFixed(1) + "<br>" + "Média Final da Turma: " + mediaTotal.toFixed(1);
}

function maiorMedia() {
    let maiorMedia = 0;
    let alunosComMaiorMedia = [];

    for (let i = 0; i < listaAlunos.length; i++) {
        let aluno = listaAlunos[i];
        let media = (aluno.nota1b + aluno.nota2b + aluno.nota3b + aluno.nota4b) / 4;

        if (media > maiorMedia) {
            maiorMedia = media;
            alunosComMaiorMedia = [aluno.nome];
        }
        else if (media === maiorMedia) {
            alunosComMaiorMedia.push(aluno.nome)
        }
        document.getElementById("outputListaSaida").innerHTML = "Alunos com Maior Média: " + "<br>" + alunosComMaiorMedia.join(", ") + " - Média: " + maiorMedia.toFixed(1);
    }
}

function relatorioFinal() {
    let saida = document.getElementById("outputListaSaida");
    saida.innerHTML = "";
    for (let i = 0; i < listaAlunos.length; i++) {
        let f = listaAlunos[i];
        let mediaIF = (f.nota1b + f.nota2b + f.nota3b + f.nota4b) / 4;
        let situacao = "";
        if (mediaIF >= 6) {
            situacao = "APROVADO";
        } else {
            situacao = "REPROVADO";
        }
        saida.innerHTML +=
            f.ra + " - " +
            f.nome + " - " +
            f.nota1b + " - " +
            f.nota2b + " - " +
            f.nota3b + " - " +
            f.nota4b + " - " +
            situacao +
            "<br>";
    }
}

function procurarRA() {
    let inputRA = document.getElementById("ra").value;
    let raProcurado = "";

    for (let i = 0; i < listaAlunos.length; i++) {
        if (inputRA === listaAlunos[i].ra) {
            document.getElementById("ra").value = listaAlunos[i].ra;
            document.getElementById("nome").value = listaAlunos[i].nome;
            document.getElementById("nota1").value = listaAlunos[i].nota1b;
            document.getElementById("nota2").value = listaAlunos[i].nota2b;
            document.getElementById("nota3").value = listaAlunos[i].nota3b;
            document.getElementById("nota4").value = listaAlunos[i].nota4b;
            raProcurado = listaAlunos[i].ra;
            break;
        }
        else {
            document.getElementById("ra").value = "";
            document.getElementById("nome").value = "";
            document.getElementById("nota1").value = "";
            document.getElementById("nota2").value = "";
            document.getElementById("nota3").value = "";
            document.getElementById("nota4").value = "";
        }
    }
}

function procurarNome() {
    let inputNome = document.getElementById("nome").value;
    let nomeProcurado = "";

    for (let i = 0; i < listaAlunos.length; i++) {
        if (inputNome === listaAlunos[i].nome) {
            document.getElementById("ra").value = listaAlunos[i].ra;
            document.getElementById("nome").value = listaAlunos[i].nome;
            document.getElementById("nota1").value = listaAlunos[i].nota1b;
            document.getElementById("nota2").value = listaAlunos[i].nota2b;
            document.getElementById("nota3").value = listaAlunos[i].nota3b;
            document.getElementById("nota4").value = listaAlunos[i].nota4b;
            nomeProcurado = listaAlunos[i].nome;
            break;
        }
        else {
            document.getElementById("ra").value = "";
            document.getElementById("nome").value = "";
            document.getElementById("nota1").value = "";
            document.getElementById("nota2").value = "";
            document.getElementById("nota3").value = "";
            document.getElementById("nota4").value = "";
        }
    }
}

function procurarLetra() {
    let letra = document.getElementById("letra").value.toLowerCase();
    let saida = document.getElementById("outputListaSaida");
    saida.innerHTML = "";

    for (let i = 0; i < listaAlunos.length; i++) {
        if (letra === listaAlunos[i].nome.toLowerCase()[0]) {
            saida.innerHTML +=
                listaAlunos[i].ra + " - " +
                listaAlunos[i].nome + " - " +
                listaAlunos[i].nota1b + " - " +
                listaAlunos[i].nota2b + " - " +
                listaAlunos[i].nota3b + " - " +
                listaAlunos[i].nota4b +
                "<br>";
        }
    }
}