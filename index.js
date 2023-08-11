$(document).ready(function() {
  $('#submitBtn').click(function() {
    const name = encodeURIComponent($('#name').val());
    const email = encodeURIComponent($('#email').val());
    const phone = encodeURIComponent($('#phone').val());

    // Crie a URL com os parâmetros do formulário
    const url = `process-form.php?name=${name}&email=${email}&phone=${phone}`;

    // Redirecione para a URL com os parâmetros do formulário
    window.location.href = url;
  });
});
