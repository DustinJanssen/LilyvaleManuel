function openPage (pageName, elmnt) {
    //Hide all elemnts with class="tabcontent" by default
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    //Remove tab color
    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = '';
    }

    //Show selected tab
    document.getElementById(pageName).style.display = 'block';

    //Add color
    elmnt.style.backgroundColor = 'var(--backgroundImage)';
}

document.getElementById('defaultOpen').click();

//Accordion
let accordion = document.getElementsByClassName('accordion');
let i, panel

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');

        panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block'
        }
    });
}