<?php ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Networking Basics</title>
    <link rel="stylesheet" href="style.css">
</head>
<?php include 'header.php'; ?>
<?php displayHeader("Networking Basics"); ?>

<body>

    <section>
        <h2>Troubleshooting Network Connectivity on iOS/Chromebook Devices</h2>
        <p>If your iOS/Chromebook device is unable to connect to the network due to mismanaged Mobile Device Management
            (MDM), you can try the following steps:</p>
        <ol>
            <li>Toggle Airplane Mode: Turn on Airplane Mode and then turn it off again to reset the device's wireless
                connections.</li>
            <li>Forget Network: Go to Settings > Wi-Fi, then tap on the network you're trying to connect to and select
                "Forget This Network." Reconnect to the network and re-enter the credentials.</li>
            <li>Reset Network Settings: Go to Settings > General > Reset > Reset Network Settings. This will reset all
                network settings, including Wi-Fi passwords and VPN configurations.</li>
            <li>Use Personal Hotspot: If available, enable Personal Hotspot on another device and connect your
                iOS/Chromebook device to it via Wi-Fi.</li>
            <li>Contact IT Support: If the issue persists, contact your IT support team for further assistance.</li>
        </ol>
    </section>

    <section>
        <h2>Device Connectivity Issues</h2>
        <p>If a device refuses to connect to the network, it may indicate a problem with its MDM enrollment. In such
            cases, please notify the ETIS team so that the device can be re-enrolled into Enterprise Enrollment,
            ensuring proper network access.</p>
        <p>iPads will also require the installation of the Self Service app to facilitate app installations and device
            management.</p>
    </section>

    <section>
        <h1>Compelex Stuff Ahead</h1>
    </section>

    <section>

        <h2>OSI Model</h2>
        <p>The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes the functions of a
            telecommunication or computing system into seven abstraction layers. These layers facilitate
            interoperability
            and communication between different systems. The seven layers are:</p>
        <ol>
            <li>Physical Layer</li>
            <li>Data Link Layer</li>
            <li>Network Layer</li>
            <li>Transport Layer</li>
            <li>Session Layer</li>
            <li>Presentation Layer</li>
            <li>Application Layer</li>
        </ol>
        <p>Each layer of the OSI model performs specific functions, from transmitting raw data over physical media to
            presenting data to the user.</p>
    </section>

    <section>
        <h2>OSPF (Open Shortest Path First)</h2>
        <p>OSPF is a routing protocol used to determine the best path for forwarding data packets in a TCP/IP network.
            It
            employs a link-state routing algorithm and is commonly used in large enterprise networks.</p>
    </section>

    <section>
        <h2>Routers</h2>
        <p>Routers are networking devices that forward data packets between computer networks. They operate at the
            network
            layer of the OSI model and use routing tables to determine the best path for forwarding packets to their
            destination.</p>
    </section>

    <section>
        <h2>Common Networking Commands</h2>
        <p>Networking commands are tools used to troubleshoot and diagnose network connectivity issues. Some common
            networking commands include:</p>
        <ul>
            <li><strong>Ping:</strong> Sends ICMP Echo Request messages to a specified network device to test
                connectivity.</li>
            <li><strong>Traceroute (Tracert):</strong> Displays the route and transit delays of packets across an IP
                network.</li>
            <li><strong>Ipconfig (Windows) / ifconfig (Unix-like systems):</strong> Displays the network configuration
                of
                the device.</li>
            <li><strong>Netstat:</strong> Displays network connections, routing tables, interface statistics, and other
                network-related information.</li>
            <li><strong>Nslookup:</strong> Queries DNS servers to obtain domain name or IP address information.</li>
        </ul>
    </section>

    <section>
        <h2>DHCP vs. Static IP Addresses</h2>
        <p>DHCP (Dynamic Host Configuration Protocol) is a network protocol used to automatically assign IP addresses
            and
            other network configuration parameters to devices on a network. In contrast, a static IP address is manually
            configured and does not change over time.</p>
        <p>Printers should be added with their hostname as DHCP IPs have a lease, meaning they may change over time. By
            using the printer's hostname, you ensure consistent access to the printer regardless of its IP address
            assignment.</p>
    </section>

    <section>
        <h2>TCP/IP (Transmission Control Protocol/Internet Protocol)</h2>
        <p>TCP/IP is the basic communication language or protocol of the internet. It defines how data should be
            packetized, addressed, transmitted, routed, and received.</p>
    </section>
    <section>
        <h2>DNS (Domain Name System)</h2>
        <p>DNS is a hierarchical decentralized naming system for computers, services, or other resources connected to
            the internet or a private network. It translates domain names (e.g., www.example.com) into IP addresses.</p>
    </section>
    <section>
        <h2>LAN (Local Area Network)</h2>
        <p>A LAN is a network that connects computers and devices in a limited geographical area, such as a home,
            office, or school. LANs are typically used for sharing resources, such as files, printers, and internet
            access.</p>
    </section>
    <section>
        <h2>VLAN (Virtual Local Area Network)</h2>
        <p>A VLAN is a logical grouping of devices or users based on criteria such as department, function, or location,
            regardless of their physical location. VLANs enable network segmentation for security, performance, and
            management purposes.</p>
    </section>
    <section>
        <h2>Ethernet Cables</h2>
        <p>Ethernet cables are used to connect devices, such as computers, routers, and switches, to a local area
            network (LAN) or to the internet. Here are some common types of Ethernet cables:</p>
        <ul>
            <li><strong>Cat5e:</strong> Cat5e cables support speeds up to 1 Gigabit per second (Gbps) and are suitable
                for most home and office networking needs.</li>
            <li><strong>Cat6:</strong> Cat6 cables offer improved performance and support higher data transfer rates,
                making them ideal for demanding applications and environments.</li>
            <li><strong>Cat6a:</strong> Cat6a cables are designed for 10 Gigabit Ethernet networks and provide enhanced
                crosstalk and noise reduction for superior performance.</li>
            <li><strong>Cat7:</strong> Cat7 cables are capable of transmitting data at speeds of up to 10 Gbps over
                distances of up to 100 meters. They also feature shielding for added protection against interference.
            </li>
        </ul>
        <p>When using Ethernet cables, it's important to properly crimp and terminate the cables to ensure reliable
            connections and optimal performance.</p>
    </section>

</body>

<?php include 'footer.php'; ?>

</html>