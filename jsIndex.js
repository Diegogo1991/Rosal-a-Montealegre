//IMPORTE DE FUNCIONES

const typed = new Typed('.typed', {
   strings: ['ROSALÍA MONTEALEGRE'],
   typeSpeed: 75,
   cursorChar: '|',
   loop: true
});

var indice = 0;
// Función para cambiar la imagen cada 5 segundos
function cambiarImagen() {
  // Obtén el elemento con el ID "perfil"
  const perfil = document.getElementById('imagen-perfil');
  indice++;
  if(indice > 3){
    indice = 0;
  }
  // Cambia la imagen usando el índice actual
  perfil.src = `./img/${indice}.jpg`;
}

// Llama a la función cada 5 segundos
setInterval(cambiarImagen, 5000);

//BOTONES CAPTURADOS

const investigaciones = document.getElementById('investigaciones');
const publicaciones = document.getElementById('publicaciones');
const importancia = document.getElementById('importancia');
const referencias = document.getElementById('referencias');
const historia = document.getElementById('historia');

//TEXTOS INFORMATIVOS
const investigacionesTexto = 'APORTES TEORICOS E INVESTIGATIVOS:<br><br>Siendo coherentes con el reconocimiento de la diversidad de formas de aportar a la psicología, en cuanto a sus aportes no solo vamos a colocar investigaciones sino acciones que han permitido el avance, reconocimiento e influencia de la psicología.<br><br>Promovió el desarrollo del evento “La Psicología ¿Ciencia Social?”, financiado por el ICFES y llevado a cabo en la Pontificia Universidad Javeriana de Bogotá. En esta misma línea de trabajo, impulsó un simposio sobre epistemología de la Psicología que se desarrolló en la Universidad Nacional de Colombia en 1982.<br><br>En su vida ha tenido un contacto muy estrecho con diferentes manifesta¬ciones del arte, especialmente la pintura, a través de la influencia de su hermano, el artista Samuel Montealegre. Es una de las razones por las cuales se interesó de manera especial por comprender el arte como instrumento cultural y la percepción estética, que refleja en el capítulo: “Psicología del arte: percepción estética, expresión literaria e imaginación creadora”, publicado en el libro: “Psicología cultural: Arte, Educación y Trabajo”, editado por la maestra Rosalía.';

const publicacionesTexto = 'PUBLICACIONES MAS RELEVANTES: <br><br>1.	1989 El método genético- experimental en la investigación sobre lenguaje, y pensamiento. En: Reflexiones Revista de la Facultad de Educación. Volumen 1 No. 1 Junio de 1989.<br><br>2.	1989 Lo psíquico o mental en el hombre. Un enfoque social-histórico. En: Revista Avances de enfermería, 7, 71-79.<br><br>3.	1992 Desarrollo de la acción intelectual y formación de la actividad en estudiantes. universitarios. Revista latinoamericana de psicología, 24(3), 343-355.<br><br>4.	1994 El lenguaje egocéntrico en la psicología contemporánea: polémicas e inves¬tigaciones. Revista latinoamericana de psicología, 26(1), 111-128.<br><br>5.	2004 La comprensión del texto: sentido y significado. En: Revista Latinoamericana de Psicología, vol. 36, núm. 2, 2004.<br><br>6.	2005 Hedegaard, M. y Chaiklin, S. (2005). Radical-local teaching and learning. A cultural-historical approach. Aarhus, Dinamarca: Aarhus University Press, pp. 227. Montealegre, R., & Forero, L. A. (2006). Desarrollo de la lectoescritura: adquisición y dominio. Acta colombiana de psicología, 9(1), 25-40.<br><br>7.	2007 Desarrollo de la lectoescritura: adquisición y dominio. En: Acta colombiana de psicología, 9(1), 25-40.';

const importanciaTexto = 'Precursora de la psicología cultural en Colombia<br><br>A lo largo de su vida, la profesora Rosalía ha recibido numerosos reco¬nocimientos por su trayectoria docente, investigativa y profesional. Los premios a continuación son muestra de la entrega a la construcción de la disciplina en el país que incluyen reconocimientos a nivel local y nacional: <br><br>1.	Contribución al Ejercicio de la Profesión y al Desarrollo de la Psicología en Colombia. Otorgado por la Asociación de Psicólogos Javerianos (Bogotá, noviembre 21 de 1996, Placa en Plata).<br><br>2.	Vida y Obra por sus contribuciones al desarrollo de psicolo¬gía como ciencia y profesión en Colombia. Otorgado por la Sociedad Colombiana de Psicología (SCP; Ibagué, abril 28 de 2010, Placa en Plata). <br><br>3.	Aporte y Vida a la Disciplina Psicológica. Otorgado por la Universidad del Rosario, Escuela de Medicina y Ciencias de la Salud, Consejo Estudiantil del Programa de Psicología (Bogotá, octubre 28 de 2011, Pergamino).';

const referenciasTexto = '<a href="https://editorial.ascofapsi.org.co/books/rosalia-montealegre-precursora-de-la-psicologia-cultural-en-colombia/ " target="_blank">https://editorial.ascofapsi.org.co/books/rosalia-montealegre-precursora-de-la-psicologia-cultural-en-colombia/</a>';

const historiaFamiliar = 'Rosalía Montealegre se interesó por la psicología desde muy temprana edad, cuando leía a escondidas los textos de psicología de su hermana mayor, Gladys Montealegre, quien también estudió psicología en la Universidad Nacional de Colombia. Este contacto inicial con la psicología despertó su curiosidad y la motivó a ingresar a estudiar en la Pontificia Universidad Javeriana en Bogotá, alrededor de los 17 años.';

//FUNCION CAMBIAR TEXTO

function cambiarTexto (texto){
  let pizarra = document.getElementById('aportes');
  pizarra.innerHTML = texto;
}


//AÑADIENDO LAS FUNCIONES
investigaciones.addEventListener('click', function() {
  cambiarTexto(investigacionesTexto)});

publicaciones.addEventListener('click', function() {
    cambiarTexto(publicacionesTexto)});

importancia.addEventListener('click', function() {
      cambiarTexto(importanciaTexto)});

referencias.addEventListener('click', function() {
  cambiarTexto(referenciasTexto)});

historia.addEventListener('click', function() {
  cambiarTexto(historiaFamiliar)});
