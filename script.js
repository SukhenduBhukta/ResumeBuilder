//Dark & Light theme
let darkob = document.getElementById("dark");
const LightDark = () => {
    if (darkob.innerHTML == 'Dark Theme') {
        document.body.style.backgroundColor = "#021225ff";
        document.body.style.color = "#fff";
        darkob.innerHTML = 'Light Theme';
        darkob.style.backgroundColor = "#fff";
        darkob.style.color = "#021225ff";
        darkob.style.fontWeight = '700'
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        darkob.innerHTML = 'Dark Theme';
        darkob.style.backgroundColor = "#021225ff";
        darkob.style.color = "#fff";
    }

};

//Section wise selection
const CntDts = () => {
    let ctdOb = document.getElementById('ctdts');
    if (ctdOb)
        ctdOb.style.backgroundColor = 'rgba(255,255,255,.5)';
    else
        ctdOb.style.backgroundColor = 'transparent';
};


//Add filed in skill section
const AddField = () => {

    let inputOb = document.createElement('input');
    inputOb.setAttribute('placeholder', "MS Office");
    inputOb.classList.add('exp');
    let labOb = document.getElementById('skill');
    labOb.appendChild(inputOb);
};

//Add filed in Language section
const AddLang = () => {
    let inputOb = document.createElement('input');
    inputOb.setAttribute('placeholder', "Enter Language");
    inputOb.classList.add('langg');
    let labOb = document.getElementById('lang');
    labOb.appendChild(inputOb);
};

//Add filed in Educations Section
const AddEdu = () => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('qulification');
    let newDiv3 = document.createElement('div');
    newDiv3.classList.add('name');

    let inputob1 = document.createElement('input');
    inputob1.setAttribute('placeholder', "Enter Institute Name");
    inputob1.classList.add('intsfield');

    let inputob2 = document.createElement('input');
    inputob2.setAttribute('placeholder', "Enter Qualification");
    inputob2.classList.add('qualifield');



    let newDiv2 = document.createElement('div');
    newDiv2.classList.add('date');

    let inputob5 = document.createElement('input');
    inputob5.setAttribute('placeholder', "Enter Marks with % or cgpa");
    inputob5.classList.add('marksfield');

    let inputob3 = document.createElement('input');
    inputob3.setAttribute('placeholder', "start Year");
    inputob3.setAttribute('type', 'number');
    inputob3.classList.add('sdfield');

    let inputob4 = document.createElement('input');
    inputob4.setAttribute('placeholder', "end Year");
    inputob4.setAttribute('type', 'number');
    inputob4.classList.add('edfield');

    newDiv2.appendChild(inputob5);
    newDiv2.appendChild(inputob3);
    newDiv2.appendChild(inputob4);

    newDiv3.appendChild(inputob1);
    newDiv3.appendChild(inputob2);
    newDiv.appendChild(newDiv3);
    newDiv.appendChild(newDiv2);

    let eduOb = document.getElementById('edu');
    eduOb.appendChild(newDiv);
};

//Add field in Certificate Section

const AddCerti = () => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('certi');

    let inputob1 = document.createElement('input');
    inputob1.setAttribute('placeholder', "Enter Name");
    inputob1.classList.add('ceritnfield');

    let inputob2 = document.createElement('input');
    inputob2.setAttribute('placeholder', "Enter Details about Certificate");
    inputob2.classList.add('ceritdtlsfield');

    let inputob3 = document.createElement('input');
    inputob3.setAttribute('type', "date");
    inputob3.classList.add('ceritdatefield');

    newDiv.appendChild(inputob1);
    newDiv.appendChild(inputob2);
    newDiv.appendChild(inputob3);

    let certiob = document.getElementById('certifi');
    certiob.appendChild(newDiv);
};

//Add field in Work Experience Section

