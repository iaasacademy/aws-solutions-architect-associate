#!/bin/bash

# Prerequistes for CloudWatch Log Agent to work you neeed IAM Role with permissions for
# CloudWatchAgentServerPolicy
# CloudWatchAgentAdminPolicy
# AmazonSSMFullAccess
# install the agent on Amazon Linux
sudo yum install -y amazon-cloudwatch-agent

# Install collectd dependencies
sudo mkdir -p /usr/share/collectd/
sudo touch /usr/share/collectd/types.db
sudo dnf install collectd
sudo systemctl start collectd
sudo systemctl enable collectd

# More info on collectd at https://aws.amazon.com/blogs/mt/getting-started-with-cloudwatch-agent-and-collectd/

# run the wizard
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-config-wizard

# options:
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -c ssm:[Enter Your Parameter Store Key] -s

sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -c file:/opt/aws/amazon-cloudwatch-agent/bin/config.json -s
