/*
	A simple class for displaying file information and progress
	Note: This is a demonstration only and not part of SWFUpload.
	Note: Some have had problems adapting this class in IE7. It may not be suitable for your application.
*/

// Constructor
// file is a SWFUpload file object
// targetID is the HTML element id attribute that the FileProgress HTML structure will be added to.
// Instantiating a new FileProgress object with an existing file will reuse/update the existing DOM elements
function FileProgress(file, targetID) {
	this.fileProgressID = file.id;

	this.opacity = 100;
	this.height = 0;
	
	this.fileProgressElement = null;
	this.fileProgressWrapper = document.getElementById(this.fileProgressID);
	
	if (!this.fileProgressWrapper) {
		this.fileProgressWrapper = document.createElement("ul");
		this.fileProgressWrapper.id = this.fileProgressID;
		
		this.fileNameElement = document.createElement("li");
		this.fileNameElement.className = "tc_upload_list_a";
		this.fileNameElement.style.cssText="overflow:hidden";
		this.fileNameElement.appendChild(document.createTextNode(file.name));
		
		this.fileSizeElement  = document.createElement("li");		
		this.fileSizeElement.className = "tc_upload_list_b";
		this.fileSizeElement.appendChild(document.createTextNode(file.size));
		
		this.fileUploadStatusElement  = document.createElement("li");
		this.fileUploadStatusElement.className = "tc_upload_list_c";
		this.fileUploadStatusElement.appendChild(document.createTextNode(" "));
		
		this.fileprogressElement = document.createElement("li");
		this.fileprogressElement.className = "tc_upload_list_d";
		this.fileprogressElement.appendChild(document.createTextNode("0%"));
		 
		this.fileoperatorElement = document.createElement("li");
		this.fileoperatorElement.className="tc_upload_list_e";		
		var deleteElement  = document.createElement("a");
		deleteElement.style.cssText='cursor:pointer';
		deleteElement.appendChild(document.createTextNode("取消"));		
		this.fileoperatorElement.appendChild(deleteElement);
		this.fileProgressWrapper.appendChild(this.fileNameElement);
		this.fileProgressWrapper.appendChild(this.fileSizeElement);
		this.fileProgressWrapper.appendChild(this.fileUploadStatusElement);
		this.fileProgressWrapper.appendChild(this.fileprogressElement);
		this.fileProgressWrapper.appendChild(this.fileoperatorElement);
		
		document.getElementById(targetID).appendChild(this.fileProgressWrapper);
		this.fileProgressElement = this.fileProgressWrapper;
	} else 
	{
		this.fileProgressElement = this.fileProgressWrapper;
		this.reset();
	}

	
	 


}
FileProgress.prototype.reset = function () { 
	this.appear();	
};
FileProgress.prototype.setProgress = function (percentage) {
	this.fileProgressElement.childNodes[3].innerHTML=percentage + "%";
	this.appear();	
};
FileProgress.prototype.setComplete = function () {
	this.fileProgressElement.childNodes[3].innerHTML="100%";
};
FileProgress.prototype.setError = function () {
	 

	
};
FileProgress.prototype.setCancelled = function () {
	
};
FileProgress.prototype.setStatus = function (status) {
	this.fileProgressElement.childNodes[2].innerHTML = status;
};


FileProgress.prototype.toggleCancel = function (show, swfUploadInstance) {
	this.fileProgressElement.childNodes[4].style.visibility = show ? "visible" : "hidden";
	if (swfUploadInstance) {
		var fileID = this.fileProgressID;
		this.fileProgressElement.childNodes[4].onclick = function () {
			swfUploadInstance.cancelUpload(fileID);
			window.setTimeout(function(){this.fileProgressElement.parentNode.removeChild(this.fileProgressElement);}, 0);
			return false;
		};
	}
	
	
};

FileProgress.prototype.appear = function () {
	 
};

