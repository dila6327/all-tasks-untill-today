const addable = document.querySelector(".added");


const ad_1 = document.querySelector("#table_1");
let count_1 = parseInt(localStorage.getItem('count_1')) || 0;
let countthem_1;  
let set_1; 

ad_1.addEventListener('click', () => {
    count_1++;
    localStorage.setItem('count_1', count_1); 

    if (!countthem_1) {
        countthem_1 = document.createElement('div');
        countthem_1.style.width = '100%';
        countthem_1.style.height = '90px';
        countthem_1.style.backgroundColor = "black";
        countthem_1.style.display = "flex";
        countthem_1.style.alignItems='center';
        addable.appendChild(countthem_1);

        let set = document.querySelector('.one>.card_elem');
        let setCopy = set.cloneNode(true);
        countthem_1.appendChild(setCopy);
        setCopy.style.height = "100%";
        setCopy.style.width = "33%";

        let set_2 = document.querySelector('.one>.card-info>span');
        let setCopy_2 = set_2.cloneNode(true);
        countthem_1.appendChild(setCopy_2);
        setCopy_2.style.height = "100%";
        setCopy_2.style.width = "33%";
        setCopy_2.style.display = 'flex';
        setCopy_2.style.alignItems = 'center';  
        setCopy_2.style.justifyContent = 'center'; 
        setCopy_2.style.color='white' ;
    }

    if (!set_1) {
        set_1 = document.createElement('div');
        countthem_1.appendChild(set_1);
        set_1.style.height = "60%";
        set_1.style.width = "20%";
        set_1.style.display = 'flex';
        set_1.style.alignItems = 'center';  
        set_1.style.justifyContent = 'center';
        set_1.style.borderRadius='50%';
        set_1.style.backgroundColor='white';
        set_1.style.color='black';
    }
    
    set_1.innerText = count_1;
});


const ad_2 = document.querySelector("#table_2");
let count_2 = parseInt(localStorage.getItem('count_2')) || 0;
let countthem_2;  
let set_2; 

ad_2.addEventListener('click', () => {
    count_2++;
    localStorage.setItem('count_2', count_2);

    if (!countthem_2) {
        countthem_2 = document.createElement('div');
        countthem_2.style.width = '100%';
        countthem_2.style.height = '90px';
        countthem_2.style.backgroundColor = "black";
        countthem_2.style.display = "flex";
        countthem_2.style.alignItems='center';
        addable.appendChild(countthem_2);

        let set = document.querySelector('.two>.card_elem');
        let setCopy = set.cloneNode(true);
        countthem_2.appendChild(setCopy);
        setCopy.style.height = "100%";
        setCopy.style.width = "33%";

        let set_2 = document.querySelector('.two>.card-info>span');
        let setCopy_2 = set_2.cloneNode(true);
        countthem_2.appendChild(setCopy_2);
        setCopy_2.style.height = "100%";
        setCopy_2.style.width = "33%";
        setCopy_2.style.display = 'flex';
        setCopy_2.style.alignItems = 'center';  
        setCopy_2.style.justifyContent = 'center'; 
        setCopy_2.style.color='white' ;
    }

    if (!set_2) {
        set_2 = document.createElement('div');
        countthem_2.appendChild(set_2);
        set_2.style.height = "60%";
        set_2.style.width = "20%";
        set_2.style.display = 'flex';
        set_2.style.alignItems = 'center';  
        set_2.style.justifyContent = 'center';
        set_2.style.borderRadius='50%';
        set_2.style.backgroundColor='white';
        set_2.style.color='black';
    }
    
    set_2.innerText = count_2;
});

// Button 3
const ad_3 = document.querySelector("#table_3");
let count_3 = parseInt(localStorage.getItem('count_3')) || 0;
let countthem_3;  
let set_3; 

