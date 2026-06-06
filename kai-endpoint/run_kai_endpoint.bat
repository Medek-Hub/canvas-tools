@echo off
cd /d "%~dp0"
title Kai Secure Endpoint for Steven
echo Starting Kai secure endpoint...
echo.

if not exist node_modules (
  echo Installing endpoint dependencies...
  echo.
  npm install
  echo.
)

npm start
pause
