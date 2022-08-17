function Total (a,b,c,d,e,f)
{
    return a+b+c+d+e+f; 
}

function ageWomen(age)
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

function ageMen(age)
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

function cigaretteWoman(age,smoker)
{
    if(smoker)
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
function cigaretteMen(age,smoker)
{
    if(smoker)
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
function bloodPressureWomen(bp,treated)
{
    if (treated)
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
function bloodPressureMen(bp,treated)
{
    if (treated)
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