class Controller{
    
    ProcuraUser(usuario){
        
        let model = new UserModel
        model.LocalizaUsuario(usuario)

        let view = new UserView
        view.MostraUsuario(model)

        
    }

    LocalizaRepositorio(usuario){
        let model = new UserModel
        model.LocalizaRepositorio(usuario)

        let view = new UserView
        view.MostraRepositorio(model)
    }
}