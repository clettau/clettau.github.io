(function (w, d, ns) {

    var html = d.getElementsByTagName('html')[0];
    var outputLog = d.getElementById('outputLog');
    var jsonInput = d.getElementById('jsonInput');

    function getVar() {
{
    var onSuccess = function(data) {
        alert("here");
    };

    var onError = function(err) {
        // Do something with the error
    };

    var pathToData = "visitorInfo.visitorName";

    lpTag.agentSDK.get(pathToData, onSuccess, onError);
}

        clearLog();

        lpTag.agentSDK.command(cmdName, data, function (err) {
            outputLog.value = err ? err : 'done';
        });
    }

    function clearLog() {
        outputLog.value = '';
    }

    ns.commands = {
        sendSC: sendSC,
        clearLog: clearLog,
    };

})(window, document, window.structuredContentWidget = window.structuredContentWidget || {});