const fs = require('fs')
const path = require('path')
const request = require('request')
const https = require('https');
const download = require('image-downloader')

const filepath = path.join(__dirname, 'imgLinksFinal.json')
const templateImages = path.join(__dirname, '..', '..', 'public', 'images', 'templateImages')
const previewImages = path.join(__dirname, '..', '..', 'public', 'images', 'previewImages')


const images = JSON.parse(fs.readFileSync(filepath))


const downloadadaws = (url, path) => {
    request.head(url, (err, res, body) => {
        request(url)
            .pipe(fs.createWriteStream(path))
            .on('close', console.log('Done'))
    })
}

function saveImageToDisk(url, localPath) {
    var file = fs.createWriteStream(localPath);
    // var request = 
    https.get(url, function (response) {
        response.pipe(file);
    });
}





for (let k in images) {
    const title = images[k]['Title']
    const imageLink = images[k]['Image Link']
    const name = k + '-' + imageLink.split("/")[5]
    const previewname = k + '-preview-' + imageLink.split("/")[5]
    const previewLink = images[k]['Preview Image Link']
    const imageLocation = path.join(templateImages, name)
    const previewLocation = path.join(previewImages, previewname)
    const imageOption = {
        url: imageLink,
        dest: imageLocation
    }
    const previewOption = {
        url: previewLink,
        dest: previewLocation
    }
    download.image(imageOption)
        .then(({ filename }) => {
            console.log('Saved to', filename)  // saved to /path/to/dest/photo.jpg
        })
        .catch((err) => console.error(err))
    download.image(previewOption)
        .then(({ filename }) => {
            console.log('Saved to', filename)  // saved to /path/to/dest/photo.jpg
        })
        .catch((err) => console.error(err))
}



//Node.js Function to save image from External URL.
