document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('year').textContent=new Date().getFullYear();
  const photos=document.querySelectorAll('.photo');
  const modal=document.getElementById('modal');
  const modalImage=document.getElementById('modalImage');
  const modalArt=document.getElementById('modalArt');
  const modalClose=document.getElementById('modalClose');

  function closeModal(){
    modalImage.src='';
    modalImage.style.display='none';
    modalArt.innerHTML='';
    modalArt.style.display='none';
    modal.setAttribute('aria-hidden','true');
  }

  photos.forEach(btn=>{
    const src=btn.dataset.src||'';
    if(src){
      const probe=new Image();
      probe.onload=()=>{
        const img=document.createElement('img');
        img.src=src;
        img.alt=btn.getAttribute('aria-label')||'';
        img.className='photo-thumb';
        btn.innerHTML='';
        btn.appendChild(img);
      };
      probe.src=src;
    }

    btn.addEventListener('click',()=>{
      const thumbImg=btn.querySelector('img.photo-thumb');
      modal.setAttribute('aria-hidden','false');
      if(thumbImg){
        modalImage.src=thumbImg.src;
        modalImage.style.display='block';
        modalArt.innerHTML='';
        modalArt.style.display='none';
      } else {
        const svg=btn.querySelector('svg');
        modalImage.src='';
        modalImage.style.display='none';
        modalArt.innerHTML=svg?svg.outerHTML:'';
        modalArt.style.display='block';
      }
    });
  });
  modalClose.addEventListener('click',closeModal);
  modal.addEventListener('click',(e)=>{ if(e.target===modal) closeModal(); });
  document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') closeModal(); });
});
