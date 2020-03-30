$(document).ready(function(){

  $.ajax('./data/page-1.json',{method:'get',datatype:'json'} ).then(data =>{

    console.log(data);

    function Horns(horn){
      this.name= horn.title;
      this.imgPath=horn.image_url;
      this.info = horn.description;
      this.keyword =horn.keyword;
      this.horns = horn.horns;
      Horns.all.push(this);
    }
    Horns.all = [];
    for (let i = 0; i < data.length; i++) {
      new Horns(data[i]);
    }

    console.log(Horns.all);
    let options = [];
    for (let i = 0; i < Horns.all.length; i++) {
      if(options.includes(Horns.all[i].keyword) ){
        continue;
      }else {
        options.push(Horns.all[i].keyword);
      }

    }
    console.log(options);


    let selectorKeyWordGenerator = ()=>{
      options.forEach(element => {

        let x = $('<option>');
        x.text(element);
        $('#keyselectors').append(x);
      });

    };
    selectorKeyWordGenerator();
    let containter = $('#container');

    let render = () => {
      Horns.all.forEach(element => {
        let divE1 = $('<div>');
        divE1.addClass(element.keyword);
        containter.append(divE1);
        let imgE1 = $('<img>');
        imgE1.attr('src',element.imgPath);
        divE1.append(imgE1);
        let pE1 = $('<p>');
        pE1.text(`${element.name}`);
        divE1.append(pE1);
        let pE2 = $('<p>');
        pE2.text(`${element.info}`);
        divE1.append(pE2);

      });



    };


    render();





    let optionsFilter = ()=>{
      $('#keyselectors').change(function(){
        $('section').hide(); 
        var selectedValue = this.value;
        console.log('test',selectedValue);

        render2(selectedValue);

      });

    };
    let render2 = (slectedOp)=>{
      console.log(slectedOp);

      for (let i = 0; i < Horns.all.length; i++) {

        if(Horns.all[i].keyword === slectedOp){
          let y = $('body');

          let x = $('<section>');
          y.append(x);
          let divE1 = $('<div>');

          x.append(divE1);

          let imgE1 = $('<img>');

          imgE1.attr('src',Horns.all[i].imgPath);

          divE1.append(imgE1);

          let pE1 = $('<p>');

          pE1.text(`${Horns.all[i].name}`);

          divE1.append(pE1);

          let pE2 = $('<p>');
          pE2.text(`${Horns.all[i].info}`);

          divE1.append(pE2);

        } else{ console.log('hidden divs');
        }
      }



    };
    optionsFilter();










    // $(document).ready(function() {
    //     $("main section button:first").on("click", function() {
    //       $(this)
    //         .siblings("ul")
    //         .toggleClass("on");
    //     });
      
    //     $("ul").on("click", "li", function() {
    //       $(this).fadeOut(900);
    //     });
    //   });
  });





  
});
