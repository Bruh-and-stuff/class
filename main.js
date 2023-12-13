Webcam.set({
    width:485,
    height:440,
    image_format:"png",
    png_quality:90
})

Webcam.attach("#camera")

function capture(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = "<img id='result_img' src='"+data_url+"'>"
    })
}


console.log("ml5 version: ", ml5.version)
var teach_machine = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HOV537YMO/model.json", finLoad)

function finLoad(){
    console.log("this code looks scary")
    console.log("no it doesnt")
}

function recognise(){
    var image = document.getElementById("result_img")
    teach_machine.classify(image, madeResults)
}

function madeResults(error, result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        document.getElementById("object").innerHTML = result[0].label
        var confidenceTrue = (result[0].confidence.toFixed(2))*100 + "%"
        document.getElementById("accuracy").innerHTML = confidenceTrue
    }
}