const AddWork = () => {
    let inputob1 = document.createElement('input');
    inputob1.setAttribute('placeholder', "Enter Postion Name");
    inputob1.classList.add('exppnfield');

    let inputob2 = document.createElement('input');
    inputob2.setAttribute('placeholder', "Enter Company Name");
    inputob2.classList.add('expcnfield');


    let textbox1 = document.createElement('textarea');
    textbox1.setAttribute('placeholder', 'Enter Details');
    textbox1.classList.add('expdtlsfield');


    let newDiv2 = document.createElement('div');
    newDiv2.classList.add('date');

    let inputob3 = document.createElement('input');
    inputob3.setAttribute('placeholder', "start Year");
    inputob3.setAttribute('type', 'number');
    inputob3.classList.add('expsdfield');


    let inputob4 = document.createElement('input');
    inputob4.setAttribute('placeholder', "end Year");
    inputob4.setAttribute('type', 'number');
    inputob4.classList.add('expedfield');


    newDiv2.appendChild(inputob3);
    newDiv2.appendChild(inputob4);

    let workOb = document.getElementById('work');
    workOb.appendChild(inputob1);
    workOb.appendChild(inputob2);
    workOb.appendChild(textbox1);
    workOb.appendChild(newDiv2);

};

//Add field in Project Section

const AddProject = () => {
    let inputob1 = document.createElement('input');
    inputob1.setAttribute('placeholder', "Enter Project Name");
    inputob1.classList.add('pronfield');

    let textbox1 = document.createElement('textarea');
    textbox1.setAttribute('placeholder', 'Enter Details');
    textbox1.classList.add('prodtlsfield');

    let newDiv2 = document.createElement('div');
    newDiv2.classList.add('date');

    let inputob3 = document.createElement('input');
    inputob3.setAttribute('placeholder', "start Year");
    inputob3.setAttribute('type', 'number');
    inputob3.classList.add('prosdfield');

    let inputob4 = document.createElement('input');
    inputob4.setAttribute('placeholder', "end Year");
    inputob4.setAttribute('type', 'number');
    inputob4.classList.add('proedfield');

    newDiv2.appendChild(inputob3);
    newDiv2.appendChild(inputob4);

    let projOb = document.getElementById('project');
    projOb.appendChild(inputob1);
    projOb.appendChild(textbox1);
    projOb.appendChild(newDiv2);

};

//Change Picture
const changePic = () => {
    document.getElementById('pic').setAttribute('src', './user.png');
};

