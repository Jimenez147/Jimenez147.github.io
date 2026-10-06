(function() {
	var translations = {
		en: {
			pageTitle: 'Project Portfolio',
			siteTitle: 'Project Portfolio',
			introTagline: 'Hardware meets software.',
			navHome: 'Home',
			navGeneric: 'Generic Page',
			navElements: 'Elements Reference',
			menuToggle: 'Menu',
			jobTitle: 'Mechatronics Technician',
			profileDescription: 'Integrated Systems Developer specialized in CAD design and 3D printing, embedded systems, and software applications. I bridge the physical and digital worlds by developing automation equipment, desktop interfaces, and advanced control systems.',
			projectsHeading: 'Projects',
			captioType: 'AI powered software',
			functionalPrototype: 'Functional prototype',
			collarMakerTitle: 'Collar maker machine',
			collarMakerType: 'Industrial Automation Machine',
			smartBlindsTitle: 'Smart blackout blinds',
			smartBlindsType: 'Home automation device',
			inProgress: 'In progress',
			nameLabel: 'Name',
			emailLabel: 'Email',
			messageLabel: 'Message',
			sendMessage: 'Send Message',
			sendingMessage: 'Sending...',
			messageSent: 'Message sent successfully!',
			messageSendError: 'There was a problem sending your message.',
			contactLinks: 'Contact links',
			rightsReserved: 'All rights reserved.',
			designCredit: 'Design:'
		},
		es: {
			pageTitle: 'Portafolio de proyectos',
			siteTitle: 'Portafolio de proyectos',
			introTagline: 'Donde el hardware se encuentra con el software.',
			navHome: 'Inicio',
			navGeneric: 'Página genérica',
			navElements: 'Referencia de elementos',
			menuToggle: 'Menú',
			jobTitle: 'Técnologo en mecatrónica',
			profileDescription: 'Desarrollador de sistemas integrados especializado en diseño CAD e impresión 3D, sistemas embebidos y aplicaciones de software. Conecto el mundo físico y el digital mediante el desarrollo de equipos de automatización, interfaces de escritorio y sistemas de control avanzados.',
			projectsHeading: 'Proyectos',
			captioType: 'AI powered software',
			functionalPrototype: 'Prototipo funcional',
			collarMakerTitle: 'Collar maker machine',
			collarMakerType: 'Industrial Automation Machine',
			smartBlindsTitle: 'Smart blackout blinds',
			smartBlindsType: 'Dispositivo de domótica',
			inProgress: 'En desarrollo',
			nameLabel: 'Nombre',
			emailLabel: 'Correo electrónico',
			messageLabel: 'Mensaje',
			sendMessage: 'Enviar mensaje',
			sendingMessage: 'Enviando...',
			messageSent: '¡Mensaje enviado con éxito!',
			messageSendError: 'Hubo un problema al enviar tu mensaje.',
			contactLinks: 'Enlaces de contacto',
			rightsReserved: 'Todos los derechos reservados.',
			designCredit: 'Diseño:'
		}
	};

	var languageToggle = document.getElementById('languageToggle');
	var currentLanguage = 'en';

	try {
		var savedLanguage = localStorage.getItem('portfolio-language');
		if (savedLanguage === 'en' || savedLanguage === 'es')
			currentLanguage = savedLanguage;
	}
	catch (error) {
		console.warn('Unable to read the saved language preference.', error);
	}

	function applyLanguage(language) {
		currentLanguage = language;
		document.documentElement.lang = language;

		var textElements = document.querySelectorAll('[data-i18n]');
		for (var index = 0; index < textElements.length; index++) {
			var element = textElements[index];
			var key = element.getAttribute('data-i18n');
			if (translations[language][key])
				element.textContent = translations[language][key];
		}

		var valueElements = document.querySelectorAll('[data-i18n-value]');
		for (var valueIndex = 0; valueIndex < valueElements.length; valueIndex++) {
			var valueElement = valueElements[valueIndex];
			var valueKey = valueElement.getAttribute('data-i18n-value');
			if (translations[language][valueKey])
				valueElement.value = translations[language][valueKey];
		}

		var ariaElements = document.querySelectorAll('[data-i18n-aria-label]');
		for (var ariaIndex = 0; ariaIndex < ariaElements.length; ariaIndex++) {
			var ariaElement = ariaElements[ariaIndex];
			var ariaKey = ariaElement.getAttribute('data-i18n-aria-label');
			if (translations[language][ariaKey])
				ariaElement.setAttribute('aria-label', translations[language][ariaKey]);
		}

		languageToggle.textContent = language === 'en' ? 'Español' : 'English';
		languageToggle.setAttribute('aria-label', language === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés');

		try {
			localStorage.setItem('portfolio-language', language);
		}
		catch (error) {
			console.warn('Unable to save the language preference.', error);
		}
	}

	document.addEventListener('portfolio:translate', function(event) {
		var element = event.target;
		var textKey = element.getAttribute('data-i18n');
		var valueKey = element.getAttribute('data-i18n-value');
		if (translations[currentLanguage][textKey])
			element.textContent = translations[currentLanguage][textKey];
		if (translations[currentLanguage][valueKey])
			element.value = translations[currentLanguage][valueKey];
	});

	languageToggle.addEventListener('click', function() {
		applyLanguage(currentLanguage === 'en' ? 'es' : 'en');
	});

	applyLanguage(currentLanguage);
})();