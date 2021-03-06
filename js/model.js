class UserModel{

    constructor(){
        this._nome = '';
        this._username = '';
        this._image = '';
        this._repositorios = '';
    }
    
    LocalizaUsuario(usuario){

        
        let request = new XMLHttpRequest

        request.addEventListener('load', ()=>{
            

            if(request.status == 200){

                let dadosUsuario = JSON.parse(request.responseText)

                 this._AtualizaDados(dadosUsuario)
            }else{
                erro(request.status)
            }

        })


        request.open('GET', `https://api.github.com/users/${usuario}`, false)

        request.send()

    }

    LocalizaRepositorio(usuario){

        

        let request = new XMLHttpRequest

        request.addEventListener('load', ()=>{
        

            if(request.status == 200){

                let dadosRepositorio = JSON.parse(request.responseText)
               
                this._repositorios = dadosRepositorio
                console.log(this._repositorios)
                 
            }

        })


        request.open('GET', `https://api.github.com/users/${usuario}/repos`, false)

        request.send()
    }


    _AtualizaDados(dados){

        this._nome = dados.name
        this._username = dados.login
        this._image = dados.avatar_url
    }

    getNome(){
        return this._nome
    }

    getUsername(){
        return this._username
    }

    getImagem(){
        return this._image
    }




}

function erro(numErro){
    body.style = 'font-family: Montserrat, sans-serif; display: flex; flex-direction: column; width: 100% ;;'
    body.classList.add('box-erro-body')
    body.innerHTML = `
    <header>
        <div id="logoDiv">
            <img id='logo' src="../img/github.svg" alt="">
            <h1 class ="titulo">GitHub</h1>
        </div>
        <a href="index.html" id="sair">SAIR</a>
    </header>
    
    <main id='box-erro-main'>

        <div id="box-erro">

            <h1 > ERRO ${numErro}</h1>
            <p>Por favor, Insira o nome do usuário.</p>
            <a href="index.html" id="tentar">Tentar novamente</a>
            

        </div>


    </main>

    <footer>
        Copyrigth 2020 &copy; <a href="https://github.com/rfsilva397">Rafael Silva Souza</a>.Todos os direitos reservados
    </footer>

    <script src="../js/repositório.js"></script>`
}