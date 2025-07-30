
const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSuc-XJn1YmTCl-5WtrYeOKBS8nfTnRsFCfeNMRvzJcbavfGIX9SUSQdlZnVNPQtapcgr2m4tAwYznB/pub?gid=363948896&single=true&output=csv';

async function fetchAndDisplay() {
  const content = document.getElementById('content');
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Erreur réseau');
    const csv = await response.text();
    content.textContent = csv.split('\n').slice(0, 10).join('\n');
  } catch (error) {
    content.textContent = 'Erreur de chargement : ' + error.message;
    console.error(error);
  }
}

fetchAndDisplay();
