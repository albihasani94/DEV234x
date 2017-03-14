document.getElementById("analyseButton").addEventListener("click", analyze);

function analyze() {

    var reqBody = {
                "url": document.getElementById("input").value
    };

    var myHeader = new Headers({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': 'c4f54e18f5564e48ae10190e39f9e91d'
    });

    var initObject = {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: myHeader
    }

    var request = new Request('https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=age,gender', initObject);

    document.getElementById("outputImage").src = document.getElementById("input").value;

    fetch(request).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else {
            return Promise.reject(new Error(response.statusText));
        }
    }).then(function (response) {
        if(response.length == 0) {
            document.getElementById("attributes").innerHTML = "No Faces Detected";
        } else {
            var faceAttrs = response[0].faceAttributes;
			document.getElementById("attributes").innerHTML = "Age: " + faceAttrs.age + "<br/>Gender: " + faceAttrs.gender;
        }
    }).catch(function (err) {
        alert(err);
        document.getElementById("attributes").innerHTML = "";
    });

}