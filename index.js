
$(() => {
    $('#form-labels-1').on('submit', (e) => {
        e.preventDefault()
        if (!e.target.checkValidity()) {
            $('#general-error-1').addClass('d-block');
            e.stopPropagation()
        }
        $('#form-labels-1').addClass('was-validated');
        
    });

    $('input').on('input', (e) => {
        if($('#form-labels-1')[0].checkValidity())
        {
            $('#general-error-1').removeClass('d-block');
        }
    })
})

