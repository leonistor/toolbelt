migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xevubtnebiz9h02")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pzerj955",
    "name": "sourcecode_url",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xevubtnebiz9h02")

  // remove
  collection.schema.removeField("pzerj955")

  return dao.saveCollection(collection)
})
