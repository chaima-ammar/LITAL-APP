var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
app.use(cors())

let x = Date.now()
let code = x.toString().substring(0,7)

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/imageuplod')
    },
    filename: function (req, file, cb) {
      cb(null, code + '-' +file.originalname )
    }
  })
  
  var upload = multer({ storage: storage }).array('file')
  
app.get('/',function(req,res){
    return res.send('Hello Server')
})
app.post('/upload',function(req, res) {
    
    upload(req, res, function (err) {
     
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err + "muttelerror")
          // A Multer error occurred when uploading.
        } else if (err) {
            return res.status(500).json(err +"uncow error")
          // An unknown error occurred when uploading.
        } 
        
        return res.status(200).send(req.file)
        // Everything went fine.
      })
});

app.listen(8000, function() {
    console.log('App running on port 8080');
});