import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'uploadModal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.css']
})
export class UploadModalComponent implements OnInit {
  
  closeResult = '';
  scheduleFile: File | null = null; //the Excel file selected on the user's PC within this modal

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
    
	}
  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  handleFileInput(files: FileList) {
    this.scheduleFile = files.item(0); //no multi-file selection
  }

  uploadFileToActivity() {
    //TODO: handle the upload of the Excel schedule here
    // Make a new Service: file-upload.service.ts with a function: postFile(scheduleFile : File)
    /*
    this.fileUploadService.postFile(this.scheduleFile).subscribe(data => { 
      }, error => {
        console.log(error);
      });
    */
  }

}
