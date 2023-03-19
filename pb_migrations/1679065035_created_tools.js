migrate((db) => {
  const collection = new Collection({
    "id": "xevubtnebiz9h02",
    "created": "2023-03-17 14:57:15.501Z",
    "updated": "2023-03-17 14:57:15.501Z",
    "name": "tools",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tazd2g5b",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xevubtnebiz9h02");

  return dao.deleteCollection(collection);
})
