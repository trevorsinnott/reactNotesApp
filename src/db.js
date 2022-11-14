// db.js
import Dexie from "dexie";

export const db = new Dexie("notesApp");
db.version(1).stores({
  notes: "++key, created, body, canEdit",
});
