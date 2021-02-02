const {Router} = require('express');
const router = Router();
const bodyParser = require('body-parser');
const { MongoClient, ObjectID } = require('mongodb')
const url = "mongodb+srv://DrPoseidon:123321@cluster0.cy20x.mongodb.net/mongodb?retryWrites=true&w=majority"
const cors = require('cors');
const urlencodedParser = bodyParser.urlencoded({extended: false});
router.use(bodyParser.json());
router.use(cors());

async function loadMongoCollection(){
    try{
        const client = await MongoClient.connect(url,{
            useNewUrlParser: true
        });
        return client.db('mongodb').collection('mongocollection');
    } catch(err){
        console.log(err);
    }
}

// router.use(function timeLog(req,res,next) {
//     console.log('Time: ', Date.now());
//     next();
// });


//получение одного поля по id
router.post('/get_id/:id', async (req, res) => {
    const col = await loadMongoCollection();
    try{
        const result = await col.findOne({_id: new ObjectID(req.params.id)});
        res.send(result);
    } catch(err){
        console.log(err);
    }
  });  


  //получение одного поля по имени
  router.post('/get_name/:name', async (req, res) => {
    const col = await loadMongoCollection();
    try{
        const result = await col.findOne({name: req.params.name});
        res.send(result);
    } catch(err){
        console.log(err);
    }
  });  
  
//вывод всей базы  
router.post('/get', async (req, res) => {
const col = await loadMongoCollection();
try{
    const result = await col.find({}).toArray();
    res.send(result);
} catch(err){
    console.log(err);
};
});  

//добавление в базу
router.post('/add', urlencodedParser, async (req,res)=>{
    const col = await loadMongoCollection();
    try{
        const { image,name,price,article,available,category } = req.body;
        await col.insertOne({
            image,
            name,
            price,
            article,
            available,
            category
        });
    } catch(err){
        console.log(err);
    }

    res.status(201).send();
});

//обновление одного определенного параметра
router.post('/update/:id', urlencodedParser, async (req,res)=>{

    const col = await loadMongoCollection();
    try{
        const { key,value } = req.body;
        const { id } = req.params;
        await col.updateOne({
            _id: new ObjectID(id),
        },
        {$set:{
            [key]: value
        }});
    } catch(err){
        console.log(err);
    }

    res.status(200).send();
});

module.exports = router;