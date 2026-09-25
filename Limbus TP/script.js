// =========================================================
// LIMBUS COMPANY — DATOS DE LOS SINNERS
// Cada pagina HTML usa data-character y este archivo genera
// automaticamente su informacion, lore e interfaz de navegacion.
// =========================================================

const sinners = {
    "yisang": {
        "name": "Yi Sang",
        "image": "../Assets/IMG/Yi Sang.webp",
        "title": "El poeta e inventor de Limbus Company",
        "number": "01",
        "weapon": "Espada / Espejo",
        "description": "Yi Sang es un hombre reservado y reflexivo que anteriormente fue investigador y miembro de la Liga de los Nueve Literatos. Su pasado está marcado por la investigación, la poesía y la tecnología de los Espejos.",
        "personality": "Habla de forma tranquila y a menudo utiliza metáforas o expresiones abstractas. Puede parecer distante, aunque detrás de esa actitud existe una personalidad profundamente reflexiva y sensible.",
        "role": "Es uno de los doce Sinners de Limbus Company y aporta conocimientos relacionados con la tecnología, la investigación y los fenómenos de los Espejos.",
        "lore": "Antes de unirse a Limbus Company, Yi Sang fue investigador y arquitecto vinculado a la Liga de los Nueve Literatos. Su trabajo estuvo relacionado con la tecnología de los Espejos, una parte fundamental de su pasado. Su historia gira alrededor de la pérdida, el aislamiento, sus antiguos compañeros y la dificultad de dejar atrás aquello que alguna vez definió su vida.",
        "literary": "The Wings, de Yi Sang"
    },
    "faust": {
        "name": "Faust",
        "image": "../Assets/IMG/Faust.webp",
        "title": "La mujer que conoce el camino",
        "number": "02",
        "weapon": "Zweihänder / Espada",
        "description": "Faust es una mujer extremadamente inteligente y segura de sus conocimientos. Fue una de las primeras personas vinculadas al proyecto de Limbus Company y participó en el desarrollo de Mephistopheles.",
        "personality": "Observadora, analítica y muy segura de sí misma. Suele hablar como si conociera la respuesta de antemano y puede mostrar una actitud de superioridad intelectual frente a los demás.",
        "role": "Tiene un papel fundamental dentro de Limbus Company. Además de ser una Sinner, participó en la formación del grupo y en el desarrollo de Mephistopheles.",
        "lore": "Faust está inspirada en la obra de Goethe. Su identidad está relacionada con la búsqueda del conocimiento y con la idea de una persona que cree comprender mucho más que quienes la rodean. En Limbus Company, su inteligencia y su relación con Mephistopheles la convierten en una de las figuras centrales del grupo.",
        "literary": "Faust, de Johann Wolfgang von Goethe"
    },
    "donquixote": {
        "name": "Don Quixote",
        "image": "../Assets/IMG/Don Quixote.png",
        "title": "La fanática de los Fixers",
        "number": "03",
        "weapon": "Lanza",
        "description": "Don Quixote es una Sinner extremadamente entusiasta que admira a los Fixers y sueña con convertirse en una heroína reconocida.",
        "personality": "Energética, exageradamente optimista y siempre dispuesta a hablar sobre hazañas heroicas. Su forma de ver el mundo está muy influida por sus ideales sobre los Fixers y la justicia.",
        "role": "Aporta entusiasmo y energía al grupo. Su obsesión con los Fixers influye constantemente en sus decisiones y en la manera en que interpreta los acontecimientos de la Ciudad.",
        "lore": "Está inspirada en el personaje de Miguel de Cervantes. Don Quixote interpreta la Ciudad a través de sus ideales heroicos y de las historias que admira. Sin embargo, detrás de su entusiasmo existe un pasado mucho más complejo relacionado con la verdadera naturaleza de los Fixers y con aquello que significa ser un héroe.",
        "literary": "Don Quijote de la Mancha, de Miguel de Cervantes"
    },
    "ryoshu": {
        "name": "Ryōshū",
        "image": "../Assets/IMG/Ryoshu.webp",
        "title": "La artista que busca la belleza en la violencia",
        "number": "04",
        "weapon": "Katana",
        "description": "Ryōshū es una artista extremadamente directa que observa el mundo desde una perspectiva estética. Tiene poco interés en las convenciones sociales y una fascinación particular por las formas de arte que considera valiosas.",
        "personality": "Fría, provocadora y difícil de controlar. Evalúa las situaciones según su propio criterio artístico y suele expresarse de manera breve y contundente.",
        "role": "Es una combatiente experta y una de las Sinners con mayor afinidad por el arte. Su manera de pensar puede resultar desconcertante para el resto del grupo.",
        "lore": "Ryōshū está inspirada en Hell Screen, de Ryūnosuke Akutagawa. Su concepto de arte está relacionado con la belleza, el sufrimiento y la transgresión. Su historia también explora su pasado, sus vínculos familiares y la razón por la que considera ciertas experiencias como formas de arte.",
        "literary": "Hell Screen, de Ryūnosuke Akutagawa"
    },
    "meursault": {
        "name": "Meursault",
        "image": "../Assets/IMG/Mersault.webp",
        "title": "El hombre que sigue las instrucciones",
        "number": "05",
        "weapon": "Guanteletes",
        "description": "Meursault es un hombre reservado y de pocas palabras. Antes de unirse a Limbus Company trabajó para N Corp. y se caracteriza por seguir las instrucciones de manera literal y directa.",
        "personality": "Sereno, inexpresivo y extremadamente literal. Prefiere recibir instrucciones claras y cumplirlas sin añadir interpretaciones innecesarias.",
        "role": "Actúa como uno de los miembros más disciplinados del grupo. Su fuerza física y su obediencia hacen que sea una pieza confiable durante las expediciones.",
        "lore": "Está inspirado en el protagonista de El extranjero, de Albert Camus. Su forma de relacionarse con el mundo se caracteriza por una distancia emocional y una tendencia a describir los hechos de manera directa. Su pasado en N Corp. y su relación con las órdenes forman parte importante de su historia.",
        "literary": "El extranjero, de Albert Camus"
    },
    "honglu": {
        "name": "Hong Lu",
        "image": "../Assets/IMG/Hong Lu.png",
        "title": "El joven de una familia adinerada",
        "number": "06",
        "weapon": "Jade / Lanza",
        "description": "Hong Lu creció dentro de una familia extremadamente rica y poderosa. Su vida protegida hizo que muchas experiencias comunes de la Ciudad fueran nuevas para él.",
        "personality": "Amable, curioso y despreocupado. A veces no comprende las dificultades de otras personas porque creció en un entorno privilegiado, aunque su curiosidad lo lleva a interesarse genuinamente por el mundo.",
        "role": "Es uno de los Sinners y suele aportar una actitud ligera al grupo. Su pasado familiar y su curiosidad por la Ciudad tienen gran importancia en su desarrollo.",
        "lore": "Hong Lu está inspirado en Jia Baoyu, protagonista de Sueño de la cámara roja. Su pasado está ligado a la poderosa familia Jia y a las relaciones familiares que marcaron su infancia. A medida que avanza la historia, su vida privilegiada y sus recuerdos familiares adquieren un significado cada vez mayor.",
        "literary": "Sueño de la cámara roja, de Cao Xueqin"
    },
    "heathcliff": {
        "name": "Heathcliff",
        "image": "../Assets/IMG/HeathCliff.webp",
        "title": "El hombre de temperamento explosivo",
        "number": "07",
        "weapon": "Bate",
        "description": "Heathcliff es un Sinner impulsivo y directo que prefiere actuar antes que quedarse esperando. Su pasado está estrechamente relacionado con Wuthering Heights.",
        "personality": "Brusco, apasionado y de carácter fuerte. Sus emociones suelen ser evidentes y puede reaccionar con rapidez cuando algo lo enfurece o afecta a las personas que le importan.",
        "role": "Es uno de los principales combatientes físicos del grupo. Su experiencia en las calles y su pasado con los Dead Rabbits influyen en su forma de enfrentarse a los problemas.",
        "lore": "Está inspirado en Heathcliff, el personaje de Cumbres borrascosas. Creció junto a la familia Earnshaw y su historia está profundamente ligada a Catherine. Antes de unirse a Limbus Company también estuvo relacionado con el sindicato Dead Rabbits. Su arco explora el resentimiento, el amor, la pérdida y la posibilidad de cambiar.",
        "literary": "Cumbres borrascosas, de Emily Brontë"
    },
    "ishmael": {
        "name": "Ishmael",
        "image": "../Assets/IMG/Ishmael.webp",
        "title": "La superviviente del mar",
        "number": "08",
        "weapon": "Arpón",
        "description": "Ishmael es una Sinner práctica y experimentada que conoce bien los peligros del mar. Antes de unirse a Limbus Company trabajó como navegante y superviviente de una expedición marítima.",
        "personality": "Práctica, responsable y directa. Suele intentar mantener al grupo centrado y no tiene demasiada paciencia para comportamientos que considera irresponsables.",
        "role": "Su experiencia como navegante resulta especialmente importante en las expediciones relacionadas con el mar. También suele actuar como una de las voces más racionales del grupo.",
        "lore": "Está inspirada en la narradora de Moby-Dick, de Herman Melville. Su pasado está marcado por una expedición marítima que terminó en desastre y por su obsesión con aquello que ocurrió durante el viaje. Su historia explora la supervivencia, la culpa, la búsqueda de respuestas y la dificultad de escapar del pasado.",
        "literary": "Moby-Dick, de Herman Melville"
    },
    "rodion": {
        "name": "Rodion",
        "image": "../Assets/IMG/Rodion.webp",
        "title": "La mujer que busca una vida extraordinaria",
        "number": "09",
        "weapon": "Hacha",
        "description": "Rodion, también llamada Rodya, es una Sinner extrovertida que intenta disfrutar de la vida incluso cuando las circunstancias son difíciles. Su pasado está marcado por acontecimientos ocurridos en su ciudad natal.",
        "personality": "Sociable, bromista y aparentemente despreocupada. Utiliza el humor y una actitud relajada para enfrentarse a situaciones que pueden ser mucho más dolorosas de lo que deja ver.",
        "role": "Es una integrante del grupo con una personalidad muy abierta y una gran capacidad para relacionarse con los demás. Su experiencia previa influye en su manera de valorar el dinero y la libertad.",
        "lore": "Rodion está inspirada en Rodion Raskólnikov, protagonista de Crimen y castigo. Su historia toma elementos de la obra original y los adapta al mundo de la Ciudad, explorando la culpa, las decisiones tomadas en momentos extremos y el deseo de vivir de una manera distinta.",
        "literary": "Crimen y castigo, de Fiódor Dostoyevski"
    },
    "sinclair": {
        "name": "Sinclair",
        "image": "../Assets/IMG/Sinclair.png",
        "title": "El joven que todavía está creciendo",
        "number": "10",
        "weapon": "Martillo",
        "description": "Sinclair es uno de los Sinners más jóvenes y proviene de una familia de clase acomodada. Antes de unirse a Limbus Company vivió una experiencia traumática que cambió por completo su vida.",
        "personality": "Tímido, inseguro y fácilmente abrumado al principio. Sin embargo, también posee una gran capacidad de crecimiento y demuestra que puede actuar con determinación cuando la situación lo exige.",
        "role": "Su evolución personal es una parte importante de su participación en Limbus Company. Viajar junto a los demás Sinners lo obliga a enfrentarse a sus miedos y a descubrir qué clase de persona quiere ser.",
        "lore": "Está inspirado en Emil Sinclair, protagonista de Demian, de Hermann Hesse. La historia de Sinclair gira alrededor del crecimiento personal, la pérdida de la inocencia y la búsqueda de una identidad propia. Su pasado familiar y los acontecimientos que vivió antes de entrar en Limbus Company son fundamentales para entender su desarrollo.",
        "literary": "Demian, de Hermann Hesse"
    },
    "outis": {
        "name": "Outis",
        "image": "../Assets/IMG/Outis.webp",
        "title": "La veterana estratega",
        "number": "11",
        "weapon": "Gladius",
        "description": "Outis es una veterana con experiencia militar que se toma muy en serio la organización, la estrategia y la jerarquía. Su comportamiento revela una gran experiencia en situaciones de combate.",
        "personality": "Disciplinada, calculadora y autoritaria. Valora la eficiencia y suele intentar asumir una posición de liderazgo cuando considera que el grupo necesita dirección.",
        "role": "Funciona como una de las estrategas del grupo y suele analizar las situaciones desde una perspectiva militar. Su experiencia puede resultar muy útil durante las expediciones.",
        "lore": "Outis está inspirada en Odiseo, protagonista de la Odisea. Su identidad está relacionada con la experiencia de un veterano que ha pasado por guerras, viajes y conflictos políticos. Su historia explora la lealtad, la estrategia, el regreso al hogar y la manera en que una persona construye su propia identidad.",
        "literary": "La Odisea, atribuida a Homero"
    },
    "gregor": {
        "name": "Gregor",
        "image": "../Assets/IMG/Gregor.webp",
        "title": "El veterano de la guerra",
        "number": "12",
        "weapon": "Brazo protésico",
        "description": "Gregor es un veterano de guerra que lleva en su cuerpo las consecuencias de los experimentos y conflictos de su pasado. Su prótesis orgánica es una de las características más reconocibles del personaje.",
        "personality": "Relajado, sarcástico y generalmente amable. Intenta mantener una actitud tranquila incluso cuando la situación se vuelve peligrosa, aunque su pasado sigue teniendo un peso importante sobre él.",
        "role": "Su experiencia como soldado y su conocimiento de la guerra le permiten comprender situaciones que otros Sinners no conocen. También suele aportar una perspectiva más madura al grupo.",
        "lore": "Gregor está inspirado en Gregor Samsa, protagonista de La metamorfosis, de Franz Kafka. Su historia adapta la transformación corporal de la obra original al mundo de Limbus Company y la conecta con la guerra, la familia y las consecuencias de haber sido convertido en un símbolo militar.",
        "literary": "La metamorfosis, de Franz Kafka"
    }
};

