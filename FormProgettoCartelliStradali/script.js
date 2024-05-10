const endpoint= "https://jacopocorbani.alwaysdata.net/apisegnalistradali/segnali";

document.getElementById('cartelloForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita il comportamento predefinito di invio del modulo

    var formData = new FormData(this); // Crea un oggetto FormData con i dati del modulo

    // Effettua la richiesta POST al tuo web service
    fetch(endpoint,  {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Visualizza il risultato dell'operazione
        document.getElementById('risultato').innerHTML = data.message;
    })
    .catch(error => {
        console.error('Errore durante l\'invio dei dati:', error);
        console.log(formData);
        document.getElementById('risultato').innerHTML = 'Si è verificato un errore durante l\'invio dei dati.';
    });
});
