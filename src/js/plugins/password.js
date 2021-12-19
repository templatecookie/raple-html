    function showPassword(id, el) {
    let x = document.getElementById(id);
    if (x.type === 'password') {
        x.type = 'text';
        el.innerHTML = `<i class="ph-eye-slash"></i>`;
    } else {
        x.type = 'password';
        el.innerHTML = `<i class="ph-eye-slash"></i>`;
    }
}