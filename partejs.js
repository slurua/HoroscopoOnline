  var boton = document.getElementById("boton");
  boton.addEventListener("click", buscarporClick );
  var signo = document.getElementById("numero");
  var boton_no = document.getElementById("boton_no");
  boton_no.addEventListener("click", noporClick);
  var boton_no = document.getElementById("boton_no");
  boton_no.addEventListener("mouseover", noporencima);
  var boton_si = document.getElementById("boton_si");
  boton_si.addEventListener("click", siPorClick );

  function buscarporClick()
  {
    if (signo.value == 10)
    {
    alert(" Como todo Capricornio resaltas por la capacidad de supervivencia, tu perseverancia y determinación que hacen que puedas llegar a la cima. Recién cuando cumples tus objetivos puedes relajarte y descomprimirte.  Te destacas por ser buena persona, aunque cuando te hacen enfadar puedes cambiar un poco");
  }
  else if (signo.value == 11)
  {
    alert(" estas muy conectado con la sabiduría y la conciencia universal por ser de acuario. tu sabiduría se orienta hacia los ideales humanos, la innovación, la búsqueda de un mundo mejor. Eres una persona que persigue el progreso y la libertad. A veces te gusta pasear pero tambien te gusta disfrutar de tu hogar");
  }
  else if (signo.value == 12) {
    alert("Eres una gran persona, de las mejores del mundo, siempre das lo mejor de ti y eres bueno en todo, siempre piensas en los demas y destacas por tu paciencia, inteligencia y bondad, ");
  }
  else if (signo.value == 1)
  {
    alert("Siendo Aries no es raro que tengas virtudes como pionero, valiente y muy capaz. La personalidad de Aries es tan grande que puede generarle conflictos, por su forma de actuar arrebatada y a veces agresiva. Tu energia de Aries arrasa con todo a su paso.");
  }
  else if (signo.value == 2)
  {
    alert(" como taurino o taurina te caracterizas porque siempre protege y lucha por lo que es suyo, ya sean bienes materiales o vínculos afectivos. personalmente Llegas a ser posesivo y testarudo al respecto. Persigue el bienestar material y la estabilidad emocional");
  }
  else if (signo.value == 3)
  {
    alert(" tu mente está constantemente volando en reflexiones y búsqueda de conocimiento, por eso cambias constantemente y puedes desconcertar a quienes te rodean.");
  }
  else if (signo.value == 4)
  {
    alert(" A veces te gusta pasear pero tambien te gusta disfrutar de tu hogar, siendo cancer no es raro que seas una persona dulce y transparente, te gusta la naturaleza y odias que te molesten");
  }
  else if (signo.value == 5)
  {
    alert(" Eres dominante y llamas la atencion, sueles ser posesivo y exagerado, por eso el León llama tanto la mantiene su condición de rey del zodíaco. Necesita dominar y ser celebrado por los demás. Su orgullo es lo que le permite triunfar y no apagarse nunca");
  }
  else if (signo.value == 6)
  {
    alert(" Eres realista y persigues constantemente el orden y la perfección, sin embargo, no te cierras y tienes en cuenta las posibilidades de cambio y movimiento. A través del análisis y la reflexión, Virgo se transplanta a otra Tierra si es necesario.");
  }
  else if (signo.value == 7)
  {
    alert("  Buscas constantemente la belleza, la armonía y la justicia, tanto en tu interior como en el mundo externo. Necesitas socializar e identificarte con los demás");
  }
  else if (signo.value == 8)
  {
    alert(" Siempre estas buscando nuevas experiencias y respuestas. Debido a tu sensibilidad, puedes tener episodios depresivos o altibajos emocionales.");
  }
  else if (signo.value == 9)
  {
    alert(" Al ser Sagitario tienes un fuego estable que se activa solo en los momentos necesarios, eres optimista, alegre y enchavador, un dia todo te puede salir bien y al otro rompes un paquete de pasta, eres alegre y amable y por tu nombre y la ciudad en que naciste eres muy bueno haciendo el SI amasado, eres inteligente y muy activo, cuando te propones algo no paras hasta logralo.");
  }
  }

  function siPorClick()
  {
    alert("Que bien!")
  }
  function noporencima()
  {
    alert("Recuerda que el Horoscopo inclina pero no obliga! ");
  }
  function noporClick()
  {
    alert(" El Horoscopo inclina pero no obliga!!. Te lo dije o no te lo dije ah?? Recontratomatela gil!!!");
  }
