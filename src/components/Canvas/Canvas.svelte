<script lang="ts">
	import { onMount } from 'svelte';
  import { rgbToHsl ,hslToRgb} from "duokit/color";
  import { } from "duokit/math";
	
	
  let range = 0;
	let miImagen: HTMLImageElement;
	let miCanvas: HTMLCanvasElement;
	onMount(() => {
		const ctx = miCanvas.getContext('2d');
		if(ctx===null) return;
		miCanvas.width = miImagen.width * 2;
		miCanvas.height = miImagen.height * 2;

		ctx.drawImage(miImagen, 0, 0, miCanvas.width * 1, miCanvas.height * 1);

		// Obtiene los píxeles de la imagen
		let imageData = ctx.getImageData(0, 0, miCanvas.width, miCanvas.height);

   
		let data = imageData.data;
		for (let i = 0; i < data.length; i++) {
			let { h, s, l } = rgbToHsl(data[i * 4], data[i * 4 + 1], data[i * 4 + 2]);
			// l = 100 - l
      // l = l > 100 ? 100: l;
			h = h + 0;
			if (h > 360) {
				h = h - 360;
			}

			let { r, g, b } = hslToRgb(h, s, l);
			data[i * 4] = r;
			data[i * 4 + 1] = g;
			data[i * 4 + 2] = b;
		}
		ctx?.putImageData(imageData, 0, 0);
	});

 
</script>
<img bind:this={miImagen} src="image/code.png" alt="Imagen" />
<canvas bind:this={miCanvas}></canvas>

<style>
  
</style>
