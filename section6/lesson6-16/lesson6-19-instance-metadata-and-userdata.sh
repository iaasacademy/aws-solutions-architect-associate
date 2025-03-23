# Instance Metadata Commands
## IMDS v1

# Get Instance ID
curl http://169.254.169.254/latest/meta-data/instance-id

# Get Instance AMI ID
curl http://169.254.169.254/latest/meta-data/ami-id

# Get the Instnce Mac Address for ETH0
curl http://169.254.169.254/latest/meta-data/mac

# Get Instance Local Private IPv4 Address
curl http://169.254.169.254/latest/meta-data/local-ipv4

# Get Instance Public IPv4 Address
curl http://169.254.169.254/latest/meta-data/public-ipv4

# IMDBv2
## Get Token
TOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")

# See the Token
echo $TOKEN

# Get Instance Type
curl -H "X-aws-ec2-metadata-token: $TOKEN" -v http://169.254.169.254/latest/meta-data/instance-type


# Create a UserData Script to install a webserver and create a webpage with information from the metadata

#!/bin/bash

# Update system and install Apache
sudo yum update -y
sudo yum install -y httpd

# Start and enable HTTPD service
sudo systemctl start httpd
sudo systemctl enable httpd

# Get IMDSv2 token
TOKEN=$(curl -s -X PUT "http://169.254.169.254/latest/api/token" \
  -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")

# Fetch metadata using the token
HOSTNAME=$(curl -s -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/hostname)
PUBLIC_IP=$(curl -s -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/public-ipv4)
AMI_ID=$(curl -s -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/ami-id)

# Create index.html with instance metadata
WEBPAGE="/var/www/html/index.html"
echo "<html>
<head><title>EC2 Metadata</title></head>
<body>
<h1>Welcome to EC2 Instance</h1>
<p><strong>Hostname:</strong> $HOSTNAME</p>
<p><strong>Public IP:</strong> ${PUBLIC_IP:-N/A}</p>
<p><strong>AMI ID:</strong> $AMI_ID</p>
</body>
</html>" | sudo tee $WEBPAGE > /dev/null

# Restart Apache to load new page
sudo systemctl restart httpd