const sinnerOrder = [
    "yisang", "faust", "donquixote", "ryoshu", "meursault", "honglu",
    "heathcliff", "ishmael", "rodion", "sinclair", "outis", "gregor"
];

const pageFiles = {
    yisang: "Yi%20sang.html",
    faust: "Faust.html",
    donquixote: "donquixote.html",
    ryoshu: "Ryoshu.html",
    meursault: "Meursault.html",
    honglu: "Hong%20Lu.html",
    heathcliff: "Heathcliff.html",
    ishmael: "Ishmael.html",
    rodion: "Rodion.html",
    sinclair: "Sinclair.html",
    outis: "Outis.html",
    gregor: "Gregor.html"
};

function loadCharacterPage() {
    const body = document.body;
    const characterId = body.dataset.character;
    const character = sinners[characterId];

    if (!character) {
        console.error("No se encontró el personaje:", characterId);
        return;
    }

    document.title = `${character.name} | Limbus Company`;

    const nameElement = document.querySelector("#character-name");
    const titleElement = document.querySelector("#character-title");
    const imageElement = document.querySelector("#character-image");
    const descriptionElement = document.querySelector("#character-description");

    if (nameElement) nameElement.textContent = character.name;
    if (titleElement) titleElement.textContent = character.title;
    if (imageElement) {
        imageElement.src = character.image;
        imageElement.alt = character.name;
    }
    if (descriptionElement) descriptionElement.textContent = character.description;

    const factsContainer = document.querySelector("#character-facts");
    if (factsContainer) {
        factsContainer.innerHTML = "";

        const facts = {
            "Nombre": character.name,
            "Sinner": character.number,
            "Arma": character.weapon,
            "Inspiración": character.literary
        };

        for (const [label, value] of Object.entries(facts)) {
            const fact = document.createElement("div");
            fact.className = "character-fact";
            fact.innerHTML = `
                <strong>${label}</strong>
                <span>${value}</span>
            `;
            factsContainer.appendChild(fact);
        }
    }

    const personalityElement = document.querySelector("#character-personality");
    const roleElement = document.querySelector("#character-role");
    const literaryElement = document.querySelector("#character-literary");

    if (personalityElement) personalityElement.textContent = character.personality;
    if (roleElement) roleElement.textContent = character.role;
    if (literaryElement) literaryElement.textContent = character.literary;

    const loreWrapper = document.querySelector("#lore-wrapper");

    if (loreWrapper) {
        loreWrapper.innerHTML = `
            <button class="lore-toggle" id="lore-toggle" type="button"
                    aria-expanded="false">
                Ver historia y lore
            </button>

            <div class="lore-panel" id="lore-panel" aria-hidden="true">
                <div class="lore-header">
                    <img src="${character.image}" alt="${character.name}">
                    <div>
                        <h3>${character.name}</h3>
                        <p>Historia, pasado e inspiración literaria</p>
                    </div>
                </div>

                <div class="lore-text">
                    <p>${character.lore}</p>
                </div>
            </div>
        `;

        const button = document.querySelector("#lore-toggle");
        const panel = document.querySelector("#lore-panel");

        button.addEventListener("click", () => {
            const visible = panel.classList.toggle("is-visible");

            button.setAttribute("aria-expanded", visible);
            panel.setAttribute("aria-hidden", !visible);
            button.textContent = visible
                ? "Ocultar historia y lore"
                : "Ver historia y lore";
        });
    }

    buildCharacterNavigation(characterId);
}

