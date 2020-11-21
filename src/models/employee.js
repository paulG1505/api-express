const {Schema,model}=require('mongoose')

const employeeSchema=new Schema({
    name:{type:String,require:true},
    position:{type:String,require:true},
    office:{type:String,require:true},
    salary:{type:Number,require:true},
},{
    timestamps:true,//a;ade fecha de creacion
    versionKey:false,//elimina el campo __v
})
module.exports= model('Employee',employeeSchema)