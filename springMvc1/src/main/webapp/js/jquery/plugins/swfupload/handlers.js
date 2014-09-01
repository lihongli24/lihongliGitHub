function getDefaultUploadOpts(){
	var ret = {
		
		 upload_url: connectorurl + ";jsessionid=" + session_id + "?Type=" + fileType + "&Command=FileUpload&Source=swfupload&CurrentFolder=" + currentFolder+"&memberId="+memberId,
		 post_params: {
		    "Type" : fileType,
		    "Command" : "FileUpload",
		    "CurrentFolder" : currentFolder,
		    "jsessionid" : session_id,
		    "Source" : "swfupload",
		    "memberId":memberId
		},
		
		// File Upload Settings
		file_size_limit : "10 MB",	// 2MB
		//file_types : "*.jpg;*.gif;*.png;*.jpeg;*.bmp",
		file_types : "*.jpg;*.gif;*.png;*.jpeg",
		file_types_description : "所有图片",
		file_upload_limit : 100,
		file_queue_limit : 1,
		
		// Event Handler Settings - these functions as defined in Handlers.js
		//  The handlers are not part of SWFUpload but are part of my website and control how
		//  my website reacts to the SWFUpload events.
		file_queue_error_handler : fileQueueError,
		file_dialog_complete_handler : fileDialogComplete,
		upload_progress_handler : uploadProgress,
		upload_error_handler : uploadError,
		upload_success_handler : uploadSuccess,
		upload_complete_handler : uploadComplete,
		
		// Button Settings
		button_image_url : swfupload_dir + "images/SmallSpyGlassWithTransperancy_17x18.png",
		button_placeholder_id : "spanButtonPlaceholder",
		button_width: 150,
		button_height: 18,
		button_text : '<span class="button">上传图片 (不超过10M)</span>',
		button_text_style : '.button { font-family: Helvetica, Arial, sans-serif; font-size: 12pt; }',
		button_text_top_padding: 0,
		button_text_left_padding: 18,
		button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,
		button_cursor: SWFUpload.CURSOR.HAND,
		
		// Flash Settings
		flash_url : swfupload_dir + "swfupload.swf",
		
		custom_settings : {
			upload_target : "divFileProgressContainer"
		},
	
		// Debug Settings
		debug: false
	};
	//alert(ret.upload_url);	
	return ret;
}
/**
 * 获得swfupload的参数
 * @param fileType Image, Flash, File, Media
 * @param currentFolder /
 * @param typeFilters *.jpg;*.gif;*.png;*.jpeg;*.bmp
 * @param typeDesc 图片，Flash, 文件, 多媒体
 * @param queuelimit 同时上传个数 
 * @return
 */
function getCustomUploadOpts(fileType, currentFolder, typeFilters, typeDesc, queuelimit){
	var ret= {
		// Backend Settings
		 upload_url: connectorurl + ";jsessionid=" + session_id + "?Type=" + fileType + "&Command=FileUpload&Source=swfupload&CurrentFolder=" + currentFolder+"&memberId="+memberId,
		 post_params: {
		    "Type" : fileType,
		    "Command" : "FileUpload",
		    "CurrentFolder" : currentFolder,
		    "jsessionid" : session_id,
		    "Source" : "swfupload",
		    "memberId":memberId
		},
		
		// File Upload Settings
		file_size_limit : "10 MB",	// 2MB
		//file_types : "*.jpg;*.gif;*.png;*.jpeg;*.bmp",
		file_types : typeFilters,
		file_types_description : "所有" + typeDesc,
		file_upload_limit : ""+100,
		file_queue_limit : ""+queuelimit,
		
		// Event Handler Settings - these functions as defined in Handlers.js
		//  The handlers are not part of SWFUpload but are part of my website and control how
		//  my website reacts to the SWFUpload events.
		file_queue_error_handler : fileQueueError,
		file_dialog_complete_handler : fileDialogComplete,
		upload_progress_handler : uploadProgress,
		upload_error_handler : uploadError,
		upload_success_handler : uploadSuccess,
		upload_complete_handler : uploadComplete,
		
		// Button Settings
		button_image_url : swfupload_dir + "images/SmallSpyGlassWithTransperancy_17x18.png",
		button_placeholder_id : "spanButtonPlaceholder",
		button_width: 150,
		button_height: 18,
		button_text : '<span class="button">上传' + typeDesc + '(不超过10M)</span>',
		button_text_style : '.button { font-family: Helvetica, Arial, sans-serif; font-size: 12pt; }',
		button_text_top_padding: 0,
		button_text_left_padding: 18,
		button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,
		button_cursor: SWFUpload.CURSOR.HAND,
		
		// Flash Settings
		flash_url : swfupload_dir + "swfupload.swf",
		
		custom_settings : {
			upload_target : "divFileProgressContainer"
		},
	
		// Debug Settings
		debug: false
	};
	//alert(ret.upload_url);
	return ret;
}
function showImagePreview(field, url) {
		 
	$('.thumb_' + field).empty();
	
	if(url) 
	 	 url = $.trim(url);
	var imgCode = url.substring(url.lastIndexOf('/')+1);	
	$('#' + field).val(imgCode);
	var newImg = $('<img src="'+ url + '" />').hide();
	newImg.appendTo('.thumb_' + field);
	newImg.show();
	newImg.fadeIn('slow');
}
/**
 * 文件队列错误
 */
