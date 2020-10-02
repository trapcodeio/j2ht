const {Label, H1, Input, Div} = require("../../elements");
const Bulma = require('./bulma-components');
const Master = require('./master.j2h')

module.exports = (isRegister) => {
    return Master(
        Bulma.Section(
            Bulma.Container(
                Bulma.Columns(
                    Bulma.Column(4, [
                        H1(isRegister ? 'Register' : 'Login').class('is-size-3 has-text-centered has-text-info'),

                        Bulma.FormField(
                            Label('Username:').attr({for: 'username'}),
                            Bulma.Control(
                                Input('text', 'username').class('input')
                            ),
                        ),

                        Bulma.FormField(
                            Label('Password:').attr({for: 'password'}),
                            Bulma.Control(
                                Input('password', 'password').class('input')
                            )
                        ),

                        Div(isRegister ? [
                            Bulma.DarkButton('Register').class('is-pulled-left'),
                            Bulma.PrimaryButton('Login').class('is-pulled-right')
                                .tag('a').attr('href', '/')
                        ] : [
                            Bulma.PrimaryButton('Login').class('is-pulled-left'),
                            Bulma.DarkButton('Register').class('is-pulled-right')
                                .tag('a').attr('href', '?register=true'),
                        ]).class('is-clearfix mt-5')
                    ]).class('is-offset-4')
                ),
            ).class('container')
        ).class('section'),
    )
}