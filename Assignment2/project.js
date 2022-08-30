var gender, smoker,bp,totalCholesterol,hdl,age,treated,a,b,c,d,e;
var page = 1; 
var calculator;


/////////////// functions used for editing the page dynamiclly //////////////////////////

//adds event listnsers for all navigation buttons on load 
window.addEventListener('load',function(){
    calculator = document.getElementById("calc")
    genderAgePage();
    document.getElementById("genderButton").addEventListener("click",genderAgePage);
    document.getElementById("bpButton").addEventListener('click', bpPage);
    document.getElementById("smokerButton").addEventListener('click', smokerPage);
    document.getElementById("cholestrolButton").addEventListener('click', cholestrolPage);
    document.getElementById("calculateButton").addEventListener("click",submitPage);
    this.document.getElementById("restartButton").addEventListener("click",restart)
   
});
// resets all values and puts you n gender page as if you had just loaded in 
function restart()
{
    page = 1;
    gender = null; 
    age=null;
    smoker=null;
    bp=null;
    totalCholesterol=null;
    hdl=null;
    treated=null;
    genderAgePage();
}
//loads in the gender and age page 
function  genderAgePage ()
{   // saves data of prevoius page then resets the page 
    retreiveData();
    page =1;
    resetPage();
    /// creates div for page 
    var div = document.createElement("div");
    div.classList.add("page");
    var para = document.createElement('p');
    var text= document.createTextNode("What is your Gender");
    calculator.appendChild(div);
    div.appendChild(para);
    para.appendChild(text);

    // Creates radio buttons and labels for male/female 
    var input1 = document.createElement("input");
    var label1= document.createElement("label");
    label1.setAttribute("for",input1);
    label1.innerHTML = "Male";
    div.appendChild(label1);
    input1.type ="radio";
    input1.id="male";
    input1.name="gender";
    input1.value="male";
    div.appendChild(input1);
    var input2 = document.createElement("input");
    var label2= document.createElement("label");
    input2.type ="radio";
    input2.id="female";
    input2.name="gender";
    input2.value="female"
    label2.setAttribute("for",input2);
    label2.innerHTML="Female"
    div.appendChild(label2);
    div.appendChild(input2);
   

     ////// Adds Age section
    var para2 = document.createElement("p")
    var text2= document.createTextNode("What is your age?");
    calculator.appendChild(div);
    div.appendChild(para2);
    para2.appendChild(text2);
    div.classList.add("page");

    // Adding age selection drop down bar to page 
    var select = document.createElement("select");
    select.name = "age";
    select.id = "selectAge";
    div.appendChild(select);
 
    for (var i =20;i<=100; i++)
    {
        var option = document.createElement("option");
        option.value = i;
        option.text = i;
        select.appendChild(option);
    }

    if (age)
    {
        select.selectedIndex=age-20;
    }
    if (gender)
    {
        if (gender=="male")
        {
            document.getElementById("male").checked="true";
        }
        else
        {
            document.getElementById("female").checked="true";

        }
    }
}
// loads in the bloo pressure page 
function bpPage()
{
    retreiveData();
    page = 3;
    resetPage();

    // creates first div cotaining radio buttons for wheather or not they get treatment for high bp 
    //div  
    var div = document.createElement("div");
    div.classList.add("page");
    calculator.appendChild(div); 
    // first paragraph 
    var para = document.createElement("p");
    div.appendChild(para);
    var text = document.createTextNode("Are you currently Treated for high blood pressure?");
    para.appendChild(text);
    //first radio button 
    var input1 = document.createElement("input");
    var label1= document.createElement("label");
    label1.setAttribute("for",input1);
    label1.innerHTML = "Yes";
    div.appendChild(label1);
    input1.type ="radio";
    input1.id="treated";
    input1.name="bpStatus";
    input1.value="yes";
    div.appendChild(input1);
    //second radio button 
    var input2 = document.createElement("input");
    var label2= document.createElement("label");
    input2.type ="radio";
    input2.id="untreated";
    input2.name="bpStatus";
    input2.value="no";
    label2.setAttribute("for",input2);
    label2.innerHTML="No";
    div.appendChild(label2);
    div.appendChild(input2);


    // creates second div cotaining text box for the user to enter there bp into. 
    var div2 = document.createElement("div");
    div2.classList.add("page");
    calculator.appendChild(div2);
    //second paragraph 
    var para2= document.createElement("p");
    var text2= document.createTextNode("What is your Systolic blood pressure?");
    div2.appendChild(para2);
    para2.appendChild(text2);
    calculator.appendChild(div2);
    //text input for bp 
    var input= document.createElement("input");
    input.type="text";
    input.id="bp";
    div2.appendChild(input) ;
    var label3= document.createElement("label");
    label3.setAttribute("for",input);
    label3.innerHTML = " mm Hg";
    div2.appendChild(label3);

    // if values have been set prevoislys sets the radio buttons and text box to those values 
    if (treated)
    {
        if (treated=="yes")
        {
            document.getElementById("treated").checked="true";
        }
        else
        {
            document.getElementById("untreated").checked="true";

        }
    }

    if (bp)
    {
        input.value=bp;
    }
}

