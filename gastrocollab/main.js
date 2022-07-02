ScrollReveal({
    origin: 'left',
    distance:'30px', //aqui nao tem problema em se usar uma unidade fixa
    duration: '600',
}).reveal(`
    header, 
    header .icon, 
    header .gallery-button,
    main #title-container,
    main #status,
    main #gallery-area,
    main #gallery-area #gallery,
    main #gallery-area .p-quote,
    footer,
    footer,
    footer nav,
    footer .social`);