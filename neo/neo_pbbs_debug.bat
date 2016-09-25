@ECHO OFF
REM Node.jsからelectronモジュールを参照可能にするための環境変数設定。
SET NODE_PATH=%APPDATA%\npm

REM node-inspector起動	# Webページデバッグの場合はこれは不要の模様
REM start node-inspector

REM PaintBBS Neo起動
REM electron --debug .	# node-inspectorを使わないので--debugフラグは不要。
electron .

REM paths:
REM D:\proj_picbbs\myapp\node_nodules
REM D:\proj_picbbs\node_modules
REM D:\node_modules
REM C:\Users\Plan9\AppData\Roaming\npm\node_modules\electron-prebuilt\dist\resources\electron.asar\renderer\api\exports
