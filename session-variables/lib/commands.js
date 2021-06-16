(function (w, d, ns) {

    var html = d.getElementsByTagName('html')[0];
    var outputLog = d.getElementById('outputLog');
    var sessVars = d.getElementById('sessVars');

    function getVar() {
{
    var onSuccess = function(data) {
	sessVars.value = data;
    };

    var onError = function(err) {
        // Do something with the error
    };

    var pathToData = "chatInfo.rtSessionId";

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
        getVar: getVar,
        clearLog: clearLog,
    };

})(window, document, window.structuredContentWidget = window.structuredContentWidget || {});