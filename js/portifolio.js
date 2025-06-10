document.getElementById('baixarCV').addEventListener('click', async () => {
  try {
    const response = await fetch('arquivo/CV.pdf'); // caminho relativo ao index.html
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const linkCV = document.createElement('a');
    linkCV.href = url;
    linkCV.download = 'Manoela-Cruz-Curriculo.pdf';
    document.body.appendChild(linkCV);
    linkCV.click();

    document.body.removeChild(linkCV);
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Erro ao baixar o currículo:', err);
  }
});