
// add today's date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));




$(document).ready(function() {
    var test = false;
    let hour24 = moment().format('H');
    let hour12 = moment().format('h');

    if (test) {
        hour24 = 13;
        hour12 = 1;
    }

    let plannerInput = JSON.parse(localStorage.getItem("plannerInput"));

    if (test) {
        console.log(plannerInput);
    }

    if (plannerInput !== null) {
        console.log("Planner Input = ", plannerInput)
        autoInput = plannerInput;
    } else {
       autoInput =new Array(9);
       autoInput[0] = "Welcome to work!";
       autoInput[8] = "Home time!"
    }

    for (let hour = 9; hour <= 17; hour++) {
        let index = hour - 9;


        let $rowDiv = $('<div>');
        $rowDiv.addClass('row');
        $rowDiv.addClass('hourRow');
        $rowDiv.attr('hour-index', hour);

        let $col2TimeDiv = $('<div>');
        $col2TimeDiv.addClass('col-md-2 noPadding timeDiv');

        const $timeboxSpn = $('<span>');
        $timeboxSpn.attr('class', 'timeBox');

        let hourDisplay = 0;
        let morningAfternoon = "";
        if (hour > 12) {
            hourDisplay = hour - 12;
            morningAfternoon = "pm"
        } else {
            hourDisplay = hour;
            morningAfternoon = "am";
        }

        $timeboxSpn.text(`${hourDisplay} ${morningAfternoon}`);

        $rowDiv.append($col2TimeDiv);
        $col2TimeDiv.append($timeboxSpn);

        let $planInputSpn = $('<input>');

        $planInputSpn.attr('id', `input-${index}`);
        $planInputSpn.attr('hour-index', index);
        $planInputSpn.attr('type', 'text');
        $planInputSpn.attr('class', 'plan-input');

        $planInputSpn.val( autoInput[index] );

        let $col9IptDiv = $('<div>');
        $col9IptDiv.addClass('col-md-9 noPadding');

        $rowDiv.append($col9IptDiv);
        $col9IptDiv.append($planInputSpn);

        let $col1SaveDiv =$('<div>');
        $col1SaveDiv.addClass('col-md-1 noPadding');

        let $saveBtn = $('<button class ="saveBtn">');
        let $saveIcon = $('<i>')
        $saveIcon.attr('id', `saveid-${index}`);
        $saveIcon.attr('save-id', index);
        $saveIcon.attr('class', "far fa-save");
        $saveIcon.attr('id', 'save')

        $rowDiv.append($col1SaveDiv);
        $col1SaveDiv.append($saveBtn);
        $saveBtn.append($saveIcon);

        updateRowColor($rowDiv, hour);

        $('#plannerContainer').append($rowDiv);

        $saveBtn.on('click', 'i', function(event) {
            event.preventDefault();

            let inputIndex = '#input-' + index;
            let $value = $(inputIndex).val();

            autoInput[index] = $value;

            localStorage.setItem("plannerInput", JSON.stringify(autoInput));
        });

    };


    


    function updateRowColor ($hourRow,hour) { 
  
        if (test) { console.log("rowColor ",nowHour24, hour); }
    
        if ( hour < hour24) {
            $hourRow.addClass('past');  
        } else if ( hour > hour24) {
            $hourRow.addClass('future');
        } else {
            $hourRow.addClass('present');
        }
      };



});
