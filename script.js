let qrCode = null;

function generateQRCode() {
    const inputText = document.getElementById('qr-text').value;
    const qrCodeElement = document.getElementById('qr-code');
    const foregroundColor = document.getElementById('foreground-color').value;
    const backgroundColor = document.getElementById('background-color').value;

    // Clear previous QR code
    qrCodeElement.innerHTML = '';

    if (inputText) {
        // Generate new QR code
        qrCode = new QRCode(qrCodeElement, {
            text: inputText,
            width: 256,
            height: 256,
            colorDark: foregroundColor,
            colorLight: backgroundColor,
            correctLevel: QRCode.CorrectLevel.H
        });

        // Enable the download button
        document.getElementById('download-btn').disabled = false;
    } else {
        alert("Please enter some text or URL to generate a QR code.");
    }
}

function downloadQRCode() {
    if (qrCode) {
        const qrCodeImage = document.querySelector("#qr-code img");

        if (qrCodeImage) {
            // Create a temporary canvas to draw the QR code
            const canvas = document.createElement('canvas');
            canvas.width = qrCodeImage.width;
            canvas.height = qrCodeImage.height;

            const context = canvas.getContext('2d');
            context.drawImage(qrCodeImage, 0, 0);

            // Convert canvas to image and trigger download
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'qr-code.png';
            link.click();
        }
    }
}




//function generateQRCode() {
//     const inputText = document.getElementById('qr-text').value;
//     const qrCodeElement = document.getElementById('qr-code');

//     // Clear previous QR code
//     qrCodeElement.innerHTML = '';

//     if (inputText) {
//         // Generate new QR code
//         new QRCode(qrCodeElement, {
//             text: inputText,
//             width: 256,
//             height: 256,
//             colorDark : "#000000",
//             colorLight : "#ffffff",
//             correctLevel : QRCode.CorrectLevel.H
//         });
//     } else {
//         alert("Please enter some text or URL to generate a QR code.");
//     }
// }