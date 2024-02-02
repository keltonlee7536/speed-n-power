#!/bin/bash // from gpt, a work in progress

# Switch to the main branch
git checkout main

# Copy files from "./dist" on the main branch to a temporary directory
mkdir -p tmp_dist
gcp -R ./dist/* tmp_dist/

# Switch to the deploy branch
git checkout deploy

# Remove existing files in the "dist" directory on the deploy branch
rm -r ./dist/*

# Copy new files from the temporary directory to the "dist" directory on the deploy branch
gcp -R tmp_dist/* ./dist/

# Clean up temporary directory
rm -r tmp_dist

# Add and commit changes
git add .
git commit -m "Update dist files for deploy"

# Switch back to the main branch
git checkout main