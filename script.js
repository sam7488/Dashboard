const sidebarElement = document.querySelector('.sidebar');
const toggleElement = document.querySelector('.toggle');

function toggleSidebar() {
  sidebarElement.classList.toggle('closed');
  toggleElement.classList.toggle('fa-circle-arrow-right');
}

toggleElement.addEventListener(
  'click',
  () => {
    toggleSidebar();
  }
)
