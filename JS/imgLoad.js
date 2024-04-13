function imgLoad(url) {
    // with two parameters, resolve and reject
    // UTILISE LE BLOB POUR RETOURNER UNE IMAGE EN URL.
    return new Promise(function(resolve, reject) {
        // Standard XHR to load an image
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';
        // When the request loads, check whether it was successful
        request.onload = function() {
            if (request.status === 200) {
                // If successful, resolve the promise by passing back the request response
                resolve(request.response);
            } else {
                // If it fails, reject the promise with a error message
                reject(Error('Image ne charge pas voir l\'URL error code:' + request.statusText));
            }
        };
        request.onerror = function() {
            // Also deal with the case when the entire request fails to begin with
            // This is probably a network error, so reject the promise with an appropriate message
            reject(Error('Erreur dans le réseau network.'));
        };
        // Send the request
        request.send();
    });
}
// Get a reference to the body element, and create a new image object
// FAIRE RÉFÉRENCE AU BODY OU AUTRES ENDROITS ET RÉFÉRENCE DOIT ÊTRE UNE IMG
var body = document.querySelector('body');
var sectionNosMembresAccueil = document.getElementById('sectionNosMembresAccueil');
var myImage = new Image();
// Call the function with the URL we want to load, but then chain the
// promise then() method on to the end of it. This contains two callbacks

//METTRE L'URL DE L'IMAGE ICI !!!
imgLoad('https://static.miraheze.org/greatcharacterswiki/thumb/4/46/Waluigi.png/300px-Waluigi.png').then(function(response) {
    // The first runs when the promise resolves, with the request.response
    // 1. DÉFINIR LE CODE POUR APPEND 2. ENVOYÉ UNE ERREUR
    var imageURL = window.URL.createObjectURL(response);
    myImage.src = imageURL;
    body.appendChild(myImage);
    // The second runs when the promise
    // is rejected, and logs the Error specified with the reject() method.
}, function(Error) {
    console.log(Error);
});