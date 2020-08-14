// const { text } = require("express");
const fs = require('fs')
const path = require('path')


const filepath = path.join(__dirname, 'imgLinksFinal.json')

const linksDetails = JSON.parse(fs.readFileSync(filepath))

const destinationFolder = path.join(__dirname,'..','..','templates','partials')

/////////////////////////////////////////
//       For All the image divs        //
/////////////////////////////////////////


// for(let j = 1;j<817;j++){
//     let name = 'Image'+j
//     let text = '<img class="memetemplate" id="templateImage" src="images/templateImages/'+linksDetails[name]["Image Link"].split("/")[5]+'" alt="">'
//     for(let i = 1;i<(linksDetails[name]["Text Fields"]+1);i++){
//         text = text + '<div class="textareadiv resizable" id="divchild'+(linksDetails[name]["Text Fields"]+1-i)+'" style=" position:absolute;'
//         +'    resize: both;'
//         + linksDetails[name]["Styles"][i-1]
//         +'border:2px dotted blue">'
//         +'<div class="resizers">'
//         +'<div class="resizer bottom-right"></div>'
//         +'<p>TEXT FIELD'+(linksDetails[name]["Text Fields"]+1-i)+'</p>'
//         +'</div>'
//         +'<div class="boxdraggable"></div>'
//         +'</div>'
//     }
//     let filename = linksDetails[name]['Title'].split(' ').join('_')+'.hbs'
//     if(filename.includes('?')){
//         filename = filename.split('?').join('')
//     }
//     let pathfolder = path.join(destinationFolder,filename)
//     fs.writeFileSync(pathfolder,text)
//     console.log(name+' '+filename+' created')
// }







/////////////////////////////////////////
//          For All the boxes          //
/////////////////////////////////////////



// let maxTextFeild = 0

// for(let i=1;i<817;i++){
//     let name = 'Image'+i
//     if(maxTextFeild<linksDetails[name]['Text Fields']){
//         maxTextFeild = linksDetails[name]['Text Fields']
//     }
// }


// for(let i = 0;i<maxTextFeild;i++){
//     let text = '<div class="textareasinputcontainer">'
//     for(let j = 0;j<(i+1);j++){
//         text = text + '<input type="text" class="textareainput" id="inputchild'+(j+1)+'">'
//     }
//     text = text + '<button id="btn-Preview-Image">download</button></div>'
//     let filename = (i+1)+'_box.hbs'
//     let pathfolder = path.join(destinationFolder,filename)
//     fs.writeFileSync(pathfolder,text)
//     console.log(filename+' Created')
// }




/////////////////////////////////////////
//         For All the routers         //
/////////////////////////////////////////


const routersDirectory = path.join(__dirname,'..','routers','router.js')

let text = 'const express = require("express");'
            +'const app = express.Router();'
text = text + 'app.get("/", (req, res) => { res.render("index", { memebox: function () { return "Distracted_Boyfriend"; }, controlbox: function () { return "3_box"; }, }); });'
for(let i = 1;i<817;i++){
    let name = 'Image'+i
    let url = linksDetails[name]['Title'].split(" ").join("_").split("?").join("")
    text = text + 'app.get("/'+url+'",(req,res)=>{'
    +' res.render("index",{'
    +' memebox : function(){ '
    +'return "'+url+'"; },'
    +'controlbox : function(){'
    +' return "'+linksDetails[name]['Text Fields']+'_box"; }, }); });'
}

text = text + 'module.exports = app;'

fs.writeFileSync(routersDirectory,text)