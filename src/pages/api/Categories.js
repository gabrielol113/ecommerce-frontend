
import { mongooseConnect } from '../../Config/mongoose';

export default async function handle(req,res){
    const {method} = req;
    await mongooseConnect();

    console.log(teste);
    if(method === 'GET'){
        res.json(await Category.find().populate('parent'));
    }
}