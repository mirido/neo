@ECHO OFF
REM Node.js����electron���W���[�����Q�Ɖ\�ɂ��邽�߂̊��ϐ��ݒ�B
SET NODE_PATH=%APPDATA%\npm

REM node-inspector�N��	# Web�y�[�W�f�o�b�O�̏ꍇ�͂���͕s�v�̖͗l
REM start node-inspector

REM PaintBBS Neo�N��
REM electron --debug .	# node-inspector���g��Ȃ��̂�--debug�t���O�͕s�v�B
electron .

REM paths:
REM D:\proj_picbbs\myapp\node_nodules
REM D:\proj_picbbs\node_modules
REM D:\node_modules
REM C:\Users\Plan9\AppData\Roaming\npm\node_modules\electron-prebuilt\dist\resources\electron.asar\renderer\api\exports
