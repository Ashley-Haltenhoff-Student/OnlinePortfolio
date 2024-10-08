const sidebar = document.getElementById('sidebar-menu');
const main_content = document.getElementById('all-content');

function closeSidebar() {
    sidebar.style.width = '0'
    sidebar.style.padding = '0'
    main_content.style.filter = "brightness(1)"
}

function openSidebar() {
    sidebar.style.width = '400px';
    sidebar.style.padding = '12px'
    main_content.style.filter = "brightness(0.75)"
}