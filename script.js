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
    inputob1.setAttribute('id', 'intsfield');

    let inputob2 = document.createElement('input');
    inputob2.setAttribute('placeholder', "Enter Qualification");



    let newDiv2 = document.createElement('div');
    newDiv2.classList.add('date');

    let inputob5 = document.createElement('input');
    inputob5.setAttribute('placeholder', "Enter Marks with % or cgpa");

    let inputob3 = document.createElement('input');
    inputob3.setAttribute('placeholder', "start Year");
    inputob3.setAttribute('type', 'number');

    let inputob4 = document.createElement('input');
    inputob4.setAttribute('placeholder', "end Year");
    inputob4.setAttribute('type', 'number');

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

    let inputob2 = document.createElement('input');
    inputob2.setAttribute('placeholder', "Enter Details about Certificate");

    let inputob3 = document.createElement('input');
    inputob3.setAttribute('type', "date");

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
    let inputob2 = document.createElement('input');
    inputob2.setAttribute('placeholder', "Enter Company Name");

    let textbox1 = document.createElement('textarea');
    textbox1.setAttribute('placeholder', 'Enter Details')

    let newDiv2 = document.createElement('div');
    newDiv2.classList.add('date');

    let inputob3 = document.createElement('input');
    inputob3.setAttribute('placeholder', "start Year");
    inputob3.setAttribute('type', 'number');

    let inputob4 = document.createElement('input');
    inputob4.setAttribute('placeholder', "end Year");
    inputob4.setAttribute('type', 'number');

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

    let textbox1 = document.createElement('textarea');
    textbox1.setAttribute('placeholder', 'Enter Details')

    let newDiv2 = document.createElement('div');
    newDiv2.classList.add('date');

    let inputob3 = document.createElement('input');
    inputob3.setAttribute('placeholder', "start Year");
    inputob3.setAttribute('type', 'number');

    let inputob4 = document.createElement('input');
    inputob4.setAttribute('placeholder', "end Year");
    inputob4.setAttribute('type', 'number');

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
    // let namefieldob = document.getElementById('namefield').value;
    // let nameTob = document.getElementById('nameT');
    // nameTob.innerHTML = namefieldob;

    // let Tagfieldob = document.getElementById('Tagfield').value;
    // let TagTob = document.getElementById('TagT');
    // TagTob.innerHTML = Tagfieldob;

    // document.getElementById('ObjT').innerHTML = document.getElementById('objfield').value;

    // document.getElementById('contcPhT').innerHTML = document.getElementById('phfield').value;
    // document.getElementById('contcPhT').setAttribute('href', document.getElementById('phfield').value);
    // document.getElementById('contcET').innerHTML = document.getElementById('emailfield').value;
    // document.getElementById('contcET').setAttribute('href', "document.getElementById('emailfield').value");
    // document.getElementById('contcAdT').innerHTML = document.getElementById('addfield').value;
    // document.getElementById('contcLnT').setAttribute('href', document.getElementById('linkdfield').value);
    // document.getElementById('contcGtT').setAttribute('href', document.getElementById('gitfield').value);
    // document.getElementById('contcLcT').setAttribute('href', document.getElementById('leetfield').value);
    // document.getElementById('contcCfT').setAttribute('href', document.getElementById('codefield').value);
    // document.getElementById('contcPpT').setAttribute('href', document.getElementById('portfield').value);

    // let langob = document.getElementsByClassName('langg');
    // let str = "";
    // for (l of langob) {
    //     str += `<p>${l.value}<p>`;
    // }
    // document.getElementById('langT').innerHTML = str;

    // let expob = document.getElementsByClassName('exp');
    // let str1 = "";
    // for (l of expob) {
    //     str1 += `<p>${l.value}<p>`;
    // }
    // document.getElementById('expT').innerHTML = str1;

    // let quliob = document.getElementsByClassName('qulification');
    // let str2 = "";
    // for (let l of quliob) {
    //     let nameob = l.getElementsByClassName('name');
    //         let intsfield = nameob;
    //         let qualifield = nameob.getElementById('qualifield');
    //         str += `<div class="subedu"><div class="institue"><h2>${intsfield.value}</h2><p>${qualifield.value}</p></div></div>`;

    // }

    // document.getElementById('edu2').innerHTML = str2;




    document.getElementById('cv-build').style.display = 'none';
    document.getElementById('cvT').style.display = 'flex';
};

const printCV = () => {
    window.print();
};







