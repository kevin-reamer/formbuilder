$(function(){
	$.getJSON("/form.json", function(form) {
		var sections = form["form-body"]["sections"];
		var pageSections = form["form-body"]["pagination-definition"];
		var indexes = _.pluck(pageSections["section-indexes"]);
		var valuePairs = [];

		$.each(indexes, function(i, index) {
			valuePairs.push({index: index, value: null});
		});

		var currentPage = 0;
		
		setpage(currentPage);
	});
  
  function setpage(pageNumber) {
  	$("#form").empty();
    
    if(pageSections[pageNumber]) {
      var page = _.filter(sections, function(section) { return pageSections[pageNumber].indexOf(section["section-index"]) >= 0 });
      $.each(page, function(index, section) {
        var fields = section["fields-sections"];
        $.each(fields, function(index, field) {
          switch(field.type) {
            case 'select':
              $("#form").append(htmlSelect(field));
              break;
            case 'text-label':
              $("#form").append(htmlTextLabel(field));
              break;
            case 'yes/no':
            	$("#form").append(htmlYesNo(field));
              break;
            case 'date':
            	$("#form").append(htmlDate(field));
              break;
            case 'input':
              $("#form").append(htmlInput(field));
              break;
          }
        });
    	});
    }
  }
  
  //replace these with directives or whatever it's called in angular 2
  function htmlSelect(field) {
  	var htmlOptions = "";
    var label = field.label;
    if (label == undefined) { label = field.title; }
    if (field.options[0] == "") { field.options = ["Choice 1","Choice 2","Choice 3"]; }
    
    $.each(field.options, function(index, option) {
    	htmlOptions += "<option>" + option + "</option>";
    });
  	var htmlReturn = "<p>" + label + "</p>"
    							 + "<select>" + htmlOptions + "<select>";
  	return htmlReturn;
  }
  
  function htmlTextLabel(field) {
  	var htmlReturn = "<p>" + field.label + "</p>";
    return htmlReturn;
  }
  
  function htmlYesNo(field) {
  	var htmlReturn = "<p>" + field.label + "</p>" +
    									"<div class='btn-group' role='group' aria-label='" + field.label + "'>" +
                        "<button type='button' class='btn btn-default' onClick='setValue(field[\"section-index\"], \"yes\")'>Yes</button>" +
                        "<button type='button' class='btn btn-default'>No</button>" +
                      "</div>";
    return htmlReturn;
  }
  
  function htmlDate(field) {
  	var htmlReturn = "<p>" + field.label + "</p>" +
    									"<input type='date'>";
    return htmlReturn;
  }
  
  function htmlInput(field) {
  	var maxlength = "";
    if (field.rules) {
    	var rule = field.rules[0].split("-");
      if (rule[0] == "limit") { maxlength = rule[1]; }
    }
  	var htmlReturn = "<p>" + field.label + "</p>" +
    									"<input type='text' maxlength='" + maxlength + "'>";
    return htmlReturn;
  }
  
  $("#p1").click(function() { setpage(0); currentPage = 0; });
  $("#p2").click(function() { setpage(1); currentPage = 1; });
  $("#p3").click(function() { setpage(2); currentPage = 2; });
  $("#p4").click(function() { setpage(3); currentPage = 3; });
  $("#p5").click(function() { setpage(4); currentPage = 4; });
  $("#previous").click(function() { currentPage--; setpage(currentPage); });
  $("#next").click(function() { currentPage++; setpage(currentPage); });
});