ad_3.addEventListener('click', () => {
    count_3++;
    localStorage.setItem('count_3', count_3); 

    if (!countthem_3) {
        countthem_3 = document.createElement('div');
        countthem_3.style.width = '100%';
        countthem_3.style.height = '90px';
        countthem_3.style.backgroundColor = "black";
        countthem_3.style.display = "flex";
        countthem_3.style.alignItems='center';
        addable.appendChild(countthem_3);

        let set = document.querySelector('.three>.card_elem');
        let setCopy = set.cloneNode(true);
        countthem_3.appendChild(setCopy);
        setCopy.style.height = "100%";
        setCopy.style.width = "33%";

        let set_3 = document.querySelector('.three>.card-info>span');
        let setCopy_3 = set_3.cloneNode(true);
        countthem_3.appendChild(setCopy_3);
        setCopy_3.style.height = "100%";
        setCopy_3.style.width = "33%";
        setCopy_3.style.display = 'flex';
        setCopy_3.style.alignItems = 'center';  
        setCopy_3.style.justifyContent = 'center'; 
        setCopy_3.style.color='white' ;
    }

    if (!set_3) {
        set_3 = document.createElement('div');
        countthem_3.appendChild(set_3);
        set_3.style.height = "60%";
        set_3.style.width = "20%";
        set_3.style.display = 'flex';
        set_3.style.alignItems = 'center';  
        set_3.style.justifyContent = 'center';
        set_3.style.borderRadius='50%';
        set_3.style.backgroundColor='white';
        set_3.style.color='black';
    }
    
    set_3.innerText = count_3;
});

// Button 4
const ad_4 = document.querySelector("#table_4");
let count_4 = parseInt(localStorage.getItem('count_4')) || 0;
let countthem_4;  
let set_4; 

ad_4.addEventListener('click', () => {
    count_4++;
    localStorage.setItem('count_4', count_4); 

    if (!countthem_4) {
        countthem_4 = document.createElement('div');
        countthem_4.style.width = '100%';
        countthem_4.style.height = '90px';
        countthem_4.style.backgroundColor = "black";
        countthem_4.style.display = "flex";
        countthem_4.style.alignItems='center';
        addable.appendChild(countthem_4);

        let set = document.querySelector('.four>.card_elem');
        let setCopy = set.cloneNode(true);
        countthem_4.appendChild(setCopy);
        setCopy.style.height = "100%";
        setCopy.style.width = "33%";

        let set_4 = document.querySelector('.four>.card-info>span');
        let setCopy_4 = set_4.cloneNode(true);
        countthem_4.appendChild(setCopy_4);
        setCopy_4.style.height = "100%";
        setCopy_4.style.width = "33%";
        setCopy_4.style.display = 'flex';
        setCopy_4.style.alignItems = 'center';  
        setCopy_4.style.justifyContent = 'center'; 
        setCopy_4.style.color='white' ;
    }

    if (!set_4) {
        set_4 = document.createElement('div');
        countthem_4.appendChild(set_4);
        set_4.style.height = "60%";
        set_4.style.width = "20%";
        set_4.style.display = 'flex';
        set_4.style.alignItems = 'center';  
        set_4.style.justifyContent = 'center';
        set_4.style.borderRadius='50%';
        set_4.style.backgroundColor='white';
        set_4.style.color='black';
    }
    
    set_4.innerText = count_4;
});

// Button 5
const ad_5 = document.querySelector("#table_5");
let count_5 = parseInt(localStorage.getItem('count_5')) || 0;
let countthem_5;  
let set_5; 

ad_5.addEventListener('click', () => {
    count_5++;
    localStorage.setItem('count_5', count_5); 

    if (!countthem_5) {
        countthem_5 = document.createElement('div');
        countthem_5.style.width = '100%';
        countthem_5.style.height = '90px';
        countthem_5.style.backgroundColor = "black";
        countthem_5.style.display = "flex";
        countthem_5.style.alignItems='center';
        addable.appendChild(countthem_5);

        let set = document.querySelector('.five>.card_elem');
        let setCopy = set.cloneNode(true);
        countthem_5.appendChild(setCopy);
        setCopy.style.height = "100%";
        setCopy.style.width = "33%";

        let set_5 = document.querySelector('.five>.card-info>span');
        let setCopy_5 = set_5.cloneNode(true);
        countthem_5.appendChild(setCopy_5);
        setCopy_5.style.height = "100%";
        setCopy_5.style.width = "33%";
        setCopy_5.style.display = 'flex';
        setCopy_5.style.alignItems = 'center';  
        setCopy_5.style.justifyContent = 'center'; 
        setCopy_5.style.color='white' ;
    }

    if (!set_5) {
        set_5 = document.createElement('div');
        countthem_5.appendChild(set_5);
        set_5.style.height = "60%";
        set_5.style.width = "20%";
        set_5.style.display = 'flex';
        set_5.style.alignItems = 'center';  
        set_5.style.justifyContent = 'center';
        set_5.style.borderRadius='50%';
        set_5.style.backgroundColor='white';
        set_5.style.color='black';
    }
    
    set_5.innerText = count_5;
});

