module.exports = {
	vacio : function(usuario,next){
		try{
			console.log("usuario",usuario);
			if(!usuario.nombre || !usuario.usuario || !usuario.edad){
				next("Los campos con * son obligatorios");
			}else if(!isNaN(usuario.edad) || !isNaN(usuario.peso) || !isNaN(usuario.estatura)){
				next("El campo edad y/o peso y/o estura tienen un valor no válido");
			}else{
				next("OK");
			}

		}catch(err){
			console.log(err);
			next(err);
		}
	}
}