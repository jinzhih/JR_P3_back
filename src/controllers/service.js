const Service = require('../models/service');
const Tradie = require('../models/tradie');



async function addService(req, res) {
    const{type, numberOfServiceRoom, housingType, serviceDescription,
        servicePrice} = req.body;
    
    const existService = await Service.findById(_id).exec();
        if (existService){
            return res.status(400).json("Duplicate service id");
        }
    const newService = new Service({
        type, numberOfServiceRoom, housingType, serviceDescription,
        servicePrice
    });
    const {account} = req.query;
    const tradie = await tradie.findById(account).exec();
    tradie.service.addToSet(service._id);
    service.tradie.addToSet(account);
    await service.save();
    await tradie.save();
    return res.json(newService);

};

async function getService(req, res) {
    const{id} = req.params;
    const service = await Service.findById(id).populate('Tradie', 'tradieName radieEmail tradiePhone' );
    if(!service){
        return res.status(404),json('service not found');
    }
    return res.json(service); 

};

async function getAllServices(req, res) {
    const services = await Service.find().exec();
    return res.json(services);
    
};

function updateService(req, res) {
    const { id } = req.params;
    const { type, numberOfServiceRoom, housingType, serviceDescription,
        servicePrice} = req.body;
    const newService = await Service.findByIdAndUpdate(
      id,
      { type, numberOfServiceRoom, housingType, serviceDescription,
        servicePrice },
      {
        new: true 
      }
    ).exec();
    if (!newCourse) {
      return res.status(404).json('course not found');
    }
    return res.json(newCourse);
  
};

async function deleteService(req, res) {
    const { id } = req.params;
    const service = await Service.findByIdAndDelete(id).exec();
    if (!course) {
      return res.status(404).json('course not found');
    }
    await Tradie.updateMany(
        {
          service: service._id
        },
        {
          $pull: {
            service: service._id
          }
        }
      );
      return res.sendStatus(200);
};



module.exports = {
    addService,
    getService,
    getAllServices,
    updateService,
    deleteService,
}