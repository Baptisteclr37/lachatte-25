const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSuc-XJn1YmTCl-5WtrYeOKBS8nfTnRsFCfeNMRvzJcbavfGIX9SUSQdlZnVNPQtapcgr2m4tAwYznB/pub?gid=363948896&single=true&output=csv';

// Passage par un proxy CORS (AllOrigins)
const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(csvUrl);

fetch(proxyUrl)
.then(response => {
if (!response.ok) throw new Error("Erreur réseau");
return response.text();
})
.then(csvText => {
document.getElementById('output').textContent = csvText;
console.log(csvText);
})
.catch(err => {
document.getElementById('output').textContent = 'Erreur: ' + err.message;
console.error(err);
});
