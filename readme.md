# Gallery Deployment Pipeline

This repository is a cloud-based gallery application that I deployed using Jenkins and Render, with MongoDB Atlas as the database. Below is a summary of the milestones and the results achieved.

# Milestone 1: Set up
Task: Forked and cloned the repository, configured MongoDB Atlas, and set up the Jenkins pipeline.
Result: The app was successfully connected to MongoDB Atlas and is now set up for future deployment stages.


# Milestone 2: Basic Pipeline
Task: Built a Jenkins pipeline that automatically triggers on new pushes, installs necessary dependencies, and deploys the app to Render.
Result: The app was successfully deployed, and the landing page was updated to display "MILESTONE 2."

# Milestone 3: Tests
Task: Merged the test branch, integrated tests into the Jenkins pipeline, and configured email notifications for failed tests.
Result: Tests ran successfully, and the landing page now shows both "MILESTONE 2" and "MILESTONE 3."

# Milestone 4: Slack Integration
Task: Integrated Slack notifications into the Jenkins pipeline to send messages upon successful deployments.
Result: Slack notifications with build ID and app URL were successfully sent after deployments, and the landing page displays "MILESTONE 2," "MILESTONE 3," and "MILESTONE 4."
