const video = document.getElementById("video");

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo)

function startVideo(){
    video.addEventListener('playing', () => {
        const canvas = faceapi.createCanvasFromMedia(video)
        var ele = document.getElementById('videoele');
        ele.append(canvas)
        const displaySize = { width: video.width, height: video.height }
        faceapi.matchDimensions(canvas, displaySize)
        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
            const resizedDetections = faceapi.resizeResults(detections, displaySize)
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
            faceapi.draw.drawDetections(canvas, resizedDetections)
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
            faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
        }, 100)
    })
}

$("#ddlViewBy").on("change", function() {
    var ddlViewBy = document.getElementById('ddlViewBy');
    var value = ddlViewBy.options[ddlViewBy.selectedIndex].value;
    var t;
    var t1 = document.getElementById('heading');
    
    if(value == "camera1"){
        t = "/videos/1.mp4"
        t1.textContent = "Prisoner 1 Facial Emotion Tracking"
    }
    else if(value == "camera2"){
        t = "/videos/2.mp4"
        t1.textContent = "Prisoner 2 Facial Emotion Tracking"
    }
    else if(value == "camera3"){
        t = "/videos/3.mp4"
        t1.textContent = "Prisoner 3 Facial Emotion Tracking"
    }

    $("video").attr("src",t);
});