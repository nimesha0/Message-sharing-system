
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

        function validateMessage(message){
                if(message!=""){
                    return true;
                }else{
                    return false;
                }
            }
            function validateFile(file){
                if(file!=""){
                    return true;
                }else {
                    return false;
                }
            }
            function floorselect(floor) {
                if (floor == "Default") {
                    return false;
                } else return true;
            } 


            function validateForm(form){
                var message=form.message.value;
                var file=form.file.value;
                var floor=form.floor.value;

                if(validateMessage(message)==true){
                    if(validateFile(file)==true){
                        if(floorselect(floor)==true){
                            return true;
                        }else{
                            alert("Please select a floor.");
                            form.floor.focus();
                            return false;
                        }
                    }else{
                        alert("Please select a file.");
                        form.file.focus();
                        return false;
                    }
                }else{
                    alert("Please enter a messsage.");
                    form.message.focus();
                    return false;
                }
            }

        
