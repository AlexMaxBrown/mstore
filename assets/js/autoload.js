/* DOCUMENT INFORMATION
 - Document: Theme_Name
 - Version:  1.0.0
 - Client:   Client_Name
 - Author:   Emin Azeroglu
 */

let URL = document.getElementsByTagName('body')[0].getAttribute('data-url');
const scriptUrl = URL ? URL + '/assets/' : 'assets/';

const jsAutoload = params => {
    params.forEach(element => {
        document.writeln('<script type="text/javascript" src="' + scriptUrl + element + '"></script>');
    });
};

/* Scripts Load */
const jsFolder = [
    'plugins/jquery/jquery-3.4.1.js',
    'plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
    'plugins/bootstrap/js/popper.min.js',
    'plugins/bootstrap/js/bootstrap.min.js',
    'plugins/scrollbar/scrollbar.min.js',
    'plugins/select2/js/select2.min.js',
    'plugins/inputmask/inputmask.min.js',
    'plugins/swiper/js/swiper.min.js',
    'plugins/fontawesome/js/all.min.js',
    'js/app/events.js',
    'js/app/listener.js',
    'js/app/main.js',
];

jsAutoload(jsFolder);