// loads in the smoker page 
function smokerPage()
{
    retreiveData();
    page=2;
    resetPage();
    var div = document.createElement("div");
    div.classList.add("page");
    calculator.appendChild(div);
    
    var para = document.createElement("p");
    var text = document.createTextNode("Do you smoke?")
    para.appendChild(text);
    div.appendChild(para);
    calculator.appendChild(div);
    //first button 
    var input1 = document.createElement("input");
    var label1= document.createElement("label");
    label1.setAttribute("for",input1);
    label1.innerHTML = "Yes";
    div.appendChild(label1);
    input1.type ="radio";
    input1.id="smoker";
    input1.name="smokingStatus";
    input1.value="smoker";
    div.appendChild(input1);
     //second button 
    var input2 = document.createElement("input");
    var label2= document.createElement("label");
    input2.type ="radio";
    input2.id="nonSmoker";
    input2.name="smokingStatus";
    input2.value="nonSmoker"
    label2.setAttribute("for",input2);
    label2.innerHTML="No"
    div.appendChild(label2);
    div.appendChild(input2);
 
     //sets buttons if they were prevoiusly  pressed in the past 
    if (smoker)
    {
        if (smoker=="smoker")
        {
            document.getElementById("smoker").checked="true";
        }
        else
        {
            document.getElementById("nonSmoker").checked="true";

        }
    }
} 
// loads in the cholesterol page 
function cholestrolPage()
{
    

    retreiveData();
    page=4;
    resetPage();
    var div = document.createElement("div");
    div.classList.add("page");
    div.id="cholestrolPage";
    calculator.appendChild(div);
    var para = document.createElement("p");
    div.appendChild(para);
    var text = document.createTextNode("What is your total cholesterol?");
    para.appendChild(text);

    // creates slider for page 
    var input1 = document.createElement("input");
    input1.type="range";
    input1.id="slider1";
    input1.min=159;
    input1.max=281;
    // sets sliders default value to 50 unless the user had previously set it
    if (totalCholesterol==null)
    {
        input1.value=220;
    }
    else 
    {
        input1.value=totalCholesterol;
    }
    div.appendChild(input1);
    var para2 = document.createElement("p");
    div.append(para2);
    var span = document.createElement("span");
    para2.appendChild(span);
    var text2=document.createTextNode(" mg/dL");
    para2.appendChild(text2);
    span.id= "valueHolder";
    document.getElementById("slider1").addEventListener("input",updateSlider1);
    

    ///// adds Section for HDl cholestrol 
    var div2= document.createElement("div");
    div2.classList.add("page");
    var para3 = document.createElement("para");
    var text3 = document.createTextNode("What is your HDl cholesterol");
    calculator.appendChild(div2);
    div2.appendChild(para3);
    para3.appendChild(text3)
    var br = document.createElement("br");
    var br2 = document.createElement("br");
    div2.appendChild(br);
    div2.appendChild(br2);
    // creates slider for page 
    var input2 = document.createElement("input");
    input2.type="range";
    input2.id="slider2";
    input2.min=40;
    input2.max=60;
    // sets sliders default value to 50 unless the user had previously set it 
    if (hdl==null)
    {
        input2.value=50;
    }
    else 
    {
        input2.value=hdl;
    }
    div2.appendChild(input2);
    var para4 = document.createElement("p");
    div2.append(para4);
    var span2 = document.createElement("span");
    para4.appendChild(span2);
    var text4 =document.createTextNode(" mg/dL");
    para4.appendChild(text4);

    span2.id= "valueHolder2";
    document.getElementById("slider2").addEventListener("input",updateSlider2);
    updateSlider1();
    updateSlider2();


    
   

   

}
///updates the value shown from the first slider on the cholesterol page 
function updateSlider1()
{
    var div = document.getElementById("valueHolder");
    var slider =document.getElementById("slider1");
    var val = slider.value;
    
    if ((val)==159)
    {
        div.innerHTML = ">160";

    }
    else if (val==281)
    {
        div.innerHTML = "<280";
    }
    else
    {
        div.innerHTML=val;
    }
}
///updates the value shown from the second slider on the cholesterol page 
function updateSlider2()
{
    var div = document.getElementById("valueHolder2");
    var slider =document.getElementById("slider2");
    var val = slider.value;
    if ((val)==40)
    {
        div.innerHTML = ">=40";

    }
    else if (val==60)
    {
        div.innerHTML = "<=60";
    }
    else
    {
        div.innerHTML=val;
    }
}

