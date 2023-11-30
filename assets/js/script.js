document.addEventListener("DOMContentLoaded", function () {
    const html5QrCode = new Html5Qrcode("reader");
    function onScanSuccess(decodedText, decodedResult) {
        console.log(`Code matched = ${decodedText}`, decodedResult);
        Swal.fire({
            title: "Code Matched",
            text: (`${decodedText}`),
            icon: "info"
        });
    }
function onScanFailure(error) {
    console.warn(`Code scan error = ${error}`);
}
// Start scanning
html5QrCode.start(
{ facingMode: "environment" },
{ fps: 10, qrbox: { width: 250, height: 250 } },
    onScanSuccess,
    onScanFailure
    ).catch((err) => {
    console.error(`Start failed. Reason: ${err}`);
});
// Stop scanning when the window is closed
window.addEventListener("beforeunload", function () {
    if (html5QrCode) {
    html5QrCode.stop().then(() => {
        console.log("QR Code scanning stopped");
    }).catch((err) => {
        console.error(`Stop failed. Reason: ${err}`);
    });
    }
});
});