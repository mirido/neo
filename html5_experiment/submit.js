'use strict';

const shell = require('electron').shell;

let active = true;

function openExternal(url) {
  shell.openExternal(url);
}

// function postImage(url) {
//   var request = require('request');
//   request(url, function(error, response, body) {
//       console.log(body);
//   })
// }

function deactivate()
{
  document.getElementById('m_submit').disabled = true;
  document.getElementById('target').disabled = true;
  document.getElementById('undo').disabled = true;
  document.getElementById('viewport').style.opacity = 0.5;
  active = false;
}

function dataURItoBlob(dataURI)
{
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataURI.split(',')[1]);
  } else {
      byteString = unescape(dataURI.split(',')[1]);
  }

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], {type:'blob'});
};

function getSizeString(len)
{
  var result = String(len);
  while (result.length < 8) {
      result = "0" + result;
  }
  return result;
};

function submit(board)
{
  console.log("submit() called.");	// Test.
  deactivate();

  let joint_canvas = document.getElementById("joint_canvas");
  g_pictureCanvas.raiseLayerFixRequest();
  g_pictureCanvas.getJointImage(joint_canvas);

  var dataURL = joint_canvas.toDataURL('image/png');
  var blob = dataURItoBlob(dataURL);
  var url = "http://" + board + "/paintpost.php";

  var headerLength = getSizeString(0);
  var imgLength = getSizeString(blob.size);
  var body = new Blob(
    [ 'P', // PaintBBS
      headerLength,
      imgLength,
      '\r\n',
      blob], {type: 'blob'});

  if (0) {
    // xhrで直接送信する場合
    var oReq = new XMLHttpRequest();
    oReq.open("POST", url, true);
    oReq.onload = function (e) {
      console.log(oReq.response);
    }
    oReq.send(body);
  } else {
    // node経由で送信する場合
    var arrayBuffer;
    var fileReader = new FileReader();
    fileReader.onload = function() {
      arrayBuffer = this.result;
      var dataView = new DataView(arrayBuffer);

      var headers = {
          'Content-Type': 'application/octet-stream',
          'User-Agent': 'PaintBBS/2.x'
      };
      var options = {
          url: url,
          method: 'POST',
          headers: headers,
          body: new Uint8Array(arrayBuffer),
      }

      var request = require('request');
      request(
        options,
        function(error, response, body) {
          if (body) console.log(body);
          var exitURL = "http://" + board + "/futaba.php?mode=paintcom";
          openExternal(exitURL);
        }
      );
    };
    fileReader.readAsArrayBuffer(body);
  }
};
