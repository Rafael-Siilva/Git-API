let botao = document.querySelector('#submit')
let body = document.querySelector('.pagInicial')

let controller = new Controller



botao.addEventListener('click', function(event){


    event.preventDefault()
    let nomeUsuario =document.querySelector('#input').value
   
    
    
    body.classList.remove('.pagInicial')
    body.classList.add('.repo')
    body.style = 'font-family: Montserrat, sans-serif; display: flex; flex-direction: column; width: 100% ; background: none;'
    body.innerHTML = `
    <header>
        <div id="logoDiv">
        <img id='logo' src="../img/github.svg" alt="">
        <h1>GitHub</h1>
        </div>
        <a href="index.html" id="sair">SAIR</a>
    </header>
    
    <main>
    
        <section id="info-pessoal">
            <img src="" id='foto_perfil'alt="">
            <h2 id="nome" ></h2>
            <h4 id="user_name"></h4>
    
        </section>
        
        <section id="repositorio">
        
            <div id="header-Repositorio">
                <img src=https://image.flaticon.com/icons/png/512/33/33277.png alt="">
                <h2>Repositórios</h2>
            </div>
            
            
                
        </section>
        
    </main>
    
    <footer>
        Copyrigth 2020 &copy; <a href="https://github.com/rfsilva397">Rafael Silva Souza</a>.Todos os direitos reservados
    </footer>
    
    `

    
    controller.LocalizaRepositorio(nomeUsuario)
    controller.ProcuraUser(nomeUsuario)

    
})


