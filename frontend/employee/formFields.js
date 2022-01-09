		
$("#typeOfForm").change(function() {
			if ($(this).val() == "genset") {
				$('#gensetForm').show();
				$('#airconForm').hide();
			}else if ($(this).val() == "aircon") {
				$('#gensetForm').hide();
				$('#airconForm').show();
			}else {
				$('#gensetForm').hide();
				$('#airconForm').hide();
			}
		});
		$("#typeOfForm").trigger("change");
		