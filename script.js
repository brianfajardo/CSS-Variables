const INPUTS = document.querySelectorAll('.controls input');

function handleUpdate() {
    // avoid setting undefined/nothing. Base color does not need px format
    let suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
};

INPUTS.forEach(input => input.addEventListener('change', handleUpdate));
INPUTS.forEach(input => input.addEventListener('mousemove', handleUpdate));
