/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 700);

});


/* =========================
   MENU MOBILE
========================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Fecha o menu quando clicar em um link */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =========================
   HEADER AO ROLAR
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(8, 8, 8, 0.96)";

    } else {

        header.style.background = "rgba(11, 11, 11, 0.8)";

    }

});


/* =========================
   ANIMAÇÃO REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   CONTADORES
========================= */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

const startCounters = () => {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 80));

        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                counter.textContent =
                    target >= 1000
                        ? target.toLocaleString("pt-BR") + "+"
                        : target + "+";

                return;

            }

            counter.textContent =
                current >= 1000
                    ? current.toLocaleString("pt-BR")
                    : current;

            requestAnimationFrame(updateCounter);

        };

        updateCounter();

    });

};


const numbersSection = document.querySelector(".numbers");

const counterObserver = new IntersectionObserver(

    (entries) => {

        if (entries[0].isIntersecting) {

            startCounters();

            counterObserver.disconnect();

        }

    },

    {
        threshold: 0.3
    }

);

counterObserver.observe(numbersSection);


/* =========================
   BOTÕES DE AGENDAMENTO
========================= */

const bookingButtons = document.querySelectorAll(
    'a[href="#agendamento"]'
);

bookingButtons.forEach(button => {

    button.addEventListener("click", () => {

        console.log("Usuário interessado em agendar.");

    });

});


/* =========================
   EFEITO PARALLAX HERO
========================= */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        hero.style.backgroundPosition =
            `center ${scrollPosition * 0.25}px`;

    }

});


/* =========================
   ANO AUTOMÁTICO
========================= */

const year = new Date().getFullYear();

const footerText = document.querySelector(".footer-bottom span");

if (footerText) {

    footerText.textContent =
        `© ${year} Barber Prime. Todos os direitos reservados.`;

}


/* =========================
   EFEITO NOS CARDS
========================= */

const cards = document.querySelectorAll(
    ".service-card, .review-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -4;

        const rotateY =
            ((x / rect.width) - 0.5) * 4;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});
