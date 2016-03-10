$.cloudinary.config({
    cloud_name: 'networks',
    api_key: '194112673165318'
});

Template.tester.events({
	"change input.uploader": function(e) {
		var files = e.currentTarget.files;

		Cloudinary.upload(files, {}, function(err, res) {
			console.log("Upload Error:");
			console.log(err);
			console.log("Upload Result:");
			console.log(res);
			Images.insert(res);
		});
	}
});

Template.tester.helpers({
	"files": function() {
		return Cloudinary.collection.find();
	},

	"uploaded_images": function() {
		return Images.find();
	},

	"complete": function() {
		return this.status == "complete";
	}

});
