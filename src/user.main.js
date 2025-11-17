(() => {
    window.open = () => {};

    const inject = (code) => { // ts skidded from idk
        const el = document.createElement('script');
        el.textContent = code;
        document.documentElement.appendChild(el);
        el.remove();
    };

    inject(`
    const NativeTo = window.setTimeout;
    const NativeIv = window.setInterval;

    window.setTimeout = (fn, ms) => NativeTo(fn, ms / 1e7);
    window.setInterval = (fn, ms) => NativeIv(fn, ms / 1e7)
    `);

    const Click = (sel) => {
        const Iv = setInterval(() => {
            const El = document.querySelector(sel);
            if (El && El.offsetParent !== null) {
                clearInterval(Iv);
                setTimeout(() => El.click(), 0);
            }
        }, 50);
    };

    const Verify = () => {
        const Iv = setInterval(() => {
            const El = document.querySelector('#verify > a');
            if (El && El.offsetParent !== null && El.textContent.trim() !== 'Scroll Down') {
                El.click();
            }
        }, 50);
    };

    const Second = () => {
        const Iv = setInterval(() => {
            const El = document.querySelector('#second_open_placeholder a');
            if (El && El.offsetParent !== null) {
                clearInterval(Iv);
                El.click();
            }
        }, 50);
    };

    const Redir = setInterval(() => {
        const El = document.querySelector('#btn-3');
        if (El && El.offsetParent !== null) {
            clearInterval(Redir);
            El.click();
        }
    }, 0);

    Click('#submit-button');
    Click('#btn-2');
    Click('#verify > a');
    Click('#verify > button');
    Click('#first_open_button_page_1');

    Verify();
    Second();

    if (location.href.includes('sfl.gl/ready/go')) {
        const Iv = setInterval(() => {
            const El = [...document.querySelectorAll('span.font-medium.text-base')]
                .find(N => N.textContent.trim() === 'OPEN LINK');
            if (El) {
                clearInterval(Iv);
                El.click();
            }
        }, 50);
    }
})();
