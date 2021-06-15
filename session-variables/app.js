(function (w, d, ns) {
    
    var grabBtn = d.getElementById('grabBtn');
    var clearLogBtn = d.getElementById('clearLogBtn');
 
    function bindCommand(el, cmd) {
        el.addEventListener('click', ns.commands[cmd]);
    }

    function initSdk() {
        lpTag.agentSDK.init({});
    }

    function init() {
        bindCommand(grabBtn, 'getVar');
        bindCommand(clearLogBtn, 'clearLog');
  
        initSdk();
    }


    init();

})(window, document, window.structuredContentWidget = window.structuredContentWidget || {});