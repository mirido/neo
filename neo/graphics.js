'use strict'

/// ƒvƒŒƒ[ƒ“ƒnƒ€‚ÌƒAƒ‹ƒSƒŠƒYƒ€‚Å’¼ü‚ð•`‰æ‚·‚éB
function draw_line(x0, y0, x1, y1, context)
{
	var tmp;

	var bSteep = Math.abs(y1 - y0) > Math.abs(x1 - x0);
	if (bSteep) {
		// swap(x0, y0);
		tmp = x0, x0 = y0, y0 = tmp;

		// swap(x1, y1)
		tmp = x1, x1 = y1, y1 = tmp;
	}
	if (x0 > x1) {
		// swap(x0, x1)
		tmp = x0, x0 = x1, x1 = tmp;

		// swap(y0, y1)
		tmp = y0, y0 = y1, y1 = tmp;
	}
	var deltax = x1 - x0
	var deltay = Math.abs(y1 - y0)
	var error = Math.floor(deltax / 2.0);
	var ystep
	var y = y0
	if (y0 < y1) {
		ystep = 1;
	} else {
		ystep = -1;
	}
	for (var x = x0; x <= x1; ++x) {
		if (bSteep) {
			// plot(y, x);
			context.fillRect(y, x, 1, 1);
		} else {
			// plot(x, y);
			context.fillRect(x, y, 1, 1);
		}
		error -= deltay;
		if (error < 0) {
			y += ystep;
			error += deltax;
		}
	}
}

//function draw_line(fromX, fromY, toX, toY, context)
//{
//	context.fillRect(fromX, fromY, toX - fromX + 1, toY - fromY + 1);
//}