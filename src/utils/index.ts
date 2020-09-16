import html2canvas from 'html2canvas';

export function DownloadElement(ref: HTMLElement, frameName?: string){
  html2canvas(ref, { logging: true, useCORS: true, scale: window.innerWidth < 660 ? 2 : 1 }).then(canvas => {
    var a = document.createElement('a');
    a.href=canvas.toDataURL("image/png");
    a.download = `moldura-${frameName}.png`
    a.click();
  })
}