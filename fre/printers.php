<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Network Printer</title>
    <link rel="stylesheet" href="style.css">
</head>
<?php include 'header.php'; ?>
<?php displayHeader("Add Network Printer"); ?>

<body>

    <section>
        <h2>Printer Setup</h2>
        <p>Before you start, ensure that your printer is connected to the same network as your device (Usually, this is
            the "GUSD" network).</p>

        <h2>Step 1: Obtain the Printer Configuration Report</h2>
        <p>Before adding the printer to your network, it's helpful to obtain a configuration report from the printer
            itself. This report usually includes necessary information such as the printer's IP address and hostname.
            The exact steps to obtain this report may vary depending on your HP printer model. Here's a general
            guideline:</p>
        <ol>
            <li>Press the "Menu" button on your printer's control panel.</li>
            <li>Navigate to "Network" or "Wireless" settings.</li>
            <li>Look for an option like "Print Network Configuration," "Wireless Test Report," or "Configuration Page."
            </li>
            <li>Select the appropriate option to print the report. Follow any on-screen prompts if necessary.</li>
        </ol>

        <h2>For Windows:</h2>
        <h3>Step 2: Add Printer (Windows)</h3>
        <ol>
            <li>Go to "Settings" by pressing Windows Key + I.</li>
            <li>Click on "Devices."</li>
            <li>Select "Printers & scanners" from the left-hand menu.</li>
            <li>Click on "Add a printer or scanner."</li>
            <li>Windows will search for available printers. If your printer is not found, click on "The printer that I
                want isn't listed."</li>
            <li>Select "Add a printer using a TCP/IP address or hostname" and click "Next."</li>
            <li>Enter the IP address or hostname of your HP printer.</li>
            <li>Follow the on-screen instructions to complete the setup. Windows will install the necessary drivers
                automatically.</li>
        </ol>

        <h2>For macOS:</h2>
        <h3>Step 2: Add Printer (macOS)</h3>
        <ol>
            <li>Open "System Preferences" from the Apple menu.</li>
            <li>Click on "Printers & Scanners."</li>
            <li>Click the "+" button to add a new printer.</li>
            <li>Select the "IP" tab at the top of the window.</li>
            <li>Enter the IP address or hostname of your HP printer in the "Address" field.</li>
            <li>macOS will automatically populate the "Protocol" and "Queue" fields. You can leave these as default.
            </li>
            <li>Choose the appropriate "Driver" from the dropdown menu or leave it as "Select Printer Software" to let
                macOS choose.</li>
            <li>Click "Add" to add the printer.</li>
        </ol>

        <h2>For Chrome OS:</h2>
        <h3>Step 2: Add Printer (Chrome OS)</h3>
        <ol>
            <li>Click on the system tray in the bottom-right corner.</li>
            <li>Click on the gear icon to open "Settings."</li>
            <li>In the "Settings" window, scroll down and click on "Advanced."</li>
            <li>Scroll down to "Printing" and click on "Printers."</li>
            <li>Click "Add printer."</li>
            <li>Chrome OS will automatically search for printers on the network. If your printer is not found, click
                "Add manually."</li>
            <li>Enter the IP address or hostname of your HP printer in the "Hostname or IP address" field.</li>
            <li>Choose the printer manufacturer and model from the dropdown menus.</li>
            <li>Click "Add" to add the printer.</li>
        </ol>
    </section>

    <section>
        <h2>HP Printer Configuration Page Report</h2>
        <p>The HP Printer Configuration Page Report provides valuable information about your HP printer, including
            network settings, printer status, and more. You can generate this report directly from your HP printer's
            control panel or through the printer's web interface.</p>
        <p>For detailed instructions on how to print the configuration page report for your specific HP printer model,
            refer to the official HP support document:</p>
        <p><a href="https://support.hp.com/us-en/document/c06036128" target="_blank">HP Printer Configuration Page
                Report Guide</a></p>
    </section>

    <section>
        <h2>Printing Student of the Month Photos from Android/iOS Devices on Windows</h2>
        <ol>
            <li>Open the Photos app on your Android or iOS device.</li>
            <li>Select the Student of the Month photos you want to print.</li>
            <li>Tap the share icon, typically represented by an arrow pointing up or a box with an arrow.</li>
            <li>Choose the option to "Save to Files" or "Save to Drive" to save the selected photos to your Google
                Drive.</li>
            <li>Once saved to Google Drive, open a web browser on your computer and navigate to <a
                    href="https://drive.google.com" target="_blank">drive.google.com</a>.</li>
            <li>Sign in to your Google account if prompted.</li>
            <li>Locate the photos you saved in Google Drive and download them to your computer.</li>
            <li>Visit a free HEIC to JPG converter website (e.g., <a href="https://heictojpg.com"
                    target="_blank">heictojpg.com</a>).</li>
            <li>Upload the HEIC photos you downloaded from Google Drive to the converter.</li>
            <li>Convert the HEIC photos to JPG format.</li>
            <li>Download the converted JPG photos to your computer.</li>
            <li>Open the JPG photos in Windows Photos app or any other photo editing software.</li>
            <li>Click on "Print" to open the print dialog.</li>
            <li>Select your printer and adjust print settings, ensuring the paper size is set to 5x7 inches.</li>
            <li>Click "Print" to print the Student of the Month photos.</li>
        </ol>
    </section>

    <section>
        <h2>Printing Student of the Month Photos from the Photos App on Mac</h2>
        <ol>
            <li>Connect your iOS device to your Mac using a USB cable.</li>
            <li>Open the Photos app on your Mac.</li>
            <li>In the Photos app, click on "Import" or select your iOS device from the sidebar to import photos.</li>
            <li>Choose the Student of the Month photos you want to print and import them to the Photos app.</li>
            <li>Once imported, select the photos you want to print by clicking on them.</li>
            <li>Click on the "File" menu at the top-left corner of the screen.</li>
            <li>Choose "Export" from the dropdown menu.</li>
            <li>Select "Export [number] Photos..." and choose a location on your Mac to save the exported photos.</li>
            <li>Click "Export" to save the photos to your Mac.</li>
            <li>Open a web browser on your Mac and visit a free HEIC to JPG converter website (e.g., <a
                    href="https://heictojpg.com" target="_blank">heictojpg.com</a>).</li>
            <li>Upload the HEIC photos you exported from the Photos app to the converter.</li>
            <li>Convert the HEIC photos to JPG format.</li>
            <li>Download the converted JPG photos to your Mac.</li>
            <li>Open the JPG photos in the Photos app or any other photo editing software.</li>
            <li>Click on "Print" to open the print dialog.</li>
            <li>Select your printer and adjust print settings, ensuring the paper size is set to 5x7 inches.</li>
            <li>Click "Print" to print the Student of the Month photos.</li>
        </ol>
    </section>

    <section>
        <h2>Report Card Printing</h2>
        <p>
            For security purposes, the process for report card printing is kept cryptic. Once provided with access to
            the portal database and given the proper URLs to follow for report card printing, follow these steps:
        </p>
        <ol>
            <li>Ensure to pick NA officio for the paper type and set the scale to 97% to prevent any
                overflow text from cutting off.</li>
            <li>Unselect "print all in English".</li>
            <li>Consult with other staff for paper documentation as this is an internal process.</li>
        </ol>
    </section>

</body>

<?php include 'footer.php'; ?>

</html>