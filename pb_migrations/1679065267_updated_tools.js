migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xevubtnebiz9h02")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e3nnwazr",
    "name": "url",
    "type": "url",
    "required": true,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rtkr3kvy",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tazd2g5b",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xevubtnebiz9h02")

  // remove
  collection.schema.removeField("e3nnwazr")

  // remove
  collection.schema.removeField("rtkr3kvy")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
