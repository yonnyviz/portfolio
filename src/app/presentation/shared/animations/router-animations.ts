import {
    trigger,
    query,
    style,
    animate,
    transition,
    animateChild,
    group,
    state
} from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('Projects => HomePage', [
            style({ 
                position: 'fixed',
                width: '100%'
            }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: "10em",
                    left: 0,
                    width: '42em'
                }),
            ]),
            query(':enter', [
                style({ left: '-100%' })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('400ms ease-in', style({ left: '120%' }))
                ]),
                query(':enter', [
                    animate('1200ms ease-out', style({ left: '6.5%' }))
                ])
            ]),
            query(':enter', animateChild())
        ]),
        // transition('HomePage => Projects', [
        //     style({ position: 'fixed' }),
        //     query(':enter, :leave', [
        //         style({
        //             position: 'absolute',
        //             top: 0,
        //             margin: '10em',
        //             right: 0,
        //             width: '100%'
        //         }),
        //     ]),
        //     query(':enter', [
        //         style({ right: '-100%' })
        //     ]),
        //     query(':leave', animateChild()),
        //     group([
        //         query(':leave', [
        //             animate('800ms ease-out', style({ right: '100%' }))
        //         ]),
        //         query(':enter', [
        //             animate('800ms ease-in', style({ right: '0%' }))
        //         ])
        //     ]),
        //     query(':enter', animateChild())
        // ])
    ]);

export const opacityAnimation =
    trigger('routeAnimations', [
        transition('HomePage <=> Projects', [
            // the "in" style determines the "resting" state of the element when it is visible.
            state('in', style({ opacity: 1 })),

            query(':enter', [
                animate('600ms ease-out', style({ opacity: 0 }))
            ]),
            query(':leave', [
                animate('600ms ease-out', style({ opacity: 0 }))
            ]),
        ])
    ]);

