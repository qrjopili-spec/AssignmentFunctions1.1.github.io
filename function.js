const softwareBtn = document.getElementById('softwareBtn');
const hardwareBtn = document.getElementById('hardwareBtn');
const closeSoftwareBtn = document.getElementById('closeSoftwareBtn');
const closeHardwareBtn = document.getElementById('closeHardwareBtn');
const softwareWindow = document.getElementById('SoftwareWindow');
const hardwareWindow = document.getElementById('HardwareWindow');

softwareBtn.addEventListener('click', () => {
    softwareWindow.classList.add('active');
    hardwareWindow.classList.remove('active');
});

hardwareBtn.addEventListener('click', () => {
    hardwareWindow.classList.add('active');
    softwareWindow.classList.remove('active');
});

closeSoftwareBtn.addEventListener('click', () => {
    softwareWindow.classList.remove('active');
});

closeHardwareBtn.addEventListener('click', () => {
    hardwareWindow.classList.remove('active');
});