function fileQueueError(file, errorCode, message) {
	try {
		var imageName = "error.gif";
		var errorName = "";
		if (errorCode === SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED) {
			errorName = "只能同时上传" + message + "个文件";
		}

		if (errorName !== "") {
			alert(errorName);
			return;
		}
		
		switch (errorCode) {
		case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
			imageName = "zerobyte.gif";
			alert("文件大小为零");
			break;
		case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
			imageName = "toobig.gif";
			alert("文件大小超出限制");
			break;
		case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
		case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
		default:
			alert(message);
			break;
		}

		//addImage(swfupload_dir + "images/" + imageName);

	} catch (ex) {
		this.debug(ex);
	}

}
/**
 * 文件选择对话框关闭
 */
function fileDialogComplete(numFilesSelected, numFilesQueued) {
	try {
		if (numFilesQueued > 0) {
			this.startUpload();			
			$.blockUI({
				message:$('#divFileProgressContainer'),
				css: {
		            border: 'none'
		        }
			});
		}
	} catch (ex) {
		this.debug(ex);
	}
}
/**
 * 文件上传中...
 */
function uploadProgress(file, bytesLoaded) {

	try {
		var percent = Math.ceil((bytesLoaded / file.size) * 100);

		var progress = new FileProgress(file,  this.customSettings.upload_target);
		progress.setProgress(percent);
		if (percent === 100) {
			progress.setStatus("上传完成...");
			progress.toggleCancel(false, this);
		} else {
			progress.setStatus("上传中...");
			progress.toggleCancel(true, this);
		}
	} catch (ex) {
		this.debug(ex);
	}
}
/**
 * 上传完成
 */
function uploadSuccess(file, serverData) {
	try {
		
		var progress = new FileProgress(file,  this.customSettings.upload_target);

		if (serverData.substring(0, 7) === "FILEID:") {
			if(typeof addImage == 'function')
				addImage(serverData.substring(7));

			progress.setStatus("显示图片.");
			progress.toggleCancel(false);
		} else {
			//addImage(swfupload_dir + "images/error.gif");
			progress.setStatus("错误.");
			progress.toggleCancel(false);
			alert(serverData);
		}


	} catch (ex) {
		this.debug(ex);
	}
}
/**
 * 上传完成
 */
function uploadComplete(file) {
	try {
		
		/*  I want the next upload to continue automatically so I'll call startUpload here */
		if (this.getStats().files_queued > 0) {
			this.startUpload();
		} else {
			var progress = new FileProgress(file,  this.customSettings.upload_target);
			progress.setComplete();
			progress.setStatus("文件上传完成.");
			progress.toggleCancel(false);
						
			$.unblockUI();
			$(".blockUI").fadeOut("slow");
		}
	} catch (ex) {
		this.debug(ex);
	}
}

function uploadError(file, errorCode, message) {
	var imageName =  "error.gif";
	var progress;
	try {

		switch (errorCode) {
		case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
			try {
				progress = new FileProgress(file,  this.customSettings.upload_target);
				progress.setCancelled();
				progress.setStatus("已取消");
				progress.toggleCancel(false);
			}
			catch (ex1) {
				this.debug(ex1);
			}
			alert("上传已取消");
			break;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
			try {
				progress = new FileProgress(file,  this.customSettings.upload_target);
				progress.setCancelled();
				progress.setStatus("已停止");
				progress.toggleCancel(true);
			}
			catch (ex2) {
				this.debug(ex2);
			}
			alert("上传已停止");
			break;
		case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
			imageName = "uploadlimit.gif";
			alert("上传文件大小超出限制");
			break;
		default:
			alert(message);
			break;
		}

		//addImage(swfupload_dir + "images/" + imageName);

	} catch (ex3) {
		this.debug(ex3);
	}

}

