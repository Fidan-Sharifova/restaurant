const express= require("express")
const router= express.Router()
const dataController= require("../controller/data.controller")

router.get("/", dataController.getAll)
router.post("/", dataController.add)
router.delete("/:id", dataController.delete)

module.exports= router