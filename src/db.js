import Dexie from "dexie";

const db = new Dexie("game-genre");

db.version(1).stores({
  genre: "++id,title"
});

db.on("populate", _ => {
  const genres = [
    "Platform games",
    "Shooter games",
    "Fighting games",
    "Beat 'em up games",
    "Stealth game",
    "Survival games",
    "Rhythm games",
    "Survival horror",
    "Metroidvania",
    "Text adventures",
    "Graphic adventures",
    "Visual novels",
    "Interactive movie",
    "Real-time 3D adventures",
    "Action RPG",
    "MMORPG",
    "Roguelikes",
    "Tactical RPG",
    "Sandbox RPG",
    "First-person party-based RPG",
    "Cultural differences",
    "Choices",
    "Fantasy",
    "Construction and management simulation",
    "Life simulation",
    "Vehicle simulation",
    "4X game",
    "Artillery game",
    "Real-time strategy (RTS)",
    "Real-time tactics (RTT)",
    "Multiplayer online battle arena (MOBA)",
    "Tower defense",
    "Turn-based strategy (TBS)",
    "Turn-based tactics (TBT)",
    "Wargame",
    "Grand strategy wargame",
    "Racing",
    "Sports game",
    "Competitive",
    "Sports-based fighting",
    "MMO",
    "Casual games",
    "Party game",
    "Programming game",
    "Logic game",
    "Trivia game",
    "Board game / Card game",
    "Advergame",
    "Art game",
    "Casual game",
    "Christian game",
    "Educational game",
    "Electronic sports",
    "Exergame",
    "Personalized game",
    "Serious game",
    "Game interfaces",
    "Game platforms",
    "Other related topics"
  ];
  genres.map(title => db.genre.add({ title }));
});
export default db;