// this function removes all elements with class "page" 
function resetPage()
{
    let div = document.getElementsByClassName("page");
    var num = div.length;
    for (var i = 0; i<div.length; i++)
    {
        node = div[i]
        while (node.lastChild) 
        {
            node.removeChild(node.lastChild);
        }
    }
}
//calculates score and loads the submit page
function submitPage()
{
    retreiveData();
    page=5;
    resetPage();
    var n =0;
    n=checkNull();
    if (n)
    {
        window.alert("Not all values entered")
        return;
    }
    var score=calculate();
    calculator.innerHTML="<h2>Your Risk Score</h2>";
    generateGraph(score);
    addScore(score);
}
//adds bar graph to page 
function generateGraph(score)
{
    if (score==0)
    {
        score =1;
    }
    var canvas = document.createElement("canvas");
    canvas.id="canvas";
    canvas.height="100";
    canvas.width = "600";
    var chart = canvas.getContext("2d");
    var s= canvas.getContext("2d");
    var center_x=300;
    var center_y=50;
    var totalLength = 400;

    // create risk graph 
    var length_x = ((400/100)*score);
    var length_y=50;
    var x = center_x-(totalLength/2);
    var y = center_y-(length_y/2);
    s.beginPath();
    s.rect(x,y, length_x,length_y);
    s.stroke();
    s.closePath();
    s.fillStyle="#ed0909";
    s.fill();
    x+=length_x;
    length_x=400-length_x;
    chart.beginPath();
    chart.rect(x,y,length_x,length_y);
    chart.stroke();
    chart.closePath();
    chart.fillStyle="#2fc240";
    chart.fill();

   

    
    
    var div = document.getElementById("calc");
    div.appendChild(canvas);
    
}
//adds paragraph explainig score 
function addScore(score)
{
    var div = document.getElementById("calc");
    var para = document.createElement("p");
    div.appendChild(para);
    if ((score>=1)&&(score<=29))
    {
        para.innerHTML="Your risk of developing coronary heart disease in the next 10 years is "+score+"%";
    }
    else if (score<=0)
    {
        para.innerHTML="Your risk of developing coronary heart disease in the next 10 years is less than 1%";
    }
    else 
    {
        para.innerHTML="Your risk of developing coronary heart disease in the next 10 years is greater than 30%";
    }
}
// function retreives data from page. use before reseting the page
function retreiveData()
{
    var selected;
    switch(page)
    {
        // if page 1 was the previous page then it saves values entered to gender and age 
        case 1:
            selected = document.querySelector('input[type=radio][name=gender]:checked');
            if (selected)
            {
                gender=selected.value;
            }
            var node = document.getElementById("selectAge");
            if (node)
            {
                age = parseInt(node.value);
            }   
            break;
        // if page 2 was the prevoius page then it saves smoker value
        case 2:
            selected = document.querySelector('input[type=radio][name=smokingStatus]:checked');
            if (selected)
            {
                smoker=selected.value;
                
            }
            break;
        // if page 3 was the prevoius page then it saves the treatemnt details and 
        //saves value of bp unless it is not a number 
        case 3:
           
            selected = document.querySelector('input[type=radio][name=bpStatus]:checked');
            if (selected)
            {
                treated=selected.value;
                
            }
            bp=parseInt(document.getElementById("bp").value);
            if (bp==NaN)
            {
                bp=null;
            }
            break;

            //if page 4 was the prevoius page saves value of the sliders 
        case 4:
            var slider1 = document.getElementById("slider1");
            var slider2 = document.getElementById("slider2");
            totalCholesterol = parseInt(slider1.value);
            hdl = parseInt(slider2.value);
            break;


        case 5:
            
        
        


    }
    

}

