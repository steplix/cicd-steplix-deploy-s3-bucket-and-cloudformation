#!/bin/bash


# Assign the parameters to variables
ROBOTS="$1"

# Debugging: Print the assigned values
echo "ROBOTS=$ROBOTS"

# .env: Creating the .env file
echo ROBOTS=$ROBOTS >> .env

# Update the .env file with the new values
sed -i "s#^ROBOTS=.*#ROBOTS=$ROBOTS#" .env


# Debugging: Print the contents of the .env file
# cat .env


