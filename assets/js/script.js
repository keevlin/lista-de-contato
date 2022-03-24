var typed = new Typed(".auto-typed", {
    strings:["amigos","clientes","familia"],
    typedSpeed:200,
    backSpeed:200,
    loop:true
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
  });
  

  ScrollReveal().reveal('.container', {delay:200});
  ScrollReveal().reveal('#campoNome', { delay: 400 });
  ScrollReveal().reveal('#campoEmail', { delay: 600 });
  ScrollReveal().reveal('#campoTelefone', { delay: 700 });
  ScrollReveal().reveal('.btnAdd', { delay: 800 });
  ScrollReveal().reveal('')

const listaContatoLocal =[]

let id = 0;
const listaContatosContainer = document.querySelector('.secaoListaContatos__lista')

const campoNome = document.querySelector('#campoNome');
const campoEmail = document.querySelector('#campoEmail');
const campoTelefone = document.querySelector('#campoTelefone');

const  botaoAdicionar = document.querySelector('#botaoAdicionar')


function adicionarNovoContato(){
    const valorNome = campoNome.value;
    const valorEmail = campoEmail.value;
    const valorTelefone = campoTelefone.value;

    const novoContato = {
        id:id,
        nome: valorNome,
        email: valorEmail,
        telefone: valorTelefone
    };
    id++
    listaContatoLocal.push(novoContato)
    renderizarLayout();
}

botaoAdicionar.addEventListener('click',adicionarNovoContato);

function removerContato(event){
    const botaoClicado = event.target;
    const contatoClicado = botaoClicado.parentElement;
    const idContatoClicado = contatoClicado.dataset.id;

    const contatoRemovido = listaContatoLocal.find((contato)=>contato.id == idContatoClicado);

    const posicaoContatoRemovido = listaContatoLocal.indexOf(contatoRemovido);
    listaContatoLocal.splice(posicaoContatoRemovido,1);

    renderizarLayout()
}


function renderizarLayout(){
    listaContatosContainer.innerHTML = '';
    if( listaContatoLocal.length !== 0){
    for (let i = 0; i < listaContatoLocal.length; i++){
        criarLayout(listaContatoLocal[i]);
    }
   }else{
       const listaVazia = `
       <li>
         <p>Não há contato na sua lista</p>
        </li>`;
    listaContatosContainer.innerHTML = listaVazia;
    }
}


renderizarLayout();


function criarLayout(contato){
   
    const li = document.createElement('li');
    const button = document.createElement ('button');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const span = document.createElement ('span')
    

    button.id = "#removerContato";
    button.addEventListener('click', removerContato);

    li.dataset.id = contato.id;
    h2.innerText = contato.nome;
    p.innerText = contato.email;
    span.innerText = contato.telefone;

    li.appendChild(button);
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(span);

    listaContatosContainer.appendChild(li);
    
}

