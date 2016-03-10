Create an account at [Cloudinary](https://cloudinary.com). Find your:

* Cloud name
* API key
* API secret

Replace those values in `client/config.js` and `server/config.js`.

Install the required Meteor package:

    meteor add lepozepo:cloudinary

To run the app in Cloud9, open a terminal and type:
   
    meteor --port $IP:$PORT
    
Then after it boots, click the URL next to "App running at", and do "Open".

In the new browser tab that opens, you can copy the URL and share it with others.
The app will normally remain running until there has been one hour of inactivity.

If you need to stop the app, in that same Terminal tab press `Ctrl-C`.
But you shouldn't need to stop it since changes are reloaded automatically.

Docs for the Cloudinary Meteor package:  
https://github.com/Lepozepo/cloudinary

All available Cloudinary transformations:  
http://cloudinary.com/documentation/image_transformations

If you want to access the database directly, in a new terminal type:

    meteor mongo
    
See all records:

    db.images.find();
    
Permanently delete all the records in your collection:

    db.images.drop();
    
Remember that `images` is the name of our collection; you may name your collection
differently.
