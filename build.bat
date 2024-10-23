@echo off
setlocal

:: Define the base directory, output directory, and target folder names
set baseDir=%cd%
set outputDir=%baseDir%\outputPlugin
set targetFolder=%outputDir%\qgis2web
set zipFile=%outputDir%\QGIS2web.zip

:: Create the outputPlugin folder if it doesn't exist
if not exist "%outputDir%" (
    mkdir "%outputDir%"
)

:: Delete the qgis2web folder if it exists
if exist "%targetFolder%" (
    echo Deleting existing folder: "%targetFolder%"
    rmdir /s /q "%targetFolder%"
)

:: Delete the QGIS2web.zip file if it exists
if exist "%zipFile%" (
    echo Deleting existing zip file: "%zipFile%"
    del "%zipFile%"
)

:: Create the qgis2web folder inside outputPlugin
mkdir "%targetFolder%"

:: Copy all files and folders (excluding the .github folder and .gitignore file) to the qgis2web folder
robocopy . "%targetFolder%" /mir /xd "%targetFolder%" ".github" /xf ".gitignore" /njh /njs

:: Compress the qgis2web folder itself (not just its contents) into QGIS2web.zip using 7-Zip
7z a "%zipFile%" "%targetFolder%"

:: Notify the user of the successful completion
echo Folder "%targetFolder%" has been zipped into "%zipFile%" inside "%outputDir%".

endlocal
pause
