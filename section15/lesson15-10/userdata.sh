#!/bin/bash

# Update system and install Apache (httpd) using dnf
dnf update -y
dnf install -y httpd

# Enable and start Apache
systemctl enable --now httpd

# Get IMDSv2 token
TOKEN=$(curl -s -X PUT "http://169.254.169.254/latest/api/token" \
  -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")

# Fetch metadata
HOSTNAME=$(curl -s -H "X-aws-ec2-metadata-token: $TOKEN" \
  http://169.254.169.254/latest/meta-data/hostname)
AVAILABILITY_ZONE=$(curl -s -H "X-aws-ec2-metadata-token: $TOKEN" \
  http://169.254.169.254/latest/meta-data/placement/availability-zone)
PUBLIC_IP=$(curl -s -H "X-aws-ec2-metadata-token: $TOKEN" \
  http://169.254.169.254/latest/meta-data/public-ipv4)
AMI_ID=$(curl -s -H "X-aws-ec2-metadata-token: $TOKEN" \
  http://169.254.169.254/latest/meta-data/ami-id)
INSTANCE_TYPE=$(curl -s -H "X-aws-ec2-metadata-token: $TOKEN" \
  http://169.254.169.254/latest/meta-data/instance-type)


# Write metadata into index.html
cat <<EOF > /var/www/html/index.html
<html>
<head><title>EC2 Metadata</title></head>
<body>
<h1>Welcome to Ritual Roast Coffee</h1>
<p></p>
<h2>This are your EC2 Instance Details:</h2>
<p><strong>Hostname:</strong> $HOSTNAME</p>
<p><strong>Availability Zone:</strong> $AVAILABILITY_ZONE
<p><strong>Public IP:</strong> ${PUBLIC_IP:-N/A}</p>
<p><strong>AMI ID:</strong> $AMI_ID</p>
<p><strong>Instance Type:</strong> $INSTANCE_TYPE</p>
</body>
</html>
EOF

# Restart Apache to serve page
systemctl restart httpd
