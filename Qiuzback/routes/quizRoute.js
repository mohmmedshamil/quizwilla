const Quiz = require('../model/quizModel')
const { Responsedata } = require('../model/Response')
const router=require('express').Router()

router.post('/add',async (req,res)=>{
    const newQuiz=new Quiz({
        question:req.body.question,
        group:req.body.group,
        Answer:req.body.Answer,
        options:req.body.options,
        userId:req.body.userId,
    })
    try{
        var result=await newQuiz.save()
        res.status(200).send(result)
    }
    catch (err){
        res.status(500).send("something went wrong"+err)
    }
})

router.put('/update/:id',async (req,res)=>{
    var id=req.params.id
    console.log(id)
    var quiz=await Quiz.findOne({_id:id})
    if(quiz !=null)
    {
    try{
        var result=await Quiz.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).send(result)
    }
    catch (err){
        res.status(500).send("something went wrong"+err)
    }
    
}
else{
    res.status(500).send("invalid id")    
}
})

router.delete('/delete/:id',async (req,res)=>{
    var id=req.params.id
    console.log(id)
    try{
        var result=await Quiz.findByIdAndDelete(id)
        res.status(200).send(result)
    }
    catch (err){
        res.status(500).send("something went wrong"+err)
    }
})

router.get('/getall',async (req,res)=>{
    let resp=new Responsedata();
    try{
        var quizList=await Quiz.find({})
        if(quizList.length==0){
            resp.statuscode=200
            resp.message="data is null"
        }
        else{
            resp.statuscode=200
        resp.message=quizList
        }
        
    }
    catch(err){
        resp.statuscode=500
        resp.message=err
    }
    res.status(resp.statuscode).send(resp.message)
    
})

router.get('/getbyid/:id',async (req,res)=>{
    var id=req.params.id
    let resp=new Responsedata();
    try{
        var quizList=await Quiz.findOne({_id:id})
        if(allcars == null){
            resp.statuscode=200
            resp.message="data is null"
        }
        else{
            resp.statuscode=200
        resp.message=quizList
        }
        
    }
    catch(err){
        resp.statuscode=500
        resp.message=err
    }
    res.status(resp.statuscode).send(resp.message)
    
})



// router.get('/collection/:collection',async (req,res)=>{
//     let resp=new Responsedata();
//     var collection=req.params.collection
//     // console.log(collection)ie
//     try{
//         var colCars=await Car.find({collectionName:collection})
//         if(colCars.length==0){
//             resp.statuscode=200
//             resp.message="data is null"
//         }
//         else{
//             const unique =[...new Map(colCars.map(item =>
//                 [item['carName'], item])).values()]
//             resp.statuscode=200
//         resp.message=unique
//         }
        
//     }
//     catch(err){
//         resp.statuscode=500
//         resp.message=err
//     }
//     res.status(resp.statuscode).send(resp.message)

// })


// router.get('/location/:location',async (req,res)=>{
//     let resp=new Responsedata();
//     var location=req.params.location
//     // console.log(collection)ie
//     try{
//         var colCars=await Car.find({location:location})
//         if(colCars.length==0){
//             resp.statuscode=200
//             resp.message="data is null"
//         }
//         else{
//         // const unique = [...new Set(colCars.map(item => item.carName))]
//         const unique =[...new Map(colCars.map(item =>
//             [item['carName'], item])).values()]
//             resp.statuscode=200
//         resp.message=unique
//         }
        
//     }
//     catch(err){
//         resp.statuscode=500
//         resp.message=err
//     }
//     res.status(resp.statuscode).send(resp.message)

// })

module.exports=router