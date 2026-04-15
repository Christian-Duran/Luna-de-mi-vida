const poemas = [
    {
        fecha: "11 Agosto 2025",
        titulo: "Eres mi atardecer favorito",
        imagen: "imagenes/atardecer.jpg",
        contenido: "Querida Kenya cuando pienso en ti, me acuerdo de los hermosos atardeceres de la Laguna Nainari enamorarme de ti ha sido lo más fácil que hecho en mi vida, no me importa nada más que tu, cada día de mi vida estoy consiente de eso te ame el día que nos presentaron, te amo hoy y te amaré el resto de mi vida."
    },
    {
        fecha: "13 Noviembre 2025",
        titulo: "Simplemente Tú",
        imagen: "imagenes/flores.jpeg",
        contenido: "Algo dentro de mí recórdo cómo se siente estar vivo. No fue magia, fue conexión, no fue destino, fue presencia. Me enamoré de la calma que se siente cuando ya no hay miedo, de la paz que llega cuando dejas de buscar y simplemente te dejas encontrar. Me enamoré sin planearlo, sin aviso, sin prisa, y a veces lo más bonito no se planea se siente. No todos los amores llegan gritando algunos llegan en silencio y llegan para quedarse."
    },
    {
        fecha: "7 Febrero 2026",
        titulo: "Donde todo termina en ti",
        imagen: "imagenes/luna2.jpg",
        contenido: "Podría decirtelo de mil formas, pero ninguna sería exacta. No es que piense en ti, es que todo me lleva a ti: un café, un ocaso, la musica. No es que me gustes, es que me fascinas, me encana quererte. Y aunque te lo menciono siempre, cada vez que te pienso entiendo un poco más, lo que significa querer permanecer a unos ojos, por el resto del tiempo. Te amo mi luna."
    },
    {
        fecha: "14 Febrero 2026",
        titulo: "Qué bonito se volvió mi mundo desde que llegaste",
        imagen: "imagenes/lirio1.png",
        contenido: "A veces me detengo a pensar en cómo sería mi vida si no te hubiera conocido, y la verdad... no puedo imaginarlo. Porque desde que llegaste, todo cambió. No hablo de grandes cosas, sino de detalles pequeños que hacen la diferencia: tu voz en mi cabeza cuando necesito calma, tu forma de mirar el mundo, o esa paz que me da simplemente saber que existes. No sé si algún día pueda explicarte lo mucho que significas para mí, pero si sé que cada dia quiero demostrarlo, de una forma u otra, con palabras o silencios, con presencia o distancia. Gracias por ser tú, con todo lo que eres, incluso con lo que no sabes que eres para mí."
    },
    {
        fecha: "15 Febrero 2026",
        titulo: "Como querer tocar una estrella",
        imagen: "imagenes/estrellafugaz.gif", 
        contenido: "Sé que te amo porque, aunque no te vea, te siento. Porque estás en mi corazón de forma tranquila y constante, como algo que no se va y que siempre me acompaña. Me preguntaste el porqué quiero estar contigo, y solo puedo decirte: Kenya... sé que no soy digno de ti, pero no puedo evitar amarte. Es como querer tocar una estrella: sabes que nunca la alcanzarás, pero simplemente tienes que seguir intentándolo. Estos dos últimos años han sido maravillosos para mí; es lo más cerca que estaré de estar contigo. Por eso quiero quedarme contigo, sin condiciones, solo con lo que nace de mi corazón."
    },
    {
        fecha: "17 Febrero 2026",
        titulo: "Te amé sin tocarte",
        imagen: "imagenes/osopolar.png",
        contenido: "Nunca te miré con lujuria corazón, de tan enamorado que estoy de ti, porque mientras otros te desean con la piel, yo te deseo con el alma. Yo no sueño con tenerte en mis brazos, sueño con tenerte en mi vida. Y sé que eso ya no se lleva, que en esta época amar con pureza parece una tontería, pero yo de verdad te miro con respeto, con ternura, con esa forma de amor que ya casi nadie entiende. Mientras tú pensabas que yo quería algo de ti, yo solo quería que te quedaras. Y lo más triste es que te fuiste sin darte cuenta de que alguien alguna vez te amó sin tocarte."
    },
    {
        fecha: "18 Febrero 2026",
        titulo: "La coincidencia que cambió mi vida",
        imagen: "imagenes/inicio.jpg",
        contenido: "Qué increíble pensar que hubo un tiempo en el que nuestras vidas iban por caminos distintos y yo no sabía nada de tu existencia, que reías, soñabas y vivías sin que mi nombre formara parte de tu historia; y de repente, por pura casualidad, un día decidimos hablar sin imaginar que en esas primeras palabras estaba comenzando algo que cambiaría por completo la forma en que iba a ver mis días, porque desde esa conversación sentí una conexión difícil de explicar y jamás habría podido anticipar el impacto tan profundo que ibas a tener en mi vida. Hoy solo puedo agradecer a esa coincidencia perfecta que hizo que nuestros caminos se cruzaran y que tú y yo lográramos coincidir.❤️"
    },
    {
        fecha: "18 Febrero 2026",
        titulo: "Quisiera ser él",
        imagen: "imagenes/el.png",
        contenido: "Quisiera ser él, el reflejo que en tus ojos enciende mares y amaneceres, la sombra que buscas cuando la noche se vuelve fría. Quisiera ser él para que tu mirada me recorra con la misma hambre con la que devoras su presencia para que tu voz tiemble cuando pronuncies mi nombre, como tiembla cuando dices el suyo. Quisiera ser él para que mi piel sea tu refugio y mis manos tu condena dulce. Para que la eternidad que guardas solo la compartas conmigo. Pero no lo soy. Y aún así me quedo. Porque incluso amarte desde lejos es mejor que no amarte en absoluto..."
    },
    {
        fecha: "19 Febrero 2026",
        titulo: "Te extraño, Corazón.",
        imagen: "imagenes/tu.png",
        contenido: "Corazón, te extraño, muero por quitarme la anguistia... de no tenerte cerca, te busco en un día largo y una noche eterna. Ajenos, ¿qué puedo hacer? Trato, pienso, observo cómo llegar a ti. Te extraño en la mente más tuya que mía, corazón."
    },
    {
        fecha: "19 Febrero 2026",
        titulo: "Moriré de nostalgia",
        imagen: "imagenes/solo.png",
        contenido: "Hoy me dio por extrañarte, por echar de menos tu dulce presencia, aunque no es cosa nueva en mí el hacerlo; extrañarte es lo único que hago a veces, pensarte y extrañarte. No sé por qué, no sé por qué tuviste que irte tan pronto. Sueño con que me hablas y me dices: volveré, juro que volveré, pero despierto y veo mi casa vacía. Te extraño y siempre te extrañaré, y al extrañarte siento que moriré, moriré de nostalgia al vivir de nuestros recuerdos juntos, ya que es lo único por lo que sigo aquí, por lo que sigo vivo. Pero algún día moriré, así como muere la noche cuando nace un nuevo día, así como mueren las estrellas consumidas en su propio fuego, así como mueren las hojas al caer el otoño. Solo dime que volverás, por favor, hazlo."
    },
    {
        fecha: "21 Febrero 2026",
        titulo: "Entre lo que sabes y lo que ignoras",
        imagen: "imagenes/monito.png",
        contenido: "Sabes que te quiero, pero no imaginas cuánto, sabes que te pienso, pero ignoras que te sueño, sabes que me gustas, pero no entiendes la intensidad de mi deseo, sabes que me importas, pero no concibes que eres mi todo, sabes que eres especial, pero no comprendes cuánto te admiro, sabes que te quiero, pero no sospechas que mi corazón te pertenece, al igual que este poema."
    },
    {
        fecha: "22 Febrero 2026",
        titulo: "Eres digna de amor",
        imagen: "imagenes/ella.png",
        contenido: "Y si esta vez no huyes. Y si solo por hoy respiras profundo y te preguntas qué significa confiar, y si confiar también significa quedarte. Eres digan de darte una oportunidad en el amor. Tal vez no hay nada malo con todas las personas que has intentado amar; tal vez encontrar sus defectos ha sido tu forma de protegerte. Sé que has pasado gran parte de tu vida creyendo que es más fácil estar sola, que al creer estar sola fue lo que te mantuvo a salvo. No es tu culpa que te hayan enseñado que la vulnerabilidad equivale a dolor. Esta es tu carta, tu permiso para honrar tu deseo de conexión, para tratarte con compasión por tu hiperindependencia, para empezar a mirar todo lo que amas del amor en lugar de enfocarte únicamente en todo lo que te asusta. Te ama, Iván... ❤️"
    },
    {
        fecha: "23 Febrero 2026",
        titulo: "Amor del que se queda",
        imagen: "imagenes/manos.png",
        contenido: "¿Cuál es el sentido de salir con alguien si no es buscar a la persona con la que quieres quedarte? Hay especies que eligen una sola vez, que se quedan, que hacen del compromiso una forma de amor. Y eso... eso es algo profundamente hermoso. Es casi un estado de sueño decir: te elijo y me comprometo por el resto de mi vida. Comprometerse da miedo, sí. Pero también es una de las cosas más bellas que existen. Es decir: voy a crecer contigo, voy a aprender contigo, voy a caminar esta vida a tu lado. No porque no pueda estar solo, sino porque contigo no quiero estar sin ti. Y eso... eso es amor del que se queda."
    },
    {
        fecha: "24 Febrero 2026",
        titulo: "Palabras que no se lleva el viento",
        imagen: "imagenes/teamo.jpg",
        contenido: "Cuando digo que te amo, lo digo en serio, porque mis \"te amo\" son sinceros. Sé lo que significan, la magia que representan. El amor lo entrego a raudales, pero mis \"te amo\" son contados, porque comprendo el peso de sus palabras, la valentía que requiere pronunciarlas y el compromiso necesario para sostenerlas. Si digo que te amo, créeme. Soy de la idea de que el viento puede llevarse lo que sea, excepto esas hermosas palabras."
    },
    {
        fecha: "25 Febrero 2026",
        titulo: "Te abrazaré tan fuerte",
        imagen: "imagenes/abrazo.png",
        contenido: "Un día te abrazaré tan fuerte que todas tus partes rotas volverán a pegarse en su lugar. Te abrazaré tan fuerte que entenderás por qué tuviste que pasar por el dolor, las dudas, los miedos, las rupturas y las traiciones. Te abrazaré tan fuerte que aunque tengas miedo de que te lastimen, no querrás soltarte. Te abrazaré tan fuerte que tu mente y cuerpo sabrán quedarse. No querrás huir, querrás quedarte. Te abrazaré tan fuerte que el miedo se convierta en paz y el tiempo en esperanza. Te abrazaré tan fuerte que también volverás a abrazarte a ti."
    },
    {
        fecha: "26 Febrero 2026",
        titulo: "Galaxias en tus ojos",
        imagen: "imagenes/luna.jpg",
        contenido: "Si intentara decir todo lo que me gusta de ti, las palabras no bastarían. Tu sonrisa guarda la luz del alba. Tu pelo cambia como un río libre y en tus ojos habitan galaxias donde perderse es un regalo. Tu voz no es solo sonido, es calma, refugio, hogar. Tu sonrisa aquieta tormentas y tu presencia transforma lo cotidiano en algo valioso. Me asombra tu dualidad: suave y firme, calma y tempestad. Cada día eres un descubrimiento. No me gusta una parte de ti, me gustas entera, con tu luz, tu misterio y todo lo que despiertas en mí."
    },
    {
        fecha: "27 Febrero 2026",
        titulo: "A la distancia",
        imagen: "imagenes/saludo.png",
        contenido: "A la distancia titubeo por ti, pensando en el sabor de tus besos y el calor de tu abrazo. Me pierdo en tu presencia cautivadora, en tu cabello castaño que confundiría con las corrientes del mismo viento, ese que te estremece el cuerpo. Me pusiste a temblar en varios versos que te he escrito. Me hiciste pensar en ti sin conocerte, sin tocarte, sin besarte. A la distancia entre tu cuerpo y el mío supuse que te amaba, que antes de saber alguna sintonía de tu historia, la mía se cruzaría en tus días, con tus fracasos, tus glorias, con tu vida."
    },
    {
        fecha: "28 Febrero 2026",
        titulo: "Lo mejor que me ha pasado",
        imagen: "imagenes/mar.jpeg",
        contenido: "Eres mi mejor amiga, mi amor verdadero y las ganas de gritar a los cuatro vientos. Tú eres la brisa del mar, los granos de sal que se quedan en la piel al pisar la arena. Tú eres nostalgia, luna llena, cuerpo candela. Tú eres el cielo azulado, un abrazo de quien estuvo ausente. Mi vida, eres lo mejor que me ha pasado. Cuando estés a mi lado, todo el universo se quedará observando."
    },
    {
        fecha: "1 Marzo 2026",
        titulo: "Ojos de espresso",
        imagen: "imagenes/ojoscafes.png",
        contenido: "Tus ojos cafés. Amargos de la forma más hermosa. ¿Qué puedo decir? Soy adicto a ellos. Hay consuelo en su tono, como si el otoño viviera dentro de ellos. Cada mirada tuya es un beso de espresso. Bebo lentamente hasta sentirlo en el torrente sanguíneo, despertándome. Esos ojos tuyos son mi ritual. Son mi pecado más suave. Y cada mañana me vuelvo a enamorar de ellos."
    },
    {
        fecha: "2 Marzo 2026",
        titulo: "Polillas contra tu nombre",
        imagen: "imagenes/polilla.jpg",
        contenido: "Hay un fuego en ti que solo yo puedo ver. Lo veo cuando escribo sobre ti. Como mis palabras, como polillas indefensas, queman sus alas contra tu nombre. Lo veo cada vez que intento enjaular tu belleza en frases cuidadosas, y se rebelan contra mí. Van más allá de los márgenes para dejar una chispa en mi piel. Y aun así me inclino más cerca, como una vela que comprende su propósito, encontrando significado al entregarse a la llama. Y así me derrito en tu presencia hasta que no queda nada de mí, excepto ceniza y humo. E incluso entonces, aún encontrarás un latido en brasas, elevándose para susurrar en tus oídos. Acércate. Las llamas no me aterran."
    },
    {
        fecha: "3 Marzo 2026",
        titulo: "Permíteme ofrecerte la inmortalidad",
        imagen: "imagenes/you.png",
        contenido: "Dicen que si un escritor te ama, nunca morirás. Permíteme ofrecerte la inmortalidad. Déjame mostrarte cómo se siente estar envuelto en tinta y locura. Te escondería entre mis páginas, donde solo yo puedo leerte. Te mostraría lo que significa ser tanto la herida como el remedio. Verías las guerras que libras cuando tus labios rozan otros que no son los míos. Cómo cada aliento que robas parece una razón para seguir vivo. \n\nAsí que cuando te pregunten: ¿has llegado a odiarlo? Diles: ¿cómo puedo odiar a quien habita en mis párpados? \n\nY cuando te pregunten: ¿él te ama? Di: él me ama. Me ama mucho. Tanto como para escribirme en la eternidad."
    },
    {
        fecha: "4 Marzo 2026",
        titulo: "Galaxias en tus ojos",
        imagen: "imagenes/ojos.png",
        contenido: "¿Para qué son las galaxias si no es para describir tus ojos? \n¿Para qué son si no para explicar la belleza grandiosa y aterradora que contienen? \n¿Para qué son si no para darle a los poetas una metáfora cuando las palabras colapsan y la tinta falla ante tu mirada? Pues, ¿qué es el lenguaje sino un intento fallido de contener esa locura en tus ojos? \nOh, corazón, si tan solo supieras cuántas constelaciones se pueden ver en tus ojos. Si tan solo supieras el caos que causa tu ausencia. \nCómo no me encuentro a mí mismo cuando no estás. \nAsí que déjame perderme en este universo de ti. \nY solo seré aquel que ha tocado galaxias y aún suplico otro vistazo de tus ojos. "
    },
    {
        fecha: "5 Marzo 2026",
        titulo: "Una forma de quedarme",
        imagen: "imagenes/ternurin.png",
        contenido: "Quiero amarte despacio, mirándote como se mira lo que es bello sin necesidad de explicaciones. \nQuiero amarte sin máscaras, con la confianza de quien se entrega por que sabe que está a salvo. \nQuiero amarte cada día, no por costumbre, sino porque elegirte se me da tan natural como respirar. \nPorque amarte, al final, no es una forma del cuerpo, sino una forma de quedarme."
    },
    {
        fecha: "6 Marzo 2026",
        titulo: "La gravedad de ella",
        imagen: "imagenes/plano.png",
        contenido: "Si alguien me preguntara: \"¿Y cómo es ella?\" \nYo respondería: \nElla es como un cúmulo de galaxias: una presencia masiva, compleja y llena de energía. Es irresistible por su propia gravedad; de esas que emiten mucha luz a pesar de su oscuridad. \nParte de su esencia es invisible, profunda y difícil de detectar a simple vista. Solo con los ojos del alma logras ver más allá. \nEs capaz de distorsionar la realidad con tan solo una sonrisa. Es una oportunidad única en la vida. \nDe esas mujeres que te hacen sentir que has ganado la lotería, que te quitan el sueño y te obligan a viajar a través del espacio-tiempo."
    },
    {
        fecha: "7 Marzo 2026",
        titulo: "El abrazo que no llega",
        imagen: "imagenes/solito.png",
        contenido: "Te acabo de abrazar con el hambre de mis pensamientos, con las manos que no tengo y los brazos que me faltan. Ojalá hayas sentido el apretón, aunque sea como un eco lejano, como un viento que se cuela en tu piel y te susurra que te extraño."
    },
    {
        fecha: "8 Marzo 2026",
        titulo: "La verdadera fortuna",
        imagen: "imagenes/luna3.jpeg",
        contenido: "El hombre más afortunado \nque camina sobre esta tierra \nes aquel que encuentra el \nverdadero amor"
    },
    {
        fecha: "8 Marzo 2026",
        titulo: "La casualidad que esperaba",
        imagen: "imagenes/casualidad.png",
        contenido: "Lo más bonito de haber coincidido contigo es que yo no te estaba buscando. Pero te encontré en mi vida como una casualidad, una de esas casualidades que el corazón anhela. \nQuería dar toda mi atención, todo mi cariño, todo mi amor, y encontrarte fue el regalo que mi corazón siempre había deseado."
    },
    {
        fecha: "9 Marzo 2026",
        titulo: "Segundos que se vuelven eternidades",
        imagen: "imagenes/denji.png",
        contenido: "¿Sabes cuánto amor siento por ti? \n¿Con qué fuerza late mi corazón cada vez que te pienso? \nTu amor ha conquistado cada parte de mis días, entretejiéndose en cada detalle. Este amor que siento no conoce límites, no escucha razones. Crece demasiado cada día, desbordándose más allá de los confines de mi pecho. \nPorque te amo de formas que el lenguaje no puede contener. Porque este amor que siento por ti deforma mi realidad. Convierte segundos de tu sonrisa en eternidades. \n\nEntonces, ¿ahora lo ves? \n\nCómo la noche se vuelve demasiado silenciosa y tus pensamientos vagan lejos de mí. \n\nPero los míos... \n\nlos míos siempre se alzarán por ti."
    },
    {
        fecha: "10 Marzo 2026",
        titulo: "Un amor que decidió quedarse",
        imagen: "imagenes/ser.png",
        contenido: "Lo que siento por ti no cabe en palabras comunes ni en gestos pequeños; es una certeza profunda que permanece incluso cuando todo cambia alrededor, una fuerza que atraviesa miedos, distancias, silencios y días difíciles, y aun así elige quedarse. \nEs algo que no depende del tiempo, ni del ánimo, ni de las circunstancias, porque nace desde un lugar tan honesto que no sabe hacer otra cosa que sostener. \nEs esa calma que aparece cuando pienso en ti, esa seguridad inexplicable de saber que, pase lo que pase, mi corazón ya encontró un sitio donde pertenecer. \nNo necesita promesas ruidosas ni demostraciones exageradas, porque vive en lo constante, en lo real, en lo que resiste cuando todo lo demás se mueve. \nY aunque el mundo dé mil vueltas, aunque cambien los caminos y las estaciones, esto que siento seguirá intacto, firme y fiel a su origen: un sentimiento tan grande, tan leal y tan verdadero que no entiende de límites, porque simplemente aprendió a existir contigo.❤️"
    },
    {
        fecha: "11 Marzo 2026",
        titulo: "Prefiero arder en esta verdad",
        imagen: "imagenes/florenllamas.png",
        contenido: "Tal vez sea alguien romántico, tal vez exagere mis palabras y sentimientos, pero si me lo preguntas sinceramente, te amo demasiado, como una llama intensa que prende aunque intentes apagarla. \nTe amo con un intensidad que no se esconde, que encuentra en lo pequeño un universo y convierte un gesto tuyo en el centro luminoso de mi día. \nSi eso es exagerar, lo asumo sin vergüenza; prefiero arder contigo en esta verdad que apagar lo que siento y fingir que mi corazón no sabe tu nombre."
    },
    {
        fecha: "12 Marzo 2026",
        titulo: "Quiero aprender el amor contigo",
        imagen: "imagenes/lunallena.png",
        contenido: "Aún tengo mucho que aprender sobre el amor, \npero quiero aprenderlo contigo. \nAún tengo muchos defectos por corregir, \npero quiero corregirlos por nosotros. \nAún no alcanzo mi mejor versión, \npero quiero que seas quien la disfrute. \nAún quedan muchas cosas por vivir, \npero sé que quiero vivirlas contigo. \n\nTe amo tanto, mi luna."
    },
    {
        fecha: "13 Marzo 2026",
        titulo: "La sospecha del universo",
        imagen: "imagenes/galaxia.png",
        contenido: "Tengo la sospecha de que en el corazón te pusieron una estrella, que en los labios te sembraron un sol, que de ojos te dieron dos lunas, y que de tus brazos nace el amor. \nQue el cielo te dio la frescura y el mar te regaló su voz, que el tiempo te quitó la prisa y el río te hizo canción. \nQue la música te hizo su musa, y que por ti la poesía nació. Y también que, cuando Dios creó el mundo, fue en ti que se inspiró. \nTal vez por eso, al mirarte, el universo se queda en silencio, porque en ti se esconden los secrestos del amor, la vida y el tiempo. "
    },
    {
        fecha: "14 Marzo 2026",
        titulo: "La envidia de las rosas",
        imagen: "imagenes/mirosa.png",
        contenido: "A veces me pregunto si las rosas te envidian. \nSi piensan que es injusto que florezcas sin espinas, cómo robas a sus pretendientes con un solo vaivén y dejas a sus pétalos preguntándose qué significa verdaderamente la belleza. \nLo veo cuando paseo por los jardines y casi las oigo gritarte: \n\"¡Deja luz para nosotras!\" \nY entonces solo deseo tomarte entre mis manos y esconderte de las horas envidiosas. \nPero esta belleza que portas es indómita, inalterable. No puede ponerse en un jarrón. \nPor eso te envidian. \nTu belleza es algo que el tiempo no puede marchitar."
    },
    {
        fecha: "15 Marzo 2026",
        titulo: "Tu nombre en las estrellas",
        imagen: "imagenes/estrellas.jpg",
        contenido: "Si alguna vez miras al cielo y ves una estrella más brillante que las demás, recuerda que ahí dejé tu nombre. \nPorque cuando pienso en ti, hasta el universo parece quedarse pequeño. \nEres la razón por la que la noche tiene sentido y la distancia deja de doler."
    },
    {
        fecha: "16 Marzo 2026",
        titulo: "El caballero de tu corazón",
        imagen: "imagenes/caballeroconrosas.png",
        contenido: "Es extraño pensar que no te he visto. \nHe visto la luna nueva, pero no a ti; he visto al sol salir y ocultarse, pero nada tan bello como tu hermoso rostro. \nLas piezas de este roto corazón son tan pequeñas que podrían pasar por el ojo de una aguja. \nEscribo como si ya hubieras muerto. Sí, mi amor, porque yo también muero. \nTe extraño como el sol extrañaba a la flor, como el sol extrañaba a la flor en el más frío invierno. En vez de haber belleza a donde dirigir su luz, el corazón se endurece como el mundo helado al que tu ausencia me desterró. \nLa esperanza es mi guía; es la que me sostiene de día, y en especial en la noche. La esperanza de que, cuando desaparezcas de mi vista, no será la última vez que pueda verte. \n\nCon todo el amor que poseo, siempre tuyo..."
    },
    {
        fecha: "17 Marzo 2026",
        titulo: "Más que cualquier metáfora",
        imagen: "imagenes/diosqueojos.png",
        contenido: "A veces pienso que no lo ves... \nTu belleza trasciende los espejos. \nHay versos durmiendo en tus pestañas, y cuando parpadeas, un poema despierta y reordena mi corazón. \nEsta belleza en ti me pone celoso de todo a tu alrededor, del viento cuando roba tu aroma para perfumar su paso. \nO cuando el lenguaje intenta capturarte en párrafos, mientras yo te quiero libre, más que cualquier metáfora..."
    },
    {
        fecha: "18 Marzo 2026",
        titulo: "Los jardines de tu mirada",
        imagen: "imagenes/flores.jpg",
        contenido: "Creo que la belleza que veo en cualquier cosa es un reflejo de la belleza que hay en ti. \nY cuando la encuentro en el más mínimo detalle, comprendo lo silenciosamente radiante que debe ser tu corazón. \nCuánta belleza se esconce dentro de ti. \nCómo ahí, bajo tus párpados, encuentro los jardines secretos del paraíso."
    },
    {
        fecha: "19 Marzo 2026",
        titulo: "La mayor maravilla",
        imagen: "imagenes/atardecer2.jpg",
        contenido: "El mundo está lleno de maravillas, y aun así ninguna se compara contigo. \nPodría recorrer lugares asombrosos, perderme en paisajes perfectos, pero nada lograría eclipsar lo que encuentro en ti. \nEres y siempre serás la maravilla más grande de mi vida."
    },
    {
        fecha: "20 Marzo 2026",
        titulo: "En cada canción estás tú",
        imagen: "imagenes/snoopymusica.png",
        contenido: "Cada canción que escucho parece llevar algo de ti. \nA veces es una melodía suave, \na veces una letra que no esperaba, \npero siempre hay una parte de ti escondida en cada nota, \ncomo si el mundo entero conspirara para recordarme que te amo."
    },
    {
        fecha: "21 Marzo 2026",
        titulo: "Entretejida en mí",
        imagen: "imagenes/arcodeluna.png",
        contenido: "Dime, ¿por qué veo tu rostro cada vez que miro al cielo? \n¿Por qué encuentro rastros de ti entre las estrellas? \nVeo tu hermoso rostro en todas partes, \nincluso cuando no estás conmigo. \nComo si hubieras conquistado mi mente \njunto con esto que late en mi pecho. \nNo importa a dónde mire, \nno importa lo lejos que estés, \nestás aquí, entretejida en mí. \nComo si mi alma no conociera existencia sin ti."
    },
    {
        fecha: "22 Marzo 2026",
        titulo: "En la noche pienso en ti",
        imagen: "imagenes/lunarosa.jpg",
        contenido: "En la noche pienso en ti. \nEs mi momento favorito, el momento perfecto: \nnada interrumpe, nadie molesta, ni siquiera el pasado. \n\nEn la noche solo eres tú y los poemas, \nsolo tú y las estrellas. \n\nEn la noche pienso en ti. \nEso es lo último que hago: \ncierro los ojos, cruzo los dedos \npara tener la suerte de que, hasta en sueños, \nte encuentre a mi lado. \n\nEn la noche pienso en ti, \nporque hacerlo todo el día no es suficiente \ncuando se está enamorado."
    },
    {
        fecha: "23 Marzo 2026",
        titulo: "Mi alma te reconoce",
        imagen: "imagenes/mibellagalaxia.png",
        contenido: "Te amo. \nDe una forma que no cabe en las palabras ni en el tiempo; te amo como se ama aquello que le da sentido al universo, como se abraza la vida después de haberla esperado eternamente. \nEres el latido que sostiene mi existencia, la certeza en medio del caos, el milagro que convirtió mis días comunes en eternidades compartidas. \nSi el destino me diera a elegir mil veces, \nen cada vida y en cada mundo, volvería a encontrarte, volvería a \nelegirte, \nporque mi alma reconoce la tuya como su hogar, desde antes de saber siquiera qué era el amor."
    },
    {
        fecha: "24 Marzo 2026",
        titulo: "Donde aprendí a escribirte, Kenya",
        imagen: "imagenes/laguna.jpg",
        contenido: "Hoy volví a la Laguna Náinari, no donde empezó lo que siento por ti, sino donde aprendí a darle forma. \nPorque amarte... \nya lo hacía desde antes, pero fue aquí donde tu nombre se volvió poema entre mis manos. \nAquí entendí que no bastaba con sentir, que necesitaba escribirte para no desbordarme en silencio. \nY aunque no estés conmigo, aunque la distancia tenga la última palabra, hay algo que no cambia: \nsigues viviendo en mí. \nPor que este lugar me recuerda que mi amor por ti, se transformó en poesía también; aquí encontró su voz. \nY desde entonces, Kenya, te llevo en cada palabra, en cada pensamiento, en cada parte de mí que aprendió a amarte sin medida... \nincluso sin tenerte."
    },
    {
        fecha: "25 Marzo 2026",
        titulo: "Cuando te miro",
        imagen: "imagenes/reloj.png",
        contenido: "El tiempo se detiene cuando te miro. \nNo hay reloj ni segundos que pueden medir lo que siento en ese instante. \nTus ojos y tu sonrisa son el único lugar \donde quiero quedarme atrapado."
    },
    {
        fecha: "26 Marzo 2026",
        titulo: "Donde habitas",
        imagen: "imagenes/piano.png",
        contenido: "Habitas en tres lugares simultáneamente. \nHabitas en mis pensamientos, \nde día y de noche. \nHabitas en lo más tierno de mí \ny en aquello que enciende la piel. \nHabitas en mi corazón, \nen cada latido y en cada suspiro, \nen los más suaves \ny en los que lo hacen galopar a mil por hora. \nHabitas allá, \nen cualquier parte del mundo... \ny aun así \na todos lados vas conmigo. "
    },
    {
        fecha: "27 Marzo 2026",
        titulo: "Más que todo",
        imagen: "imagenes/luna4.jpg",
        contenido: "Te describo como la autora \nde mi sonrisa antes de dormir, \ncomo la protagonista de mis sueños, \ncomo la inspiración del poeta al escribir. \n\nTe describo como la mayor de mis bendiciones, \ncomo la responsable de andar risueño, \ncomo la persona perfecta para dedicarle canciones. \n\nTe describo como la prioridad de mi vida, \ncomo la motivación para alcanzar mis sueños, \ncomo la fuerza para enfrentar los días. \n\nTe describo como la dueña \nde la mirada más hermosa, \ncomo mi golpe de suerte, \ncomo mi luna, mi corazón, mi vida. \n\nTe describo de esta manera, \nporque decir que eres mi todo \nsería muy flojo."
    },
    {
        fecha: "28 Marzo 2026",
        titulo: "Eres arte",
        imagen: "imagenes/postrarse.png",
        contenido: "Creo que lo que hace al arte tan hermoso \nes que algunas partes se resisten a ser explicadas. \nSimplemente están destinadas a sentirse. \n\nAsí es como me siento contigo. \n\nNo puedo describir por completo \nla forma en que haces latir mi corazón, \nni puedo reunir las palabras correctas \npara medir su profundidad. \n\nLo único que sé \nes que es una sensación \ncon la que deseo despertar \ncada día de mi vida. \n\nEres arte ante mis ojos, \nno algo para ser analizado \no comprendido por completo, \nsino algo ante lo que postrarse \ncallado, de asombro. \n\nY como la obra maestra más bella, \ncuanto más te miro, \nmás me doy cuenta \nde que siempre hay algo nuevo \nde lo que enamorarse."
    },
    {
        fecha: "29 Marzo 2026",
        titulo: "La excepción",
        imagen: "imagenes/fugaz.gif",
        contenido: "Dicen que lo bello siempre es fugaz, \nque las cosas hermosas \nduran poco. \n\nPero tú eres la excepción \nque desafía todas esas reglas. \n\nSigues ahí, iluminando mi vida, \ny no hay nada más eterno que eso."
    },
    {
        fecha: "30 Marzo 2026",
        titulo: "Me haces falta",
        imagen: "imagenes/monohojas.png",
        contenido: "Me hace falta verte, \nescucharte reír, \nnotar que volteas la mirada \nporque estás sonrojada. \nMe hace falta sentir tus manos \naferradas a mi espalda, \nnotar cómo me aprietas, \nconfirmar que me extrañabas. \nMe hace falta verte, \nrodearme de tu aroma, \nsentirme en casa."
    },
    {
        fecha: "31 Marzo 2026",
        titulo: "Qué significa amar",
        imagen: "imagenes/rosadefuego.png",
        contenido: "¿Qué significa amar? \n\nAmarte es recoger cada partícula de polvo estelar \ny colocarla sobre tu cabeza, \npara que te conviertas en la belleza coronada, \nla reina de todas ellas. \n\nAmarte es adorar los detalles en ti, \nenvidiar la brisa cuando te toca, \nponerse celoso de la noche cuando te envuelve, \nresentir al tiempo mismo cuando avanza \ny no estás en mis brazos. \n\nPorque este amor me consume, \ny no lo cambiaría por nada. \n\nNo te amo para ser amado a cambio, \nte amo para probar que algo sagrado \naún existe en mis venas."
    },
    {
        fecha: "1 Abril 2026",
        titulo: "Escribirte es respirar",
        imagen: "imagenes/cuarto.png",
        contenido: "Sigo escribiendo sobre ti \ncomo si la tinta pudiera acercarte más que mis brazos, \ncomo si las palabras fueran a abrirse paso, \ncomo si pudiera reescribir el final en algo más dulce. \n\nSigo escribiendo sobre ti \nporque este amor en mi corazón \nes demasiado grande para que lo contengan las costillas, \ndemasiado grande para decirlo en una frase, \ndemasiado pesado para permanecer encerrado dentro. \n\nSigo escribiendo sobre ti \ncomo si intentara llenar un vacío, \ncomo si me engañara pensando que no estás ausente, \ncomo si las letras pudieran traerte a mí. \n\nSigo escribiendo sobre ti \nhasta que tu nombre se convierta \nen un lenguaje que solo yo pueda entender, \nhasta que los papeles se conviertan \nen un cementerio de todos las cosas que nunca dije. \n\nY seguiré escribiendo sobre ti \nporque el silencio me mata, \nporque escribir sobre ti es como respirar. \nNo puedo obligarme a parar."
    },
    {
        fecha: "2 Abril 2026",
        titulo: "Incluso con miedo",
        imagen: "imagenes/manosunidas.png",
        contenido: "A veces me asusta cuánto te quiero, \nno porque dude de ti, \nsino porque lo que se cuida \ntambién se teme perder. \n\nPero incluso en ese miedo te elijo: \nelijo confiar, \nelijo quedarme, \nelijo creer que lo que nace desde el amor \nno se va con facilidad. \n\nY si algún día el miedo aparece, \nno será para alejarnos, \nsino para recordarme \nque vale la pena cuidarte \nmientras estés aquí."
    },
    {
        fecha: "3 Abril 2026",
        titulo: "Siempre tendrás un hogar",
        imagen: "imagenes/luzencendida.png",
        contenido: "No importa a dónde vayas, \nno importa cuán lejos te lleve el camino, \nsiempre tendrás un lugar en mi corazón \nque es tu hogar, \nun espacio tallado suavemente dentro de mí. \n\nY dejaré las luces encendidas, \ncálidas y esperando mientras estés lejos. \n\nLa distancia puede extenderse entre nosotros, \nel tiempo puede poner a prubea lo que siento, \npero los que construí dentro de mí \nno se desvanece. \n\nPuede que recorras el mundo, \ny aun así siempre habrá una luz encendida \npara ti aquí."
    },
    {
        fecha: "4 Abril 2026",
        titulo: "Ganas de ti, sin prisa",
        imagen: "imagenes/besarmano.png",
        contenido: "Tengo ganas de ti... \naunque no sé si tengo más ganas \nde besarte hasta el alma \no de tomarte de la mano con calma, \ncomo si no tuviera prisa \npor escuchar tu risa. \n\nSupongo que al final prefiero ambas, \npues no quiero solo escucharte cantar \no tenerte para una noche, \nsino elegirte todos los días \npor el resto de mi vida."
    },
    {
        fecha: "5 Abril 2026",
        titulo: "Cuando el poeta calla",
        imagen: "imagenes/poeta.png",
        contenido: "Hay que ser demasiado musa \no demasiado incendio \npara dejar a un poeta sin palabras, \narrancarle la tinta de la garganta \ny dejarlo balbuceando metáforas \nrotas. \n\nSolo una mujer así, \nmitad relámpago, mitad misterio, \npuede convertir el verso en ceniza \ny obligar al poeta a callar, \nporque a veces el silencio \nes la única forma honesta \nde nombrar lo que quema."
    },
    {
        fecha: "6 Abril 2026",
        titulo: "El día que volví a creer",
        imagen: "imagenes/girasol.jpeg",
        contenido: "El día que me enamoré de ti, \nsentí algo inexplicable; \naun así, \nharé mi mayor esfuerzo por ponerle palabras \na lo que provocaste en mí, \nen mi alma, \nen mi piel, \nen mis ganas. \n\nEl día que me enamoré de ti, \nhice las paces con la vida, \nllegué a casa, me aventé a la cama \ny grité de alegría; \nlos vecinos debieron pensar: \n\"revivió ese loco.\" \n\nEl día que me enamoré de ti, \nrecordé que había prometido no volver a hacerlo, \nque estaba retirado del amor, \npero ya era tarde: \nya me encontraba pensándote, soñándote, \nhablándole de ti a todo el mundo."
    },
    {
        fecha: "7 Abril 2026",
        titulo: "En tus manos",
        imagen: "imagenes/entusmanos.png",
        contenido: "Te entrego mi corazón, porque ya no \npuedo contenerlo más. \nMe está volviendo loco \nescucharlo golpear contra las paredes de \nmi pecho cada vez que pienso en ti. \n\nQuiere traicionarme, rogando por \nabrir mi pecho, \npor liberarse, por correr hacia ti, \npor descansar donde siempre ha pertenecido. \n\nHa soñado con tus manos, \ncon el calor que ofrecerían, \ncon la forma en que lo acunarían como \nalgo sagrado, \nalgo que vale la pena conservar. \n\nAsí que te doy mi corazón. \nPero sé gentil con él. \nSosténlo como si te perteneciera, \nporque en cada latido escucharás que \nsusurra tu nombre. \n\nY si escuchas con atención, \noirás todo el amor que nunca supe \ncómo expresar."
    },
    {
        fecha: "8 Abril 2026",
        titulo: "Lo mejor de mí",
        imagen: "imagenes/cielo.jpg",
        contenido: "Tú sacas lo mejor de mí, incluso en los \ndías en que me siento menos capaz. \nEres quien despierta la versión más valiente \ny auténtica de mi ser. \nPor eso te amo, no solo por lo que eres, \nsino por lo que logras hacer nacer en mí."
    },
    {
        fecha: "9 Abril 2026",
        titulo: "No estoy borracho",
        imagen: "imagenes/copa.png",
        contenido: "¿Estás borracho? \n\nSoy un poeta ahogado en dulce ilusión, \nsolo un escritor que perdió el \ncontacto con la realidad \nen el momento en que tu nombre \nllenó mis páginas. \n\nEntraste en la habitación, y llené mi \ncopa hasta el borde. \nSaboreé las metáforas como si no \nhubiera un mañana. \nBebí hasta saciarme, hasta que este \namor me embriagó, \nme hizo ver belleza en todas las cosas. \n\nCómo tus grietas, tus fallas, tus \nimperfecciones \nse convirtieron en arte para mí. \n\nNo estoy borracho. Pero si balbuceo \nmis verdades, \nsi vacilo entre mis sueños, \nsi empiezo a confundir tus ojos con galaxias, \nperdóname. \n\nEso es justo lo que el amor hace \ncon aquellos de nosotros lo suficientemente \ntontos como para escribirlo."
    },
    {
        fecha: "10 Abril 2026",
        titulo: "Donde nadie había llegado",
        imagen: "imagenes/alma.png",
        contenido: "Hay quienes aman con la piel, \npero contigo fue distinto. \nTú llegaste a un lugar \nmucho más profundo: mi alma. \nPor eso sé que nunca podré compararte con \nnadie más, porque lo tuyo fue tocar donde \nnadie había llegado."
    },
    {
        fecha: "11 Abril 2026",
        titulo: "Lo más sincero que tengo",
        imagen: "imagenes/sincero.png",
        contenido: "Mi mente no descansa, siempre \nencuentra un motivo para \npensarte. \nY aunque no pueda prometerte el mundo \nentero, lo que sí puedo darte es lo más \nsincero que tengo: mi corazón, que late solo \npor ti. Ese será siempre mi mejor regalo."
    },
    {
        fecha: "12 Abril 2026",
        titulo: "Amar también duele",
        imagen: "imagenes/amarduele.png",
        contenido: "A veces pienso que amarte es lo único \nque estaba destinado a hacer. \nY sin embargo, es la tarea más difícil \nque he emprendido. \n\nMe siento aquí, en mi cuarto, \nla noche presionando contra la ventana, \ny te imagino: tu rostro, tus manos, \nla forma en que podrías sonreír \nante algo que he dicho. \n\nY es como si todo mi ser saltara hacia ti \na través de los kilómetros. \n\nQuiero estar contigo, no solo en poemas, \nno solo en sueños, sino realmente. \nSentarme a tu lado y sentir tu calor. \n\nSaber que este anhelo que llevo \nno es una carga, sino un regalo. \n\n¿Sabes lo que es amar a alguien tanto que duele? \nQue se siente como una herida \ny una alegría al mismo tiempo. \n\nNo sé si puedo soportarlo \ny sin embargo, no lo cambiaría por nada."
    },
    {
        fecha: "13 Abril 2026",
        titulo: "Lo que siento, aunque no baste",
        imagen: "imagenes/megustas.jpg",
        contenido: "Dices que no eres la persona correcta, \nque merezco a alguien mejor, \ny con una calma tan racional \ndecides por mi corazón \ncomo si el amor pudiera elegirse con la cabeza. \n\nMe gustas... \ny no creo poder borrar tan fácil \nlo que siento por ti. \n\nPorque cuando pienso en ti, \nmi corazón se llena de alegría, \naunque sé que, por más que me gustes, \nsiempre estarás esperando a alguien más. \n\nQuisiera ser tan racional como tú, \ncerrarle los ojos a mi corazón, \nvendarle los oídos \npara que no escuche tu nombre en cada latido. \n\nPero no sé cómo callar este amor \nque insiste en quedarse. \n\nDime entonces qué hago \ncon todo lo que siento por ti, \ncon este amor que vive en mi pecho \ncomo una luz que no quiere apagarse. \n\nMe gustas... \npero, aun sabiendo lo que siento por ti, \nno eres capaz de amarme. \n\nTe amo, Kenya."
    },
    {
        fecha: "14 Abril 2026",
        titulo: "En todo momento",
        imagen: "imagenes/atardecermaza.png",
        contenido: "No existe amanecer, atardecer ni anochecer \nen el que no te piense. \n\nNo hay segundos, minutos ni horas \nen los que no te quiera. \n\nNo hay días, semanas ni años \nen los que no me guarde, \nesperando el momento de entregarte todo."
    }
];





