function fadeIn(element, opacity) {
	var reduceOpacityBy = 5;
	var rate = 30;	// 15 fps


	if (opacity < 100) {
		opacity += reduceOpacityBy;
		if (opacity > 100) {
			opacity = 100;
		}

		if (element.filters) {
			try {
				element.filters.item("DXImageTransform.Microsoft.Alpha").opacity = opacity;
			} catch (e) {
				// If it is not set initially, the browser will throw an error.  This will set it if it is not set yet.
				element.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + opacity + ')';
			}
		} else {
			element.style.opacity = opacity / 100;
		}
	}

	if (opacity < 100) {
		setTimeout(function () {
			fadeIn(element, opacity);
		}, rate);
	}
}



/* ******************************************
 *	FileProgress Object
 *	Control object for displaying file info
 * ****************************************** */

function FileProgress(file, targetID) {
	this.fileProgressID = "divFileProgress";

	this.fileProgressWrapper = document.getElementById(this.fileProgressID);
	if (!this.fileProgressWrapper) {
		this.fileProgressWrapper = document.createElement("div");
		this.fileProgressWrapper.className = "progressWrapper";
		this.fileProgressWrapper.id = this.fileProgressID;

		this.fileProgressElement = document.createElement("div");
		this.fileProgressElement.className = "progressContainer";

		var progressCancel = document.createElement("a");
		progressCancel.className = "progressCancel";
		progressCancel.href = "#";
		progressCancel.style.visibility = "hidden";
		progressCancel.appendChild(document.createTextNode(" "));

		var progressText = document.createElement("div");
		progressText.className = "progressName";
		progressText.appendChild(document.createTextNode(file.name));

		var progressBar = document.createElement("div");
		progressBar.className = "progressBarInProgress";

		var progressStatus = document.createElement("div");
		progressStatus.className = "progressBarStatus";
		progressStatus.innerHTML = "&nbsp;";

		this.fileProgressElement.appendChild(progressCancel);
		this.fileProgressElement.appendChild(progressText);
		this.fileProgressElement.appendChild(progressStatus);
		this.fileProgressElement.appendChild(progressBar);

		this.fileProgressWrapper.appendChild(this.fileProgressElement);

		document.getElementById(targetID).appendChild(this.fileProgressWrapper);
		fadeIn(this.fileProgressWrapper, 0);

	} else {
		this.fileProgressElement = this.fileProgressWrapper.firstChild;
		this.fileProgressElement.childNodes[1].firstChild.nodeValue = file.name;
	}

	this.height = this.fileProgressWrapper.offsetHeight;

}
FileProgress.prototype.setProgress = function (percentage) {
	this.fileProgressElement.className = "progressContainer green";
	this.fileProgressElement.childNodes[3].className = "progressBarInProgress";
	this.fileProgressElement.childNodes[3].style.width = percentage + "%";
};
FileProgress.prototype.setComplete = function () {
	this.fileProgressElement.className = "progressContainer blue";
	this.fileProgressElement.childNodes[3].className = "progressBarComplete";
	this.fileProgressElement.childNodes[3].style.width = "";

};
FileProgress.prototype.setError = function () {
	this.fileProgressElement.className = "progressContainer red";
	this.fileProgressElement.childNodes[3].className = "progressBarError";
	this.fileProgressElement.childNodes[3].style.width = "";

};
FileProgress.prototype.setCancelled = function () {
	this.fileProgressElement.className = "progressContainer";
	this.fileProgressElement.childNodes[3].className = "progressBarError";
	this.fileProgressElement.childNodes[3].style.width = "";

};
FileProgress.prototype.setStatus = function (status) {
	this.fileProgressElement.childNodes[2].innerHTML = status;
};

FileProgress.prototype.toggleCancel = function (show, swfuploadInstance) {
	this.fileProgressElement.childNodes[0].style.visibility = show ? "visible" : "hidden";
	if (swfuploadInstance) {
		var fileID = this.fileProgressID;
		this.fileProgressElement.childNodes[0].onclick = function () {
			swfuploadInstance.cancelUpload(fileID);
			return false;
		};
	}
};
