function  obtenerListaUsuarios() {
    var listaUsuarios=JSON.parse(localStorage.getItem('lista'))

    if (listaUsuarios==null) 
    {
    listaUsuarios=[
        ['1','Alvaro','Mamani','alvaromamani@gmail.com','1alvaro23','2000-11-02','1'],
        ['2','Santos','Michma','Santosm@gmail.com','santos3','1987-10-12','2']
    ]    
    }
    return listaUsuarios;
}
function validarCredenciales(pCorreo,pConstraseña) {
    var listaUsuarios=obtenerListaUsuarios();
    var bAcceso=false;

    for (var i=0;i<listaUsuarios.length;i++) {
        if (pCorreo==listaUsuarios[i][3]&&pConstraseña==listaUsuarios[i][4] ) {
            bAcceso=true;
       sessionStorage.setItem('usuarioActivo',listaUsuarios[i][1]+' '+listaUsuarios[i][2])
       sessionStorage.setItem('rolUsuarioActivo',listaUsuarios[i][6]);
        }
        
    }

    return bAcceso;
}