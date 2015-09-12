var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.onLoad();

        var dateTest = document.getElementById("dateTest");
        var today = new Date();
        navigator.globalization.dateToString(today,
            function(date) {
                console.log(date.value);
                dateTest.innerText = date.value;
            },
            function(e) {
                console.log(e);
                dateTest.text = e;
            },
            {formatLength:'medium'});

    },

    onLoad : function onLoad() {
        html10n.index();
        html10n.localize("en");
    },

    changeToFrench : function changeToFrench() {
        html10n.localize("fr");
    },

    changeToEnglish : function changeToEnglish() {
        html10n.localize("en");
    },

    changeToPortuguese : function changeToPortuguese() {
        html10n.localize("pt-BR");
    },

    showAlert : function showAlert() {
        var message = html10n.get("alert");
        alert(message);
    }
};

app.initialize();

document.getElementById("toFrench").addEventListener("click", app.changeToFrench);
document.getElementById("toEnglish").addEventListener("click", app.changeToEnglish);
document.getElementById("toPortuguese").addEventListener("click", app.changeToPortuguese);
document.getElementById("testAlert").addEventListener("click", app.showAlert);
