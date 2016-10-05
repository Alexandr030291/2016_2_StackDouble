(function () {
    'use strict';

    if (typeof window !== 'object') {
        return;
    }
    /* import */
    let Chat = window.Chat;
    let Form = window.Form;

    let loginPage = document.querySelector('.js-login');
    let chatPage = document.querySelector('.js-chat');
    let regPage = document.querySelector('.js-reg');

    /* Форма авторизации */
    let signInForm = new Form({
        data: {
            title: 'Autorisation',
            action: '/',
            method: 'POST',
            fields: [
                {
                  
                    tabindex: '1',
                    name: 'email',
                    type: 'text',
                    placeholder: 'Введите e-mail',
                    required: true,
                },
                {
                    tabindex: '2',
                    name: 'password',
                    type: 'password',
                    placeholder: 'Введите пароль',
                    required: true,
                }
            ],
            controls: [
                {
                    text: 'Войти',
                    attrs: {
                        type: 'submit',
                        name: 'signIn',
                    }
                },
                {
                    text: 'Регистрация',
                    attrs: {
                        type: 'reset',
                        name: 'registration',
                    }
                },
            ]
        },
    });

    /* Чат */
    let chat = new Chat({
        el: document.createElement('div'),

    });

    signInForm.on('submit', (event) => {
        event.preventDefault();

        let formData = signInForm.getFormData();

        chat.set({
            email: formData.email,
        }).render();

        chat.subscribe();

        loginPage.hidden = true;
        chatPage.hidden = false;
    });

    signInForm.on('reset', (event) => {
        event.preventDefault();

        loginPage.hidden = true;
        regPage.hidden = false;
    });

    loginPage.appendChild(signInForm._el);
    //chatPage.appendChild(chat._el);

    loginPage.hidden = false;

    /* Форма регистрации */
    let formReg = new Form({
        data: {
            title: 'Регистрация нового пользователя:',
            action: '/',
            method: 'POST',
            fields: [{
                tabindex: '1',
                name: 'email',
                type: 'text',
                placeholder: 'Введите e-mail',
                required: true,

            }, {
                tabindex: '2',
                name: 'password',
                type: 'password',
                placeholder: 'Введите пароль',
                required: true,
            }, {
                tabindex: '3',
                name: 'lastpassword',
                type: 'password',
                placeholder: 'Повторите пароль',
                required: true,

            }, ],
            controls: [{
                text: 'Зарегистрироваться',
                attrs: {
                    type: 'submit',
                },
            }, ],
        },
    });

    formReg.on('submit', (event) => {
        event.preventDefault();

        let formData = formReg.getFormData();

/*
        chat.set({
            email: formData.email,
        }).render();
*/
        regPage.hidden = true;
        alert('Регистрация прошла успешно!')
    });
   regPage.appendChild(formReg._el);

}());
