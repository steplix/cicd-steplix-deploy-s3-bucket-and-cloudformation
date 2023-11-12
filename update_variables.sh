#!/bin/bash


# Assign the parameters to variables
ROBOTS="$1"

# Debugging: Print the assigned values
echo "ROBOTS=$ROBOTS"


# Update the .env file with the new values
sed -i "s#^ROBOTS=.*#ROBOTS=$ROBOTS#" .env


# Debugging: Print the contents of the .env file
# cat .env


