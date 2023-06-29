// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require bootstrap
//= require_tree .

const excluir = async (url) => {
    if(confirm("Confirma ?")){
        try { 
            const token = document.querySelector("meta[name='csrf-token']").content;
            const urlWithToken = `${url}?authenticity_token=${encodeURIComponent(token)}`;
            const response = await fetch(urlWithToken, { method: 'DELETE' });
            if (response.ok) {
                window.location.reload()
            } else {
                alert('Erro ao excluir o contato.');
            }
        } catch (error) {
            alert('Ocorreu um erro na requisição.' + error.message);
        }
    }
}
