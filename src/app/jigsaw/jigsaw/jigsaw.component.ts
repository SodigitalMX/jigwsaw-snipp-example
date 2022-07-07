import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-jigsaw',
	templateUrl: './jigsaw.component.html',
})

export class JigsawComponent implements AfterViewInit {


	@ViewChild('blabla') puzzle_1: ElementRef | any | undefined

	ngAfterViewInit(): void {


		this.puzzle_1.nativeElement.PromotionId = 211;
		this.puzzle_1.nativeElement.UserId = 1403203;

		this.puzzle_1.nativeElement.onError = (err: any): any => {
			console.log(err);
		};
		this.puzzle_1.nativeElement.onSuccess = (success: any): any => {
			console.log(success);
		};

	}
}