# Install the NFS client on your EC2 instance
sudo yum -y update  
$  sudo reboot  
sudo yum -y install nfs-utils

# Create Security Group for EFS Mount Target
aws ec2 create-security-group \
--region us-east-1 \
--group-name efs-sg \
--description "Amazon EFS tutorial, SG for mount target" \
--vpc-id [Enter Your VPC ID]

# Add inbound rules for the EFS Security Group
aws ec2 authorize-security-group-ingress \
--group-id [ID of security group created for EFS mount target] \
--protocol tcp \
--port 2049 \
--source-group [ID of secuirty group for EC2 instances] \
--region us-east-1 

# Create EFS File System
aws efs create-file-system \
--encrypted \
--creation-token FileSystemTutorial \
--tags Key=Name,Value=[provide name for your EFS file system] \
--region us-east-1

# Create a mount targets
aws efs create-mount-target \
--file-system-id [File System ID] \
--subnet-id [Subnet ID for Subnet in us-east-1a] \
--security-group [Security Group of EFS filesystem] \
--region us-east-1

aws efs create-mount-target \
--file-system-id [File System ID] \
--subnet-id  [Subnet ID for Subnet in us-east-1b] \
--security-group [Security Group of EFS filesystem] \
--region us-east-1

# Make a note of your EFS DNS name and replace the below placeholder values
[file-system-id].efs.[aws-region].amazonaws.com

# Mount the file system on your EC2 instance and test
mkdir ~/efs-mount-point 
sudo mount -t nfs -o nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport [mount-target-DNS]:/ ~/efs-mount-point
ls -al
sudo chmod go+rw .
touch test-file.txt