function buildCharacterNavigation(currentId) {
    const nav = document.querySelector("#sinner-navigation");
    if (!nav) return;

    nav.innerHTML = "";

    const currentIndex = sinnerOrder.indexOf(currentId);
    const previousId = sinnerOrder[(currentIndex - 1 + sinnerOrder.length) % sinnerOrder.length];
    const nextId = sinnerOrder[(currentIndex + 1) % sinnerOrder.length];

    const previousButton = document.createElement("a");
    previousButton.className = "character-nav-arrow";
    previousButton.href = pageFiles[previousId];
    previousButton.textContent = `← ${sinners[previousId].name}`;

    const homeButton = document.createElement("a");
    homeButton.className = "character-nav-home";
    homeButton.href = "../index.html";
    homeButton.textContent = "Todos los Sinners";

    const nextButton = document.createElement("a");
    nextButton.className = "character-nav-arrow";
    nextButton.href = pageFiles[nextId];
    nextButton.textContent = `${sinners[nextId].name} →`;

    nav.append(previousButton, homeButton, nextButton);

    const allCharacters = document.querySelector("#all-sinners-navigation");
    if (!allCharacters) return;

    allCharacters.innerHTML = "";

    sinnerOrder.forEach((id, index) => {
        const link = document.createElement("a");
        link.href = pageFiles[id];
        link.className = id === currentId
            ? "sinner-mini-link current"
            : "sinner-mini-link";
        link.textContent = `${String(index + 1).padStart(2, "0")} · ${sinners[id].name}`;
        allCharacters.appendChild(link);
    });
}

document.addEventListener("DOMContentLoaded", loadCharacterPage);
