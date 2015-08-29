function obtenerPagina(nombre,destino){
    $.ajax("paginas/"+nombre+".html",{
       success: function(response){
            destino.html(response);
        },
        dataType: "html"
    });
}

$(document).ready(function(){
    var destinoNavegacion = $("section");
    //Carga inicial del index
    obtenerPagina("inicio", destinoNavegacion);
    
    //Evento click navegaci�n
    $("nav a").on("click",function(evento){
        var texto = $(this).text().toLowerCase();
        obtenerPagina(texto, destinoNavegacion);
        evento.preventDefault();
    });
    
    $("button").on("click",function(){
        obtenerPagina("feo",$("#feo"));
    });
});