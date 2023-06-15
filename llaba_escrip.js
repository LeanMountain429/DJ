leftShoulderY= 0
leftShoulderX= 0
rightShoulderY= 0
rightShoulderX= 0
function preload(){
    woords= loadSound("words.mp3")
    golden__hour= loadSound("golden-hour.mp3")
}
function setup(){
    canvas= createCanvas(500,500)
    camaweb= createCapture(VIDEO)
    camaweb.hide()
    reneuro= ml5.poseNet(camaweb,posenet_neuro)
    reneuro.on("pose",pose_on_show_my_results_not_your_results_XD)
}
function draw(){
    image(camaweb,0,0,500,500)
    fill("cyan")
    circle(leftShoulderX,leftShoulderY,50)
    circle(rightShoulderX,rightShoulderY,50)

    leftShoulder_equis= Number(leftShoulderX)
    leftShoulder_lle= Number(leftShoulderY)
    leftShoulder_lle= Math.round(leftShoulderY*2)
    leftShoulder_lle=leftShoulder_lle/1000
    woords.setVolume(leftShoulder_lle)
    golden__hour.setVolume(leftShoulder_lle)
    document.getElementById("Vol").innerHTML= "Volumen: "+leftShoulder_lle

    if (rightShoulderY>0&&rightShoulderY<100){
        golden__hour.rate(0.5)
        woords.rate(0.5)
        document.getElementById("Vel").innerHTML= "Velocidad: 0.5"
    }
    else if (rightShoulderY>100&&rightShoulderY<200){
        golden__hour.rate(1)
        woords.rate(1)
        document.getElementById("Vel").innerHTML= "Velocidad: 1"
    }
    else if (rightShoulderY>200&&rightShoulderY<300){
        golden__hour.rate(1.5)
        woords.rate(1.5)
        document.getElementById("Vel").innerHTML= "Velocidad: 1.5"
    }
    else if (rightShoulderY>300&&rightShoulderY<400){
        golden__hour.rate(2)
        woords.rate(2)
        document.getElementById("Vel").innerHTML= "Velocidad: 2"
    }
    else if (rightShoulderY>400&&rightShoulderY<500){
        golden__hour.rate(10)
        woords.rate(10)
        document.getElementById("Vel").innerHTML= "Velocidad: 2.5"
    }
}
function posenet_neuro(){
    console.log("MENSOOOOOOOOOOOO, QUE NO VES ESTE MENSAJE? ACASO ESTAS CIEGO COMO DORA???? NO, VERDAD?! SI VES ESTE MENSAJE ESQUE SI CARGO Y SI NO PUES TAS CIEGO COMO DORA *PIENSA* AY, QUE BOTS SON LOS TIPOS DE AHORA, AGH")
}
function pose_on_show_my_results_not_your_results_XD(results,error){
    if (error){
        console.error(error);
    }
    else{
        console.log(results)
        leftShoulderY= results[0].pose.leftShoulder.y
        leftShoulderX= results[0].pose.leftShoulder.x
        rightShoulderY= results[0].pose.rightShoulder.y
        rightShoulderX= results[0].pose.rightShoulder.x
    }
}
function words(){
    woords.play()
    woords.setVolume(0.5)
    woords.rate(1)
}
function golden_hour(){
    golden__hour.play()
    golden__hour.setVolume(0.5)
    golden__hour.rate(1)
}
function PARAR(){
    woords.stop()
    golden__hour.stop()
}