///////// functions used for calculating the score ///////////////////////////


//computes the invidauls scores for each section sums them up and finds score
function calculate()
{
    var risk;

    if(gender=="male")
    {
        a=ageMen();
        b=cigaretteMen();
        c=bloodPressureMen();
        d=hdlCholestrol();
        e=TotalCholesterol();
        risk = riskScoreMen();


    }
    else 
    {
        a=ageWomen();
        b=cigaretteWomen();
        c=bloodPressureWomen();
        d=hdlCholestrol();
        e=TotalCholesterol(); 
        risk= riskScoreWomen();
        console.log(a+" " +b + " " +c + " "+d + " " +e);
    }
   
    return risk;
}
function riskScoreWomen()
{
    var score = a+b+c+d+e;
    if (score<12)
    {
        return 0;
    }
    else if (score<=12)
    {
        return 1;
    }
    else if (score<=14)
    {
        return 2;
    }
    else if (score==15)
    {
        return 3;
    }
    else if (score==16)
    {
        return 4;
    }
    else if (score==17) 
    {
        return 5;
    }
    else if (score==18)
    {
        return 6;
    }
    else if (score==19 )
    {
        return 8; 
    }
    else if (score==20)
    {
        return 11;
    }
    else if (score==21)
    {
        return 4;
    }
    else if (score==22)
    {
        return 17;
    }
    else if (score==23)
    {
        return 22;
    }
    else if (score==24)
    {
        return 27;
    }
    else 
    {
        return 30;
    }
}
function riskScoreMen()
{
    var score = a+b+c+d+e;
    if (score<=0)
    {
        return 0;
    }
    else if (score<=4)
    {
        return 1;
    }
    else if (score<=6)
    {
        return 2;
    }
    else if (score==7)
    {
        return 3;
    }
    else if (score==8)
    {
        return 4;
    }
    else if (score==9) 
    {
        return 5;
    }
    else if (score==10)
    {
        return 6;
    }               
    else if (score==11 )
    {
        return 8; 
    }
    else if (score==12)
    {
        return 10;
    }
    else if (score==13)
    {
        return 12;
    }
    else if (score==14)
    {
        return 16;
    }
    else if (score==15)
    {
        return 20;
    }
    else if (score==16)
    {
        return 20;
    }
    else 
    {
        return 30;
    }
}
function ageWomen()
{
    if (age<35)
    {
        return-7;  
    }
    else if ((age<40)&&(age>34))
    {
        return -3;
    }
    else if ((age<45)&&(age>39))
    {
        return 0;
    }
    else if ((age<50)&&(age>44))
    {
        return 3;
    }
    else if ((age<55)&&(age>49))
    {
        return 6;
    }
    else if ((age<60)&&(age>54))
    {
        return 8;
    }
    else if ((age<65)&&(age>59))
    {
        return 10;
    }
    else if ((age>64)&&(age<70))
    {
        return 12;
    }
    else if ((age>69)&&(age<75))
    {
        return 14;
    }
    else 
    {
        return 16;
    }
}

function ageMen()
{
    if (age<35)
    {
        return-9;  
    }
    else if ((age<40)&&(age>34))
    {
        return -3;
    }
    else if ((age<45)&&(age>39))
    {
        return 0;
    }
    else if ((age<50)&&(age>44))
    {
        return 3;
    }
    else if ((age<55)&&(age>49))
    {
        return 6;
    }
    else if ((age<60)&&(age>54))
    {
        return 8;
    }
    else if ((age<65)&&(age>59))
    {
        return 10;
    }
    else if ((age>64)&&(age<70))
    {
        return 12;
    }
    else if ((age>69)&&(age<75))
    {
        return 14;
    }
    else 
    {
        return 16;
    }
}

