/* 
https://nightlight.gg/perks

https://dennisreep.nl/dbd/

https://dbd-randomizer.com

*/

const survPerks = [
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
    perkName:"Aftercare",
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
    perkName:"Any means necessary",
    owner:"Yui Kamura",
    description:"Una descripcion",
    url: "anyMeansNecessary"
  },
  {
    perkName: "Appraisal",
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
    perkName:"Baby sitter",
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
    perkName:"betterTogether",
    owner:"Nancy Waller",
    description:"Una descripcion",
    url: "betterTogether"
  },
  {
    perkName:"Bite the Bullet",
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
    perkName:"Boon Shadow Step",
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
    perKName:"Breakdown",
    owner:"Jeff Johansen",
    description:"Una descripcion",
    url: "breakdown"
  },
  {
    perKName:"Breakout",
    owner:"Yui Kamura",
    description:"Una descripcion",
    url: "breakout"
  },
  {
    perKName:"Sujetate",
    owner:"Ashly Willams",
    description:"Una descripcion",
    url: "bukleUp"
  },
  {
    perKName:"Built To Last",
    owner:"Felix Richter",
    description:"Una descripcion",
    url: "builtToLast"
  },
  {
    perKName:"Espiritu Calmado",
    owner:"Jake Park",
    description:"Una descripcion",
    url: "calmSpirit"
  },
  {
    perKName:"Camaraderia",
    owner:"Steve Harrington",
    description:"Una descripcion",
    url: "camaraderie"
  },
  {
    perKName:"Clarividencia",
    owner:"Mikaela Reid",
    description:"Una descripcion",
    url: "Clairvoyance"
  },
  {
    perKName:"Contramedida",
    owner:"Jill Valentine",
    description:"Una descripcion",
    url: "Counterforce"
  },
  {
    perKName:"Baila conmigo",
    owner:"Kate Denson",
    description:"Una descripcion",
    url: "danceWithMe"
  },
  {
    perKName:"Dark Theory",
    owner:"Yoichi Asakawa",
    description:"Una descripcion",
    url: "darkTheory"
  },
  {
    perKName:"Fajador",
    owner:"David King",
    description:"Una descripcion",
    url: "DeadHard"
  },
  {
    perKName:"Engaño",
    owner:"Elodi Rakoto",
    description:"Una descripcion",
    url: "deception"
  },
  {
    perKName:"Golpe Decisivo",
    owner:"Lauri Strode",
    description:"Una descripcion",
    url: "decisiveStrike"
  },
  {
    perKName:"Deja Vu",
    owner:"Libre",
    description:"Una descripcion",
    url: "dejaVu"
  },
  {
    perKName:"Liberacion",
    owner:"Adam Franscis",
    description:"Una descripcion",
    url: "deliverance"
  },
  {
    perKName:"Medidas Desesperadas",
    owner:"Felix Richter",
    description:"Una descripcion",
    url: "desperateMeasures"
  },
  {
    perKName:"Corazonada",
    owner:"Detective Tapp",
    description:"Una descripcion",
    url: "detectivesHunch"
  },
  {
    perKName:"Distorcion",
    owner:"Jeff Johansen",
    description:"Una descripcion",
    url: "distortion"
  },
  {
    perKName:"Distressing",
    owner:"",
    description:"Una descripcion",
    url: ""
  },
  {
    perKName:"Distraccion",
    owner:"Adam Franscis",
    description:"Una descripcion",
    url: "diversion"
  },
  {
    perKName:"Conexion Empatica",
    owner:"Yoichi Asakawa",
    description:"Una descripcion",
    url: "empathicConnection"
  },
  {
    perKName:"Empatia",
    owner:"Claudette Morel",
    description:"Una descripcion",
    url: "empathy"
  },
  {
    perKName:"Autopercepcion",
    owner:"Nancy Wheeler",
    description:"Una descripcion",
    url: "fixated"
  },
  {
    perKName:"Granada Aturdidora",
    owner:"Leon S. Kennedy",
    description:"Una descripcion",
    url: "Flashbang"
  },
  {
    perKName:"Nos Vemos",
    owner:"Ashly Willams",
    description:"Una descripcion",
    url: "flipFlop"
  },
  {
    perKName:"Por la Gente",
    owner:"Zarina Kassir",
    description:"Una descripcion",
    url: "forThePeople"
  },
  {
    perKName:"Head On",
    owner:"Jane Romero",
    description:"Una descripcion",
    url: "headOn"
  },
  {
    perKName:"Esperanza",
    owner:"Libre",
    description:"Una descripcion",
    url: "hope"
  },
  {
    perKName:"Fuerza Interior",
    owner:"Nancy Wheeler",
    description:"Una descripcion",
    url: "innerStrength"
  },
  {
    perKName:"Voluntad de Hierro",
    owner:"Jake Park",
    description:"Una descripcion",
    url: "ironWill"
  },
  {
    perKName:"Familia",
    owner:"Libre",
    description:"Una descripcion",
    url: "kindred"
  },
  {
    perKName:"Lider",
    owner:"Dwight Fairfield",
    description:"Una descripcion",
    url: "leader"
  },
  {
    perKName:"Abandonado a tu suerte",
    owner:"Bill Overbeck",
    description:"Una descripcion",
    url: "leftBehind"
  },
  {
    perKName:"Peso Ligero",
    owner:"Libre",
    description:"Una descripcion",
    url: "lightweight"
  },
  {
    perKName:"Agilidad",
    owner:"Feng Ming",
    description:"Una descripcion",
    url: "lithe"
  },
  {
    perKName:"Lucky Break",
    owner:"Yui Kimura",
    description:"Una descripcion",
    url: "luckyBreak"
  },
  {
    perKName:"Temple del Hombre",
    owner:"Ashly Williams",
    description:"Una descripcion",
    url: "mettleOfMan"
  },
  {
    perKName:"Me la pela",
    owner:"David King",
    description:"Una descripcion",
    url: "NoMither"
  },
  {
    perKName:"Nadie se queda atras",
    owner:"Libre",
    description:"Una descripcion",
    url: "noOneLeftBehind"
  },
  {
    perKName:"Objeto de Obsesion",
    owner:"Lauri Strode",
    description:"Una descripcion",
    url: "objectOfObsession"
  },
  {
    perKName:"Off the Record",
    owner:"Zarina Kassir",
    description:"Una descripcion",
    url: "offTheRecord"
  },
  {
    perKName:"Open Handed",
    owner:"Ace Visconti",
    description:"Una descripcion",
    url: "openHanded"
  },
  {
    perKName:"Consejo de Papá",
    owner:"Yoichi Asakawa",
    description:"Una descripcion",
    url: "parentalGuidance"
  },
  {
    perKName:"Farmacia",
    owner:"Quentin Smith",
    description:"Una descripcion",
    url: "pharmacy"
  },
  {
    perKName:"Instinto Saqueador",
    owner:"Libre",
    description:"Una descripcion",
    url: "plunderersInstinct"
  },
  {
    perKName:"Poised",
    owner:"Jane Romero",
    description:"Una descripcion",
    url: "poised"
  },
  {
    perKName:"Lucha de poderes",
    owner:"Elody Rakkoto",
    description:"Una descripcion",
    url: "powerStruggle"
  },
  {
    perKName:"Premonicion",
    owner:"Libre",
    description:"Una descripcion",
    url: "premonition"
  },
  {
    perKName:"Demuestra lo que vales",
    owner:"Dwight Fairfield",
    description:"Una descripcion",
    url: "proveThyself"
  },
  {
    perKName:"Velocidad Silenciosa",
    owner:"Meg Thomas",
    description:"Una descripcion",
    url: "quickAndQuiet"
  },
  {
    perKName:"Arenque Rojo",
    owner:"Zarina Kassir",
    description:"Una descripcion",
    url: "redHerring"
  },
  {
    perKName:"Repressed Alliance",
    owner:"Heather Mason",
    description:"Una descripcion",
    url: "repressedAlliance"
  },
  {
    perKName:"Resiliencia",
    owner:"Libre",
    description:"Una descripcion",
    url: "resilience"
  },
  {
    perKName:"Resurgence",
    owner:"Jill Valentine",
    description:"Una descripcion",
    url: "Resirgence"
  },
  {
    perKName:"Espíritu de Novato",
    owner:"Leon S. Kennedy",
    description:"Una descripcion",
    url: "RookieSpirit"
  },
  {
    perKName:"Saboteador",
    owner:"Jake Park",
    description:"Una descripcion",
    url: "saboteur"
  },
  {
    perKName:"Segundo Aliento",
    owner:"Steve Harrington",
    description:"Una descripcion",
    url: "secondWind"
  },
  {
    perKName:"Autocuración",
    owner:"Claudette Morel",
    description:"Una descripcion",
    url: "selfCare"
  },
  {
    perKName:"Carne Resbaladiza",
    owner:"Libre",
    description:"Una descripcion",
    url: "slipperyMeat"
  },
  {
    perKName:"Caza Menor",
    owner:"Libre",
    description:"Una descripcion",
    url: "smallGame"
  },
  {
    perKName:"Solo quedo Yo",
    owner:"Laurie Strode",
    description:"Una descripcion",
    url: "soleSurvivor"
  },
  {
    perKName:"Solidaridad",
    owner:"Jane Romero",
    description:"Una descripcion",
    url: "solidarity"
  },
  {
    perKName:"Salvaguarda el Alma",
    owner:"Heather Mason",
    description:"Una descripcion",
    url: "soulGuard"
  },
  {
    perKName:"Escalofríos",
    owner:"Libre",
    description:"Una descripcion",
    url: "spineChill"
  },
  {
    perKName:"Esprint",
    owner:"Meg Thomas",
    description:"Una descripcion",
    url: "sprintBurst"
  },
  {
    perKName:"Bajo Vigilancia",
    owner:"Detective Tapp",
    description:"Una descripcion",
    url: "stakeOut"
  },
  {
    perKName:"Con Calle",
    owner:"Nea Carlson",
    description:"Una descripcion",
    url: "streetwise"
  },
  {
    perKName:"Boon Exponential",
    owner:"Jonah Vazquez",
    description:"Una descripcion",
    url: "BoonExponential"
  },
  {
    perKName:"CorrectiveAction",
    owner:"Jonah Vazquez",
    description:"Una descripcion",
    url: "CorrectiveAction"
  },
  {
    perKName:"Overcome",
    owner:"Jonah Vazquez",
    description:"Una descripcion",
    url: "Overcome"
  },
  {
    perKName:"Pericia Técnica",
    owner:"Feng Ming",
    description:"Una descripcion",
    url: "technician"
  },
  {
    perKName:"Tenacidad",
    owner:"Detective Tapp",
    description:"Una descripcion",
    url: "tenacity"
  },
  {
    perKName:"Esto no esta pasando",
    owner:"Libre",
    description:"Una descripcion",
    url: "thisIsNotHappening"
  },
  {
    perKName:"Inquebrantable",
    owner:"Bill Overbeck",
    description:"Una descripcion",
    url: "unbreakable"
  },
  {
    perKName:"Up the Ante",
    owner:"Ace Visconti",
    description:"Una descripcion",
    url: "upTheAnte"
  },
  {
    perKName:"Evacion Urbana",
    owner:"Nea Carlson",
    description:"Una descripcion",
    url: "urbanEvasion"
  },
  {
    perKName:"Vigilia",
    owner:"Quentin Smith",
    description:"Una descripcion",
    url: "vigil"
  },
  {
    perKName:"Visionario",
    owner:"Felix Richter",
    description:"Una descripcion",
    url: "visionary"
  },
  {
    perKName:"Despierta",
    owner:"Quentin Smith",
    description:"Una descripcion",
    url: "wakeUp"
  },
  {
    perKName:"Lo conseguiremos",
    owner:"Libre",
    description:"Una descripcion",
    url: "wellMakeit"
  },
  {
    perKName:"Vamos a vivir para siempre",
    owner:"David King",
    description:"Una descripcion",
    url: "WereGonnaLiveForever"
  },
  {
    perKName:"Oportunidades",
    owner:"Kate Denson",
    description:"Una descripcion",
    url: "windowsOfOpportunity"
  }
];

export default survPerks;

// Survis: Dwight Fairfield, Meg Thomas, Claudette Morel, Jake Park, Nea Karlsson, Laurie Strode, Ace Visconti, Bill Overbeck, Feng Min, David King
//         Quentin Smith, David Tapp, Kate Denson, Adam Francis, Jeff Johansen, Jane Romero, Ash Williams, Nancy Wheeler, Steve Harrington, Yui Kimura
//         Zarina Kassir, Cheryl Mason, Felix Richter, Elodie Rakoto, Yun-Ji Lee, Jill Valentine, Leon S. Kennedy, Mikaela Reid, Jonah Vazquez, Yoichi Asakawa.