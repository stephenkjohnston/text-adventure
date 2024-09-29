document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="workstation">
    <div id="monitor">
      <div id="screen">$ HELLO</div>
    </div>
    <div id="monitor--panel">
      <div class="monitor--panel__left"></div>
      <div class="monitor--panel__center"></div>
      <div class="monitor--panel__right">
        <label>video monitor <span>model T1000</span></label>
        <button data-label="power"></button>
      </div>
    </div>
  </div>
`