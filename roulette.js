$(function(){
    // Variable declaration
    var selectedMenber;
    var total;
    var menber;
    var time;
    var timerId;
    var menberList;

    // Processing when the start button is pressed
    $('#start').on('click',function(){
      timerId=setInterval(function(){
        menber=Math.floor(Math.random()*total);
        // Filter selected members to red (exclude selected members)
        $('#table td').removeClass("selected").eq(selectedMenber[menber]).addClass("selected");
      },time);
      // Disable the start button
      $('#start,#reset').prop('disabled',true);
      // Deactivate stop button
      $('#stop').prop('disabled',false);
    });

    // Processing when the stop button is pressed
    $('#stop').on('click',function(){
      clearInterval(timerId);
      $('#table td').eq(selectedMenber[menber]).addClass("confirm");
      total--;
      menberList=selectedMenber[total];
      selectedMenber[total]=selectedMenber[menber];
      selectedMenber[menber]=menberList;
      // Deactivate start button(Examine unselected members)
      $('#start').prop('disabled',total<=1);
      // Disable the stop button
      $('#stop').prop('disabled',true);
      // Deactivate reset button
      $('#reset').prop('disabled',false);
      // Display selected members on the console
      console.log(selectedMenber);
    });

    // Processing when the reset button is pressed
    $('#reset').on('click',function(){
  
        // Initialize selected array of selected members
        selectedMenber=[];

      for(var i=0;i<16;i++) selectedMenber.push(i);
      // The remaining squares
      total=16;
      // timer speed
      time=11;
      // curent position
      menberList=null;
      $('#table td').removeClass("confirm").removeClass("selected");
      $('#start').prop('disabled',false);
      $('#stop').prop('disabled',true);
    }).trigger('click');
  });