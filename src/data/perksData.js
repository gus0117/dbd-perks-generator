/* 
https://nightlight.gg/perks

https://dennisreep.nl/dbd/

https://dbd-randomizer.com

*/

const survperks = [
  {
    perkName: "As en la manga",
    owner: "Ace",
    description:"Una descripcion",
    url:"aceInTheHole"
  },
  {
    perkName: "Adrenalina",
    owner: "Meg Thomas",
    description: "Una descripcion",
    url: "adrenaline"
  },
  {
    perkName:"Postratamiento",
    owner:"Jeff Johansen",
    description:"Una descripcion",
    url: "aftercare"
  },
  {
    perkName:"Alerta",
    owner:"Feng Ming",
    description:"Una descripcion",
    url: "alert"
  },
  {
    perkName:"Por Cualquier Medio",
    owner:"Yui Kamura",
    description:"Una descripcion",
    url: "anyMeansNecessary"
  },
  {
    perkName: "Detallista",
    owner: "Elodi Rakoto",
    description: "Una descripcion",
    url: "appraisal"
  },
  {
    perkName:"Autodidacta",
    owner:"Adam Franscis",
    description:"Una descripcion",
    url: "autodidact"
  },
  {
    perkName:"Guardian",
    owner:"Steve Harrington",
    description:"Una descripcion",
    url: "babySitter"
  },
  {
    perkName:"Caida Equilibrada",
    owner:"Nea Carlson",
    description:"Una descripcion",
    url: "balancedLanding"
  },
  {
    perkName:"Percepción de la situación",
    owner:"Nancy Waller",
    description:"Una descripcion",
    url: "betterTogether"
  },
  {
    perkName:"Aguante el dolor",
    owner:"Leon S. Kennedy",
    description:"Una descripcion",
    url: "BiteTheBullet"
  },
  {
    perkName:"Mina Explosiva",
    owner:"Jill Valentine",
    description:"Una descripcion",
    url: "BlastMine"
  },
  {
    perkName:"Pacto sangriento",
    owner:"Heather Mason",
    description:"Una descripcion",
    url: "bloodPact"
  },
  {
    perkName:"Arrebato",
    owner:"Kate Denson",
    description:"Una descripcion",
    url: "boilOver"
  },
  {
    perkName:"Vinculo",
    owner:"Dwight Fairfield",
    description:"Una descripcion",
    url: "bond"
  },
  {
    perkName: "Bendicion: Circulo de curacion",
    owner: "Mikaela Reid",
    description: "Para boludear al killer",
    url: "BoonCircleOfHealing"
  },
  {
    perkName:"Bendicion: Paso de las sombras",
    owner:"Mikaela Reid",
    description:"Una descripcion",
    url: "BoonShadowStep"
  },
  {
    perkName: "Tiempo Prestado",
    owner: "Bill Overbeck",
    description: "Descripcion",
    url: "borrowedTime"
  },
  {
    perkName: "Conocimiento de Botanica",
    owner: "Claudette Morel",
    description: "Para boludear al killer",
    url: "botanyKnowledge"
  },
  {
    perkName: "Ruptura",
    owner: "Jeff Johansen",
    description: "Una descripcion",
    url: "breakdown"
  },
  {
    perkName: "Fuga",
    owner:"Yui Kamura",
    description:"Una descripcion",
    url: "breakout"
  },
  {
    perkName: "Sujetate",
    owner:"Ashly Willams",
    description:"Una descripcion",
    url: "buckleUp"
  },
  {
    perkName:"Diseñado para durar",
    owner:"Felix Richter",
    description:"Una descripcion",
    url: "builtToLast"
  },
  {
    perkName:"Espiritu Calmado",
    owner:"Jake Park",
    description:"Una descripcion",
    url: "calmSpirit"
  },
  {
    perkName:"Camaraderia",
    owner:"Steve Harrington",
    description:"Una descripcion",
    url: "camaraderie"
  },
  {
    perkName:"Clarividencia",
    owner:"Mikaela Reid",
    description:"Una descripcion",
    url: "Clairvoyance"
  },
  {
    perkName:"Contramedida",
    owner:"Jill Valentine",
    description:"Una descripcion",
    url: "Counterforce"
  },
  {
    perkName:"Baila conmigo",
    owner:"Kate Denson",
    description:"Una descripcion",
    url: "danceWithMe"
  },
  {
    perkName:"Bendicion: Teoría oscura",
    owner:"Yoichi Asakawa",
    description:"Una descripcion",
    url: "darkTheory"
  },
  {
    perkName:"Fajador",
    owner:"David King",
    description:"Una descripcion",
    url: "DeadHard"
  },
  {
    perkName:"Engaño",
    owner:"Elodi Rakoto",
    description:"Una descripcion",
    url: "deception"
  },
  {
    perkName:"Golpe Decisivo",
    owner:"Lauri Strode",
    description:"Una descripcion",
    url: "decisiveStrike"
  },
  {
    perkName:"Deja Vu",
    owner:"Libre",
    description:"Una descripcion",
    url: "dejaVu"
  },
  {
    perkName:"Liberación",
    owner:"Adam Franscis",
    description:"Una descripcion",
    url: "deliverance"
  },
  {
    perkName:"Medidas Desesperadas",
    owner:"Felix Richter",
    description:"Una descripcion",
    url: "desperateMeasures"
  },
  {
    perkName:"Corazonada",
    owner:"Detective Tapp",
    description:"Una descripcion",
    url: "detectivesHunch"
  },
  {
    perkName:"Distorcion",
    owner:"Jeff Johansen",
    description:"Una descripcion",
    url: "distortion"
  },
  {
    perkName:"Distraccion",
    owner:"Adam Franscis",
    description:"Una descripcion",
    url: "diversion"
  },
  {
    perkName:"Conexion Empatica",
    owner:"Yoichi Asakawa",
    description:"Una descripcion",
    url: "empathicConnection"
  },
  {
    perkName:"Empatia",
    owner:"Claudette Morel",
    description:"Una descripcion",
    url: "empathy"
  },
  {
    perkName:"Autopercepcion",
    owner:"Nancy Wheeler",
    description:"Una descripcion",
    url: "fixated"
  },
  {
    perkName:"Granada Aturdidora",
    owner:"Leon S. Kennedy",
    description:"Una descripcion",
    url: "Flashbang"
  },
  {
    perkName:"Nos Vemos",
    owner:"Ashly Willams",
    description:"Una descripcion",
    url: "flipFlop"
  },
  {
    perkName:"Por la Gente",
    owner:"Zarina Kassir",
    description:"Una descripcion",
    url: "forThePeople"
  },
  {
    perkName:"De Frente",
    owner:"Jane Romero",
    description:"Una descripcion",
    url: "headOn"
  },
  {
    perkName:"Esperanza",
    owner:"Libre",
    description:"Una descripcion",
    url: "hope"
  },
  {
    perkName:"Fuerza Interior",
    owner:"Nancy Wheeler",
    description:"Una descripcion",
    url: "innerStrength"
  },
  {
    perkName:"Voluntad de Hierro",
    owner:"Jake Park",
    description:"Una descripcion",
    url: "ironWill"
  },
  {
    perkName:"Familia",
    owner:"Libre",
    description:"Una descripcion",
    url: "kindred"
  },
  {
    perkName:"Lider",
    owner:"Dwight Fairfield",
    description:"Una descripcion",
    url: "leader"
  },
  {
    perkName:"Abandonado a tu suerte",
    owner:"Bill Overbeck",
    description:"Una descripcion",
    url: "leftBehind"
  },
  {
    perkName:"Peso Ligero",
    owner:"Libre",
    description:"Una descripcion",
    url: "lightweight"
  },
  {
    perkName:"Agilidad",
    owner:"Feng Ming",
    description:"Una descripcion",
    url: "lithe"
  },
  {
    perkName:"Golpe de Suerte",
    owner:"Yui Kimura",
    description:"Una descripcion",
    url: "luckyBreak"
  },
  {
    perkName:"Temple del Hombre",
    owner:"Ashly Williams",
    description:"Una descripcion",
    url: "mettleOfMan"
  },
  {
    perkName:"Me la pela",
    owner:"David King",
    description:"Una descripcion",
    url: "NoMither"
  },
  {
    perkName:"Nadie se queda atras",
    owner:"Todos",
    description:"Una descripcion",
    url: "noOneLeftBehind"
  },
  {
    perkName:"Objeto de Obsesion",
    owner:"Lauri Strode",
    description:"Una descripcion",
    url: "objectOfObsession"
  },
  {
    perkName:"Extraoficialmente",
    owner:"Zarina Kassir",
    description:"Una descripcion",
    url: "offTheRecord"
  },
  {
    perkName:"A Mano Descubierta",
    owner:"Ace Visconti",
    description:"Una descripcion",
    url: "openHanded"
  },
  {
    perkName:"Consejo de Papá",
    owner:"Yoichi Asakawa",
    description:"Una descripcion",
    url: "parentalGuidance"
  },
  {
    perkName:"Farmacia",
    owner:"Quentin Smith",
    description:"Una descripcion",
    url: "pharmacy"
  },
  {
    perkName:"Instinto Saqueador",
    owner:"Libre",
    description:"Una descripcion",
    url: "plunderersInstinct"
  },
  {
    perkName:"Serenidad",
    owner:"Jane Romero",
    description:"Una descripcion",
    url: "poised"
  },
  {
    perkName:"Lucha de poderes",
    owner:"Elody Rakkoto",
    description:"Una descripcion",
    url: "powerStruggle"
  },
  {
    perkName:"Premonición",
    owner:"Libre",
    description:"Una descripcion",
    url: "premonition"
  },
  {
    perkName:"Demuestra lo que vales",
    owner:"Dwight Fairfield",
    description:"Una descripcion",
    url: "proveThyself"
  },
  {
    perkName:"Velocidad Silenciosa",
    owner:"Meg Thomas",
    description:"Una descripcion",
    url: "quickAndQuiet"
  },
  {
    perkName:"Arenque Rojo",
    owner:"Zarina Kassir",
    description:"Una descripcion",
    url: "redHerring"
  },
  {
    perkName:"Alianza Reprimida",
    owner:"Heather Mason",
    description:"Una descripcion",
    url: "repressedAlliance"
  },
  {
    perkName:"Resiliencia",
    owner:"Libre",
    description:"Una descripcion",
    url: "resilience"
  },
  {
    perkName:"Resurgimiento",
    owner:"Jill Valentine",
    description:"Una descripcion",
    url: "Resurgence"
  },
  {
    perkName:"Espíritu de Novato",
    owner:"Leon S. Kennedy",
    description:"Una descripcion",
    url: "RookieSpirit"
  },
  {
    perkName:"Saboteador",
    owner:"Jake Park",
    description:"Una descripcion",
    url: "saboteur"
  },
  {
    perkName:"Segundo Aliento",
    owner:"Steve Harrington",
    description:"Una descripcion",
    url: "secondWind"
  },
  {
    perkName:"Autocuración",
    owner:"Claudette Morel",
    description:"Una descripcion",
    url: "selfCare"
  },
  {
    perkName:"Carne Resbaladiza",
    owner:"Libre",
    description:"Una descripcion",
    url: "slipperyMeat"
  },
  {
    perkName:"Caza Menor",
    owner:"Libre",
    description:"Una descripcion",
    url: "smallGame"
  },
  {
    perkName:"Solo quedo Yo",
    owner:"Laurie Strode",
    description:"Una descripcion",
    url: "soleSurvivor"
  },
  {
    perkName:"Solidaridad",
    owner:"Jane Romero",
    description:"Una descripcion",
    url: "solidarity"
  },
  {
    perkName:"Salvaguarda el Alma",
    owner:"Heather Mason",
    description:"Una descripcion",
    url: "soulGuard"
  },
  {
    perkName:"Escalofríos",
    owner:"Libre",
    description:"Una descripcion",
    url: "spineChill"
  },
  {
    perkName:"Esprint",
    owner:"Meg Thomas",
    description:"Una descripcion",
    url: "sprintBurst"
  },
  {
    perkName:"Bajo Vigilancia",
    owner:"Detective Tapp",
    description:"Una descripcion",
    url: "stakeOut"
  },
  {
    perkName:"Con Calle",
    owner:"Nea Carlson",
    description:"Una descripcion",
    url: "streetwise"
  },
  {
    perkName:"Bendición: Exponencial",
    owner:"Jonah Vazquez",
    description:"Una descripcion",
    url: "BoonExponential"
  },
  {
    perkName:"Corrección",
    owner:"Jonah Vazquez",
    description:"Una descripcion",
    url: "CorrectiveAction"
  },
  {
    perkName:"Superar",
    owner:"Jonah Vazquez",
    description:"Una descripcion",
    url: "Overcome"
  },
  {
    perkName:"Pericia Técnica",
    owner:"Feng Ming",
    description:"Una descripcion",
    url: "technician"
  },
  {
    perkName:"Tenacidad",
    owner:"Detective Tapp",
    description:"Una descripcion",
    url: "tenacity"
  },
  {
    perkName:"Esto no esta pasando",
    owner:"Libre",
    description:"Una descripcion",
    url: "thisIsNotHappening"
  },
  {
    perkName:"Inquebrantable",
    owner:"Bill Overbeck",
    description:"Una descripcion",
    url: "unbreakable"
  },
  {
    perkName:"Subir la Apuesta",
    owner:"Ace Visconti",
    description:"Una descripcion",
    url: "upTheAnte"
  },
  {
    perkName:"Evacion Urbana",
    owner:"Nea Carlson",
    description:"Una descripcion",
    url: "urbanEvasion"
  },
  {
    perkName:"Vigilia",
    owner:"Quentin Smith",
    description:"Una descripcion",
    url: "vigil"
  },
  {
    perkName:"Visionario",
    owner:"Felix Richter",
    description:"Una descripcion",
    url: "visionary"
  },
  {
    perkName:"Despierta",
    owner:"Quentin Smith",
    description:"Una descripcion",
    url: "wakeUp"
  },
  {
    perkName:"Lo conseguiremos",
    owner:"Libre",
    description:"Una descripcion",
    url: "wellMakeIt"
  },
  {
    perkName:"Vamos a vivir para siempre",
    owner:"David King",
    description:"Una descripcion",
    url: "WereGonnaLiveForever"
  },
  {
    perkName:"Oportunidades",
    owner:"Kate Denson",
    description:"Una descripcion",
    url: "windowsOfOpportunity"
  },
  {
    perkName:"Enfoque Interno",
    owner:"Haddie Kaur",
    description:"Una descripcion",
    url: "innerFocus"
  },
  {
    perkName:"Manifiesto Residual",
    owner:"Haddie Kaur",
    description:"Una descripcion",
    url: "residualManifest"
  },
  {
    perkName:"Demasiado Entuciasta",
    owner:"Haddie Kaur",
    description:"Una descripcion",
    url: "overzealous"
  },
  {
    perkName:"Sistema de Espionaje",
    owner:"Ada Wong",
    description:"Una descripcion",
    url: "wiretap"
  },
  {
    perkName:"Curación Reactiva",
    owner:"Ada Wong",
    description:"Una descripcion",
    url: "wiretap"
  },
  {
    perkName:"Perfil Bajo",
    owner:"Ada Wong",
    description:"Una descripcion",
    url: "lowProfile"
  },
  {
    perkName:"Mejor que Nuevo",
    owner:"Rebecca Chambers",
    description:"Una descripcion",
    url: "betterThanNew"
  },
  {
    perkName:"Consuelo",
    owner:"Rebecca Chambers",
    description:"Una descripcion",
    url: "reassurance"
  },
  {
    perkName:"Hiperconcentración",
    owner:"Rebecca Chambers",
    description:"Una descripcion",
    url: "hyperfocus"
  },
  {
    perkName:"Energía Potencial",
    owner:"Vittorio Toscano",
    description:"Una descripcion",
    url: "potentialEnergy"
  },
  {
    perkName:"Conocimiento de la Niebla",
    owner:"Vittorio Toscano",
    description:"Una descripcion",
    url: "fogwise"
  },
  {
    perkName:"Táctica Rapida",
    owner:"Vittorio Toscano",
    description:"Una descripcion",
    url: "vittoriosGambit"
  },
  {
    perkName:"Suéltate",
    owner:"Thalita Lyra",
    description:"Una descripcion",
    url: "cutLoose"
  },
  {
    perkName:"Competencia Amistosa",
    owner:"Thalita Lyra",
    description:"Una descripcion",
    url: "friendlyCompetition"
  },
  {
    perkName:"Trabajo en Equipo: El poder de Dos",
    owner:"Thalita Lyra",
    description:"Una descripcion",
    url: "teamworkPowerOfTwo"
  },
  {
    perkName:"Personaje Secundario",
    owner:"Renato Lyra",
    description:"Una descripcion",
    url: "backgroundPlayer"
  },
  {
    perkName:"Impulso Sangriento",
    owner:"Renato Lyra",
    description:"Una descripcion",
    url: "bloodRush"
  },
  {
    perkName:"Trabajo en Equipo: Sigilo Colectivo",
    owner:"Renato Lyra",
    description:"Una descripcion",
    url: "teamworkCollectiveStealth"
  }
];

export default survperks;

// Survis: Dwight Fairfield, Meg Thomas, Claudette Morel, Jake Park, Nea Karlsson, Laurie Strode, Ace Visconti, Bill Overbeck, Feng Min, David King
//         Quentin Smith, David Tapp, Kate Denson, Adam Francis, Jeff Johansen, Jane Romero, Ash Williams, Nancy Wheeler, Steve Harrington, Yui Kimura
//         Zarina Kassir, Cheryl Mason, Felix Richter, Elodie Rakoto, Yun-Ji Lee, Jill Valentine, Leon S. Kennedy, Mikaela Reid, Jonah Vazquez, Yoichi Asakawa.