  $(document).ready(function () {
  	/* Hides certain elements so that they can be shown after clicking buttons */
  	$("#lunaButton2").hide();
  	$("#lucyAwakeImage").hide();
  	$("#lucyButton2").hide();


  	/* Luna buttons */

  	/*First button click */
  	$("#lunaButton").click(function () {

  		/* Hides Luna image */
  		$("img.lunaImage").css("visibility", "hidden");

  		/* Swaps buttons*/
  		$("#lunaButton").hide();
  		$("#lunaButton2").show();

  	});

  	/* Second button click */
  	$("#lunaButton2").click(function () {

  		/* Shows Luna image */
  		$("img.lunaImage").css("visibility", "visible");

  		/* Swaps buttons */
  		$("#lunaButton").show();
  		$("#lunaButton2").hide();

  	});

  	/* Lucy buttons */

  	/*First button click */
  	$("#lucyButton").click(function () {

  		/* Swaps images */
  		$("#lucyAsleepImage").hide();
  		$("#lucyAwakeImage").show();

  		/* Swaps buttons */
  		$("#lucyButton").hide();
  		$("#lucyButton2").show();

  	});

  	/* Second button click */
  	$("#lucyButton2").click(function () {

  		/* Swaps images */
  		$("#lucyAwakeImage").hide();
  		$("#lucyAsleepImage").show();

  		/* Swaps buttons */
  		$("#lucyButton2").hide();
  		$("#lucyButton").show();

  	});

  });