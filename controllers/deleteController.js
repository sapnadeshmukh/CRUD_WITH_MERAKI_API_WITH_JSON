const fs = require('fs')
const jsonFile=require('../courses.json')

module.exports.delete_data=(req, res) => {
        let myArr=jsonFile.availableCourses

        for (var i=0; i < myArr.length; i++) {
            if (myArr[i].id == req.params.id){
                break;
            }
        }
        if(myArr[i].id == req.params.id){
            

            let myObj=(myArr[i])
            console.log(myObj)
            let myObjndex=myArr.indexOf(myObj)


            let removed=myArr.splice(myObjndex, 1); // To delete specific user ID
            jsonFile.availableCourses=myArr

                        
            fs.writeFile('courses.json', JSON.stringify(jsonFile,null,4),function(err, result) {

                if (err) console.log('error', err);
                    console.log("Data has deleted");
                    res.send("Data has deleted!!!!")
            });
        }else{
            console.log("Id does not exists!!")
            res.send("Id does not exists!!")


        }
}



        