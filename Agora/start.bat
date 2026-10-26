@echo off
rem Startet Agora lokal und öffnet den Browser
cd /d "%~dp0"
start "" http://localhost:8765
node tools\serve.js 8765
