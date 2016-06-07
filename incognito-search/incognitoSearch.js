function searchSelected(selectedArea,window) {
  chrome.windows.create({  
    url: "https://www.google.com/search?q=" + selectedArea.selectionText,
    incognito: true
  });           
}

chrome.contextMenus.create({
  title: "Search Google in Incognito for \"%s\"", 
  contexts:["selection"], 
  onclick: searchSelected
});