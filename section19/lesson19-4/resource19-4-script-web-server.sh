#!/bin/bash
# Update system and install Apache and MariaDB and PHP core plus extension to connect to MariaDB/MySQL
dnf update -y
dnf install -y httpd
dnf install -y php php-mysqli mariadb105

# Enable and start Apache service
systemctl enable httpd
systemctl start httpd

# Add ec2-user to apache group
usermod -a -G apache ec2-user

# Set proper permissions
chown -R apache:apache /var/www/html
chmod -R 775 /var/www/html

# Allow ec2-user to write to /var/www/html
chown -R ec2-user:apache /var/www/html
chmod -R g+w /var/www/html

# Restart Apache to apply changes
systemctl restart httpd

# Sync website files from S3 bucket
aws s3 sync s3://ritualroast.io /var/www/html --delete
