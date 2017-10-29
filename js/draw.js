CanvasRenderingContext2D.prototype.drawImageByData=function($Array,$width,$height,$find,$px,$x,$y){
	let $dy=$y;
	let $idx=$find;
	for($hc=0;$hc<$height;$hc++){
		let $dx=$x;
		for($wc=0;$wc<$width;$wc++){
			let R=$Array[$idx+0]*127.5+127.5;
			let G=$Array[$idx+1]*127.5+127.5;
			let B=$Array[$idx+2]*127.5+127.5;
			R=~~R+',';G=~~G+',';B=~~B+'';
			this.drawFillBox($dx,$dy,$px+1,`rgb(${R+G+B})`);
			$dx+=$px;
			$idx+=3;
		}
		$dy+=$px;
	}
	// for debug
	console.log(`id:${$idx}`);
	console.log('Execution complete');
}

function drawGeneratedImage(){
      cont.clearRect(0,0,canv.width,canv.height);
      cont.drawImageByData(generatedData,24,40,0,7,0,0); // test code
}
