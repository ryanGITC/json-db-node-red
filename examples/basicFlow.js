[{"id":"b22478d.889f088","type":"json-db-collection","z":"81198564.7ee678","name":"Test","collection":"test","save":true},{"id":"fb08f2bf.d3cbf","type":"debug","z":"3fcff694.a801ca","name":"","active":true,"console":"false","complete":"false","x":675,"y":284,"wires":[]},{"id":"6b0d1d3d.ce9a04","type":"DataOut","z":"3fcff694.a801ca","collection":"b22478d.889f088","name":"","path":"/","error":false,"x":548,"y":330,"wires":[["fb08f2bf.d3cbf"]]},{"id":"db62d3b.5a0073","type":"change","z":"3fcff694.a801ca","name":"","rules":[{"t":"set","p":"datapath","pt":"msg","to":"/myRootTest/currentTime","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":366,"y":327,"wires":[["6b0d1d3d.ce9a04"]]},{"id":"c40be78f.4f9828","type":"inject","z":"3fcff694.a801ca","name":"","topic":"","payload":"test","payloadType":"str","repeat":"","crontab":"","once":false,"x":258,"y":265,"wires":[["db62d3b.5a0073"]]},{"id":"8aafdad1.1a28f8","type":"inject","z":"3fcff694.a801ca","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":228,"y":98,"wires":[["da91036b.8b9c9"]]},{"id":"da91036b.8b9c9","type":"change","z":"3fcff694.a801ca","name":"","rules":[{"t":"set","p":"datapath","pt":"msg","to":"/myRootTest/currentTime","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":419,"y":178,"wires":[["e0c848ba.ecfc28"]]},{"id":"e0c848ba.ecfc28","type":"DataIn","z":"3fcff694.a801ca","collection":"b22478d.889f088","name":"","update":false,"path":"/","x":536,"y":250,"wires":[]},{"id":"f2c1b062.623b7","type":"comment","z":"3fcff694.a801ca","name":"Help Set Data","info":"Push to set the /myRootTest/currentTime as the current time in the collection Test","x":239,"y":43,"wires":[]},{"id":"393a8b07.0a4ac4","type":"comment","z":"3fcff694.a801ca","name":"Help Get Data","info":"Push to get the /myRootTest/currentTime a from the collection Test.\nThat time has been set by the set data.","x":237,"y":228,"wires":[]}]