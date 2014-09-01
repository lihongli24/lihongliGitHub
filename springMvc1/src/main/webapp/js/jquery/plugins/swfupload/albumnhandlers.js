 
function getCustomUploadOpts(fileType, currentFolder, typeFilters, typeDesc, queuelimit){
	return {
			upload_url: connectorurl,
			post_params: {
		    "Type" : fileType,
		    "Command" : "FileUpload",
		    "CurrentFolder" : currentFolder,
		    "jsessionid" : session_id,
		    "Source" : "swfupload",
		    "albumUpload":true,
		    "memberId":memberId
		},		
		use_query_string:true,
		file_size_limit : "10 MB",	// 相当每限制的了
		//file_types : "*.jpg;*.gif;*.png;*.jpeg;*.bmp",
		file_types : typeFilters,
		file_types_description : "所有" + typeDesc,
		file_upload_limit : queuelimit,
		file_queue_limit : queuelimit,
		
		file_queue_error_handler : fileQueueError,
		file_queued_handler : fileQueued,
		file_dialog_complete_handler : fileDialogComplete,
		upload_progress_handler : uploadProgress,
		upload_error_handler : uploadError,
		upload_complete_handler : uploadComplete,
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
		flash_url : swfupload_dir + "swfupload.swf",
		custom_settings : {
			upload_target : "tc_upload_list"
		},		
		debug: false
	};
}

function fileQueued(file) {
	try {		
		var progress = new FileProgress(file, this.customSettings.upload_target);
		progress.setStatus("准备上传");
		progress.toggleCancel(true, this);

	} catch (ex) {
		this.debug(ex);
	}

}

function fileQueueError(file, errorCode, message) {
	try {		
		var errorName = "";
		if (errorCode === SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED) {
			errorName = "只能同时上传" + this.settings.file_queue_limit + "个文件";
		}
		if (errorName !== "") {
			alert(errorName);
			return;
		}
		
		switch (errorCode) {
		case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:			
			alert("文件大小为零");
			break;
		case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:			
			alert("文件大小超出限制");
			break;
		case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
		case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
		default:
			alert(message);
			break;
		}
	} catch (ex) {
		this.debug(ex);
	}

}

function fileDialogComplete(numFilesSelected, numFilesQueued) {
	try {
		if (numFilesQueued > 0) 
			{
			 
			}
	} catch (ex) {
		this.debug(ex);
	}
}
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
function uploadComplete(file) {
	try {
		if (this.getStats().files_queued > 0) {
			this.startUpload();
		} else {
			 if(this.hiddenTip)
			 this.hiddenTip();	
			if(this.completeDialog)
			{		
					this.completeDialog();
			}			
		}
	} catch (ex) {
		this.debug(ex);
	}
}

function uploadError(file, errorCode, message) {	
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
	} catch (ex3) {
		this.debug(ex3);
	}

}




 

