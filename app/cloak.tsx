
export default function cloak() {
    let win: any = window.open();
    let iframe: any = win.document.createElement('iframe');
    let body: any = win.document.body;
    body.style.margin = "0";
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.border = "none";
    iframe.src = window.location.href;
    win.document.body.appendChild(iframe);
}