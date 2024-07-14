
function shortenURL() {
    const urlInput = document.getElementById('urlInput').value;
    const shortenedURL = `https://short.url/${btoa(urlInput).substring(0, 8)}`; // Simple encoding as a mock example
    document.getElementById('shortenedURL').innerText = `Shortened URL: ${shortenedURL}`;
}

function generateQRCode() {
    const urlInput = document.getElementById('urlInput').value;
    const qrCodeContainer = document.getElementById('qrcode');
    qrCodeContainer.innerHTML = '';
    new QRCode(qrCodeContainer, urlInput);
}
