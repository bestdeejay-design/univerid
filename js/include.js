// includeHTML helper: вставляет HTML-фрагмент в указанный селектор
function includeHTML(path, selector){
  fetch(path).then(function(res){
    if (!res.ok) throw new Error('fetch failed');
    return res.text();
  }).then(function(html){
    var el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  }).catch(function(){
    // silently ignore
  });
}
