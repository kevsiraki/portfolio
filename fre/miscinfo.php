<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Miscellaneous Information</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php include 'header.php'; ?>
    <?php displayHeader("Miscellaneous Information"); ?>


    <section>
        <h2>Converting DVDs to MP4 and Uploading to Google Drive</h2>
        <ol>
            <li>Plug in your DVD RW USB device into an available USB port on your computer.</li>
            <li>Open VLC Media Player on your computer.</li>
            <li>Click on "Media" in the top-left corner of the VLC window.</li>
            <li>From the dropdown menu, select "Convert / Save" (Alternatively, you can press Ctrl + R).</li>
            <li>In the "Open Media" dialog box, click on the "Disc" tab.</li>
            <li>Check the box labeled "DVD" and ensure that the Disc device selected corresponds to your DVD RW USB
                device.</li>
            <li>Click on the "Convert / Save" button at the bottom.</li>
            <li>In the "Convert" dialog box, under the "Settings" section, choose the desired output format. For MP4,
                you can select "Video - H.264 + MP3 (MP4)" from the dropdown menu.</li>
            <li>Click on the "Browse" button next to the "Destination file" field to choose where you want to save the
                converted MP4 file.</li>
            <li>Click on the "Start" button to begin the conversion process.</li>
            <li>Once the conversion is complete, open your web browser and navigate to Google Drive (drive.google.com).
            </li>
            <li>Sign in to your Google account if prompted.</li>
            <li>Click on the "New" button in the top-left corner.</li>
            <li>Select "File upload" from the dropdown menu.</li>
            <li>Navigate to the location where you saved the converted MP4 file and select it.</li>
            <li>Click on the "Open" button to upload the file to your Google Drive.</li>
            <li>Once the upload is complete, right-click on the uploaded file in Google Drive and select "Get link" from
                the dropdown menu.</li>
            <li>Copy the generated link.</li>
            <li>Share the link with others to provide access to the converted MP4 file via cloud storage.</li>
        </ol>
    </section>

    <section>
        <h2>Mobile Device Management (MDM)</h2>
        <p>Mobile Device Management (MDM) is a technology used to manage and secure mobile devices, such as iOS devices
            and Chromebooks, within an organization. MDM allows administrators to remotely configure settings, enforce
            policies, and distribute applications to devices.</p>
        <p>At our district, MDM management profiles are deployed to iOS devices and Chromebooks to ensure they comply
            with security and usage policies set by the district.</p>
    </section>

    <section>
        <h2>Security Best Practices for Organizations and Members</h2>
        <p>Ensuring the security of our organization's systems and data is paramount. Here are some best practices to
            follow:</p>
        <ol>
            <li><strong>Strong Passwords:</strong> Encourage members to use strong, unique passwords for all accounts
                and systems, and consider implementing multi-factor authentication.</li>
            <li><strong>Regular Updates:</strong> Keep all software, operating systems, and applications up-to-date with
                the latest security patches and updates to mitigate vulnerabilities.</li>
            <li><strong>Employee Training:</strong> Provide regular security awareness training to all members to
                educate them about common threats, phishing scams, and safe online practices.</li>
            <li><strong>Access Control:</strong> Implement least privilege access controls to limit access to sensitive
                information and systems only to those who require it for their roles.</li>
            <li><strong>Data Encryption:</strong> Encrypt sensitive data both at rest and in transit to protect it from
                unauthorized access.</li>
            <li><strong>Backup and Recovery:</strong> Regularly backup important data and systems, and test backups to
                ensure they can be restored in the event of a security incident or data loss.</li>
            <li><strong>Network Security:</strong> Secure networks with firewalls, intrusion detection systems, and
                regular monitoring to detect and prevent unauthorized access and malicious activities.</li>
            <li><strong>Incident Response Plan:</strong> Develop and maintain an incident response plan to effectively
                respond to security incidents, minimize damage, and restore normal operations as quickly as possible.
            </li>
            <li><strong>Physical Security:</strong> Ensure physical security measures are in place to protect hardware,
                servers, and other critical infrastructure from theft, unauthorized access, or tampering.</li>
            <li><strong>Vendor Security:</strong> Assess and monitor the security practices of third-party vendors and
                service providers to ensure they meet security standards and do not pose risks to the organization.</li>
        </ol>
        <p>By adhering to these security best practices, our organization can significantly reduce the risk of security
            breaches, protect sensitive information, and safeguard the integrity and reputation of the organization.</p>
    </section>


    <section>
        <h2>Active Directory Rules and Limitations</h2>
        <p>When working with devices within our network, you may encounter Active Directory rules that restrict certain
            actions, such as disk cleanups, defragmentation, and software installation, uninstallation, or modification.
        </p>
        <p>If you encounter such restrictions, you can try installing the Progressive Web App (PWA) version of the
            software. To do this, simply navigate to the software's website using any browser, then follow the prompts
            to install the PWA.</p>
        <p>If you require elevated privileges to perform certain tasks, such as software installation, you can contact
            the ETIS team. They can assist you by using their elevated privileges to safely complete the task.</p>
    </section>

    <?php include 'footer.php'; ?>
</body>

</html>