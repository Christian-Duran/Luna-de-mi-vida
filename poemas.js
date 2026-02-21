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
    }
];


