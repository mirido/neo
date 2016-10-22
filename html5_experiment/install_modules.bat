@echo off
FOR /F "usebackq" %%i IN (`npm root -g`) DO SET GM_PATHES=%%i
echo %GM_PATHES%

xcopy /E/S %GM_PATHES%\*.* node_modules\

pause
