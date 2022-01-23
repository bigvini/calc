function calkSwitch(action, a, b) {




    switch (action) {

        case '+':
            switch (typeof a) {
                case 'number':
                    switch (typeof b) {
                        case 'number':
                            console.log(a + b);
                            break;
                        default:
                            console.log('eror');
                    }

                    break;
                default:
                    console.log('eror');

            }

            break;
        case '-':
            switch (typeof a) {
                case 'number':
                    switch (typeof b) {
                        case 'number':
                            console.log(a - b);
                            break;
                        default:
                            console.log('eror');
                    }
                    break;
                default:
                    console.log('eror');

            }

            break;
        case '*':
            switch (typeof a) {
                case 'number':
                    switch (typeof b) {
                        case 'number':
                            console.log(a * b);
                            break;
                        default:
                            console.log('eror');
                    }
                    break;
                default:
                    console.log('eror');

            }

            break;

        case '/':
            switch (typeof a) {
                case 'number':


                    switch (typeof b) {
                        case 'number':
                            switch (a) {
                                case 0:
                                    console.log('деление на ноль невозможно');
                                    break;
                                default:
                                    switch (b) {
                                        case 0:
                                            console.log('деление на ноль невозможно');
                                            break;

                                        default:
                                            console.log(a / b);
                                    }
                            }

                            break;
                        default:
                            console.log('eror');
                    }


                    break;

                default:
                    console.log('eror');

            }
            break;



            case '%':
                switch (typeof a) {
                    case 'number':
                        switch (typeof b) {
                            case 'number':
                                console.log(a % b);
                                break;
                            default:
                                console.log('eror');
                        }
                        break;
                    default:
                        console.log('eror');

                }

                break;
                

            case '**':
                switch (typeof a) {
                    case 'number':
                        switch (typeof b) {
                            case 'number':
                                console.log(a ** b);
                                break;
                            default:
                                console.log('eror');
                        }
                        break;
                    default:
                        console.log('eror');

                }

                break;

            default:
                console.log('unknown operation');

    }

}

calkSwitch("**", 7, 4);