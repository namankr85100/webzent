// THUS IS SOLUTION 2

//FIRST WE HAVE TO CREATE MODELS THEN WE HAVE TO INOORT THAT MODELS 

// FOR FINDINg THE ONE DATA
let user = await models.findOne({where:{id:"123423414121"}})

//for updating 
let user = await models.UpdatedOne({where:{id:"1231231231"}})
user.email = "updatedvalue"
user.save()

//for delete
let user = await models.deleteOne({where:{id:"12234234"}})

//for create
let user = await models.inserOne({
    name:"name",
    email:"email",
    password:"hasspassword"
})