$(function() {
	$('select').click(function(){
		var cid = $(".listCompany").val();

		$('#table_div').load('staffs-acompany .table', 'id=' +$('.listCompany').val(), function(){
			var table1 = $('#table').DataTable({
				"lengthMenu": [[5, 10, 20, -1], [5, 10, 20, "All"]],
				"bDestroy": true,
				"drawCallback": function(){/*

					$(".add-liststaff").attr("class","btn btn-info btn-lg add-liststaff2");
					$('.add-liststaff2').on('click', function(){
						$('.div-add').load('http://localhost:8080/Staffs/StaffService/search-service.html', function(){
							$('#div-table-search').modal("toggle");
							$('#add-search-form').click(function () {
								$('.close').on('click',function() {
									window.open('add-staff-service', '_self');
								}); }); }); });

					$('.detail').on("click", function () {
						//alert("Detail ok");
						var id = $(this).parents('tr').children('td').eq(1).text().trim();
						$(".modal-title").text("Information: ");
						$(".modal-body").load("detail.html .table", "id=" + id);
						$(".modal-footer").load("detail.html .button-modal", "id=" + id, function () {
							$('#close-button').on('click', function () {
								table1.$('tr.selected').removeClass('selected');
							}); }); });

					$('.delete_button').on('click', function(){
						var id = $(this).parents('tr').children('td').eq(1).text().trim();
						$(this).parents('tr').addClass("deleted");
						$.get("delete.html", "id=" + id, function () {
							table1.row('.deleted').remove().draw(false);
						}); }); 

				*/}}); }); 
		});


	var table = $('#table').DataTable({
		"lengthMenu": [[5, 10, 20, -1], [5, 10, 20, "All"]],
		"drawCallback": function () {

			$('.detail').on("click", function () {
				//alert("Detail ok");
				var id = $(this).parents('tr').children('td').eq(1).text().trim();
				$(".modal-title").text("Information: ");
				$(".modal-body").load("detail.html .table", "id=" + id);
				$(".modal-footer").load("detail.html .button-modal", "id=" + id, function () {
					$('#close-button').on('click', function () {
						table.$('tr.selected').removeClass('selected');
					}); }); });

			$('.delete_button').on('click', function(){
				var id = $(this).parents('tr').children('td').eq(1).text().trim();
				$(this).parents('tr').addClass("deleted");
				$.get("delete.html", "id=" + id, function () {
					table.row('.deleted').remove().draw(false);
				}); });

			$('.add-liststaff').on('click', function(){
				$('.div-add').load('http://localhost:8080/Staffs/StaffService/search-service.html', function(){
					$('#div-table-search').modal("toggle");
					$('#add-search-form').click(function () {
						$('.close').on('click',function() {
							window.open('add-staff-service', '_self');
						}); }); }); });
		}});
});

