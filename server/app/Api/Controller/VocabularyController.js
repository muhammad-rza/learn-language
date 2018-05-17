const BaseController = require(APP_ROOT_PATH + 'base/BaseController');
const VocabularyModel  = require(API_MODEL_PATH + 'VocabularyModel');

let userId = '5afb477501e26e255c099ac4';

class VocabularyController extends BaseController  {

    constructor() {

        //5af8590a9652501c20ac0a0b az
        //5af8590a9652501c20ac0a0c ru
        //5af8590a9652501c20ac0a0d en

        super();
        // console.log(this)

       

    }


    index(req,res,next){

        VocabularyModel.find({},(error,result)=> {
            if(error) return res.send({error})
            if(result) return res.send({result:result})
        });

    };

    show(req,res) {
        
        VocabularyModel.findOneVocabulary(req.params.id,(error,result)=> {
            if(error) return res.send({error})
            if(result) return res.send({result})
        });
    }

    store(req,res,next){

        return ;
        var vocabulary = {
            name:'Learn English',
            description:'Learn English as me',
            languages: [
                '5af8590a9652501c20ac0a0d',
                '5af8590a9652501c20ac0a0b',
            ],
            status:true,
        }



        VocabularyModel.insertVocabulary(new VocabularyModel(vocabulary),(error,result)=> {
            if(error) return res.send({error:error})
            if(result) return res.send({result:result})
        });

    }




}

module.exports = VocabularyController;