import html2canvas from 'html2canvas-render-offscreen';

export function DownloadElement(ref: HTMLElement, frameName?: string){
  html2canvas(ref, { 
    logging: true, 
    useCORS: true, 
    proxy: process.env.REACT_APP_PROXY_URL!, 
    scale: window.innerWidth < 660 ? 2 : 1,
    width: 500,
    height: 500
  }).then((canvas:any) => {
    let a = document.createElement('a');
    a.href=canvas.toDataURL("image/png");
    a.download = `moldura-${frameName}.png`
    a.click();
  })
}