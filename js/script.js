function obtenerPagina(nombre){
    $.ajax("paginas/"+nombre+".html",{
       success: function(response){
            $("section").html(response);
        },
        dataType: "html"
    });
}

$(document).ready(function(){
    //Carga inicial del index
    obtenerPagina("inicio");
    
    //Evento click navegación
    $("nav a").on("click",function(evento){
        var texto = $(this).text().toLowerCase();
        obtenerPagina(texto);
        evento.preventDefault();
    });
});