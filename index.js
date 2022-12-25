    document.getElementById("btn").addEventListener("click", sumInput);

    function sumInput() {
        let num1 = document.getElementById("text1").value;
        let array = num1.split(/\s+/); 
        array = array.map(e => +e); 
        array.sort((a, b) => a - b);
        let num2 = array.join(" "); 
        document.getElementById("text2").value = num2;

        let sum = 0;
        for(let i=0; i<array.length; i++){
            sum+=array[i];
        }
        document.getElementById("text3").value = sum;

    }


