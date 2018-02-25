  $(document).ready(function () {
  	$("#lunaButton2").hide();
  	$("#lucyAwakeImage").hide();
  	$("#lucyButton2").hide();



  	$("#lunaButton").click(function () {
  		$("img.lunaImage").css("visibility", "hidden");
  		$("#lunaButton").hide();
  		$("#lunaButton2").show();

  	});

  	$("#lunaButton2").click(function () {
  		$("img.lunaImage").css("visibility", "visible");
  		$("#lunaButton").show();
  		$("#lunaButton2").hide();

  	});

  	$("#lucyButton").click(function () {
  		$("#lucyAsleepImage").hide();
  		$("#lucyAwakeImage").show();
  		$("#lucyButton").hide();
  		$("#lucyButton2").show();

  	});

  	$("#lucyButton2").click(function () {
  		$("#lucyAwakeImage").hide();
  		$("#lucyAsleepImage").show();
  		$("#lucyButton2").hide();
  		$("#lucyButton").show();

  	});



  });