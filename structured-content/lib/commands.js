(function (w, d, ns) {

    var html = d.getElementsByTagName('html')[0];
    var outputLog = d.getElementById('outputLog');
    var jsonInput = d.getElementById('jsonInput');

    function sendSC() {
        var cmdName = lpTag.agentSDK.cmdNames.writeSC;
        var data = {
           json: {
		"type": "vertical",
		"elements": [
		   {
		     "type": "button",
		     "title": "Payment entry form",
		     "click": {
		       "actions": [
		         {
		           "type": "link",
		           "uri": jsonInput.value.trim(),
		           "name": "Payment entry form",
		           "target":"slideout"
         		}
         		]
		  }
                      }
		     ]
		  }
		  };

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