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
    }
];



















