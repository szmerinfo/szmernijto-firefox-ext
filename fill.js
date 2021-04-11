browser.storage.local.get('previous_tab_data').then(({ previous_tab_data }) => {
  if (window.location.href.includes('szmer.info/create_post') && previous_tab_data) {
    fetch(`https://szmer.info/iframely/oembed?url=${previous_tab_data.url}`).then(e => {
      if (e.status === 200) return e.json();
      return false;
    }).then(data => {
      document.getElementById('post-url').value = data && data.url ? data.url : previous_tab_data.url;
      document.getElementById('post-title').value = data && data.title ? data.title : previous_tab_data.title;
      document.querySelector('[id^="comment-textarea-"]').value = data && data.description ? data.description : '';
      browser.storage.local.remove("previous_tab_data");
    });
  }
});
