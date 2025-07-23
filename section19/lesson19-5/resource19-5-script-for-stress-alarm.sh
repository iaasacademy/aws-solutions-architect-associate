# Install the stress test utility
sudo yum install stress -y

# help command
stress --help

# run stress test
stress -c 1 -t 3600
