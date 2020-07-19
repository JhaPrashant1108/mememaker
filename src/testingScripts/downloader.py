import json
import sys
import os
import urllib.request
import requests


def download_image(src, path , name):
    page = requests.get(src)
    with open(path,'wb') as f:
        f.write(page.content)
    print(name+' Downloaded')





filePath = os.path.join(os.getcwd(),'src','testingScripts','imgLinksFinal.json')
templateImages = os.path.join(os.getcwd(), 'public', 'images', 'templateImages')
previewImages = os.path.join( os.getcwd(),'public', 'images', 'previewImages')



images = json.load(open(filePath, ))


for k in images:
    title = images[k]['Title']
    imageLink = images[k]['Image Link']
    name = imageLink.split("/")[5]
    previewname = 'Preview-' + imageLink.split("/")[5]
    previewLink = images[k]['Preview Image Link']
    imageLocation = os.path.join(templateImages, name)
    previewLocation = os.path.join(previewImages, previewname)
    download_image(imageLink,imageLocation,name)
    download_image(previewLink,previewLocation,previewname)



print('Finished')
