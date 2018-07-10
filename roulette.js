$(function(){
    var selectedMenber;
    var total;
    var menber;
    var time;
    var timerId;
    var menberList;

    $('#start').on('click',function(){
      timerId=setInterval(function(){
        menber=Math.floor(Math.random()*total);
        $('#table td').removeClass("selected").eq(selectedMenber[menber]).addClass("selected");
      },time);
      $('#start,#reset').prop('disabled',true);
      $('#stop').prop('disabled',false);
    });

    $('#stop').on('click',function(){
      clearInterval(timerId);
      $('#table td').eq(selectedMenber[menber]).addClass("confirm");
      total--;
      menberList=selectedMenber[total];
      selectedMenber[total]=selectedMenber[menber];
      selectedMenber[menber]=menberList;
      $('#start').prop('disabled',total<=1);
      $('#stop').prop('disabled',true);
      $('#reset').prop('disabled',false);
      console.log(selectedMenber);
    });

    $('#reset').on('click',function(){
      selectedMenber=[];
      for(var i=0;i<16;i++) selectedMenber.push(i);
      total=16;
      time=11;
      menberList=null;
      $('#table td').removeClass("confirm").removeClass("selected");
      $('#start').prop('disabled',false);
      $('#stop').prop('disabled',true);
    }).trigger('click');
  });