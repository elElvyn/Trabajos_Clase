<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estrategias</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/funcion.js"></script>
</head>
<body>

    <section class="formulario">
        <form action="php/promedio.php">
          <fieldset>
            <!-- contenedor de los campos -->
            <legend>Promedios de Estudiantes</legend>
            <div class="contenedor-campos">
              <label for="">A</label>
            <div class="campo">
              <label for="">Ingrese el nombre del estudiante:</label>
              <input class="input-text" type="num1" placeholder="Escriba su nombre" />
            </div>
            <div class="campo">
              <label for="">Ingrese la primera nota:</label>
              <input class="input-text" type="num2" placeholder="1 Nota" />
            </div>
            <div class="campo">
              <label for="">Ingrese la segunda nota:</label>
              <input class="input-text" type="num3" placeholder="2 Nota" />
            </div>
            <div class="campo">
              <label for="">Ingrese la tercera nota:</label>
              <input class="input-text" type="num3" placeholder="3 Nota" />
            </div>
            <div class="campo">
              <label for="">Ingrese la cuarta:</label>
              <input class="input-text" type="num3" placeholder="2 Nota" />
            </div>
            <div class="alinear-derecha flex">
              <input class="boton w-sm-100" type="submit" value="Enviar" />
            </div>
            
          </fieldset>
          
        </form>

      </section>

</body>
</html>