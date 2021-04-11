browser.storage.local.get('previous_tab_data').then(({ previous_tab_data }) => {
  if (window.location.href.includes('szmer.info/create_post') && previous_tab_data) {
    fetch(`https://szmer.info/iframely/oembed?url=${previous_tab_data.url}`).then(e => {
      if (e.status === 200) return e.json();
      return false;
    }).then(data => {
      const el_url = document.getElementById('post-url');
      el_url.value = data && data.url ? data.url : previous_tab_data.url;
      el_url.dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': true }));
      
      const el_title = document.getElementById('post-title');
      el_title.value = data && data.title ? data.title : previous_tab_data.title;
      el_title.dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': true }));
      
      const el_description = document.querySelector('[id^="comment-textarea-"]');
      el_description.value = data && data.description ? data.description : '';
      el_description.dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': true }));
      
      browser.storage.local.remove("previous_tab_data");
    });
  }
});
