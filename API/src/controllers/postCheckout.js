const {Users, Order_details, Orders} = require('../db.js');

module.exports = async (req, res) => {
  try{
    if ((!req.body?.cart) || ((!req.body?.user) && (!req.body?.user.email))) throw 'No body params'

    const [userInstance, created] = await Users.findOrCreate({
      where: {email: req.body.user.email.toLowerCase()},
      defaults: {...req.body.user, username: 'algo', password: 'fruta', email: req.body.user.email.toLowerCase()}
    });

    const orderInstance = await Orders.create({userId: userInstance.dataValues.id});

    const detailInstance = await Order_details.bulkCreate(req.body.cart.map(({id, unit, amount}) => ({orderId: orderInstance.dataValues.id, ingredientId: id, unit, amount})))
    
    res.send({user: userInstance.dataValues, order: detailInstance.dataValues});
  }
  catch(error) {
    console.log(error);
    res.status(500).send(error);
  }
};