//Generate CV
const GenerateCV = () => {
    let namefieldob = document.getElementById('namefield').value;
    let nameTob = document.getElementById('nameT');
    nameTob.innerHTML = namefieldob;

    let Tagfieldob = document.getElementById('Tagfield').value;
    let TagTob = document.getElementById('TagT');
    TagTob.innerHTML = Tagfieldob;

    document.getElementById('ObjT').innerHTML = document.getElementById('objfield').value;

    document.getElementById('contcPhT').innerHTML = document.getElementById('phfield').value;
    document.getElementById('contcPhT').setAttribute('href', document.getElementById('phfield').value);
    document.getElementById('contcET').innerHTML = document.getElementById('emailfield').value;
    document.getElementById('contcET').setAttribute('href', "document.getElementById('emailfield').value");
    document.getElementById('contcAdT').innerHTML = document.getElementById('addfield').value;
    document.getElementById('contcLnT').setAttribute('href', document.getElementById('linkdfield').value);
    document.getElementById('contcGtT').setAttribute('href', document.getElementById('gitfield').value);
    document.getElementById('contcLcT').setAttribute('href', document.getElementById('leetfield').value);
    document.getElementById('contcCfT').setAttribute('href', document.getElementById('codefield').value);
    document.getElementById('contcPpT').setAttribute('href', document.getElementById('portfield').value);

    let langob = document.getElementsByClassName('langg');
    let str = "";
    for (l of langob) {
        str += `<p>${l.value}<p>`;
    }
    document.getElementById('langT').innerHTML = str;

    let expob = document.getElementsByClassName('exp');
    let str1 = "";
    for (l of expob) {
        str1 += `<p>${l.value}<p>`;
    }
    document.getElementById('expT').innerHTML = str1;


    //Education Data fetch

    let quliob = document.getElementsByClassName('qulification');
    let str2 = "";
    //console.log(quliob.length);
    for (let i=0;i<quliob.length;i++) {
        let inputob = quliob[i].getElementsByClassName("intsfield")[0];
        let inputob2 = quliob[i].getElementsByClassName("qualifield")[0];
        let inputob3 = quliob[i].getElementsByClassName("marksfield")[0];
        let inputob4 = quliob[i].getElementsByClassName("sdfield")[0];
        let inputob5 = quliob[i].getElementsByClassName("edfield")[0];
           
        let s1=inputob4.value +' - '+ inputob5.value;
        let s2='Marks - '+inputob3.value;
            
            str2 += `<div class="subedu">
            <div class="date">
                <p id="eduDT">${s1}</p>
            </div>
            <div class="institue">
                <h2 id="eduInT">${inputob.value}</h2>
                <p id="eduDgT">${inputob2.value}</p>
                <p id="eduMkT">${s2}</p>
            </div>
        </div>`;

    }

    document.getElementById('edu2').innerHTML = str2;


    //Work Exp Data fetch

    let workob = document.getElementsByClassName('works');
    let str3 = "";
    //console.log(workob.length);
    for (let i=0;i<workob.length;i++) {
        let inputob = workob[i].getElementsByClassName("exppnfield")[0];
        let inputob2 = workob[i].getElementsByClassName("expcnfield")[0];
        let inputob3 = workob[i].getElementsByClassName("expdtlsfield")[0];
        let inputob4 = workob[i].getElementsByClassName("expsdfield")[0];
        let inputob5 = workob[i].getElementsByClassName("expedfield")[0];
           
        let s1=inputob4.value +' - '+ inputob5.value;
        
            
            str3 += `<div class="date">
            <p id="expDT">${s1}</p>
        </div>
        <div class="institue">
            <h2 id="expPnT">${inputob.value}</h2>
            <p id="expCnT" class="company">${inputob2.value}</p>
            <p id="expDtlsT" class="remark">${inputob3.value}</p>
        </div>`;

    }

    document.getElementById('subexp').innerHTML = str3;


    //Project Data fetch
    let projob = document.getElementsByClassName('project');
    let str4 = "";
    //console.log(workob.length);
    for (let i=0;i<projob.length;i++) {
        let inputob = projob[i].getElementsByClassName("pronfield")[0];
        let inputob2 = projob[i].getElementsByClassName("prodtlsfield")[0];
        let inputob3 = projob[i].getElementsByClassName("prosdfield")[0];
        let inputob4 = projob[i].getElementsByClassName("proedfield")[0];
        
           
        let s1=inputob3.value +' - '+ inputob4.value;
        
            
            str4 += `<div class="date">
            <p id="proDT">${s1}</p>
        </div>
        <div class="institue">
            <h2 id="proNT">${inputob.value}</h2>
            
            <p id="proDtlsT" class="remark">${inputob2.value}</p>
        </div>`;

    }

    document.getElementById('subproj').innerHTML = str4;


    //Certificate Data fetch
    let certiob = document.getElementsByClassName('certifi');
    let str5 = "";
    //console.log(workob.length);
    for (let i=0;i<certiob.length;i++) {
        let inputob = certiob[i].getElementsByClassName("ceritnfield")[0];
        let inputob2 = certiob[i].getElementsByClassName("ceritdtlsfield")[0];
        let inputob3 = certiob[i].getElementsByClassName("ceritdatefield")[0];
        
        
        
            
            str5 += `<h2 id="ceriNT">${inputob.value}</h2>
            <p id="certiCNT">${inputob2.value}</p>
            <p id="certiDT">${inputob3.value}</p>`;

    }

    document.getElementById('certichild').innerHTML = str5;





    let file=document.getElementById("imgfield").files[0];

    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=function (){
        document.getElementById("pic").src=reader.result;
    };

    document.getElementById('cv-build').style.display = 'none';
    document.getElementById('cvT').style.display = 'flex';
};

const printCV = () => {
    window.print();
};







