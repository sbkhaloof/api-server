'use strict'
class Collection {
    constructor(model){
        this.model=model;
    }
    async create(modelInfo){
        let record=await this.model.create(modelInfo)
        return record;
    }
   async get(id){
       let record=await this.model.findOne({where:{id:id}})
       return record;
   } 
   async getAll(){
       let all=await this.model.findAll();
       return all;
   }
   async update(id,modelInfo){
       let record=await this.model.findOne({where:{id}});
       let updateData=await record.update(modelInfo);
return updateData;
   }
   async delete(id){
       await this.model.destroy({where:{id}});
   }
}
module.exports=Collection;