function cigaretteWomen()
{
    if(smoker=="yes")
    {
        if (age<=29)
        {
            return 9;
        }
        else if ((age>=40)&&(age<=49))
        {
            return 7;
        }
        else if ((age>=50)&&(age<=59))
        {
            return 4;
        }
        else if ((age>=60)&&(age<=69))
        {
            return 2;
        }
        else 
        {
            return 1;
        }
    }
    else
    {
        return 0; 
    } 
}
function cigaretteMen()
{
    if(smoker=="yes")
    {
        if (age<=29)
        {
            return 8;
        }
        else if ((age>=40)&&(age<=49))
        {
            return 5;
        }
        else if ((age>=50)&&(age<=59))
        {
            return 3;
        }
        else if ((age>=60)&&(age<=69))
        {
            return 1;
        }
        else 
        {
            return 1;
        }
    }
    else
    {
        return 0; 
    } 

}
function bloodPressureWomen()
{
    if (treated=="yes")
    {
        if (bp<120)
        {
            return 0;
        }
        else if  ((bp>=120)&&(bp<=129))
        {
            return 3;
        }
        else if ((bp>=130)&&(bp<=139))
        {
            return  4;
        }
        else if (bp<=159)
        {
            return 5;
        }
        else 
        {
            return 6;
        }
    }
    else
    {
        if (bp<120)
        {
            return 0;
        }
        else if  ((bp>=120)&&(bp<=129))
        {
            return 1;
        }
        else if ((bp>=130)&&(bp<=139))
        {
            return  2;
        }
        else if (bp<=159)
        {
            return 3;
        }
        else 
        {
            return 4;
        }

    }

}
function bloodPressureMen()
{
    if (treated=="yes")
    {
        if (bp<120)
        {
            return 0;
        }
        else if  ((bp>=120)&&(bp<=129))
        {
            return 1;
        }
        else if ((bp>=130)&&(bp<=139))
        {
            return  2;
        }
        else if (bp<=159)
        {
            return 2;
        }
        else 
        {
            return 3;
        }
    }
    else
    {
        if (bp<120)
        {
            return 0;
        }
        else if  ((bp>=120)&&(bp<=129))
        {
            return 0;
        }
        else if ((bp>=130)&&(bp<=139))
        {
            return  1;
        }
        else if (bp<=159)
        {
            return 1;
        }
        else 
        {
            return 2;
        }

    }

}

function hdlCholestrol()
{
    if (hdl>=60)
    {
        return -1;
    }
    else if ((hdl<=59)&&(hdl>=50))
    {
        return 0;
    }
    else if ((hdl<=49)&&(hdl>=40))
    {
        return 1;
    }
    else 
    {
        return 2; 
    }
}

// returns points based on total cholestrol 
function TotalCholesterol()
{
    var values =[0,4,7,9,11,0,3,5,6,8,0,2,3,4,5,0,1,1,2,3,0,0,0,1,
                 1,0,4,8,11,13,0,3,6,8,10,0,2,4,5,7,0,1,2,3,4,0,1,1,2,2];
    var index =0;
    if (gender=="female")
    {
        index+=25;
    }
    if ((totalCholesterol>=160)&&(totalCholesterol<=199))
    {
        index+=1;
    }
    else if ((totalCholesterol>=200)&&(totalCholesterol<=239))
    {
        index+=2;
    }
    else if ((totalCholesterol>=240)&&(totalCholesterol<=279))
    {
        index+=3;
    }
    else
    {
        index+=4;
    }
    if ((age>=40)&&(age<=49))
    {
        index+=5;
    }
    else if ((age>=40)&&(age<=59))
    {
        index+=10;
    } 
    else if ((age>=60)&&(age<=69))
    {
        index+=15;
    }
    else 
    {
        index+=20;
    }
    return values[index];
 

}
// checks if any of the values havint been entered 
function checkNull()
{
    if ((gender==null)|| (smoker==null)||(bp==null)||(totalCholesterol==null)||(hdl==null)||(age==null)||(treated==null))
    {
        return 1;
    }

}