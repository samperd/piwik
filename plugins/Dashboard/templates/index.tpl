<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd ">

{literal}

<script type="text/javascript" src="libs/jquery/jquery.js"></script>
<script type="text/javascript" src="libs/jquery/jquery.scrollTo.js"></script>
<script type="text/javascript" src="libs/jquery/jquery.dimensions.js"></script>

<script type="text/javascript" src="libs/jquery/tooltip/jquery.tooltip.js"></script>
<script type="text/javascript" src="libs/jquery/truncate/jquery.truncate.js"></script>
<script type="text/javascript" src="themes/default/common.js"></script>
<script type="text/javascript" src="plugins/Home/templates/datatable.js"></script>

<script type="text/javascript" src="libs/jquery/ui.mouse.js"></script>
<script type="text/javascript" src="libs/jquery/ui.sortable.js"></script>

<script type="text/javascript" src="libs/swfobject/swfobject.js"></script>

<link rel="stylesheet" href="libs/jquery/tooltip/jquery.tooltip.css">
<link rel="stylesheet" href="plugins/Home/templates/datatable.css">

<script type="text/javascript">
	 $(document).ready(
			function()
			{
				$('.parentDiv').each(
					function()
					{
						// get the ID of the div and load with ajax						
						ajaxLoading($(this).attr('id'));
					});
					
				$('.items:not(.dummyItem)').each(
					function()
					{
						$(this).prepend('<div class="handle"></div>');
					});
					
				$(".sortDiv").sortable({
				 	items:".items",
				 	hoverClass: "hover",
				 	handle: ".handle"
				 	//helper: function(){return $(this).css('width', '33%').html();},
				 	});
			 	

			}
		);
		
	function ajaxLoading(divId)
	{		
		// When ajax replied, we replace the right div with the response
		function onLoaded(response)
		{
			var content = $(response);
			$('#'+divId).html( $(content).html() );
		}
		//prepare and launch the ajax request
		var ajaxRequest = 
		{
			type: 'GET',
			url: 'index.php',
			dataType: 'html',
			async: true,
			error: ajaxHandleError,		// Callback when the request fails
			success: onLoaded,			// Callback when the request succeeds
			data: {	module: 'Home',
					action: divId,
{/literal}			idSite: {$idSite},
					period: '{$period}',
					date: '{$date}'					
{literal} 	}
		};
		$.ajax(ajaxRequest);
	}
	
</script>

<style type="text/css">
.col {
	float:left;
	width: 33%;
}

.hover {
	border: 1px dashed;
}

.items {
    background: white;
}

.handle {
	background: gray;
	width: 100%;
	height: 14px;
	cursor: move;
}

.dummyItem {
	width: 100%;
	height: 1px;
}

.dummyHandle {
	visibility: hidden;
}

</style>

{/literal}


<div class="sortDiv">
  <div class="col">
  	<div class="items dummyItem"><div class="handle dummyHandle"></div></div>
    <div class="items"><div id="getLastVisitsGraph" class="parentDiv"></div></div>
  </div>
      
  <div class="col">
  	<div class="items dummyItem"><div class="handle dummyHandle"></div></div>
    <div class="items"><div id="getCountry" class="parentDiv"></div></div>
    <div class="items"><div id="getKeywords" class="parentDiv"></div></div>
  </div>
    
  <div class="col">
  	<div class="items dummyItem"><div class="handle dummyHandle"></div></div>
    <div class="items"><div id="getPlugin" class="parentDiv"></div>Lorem ipsum dolor sit amet, consectetuer adipisci elit. Electram quicquid historiae, iracundiae est in conversam ac sine, non veri natura infantes vera amori placet, grata latine, recte pertineant statue suum ea, esse sunt tuo faciant mea physicis centurionum.. Extremum.</div>
    <div class="items">Lorem ipsum dolor sit amet, consectetuer adipisci elit. Electram quicquid historiae, iracundiae est in conversam ac sine, non veri natura infantes vera amori placet, grata latine, recte pertineant statue suum ea, esse sunt tuo faciant mea physicis centurionum.. Extremum.</div>
  </div>
</div>
