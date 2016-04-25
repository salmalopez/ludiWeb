module.exports = {
	vacio : function(usuario,next){
		try{
			if(!usuario.nombre || !usuario.usuario || !usuario.edad){
				next("Los campos con * son obligatorios");
			}else if(usuario.edad && isNaN(usuario.edad) ){
				next("El campo edad tiene un valor no válido");
			}else if(usuario.estatura && isNaN(usuario.estatura)){
				next("El campo estatura tiene un valor no válido");		
			}else if(usuario.peso && isNaN(usuario.peso)){
				console.log("entro aqui");
				next("El campo peso tiene un valor no válido");
			}else{
				next("OK");
			}

		}catch(err){
			console.log(err);
			next(err);
		}
	}
}