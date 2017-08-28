## AWS S3

### Easy 7-Step Deployment Process

*Step 1:* Run `yarn` to install dependencies, then `npm run build` to create `./build` folder.

*Step 2:* Navigate to [AWS S3](https://aws.amazon.com/s3) and login. Click on `Services` followed by `S3` in dropdown.

*Step 3:* Click on `Create Bucket` and fill out both your `Bucket Name` and `Region`. Click `Create` to create bucket.

*Step 4:* Open `Permissions` accordion on right (under `Properties` tab) after selecting new bucket. Click `Add more permissions`, set `Grantee` to `Everyone` (or whoever you want to be able to access website), and give them `View Permissions`. Click `Save`.

*Step 5:* Click on `Static Website Hosting` accordion where you should see URL (or *endpoint*) of website (ie. example.s3-website-us-east-1.amazonaws.com). Click `Enable website hosting` and fill in both `Index document` and `Error document` input fields with `index.html`. Click `Save`.

*Step 6:* Click on your new S3 bucket on left to open bucket. Click `Upload` and select all files within your `./build` folder. Click `Start Upload`. Once files are done, select all of files, right-click on selected files (or click on `Actions` button) and select `Make Public`.

*Step 7:* Click on `Properties` tab, open `Static Website Hosting`, and click on *Endpoint* link. app should be running on that URL.
