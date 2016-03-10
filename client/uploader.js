Template.uploader.events({
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
