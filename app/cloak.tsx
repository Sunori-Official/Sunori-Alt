
export default function cloak() {
    let win: any = window.open()
    let url: string = "https://example.com"
    let iframe: any = win.document.createElement('iframe')
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.border = "none";
    iframe.src = url
    win.document.body.appendChild(iframe)
}