var currentWindow = chrome.app.window.current();
document.getElementById('navMin').onclick = function () {
  currentWindow.minimize();
}
document.getElementById('navMax').onclick = function () {
  if (currentWindow.isMaximized() || currentWindow.isFullscreen()) {
    currentWindow.restore();
  } else {
    currentWindow.maximize();
  }
}
document.getElementById('navClose').onclick = function () {
  currentWindow.close();
}

document.getElementById("webview").addEventListener('permissionrequest', function(e) {
  if (e.permission === 'media') {
    e.request.allow();
  }
  if (e.permission === 'fullscreen') {
    e.request.allow();
  }
});