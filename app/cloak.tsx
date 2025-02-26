import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";

export default function cloak() {
    const win: any = window.open();
    const embed: any = win.document.createElement('embed');
    const body: any = win.document.body;
    const url: string = "https://example.com"
    body.style.margin = "0";
    embed.style.width = "100vw";
    embed.style.height = "100vh";
    embed.style.border = "none";
    embed.src = window.location.href;
    win.document.body.appendChild(embed);
}