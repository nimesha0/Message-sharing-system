
        var i=0;
        var images=[];
        var time=3000;

        images[0]='back2.jpg';
        images[1]='back4.jpg';
        images[2]='back3.jpg';
        images[3]='back1.jpg';

        function changeImg(){
            document.slide.src=images[i];

            if(i<images.length-1){
                i++
            }else{
                i=0;
            }
            setTimeout("changeImg()",time);
        }
        window.onload=changeImg;


        function openWin() {
            window.open('record_table.html', "new window", "height=700,width=1200");
        }

        function validateForm(event) {
            event.preventDefault(); 

            var searchRadios = document.getElementsByName("search");
            var nameOrDate = document.getElementsByName("nameordate")[0].value;

            if ((searchRadios[0].checked || searchRadios[1].checked) && nameOrDate.trim() !== "") {
                openWin();
            } else {
                alert("Please select a search option and provide a value for name or date.");
            }
        }
